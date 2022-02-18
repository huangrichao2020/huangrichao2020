if [ ${DIFFS}! = "" ] ; then
  arc patch ${DIFFS}
  git checkout ${BRANCH}
  git merge arcpatch-${DIFFS}
else if  [ ${TAG}! = "" ] ; then	
  git checkout ${TAG}
else
  TAG=${git describe --tags `git rev-list --tags --max-count=1`}
  echo "没有diff，没有tag，使用最新master上的TAG:${TAG}"
fi



if [ ${ACCESS} != "Jcenter" ] ; then
    ls ~/.m2/respority/com/growingio/android/gtouch/${TAG}                                                     
	echo $?
    if [ $? != 0 ] ; then
      echo "本地存在相同版本号，本脚本即将exit "
	  exit 1                                                                   
      echo "脚本exit完毕 "
    else
      echo "发版到MavenLocal"
    fi
    ./publishAllToMavenLocal.sh
    tree -L 2 ~/.m2/respority/com/growingio/android/gtouch
    tree -L 2 ~/.m2/respority/com/growingio/android/gpush
else
    REQUEST_CODE=`curl -I -m 10 -o /dev/null -s -w %{http_code} https://jcenter.bintray.com/com/growingio/android/gtouch/${TAG}/`
	if [ "$REQUEST_CODE" != "200" ] ; then
		echo "线上已有相同版本，本脚本即将exit "                                                            
		echo $?                                                                       
		exit 1                                                                   
    	echo "脚本exit完毕 "
	else
      echo "发版到Jcenter"
    fi
    NAME=${BINTRAY_USERNAME}
    KEY=${BINTRAY_KEY}
    
    ./gradlew clean
    ./gradlew :gpush-core:bintrayUpload -PbintrayUser=$NAME -PbintrayKey=$KEY -PdryRun=false
  	./gradlew :gpush-hms-agent:bintrayUpload -PbintrayUser=$NAME -PbintrayKey=$KEY -PdryRun=false
  	./gradlew :gpush-huawei-adapter:bintrayUpload -PbintrayUser=$NAME -PbintrayKey=$KEY -PdryRun=false
  	./gradlew :gpush-meizu-adapter:bintrayUpload -PbintrayUser=$NAME -PbintrayKey=$KEY -PdryRun=false
  	./gradlew :gpush-mipush-sdk:bintrayUpload -PbintrayUser=$NAME -PbintrayKey=$KEY -PdryRun=false
  	./gradlew :gpush-xiaomi-adapter:bintrayUpload -PbintrayUser=$NAME -PbintrayKey=$KEY -PdryRun=false
  	./gradlew :gpush-oppo-sdk:bintrayUpload -PbintrayUser=$NAME -PbintrayKey=$KEY -PdryRun=false
  	./gradlew :gpush-oppo-adapter:bintrayUpload -PbintrayUser=$NAME -PbintrayKey=$KEY -PdryRun=false
  	./gradlew :gpush-vivo-sdk:bintrayUpload -PbintrayUser=$NAME -PbintrayKey=$KEY -PdryRun=false
  	./gradlew :gpush-vivo-adapter:bintrayUpload -PbintrayUser=$NAME -PbintrayKey=$KEY -PdryRun=false
  	./gradlew :gtouch:bintrayUpload -PbintrayUser=$NAME -PbintrayKey=$KEY -PdryRun=false
  	./gradlew :gtouch:releaseToSentry


	cd ..
	pwd
	echo "准备修改AndroidDemo的SDK版本"
	git clone  https://github.com/growingio/AndroidDemo.git
	cd AndroidDemo
	git checkout shopping
	sed -i "" "s/GTOUCH_VERSION=[0-9].[0-9].[0-9]/GTOUCH_VERSION=${TAG}/" gradle.properties
	cat gradle.properties
	git diff
	git add -A
	git commit -m "修改GTOUCH版本为 ${TAG}"
	git push

	cd ..
	pwd
	echo "准备修改GioAndTest的SDK版本"
	git clone ssh://vcs-user@codes.growingio.com/source/GIOAndTest.git
	cd GIOAndTest
	git checkout try_zws
	sed -i "" "s/GTOUCH_VERSION=[0-9].[0-9].[0-9]/GTOUCH_VERSION=${TAG}/" gradle.properties
	cat gradle.properties
	git diff
	git add -A
	git commit -m "修改GTOUCH版本为 ${TAG}"
	git push
fi;
echo ""