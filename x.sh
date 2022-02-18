#!/bin/bash -i

if [ ${DIFFS}! = "" ] ; then
  arc patch ${DIFFS}
  git checkout ${BRANCH}
  git merge arcpatch-${DIFFS}
fi
if [ ${ACCESS} != "Jcenter" ] ; then
  echo "发版到MavenLocal"
    ./publishAllToMavenLocal.sh
    TREE -L 2 ~/.m2/respority/com/growingio/android/gtouch
    TREE -L 2 ~/.m2/respority/com/growingio/android/gpush
else
  echo "发版到Jcenter"
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
fi
echo ""