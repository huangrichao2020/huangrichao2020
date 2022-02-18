## GTouch单测走读
*TestJsonUtil.getJsonFromFile(path)*
- gtouch/src/test/下的类通过new File(path)默认读取gtouch/所在路径 。
- 通过FileInputStream与InputStreamReader获取reader对象。reader.read()返回一个int，转化为char后append到StringBuilder对象上即可。




## 项目配置
imei 863581049562577

发版：
./gradlew :banner:bintrayUpload -PbintrayUser=lishaojie -PbintrayKey=0727165e3b3edfb6038c8cb1caaa599479bcbb5c -PdryRun=false 

- 源码  + 依赖 = DEX文件 + 签名 = APK包
- settings文件表示构建时包含哪些模块
- rootProject.build.buildscript 所有模块公用
- rootProject.build.ext 全局额外参数
module.build.android{
        compileSdkVersion rootProject.ext.compileSdkVersion
}


### Bundle，HashMap与intent的区别
- HashMap使用数组+链表+Serializable，开销大。
- Bundle使用ArrayMap      

### 回调的思路
  Application是一个全局对象，可以用来存储一些
- 获取xx实例
- 设置监听
- 执行xx实例的zz功能

### GPushManager
  ```
  华为不需要APP Key , OPPO需要AppSecret
  ```
- REGISTER_CALLBACK_EXPIRY = 8 * 1000L
- EXPIRED_CODE = 422
- mMainThreadHandler = new Handler(Looper.getMainLooper())
- IPushRegister => authentication(appId,appKey,appSecrect)  ,  registerPush(context)   , unregisterPush()
- mIsRegistered = false
- mIsInit = false
- mIsRegisterFailed = false
- mRegisterCallbackStartTime = 0

- Context
- GPushConfig => mTrackHost,mMessageHost ,clone()浅拷贝 原来改了，自己也会改。深拷贝 原来的改了，自己不会改。
- PushRegisterCallBack 是一个私有内部类
- private GPushManager EventBus.getDefault().register(this) 注册后可以回掉埋点的某些event
- initPush(context,pushConfig) 设置  mContext mPushConfig mIsInit为true ，
  - DataHelper.init() 生成名为growing_push_data的mSharedPreferences
- registerPush() 做一下反复注册保护. 先initPush,首次注册 mPushRegister注册getApplicationContext，其他情况注册context。再createPushRegister()生成pushRegister，
  - createPushRegister方法 initAuthenticationParams(context)  checkAllPushChannel() 生成pushChannel Log("pushChannel is") 如果pushChannel为null 返回 NullPushRegister
    - 根据channelClazzName 生成对应的clazz对象，在`newInstance`出对应的`pushRegister`对象，再给这个对象设置 AppId,AppKey,AppSecret
 

 - dispatchRegisterFailed 
## minp/test
在module configuration 里设置 VM Option：-ea -noverify （便于测试静态代码时禁止字节码校验）

在终端执行./gradlew clean test sonar

## 单测powermock

### 概念解释
- 待测类里调用了其他类的静态方法

### 举例
在侧边栏的单测类上右键 选择 Run xxx with Coverage
可以在右侧侧边栏点击进入 xxx类，查看代码覆盖率。标红的地方就是没覆盖到的。

```TimeUtil类单测
public static long getServerCurrentTime() {
        if (sTimeDiff == 0) {
            return System.currentTimeMillis();
        } else {
            return SystemClock.elapsedRealtime() + sTimeDiff;
        }
    }

public static long getAfterDayStartTime(long currentTime, long afterDay) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTimeInMillis(currentTime + ONE_DAY * afterDay);
        calendar.set(Calendar.HOUR_OF_DAY, 0);
        calendar.set(Calendar.MINUTE, 0);
        calendar.set(Calendar.SECOND, 0);
        calendar.set(Calendar.MILLISECOND, 0);
        return calendar.getTimeInMillis();
    }
```

测试静态方法且调用的内部静态方法在同一个业务类里，UnitTest类里可以执行
@RunWith(PowerMockRunner.class) 
@PrepareForTest(TimeUtil.class) // 目标类

PowerMockito.mockStatic(System.class); //mock素材类
PowerMockito.when(System.getenv("LOG_PATH")).thenReturn("./");

FileUtil fileUtil = PowerMockito.spy(new FileUtil()); // 目标类的私有方法
PowerMockito.when(fileUtil, "isExists", "./").thenReturn(true);

## 基于回调的非UI集测
- 考虑兼容性 需要能便捷地在不同版本的操作系统上安装运行甚至截图  

## android 测试commit
- 每次diff都需要编译到本地，用于测试。一旦diff更新，本地pom必须删掉，重新编译代码到本地

- 每次测sentry需要关闭demo里的
- 4043b43
- 38cd909
- 78d1109


## RESTFUL规范
201 Created 资源成功创建 post创建 put更新
202 Accepted 提交激活任务 put提交
200 OK 激活完成
102 Processing 还在进行中
204 No Content 

301 Moved Permanently
303 See Other
304 Not Modified 资源未被修改

400 Bad Request 参数错误
401 Unauthorized 未授权
403 Forbidden 访问受限，权限过期
404 Not Found 服务 资源未找到
405 Method Not Allowed 禁止的http方法
406 Not Acceptable 媒体内容不符合要求
408 Request Timeout 请求超时
409 Conflict 资源冲突，重复资源
415 Unprocessable Enity 不支持的数据类型
422 Unprocessable Enity 请求格式正确 但语义错误无法响应
423 Locked
429 Too Many Requests 请求过多被限制

500 Internal Server Error 系统内部错误
501 Not Implementend 接口未实现


## web弹窗数

- huangrichao's MBP 本地demo的u:
- huangrichao的csid：166109
- haungrichao的u：7ec7c657-1681-464a-be89-bdca2d51f6a1

## 推送难题

Push Token ：用于发送用户消息 访问用户变量 setVisitor
Push Arrived ：用户统计Push到达率 cstm gio_push_message_arrived
Push Clicked ：用户统计用户消息点击 cstm gio_push_message_clicked
Notification Enabled ：APP通知栏消息权限是否打开

服务端埋点：gio_push_message_sent

推送

```
送达率低的原因，GrowingIO使用的是gio_push_token这个访问用户变量，内容是每个访问用户u对应的厂商通道给出的regester_id.
大部分厂商，只要你卸载重装app regester_id都会变。vivo只要你执行unregisted()，regester_id都会变

RegID在应用卸载或清除本地数据或者90天不联网后会重新生成
```
- 用户需要打开推送权限
  


## OPPO PUSH 

```
通道只负责消息的传递，对消息不做任何处理，当客户端接收到透传消息后，由客户端自己来决定如何处理消息。正是因为透传消息可以自定义消息体，也可以自定义消息的展示方式及后续动作处理，所以弥补了通知栏消息的一些不足之处(通知栏消息是直接展示出来，相关的动作客户端无法捕获到)。
```
AppID AppKey client初始化时必备，标识这个client，但不唯一
AppSecret 开发者服务端的身份标识，客户端根据这个校验发来数据的身份。
MasterSecret 调用API时必须的身份验证标识

RegistrationID 应用在某设备上的唯一ID
userAccount 用户ID
目标数 : 创建推送任务时，提交的用户Registration_ID数
有效数 : 过滤掉失效设备，卸载，刷机，三月内未联网
到达数：消息成功到达用户手机上的数量
展示数：用户手机收到消息后，通知栏展示成功的数量
点击数：消息在系统通知栏展示后，用户点击的数量

## android sdk 缓存原理
- adb root 
- abd shell
- cd /data/data/com.growing.gtouch/cache/gtouch
- ls -al 根据时间查看缓存到本地的MD5形式的html
- 适当cat一下也可以

要求：请求成功过一次后，就不再请求，且该弹多少次就弹多少次，不多一次也不少一次。

## nginx
安装信息
```
Docroot is: /usr/local/var/www

The default port has been set in /usr/local/etc/nginx/nginx.conf to 8080 so that
nginx can run without sudo.

nginx will load all files in /usr/local/etc/nginx/servers/.

To have launchd start nginx now and restart at login:
  brew services start nginx
Or, if you don't want/need a background service you can just run:
  nginx
==> Summary
🍺  /usr/local/Cellar/nginx/1.17.3_1: 27 files, 2MB
```
## 推送相关
oppo u = fd51fb0e-7ac7-3a2a-bbef-02b5a9002d21
vivo u = eab19098-a90f-3935-b775-820a3257a61b
     u = 8ecf106d-3be6-3851-98a9-d7077f4427e4

同个手机，不同的app，u不一定相同
华为魅族变u没事，token不会变。
小米变u有时，token会变。

  内容限制
```
华为：华为平台推送标题限制40字符，内容限制1024字符。

小米：小米平台推送标题限制32字符，内容限制128字符。

魅族：魅族平台推送标题限制32字符，内容限制100字符。

vivo：vivo平台推送标题限制20字符，内容限制50字符。

oppo：oppo平台推送标题限制50字符，内容限制50字符。
```

## android单测框架
supportAnnotations = '28.0.0'
supportViewpager = '28.0.0'
mockitoCore = '2.23.0'
powermockApiMockito2 = '2.0.2'
powermockModuleJunit4 = '2.0.2'
orgJson = '2.0'
jacocoAndroid = '0.1.4'
sonarqube = '2.8'
junit = '4.12'
truth = '1.0'
robolectric = '4.3.1'
xTest = '1.2.0'
xTestExt = '1.1.1'

## 推送的送达率问题
推送有送达率与点击率两个指标
- 国内厂商通道可以保证送达率
- 谷歌与苹果可以保证送达率
- 推送要及时，一个应用长时间不被使用，操作系统会将其杀死，导致无法送达，送达率低
- 推送要有趣，一个应用的推送经常不被点击，操作系统就会将其隐藏或折叠这段推送，导致有送达，但点击率低。


## JQL
```jql
查找6月份由我转发给别人的JIRA问题
assignee changed by 用户名 AND created > "2019/06/01" AND created < "2019/06/30" ORDER BY created DESC

查找我最近半年解决的JIRA问题
project = 项目名 AND assignee = 用户名 AND created > "2018/06/01" and created < "2018/12/30"

status=resolved AND project=“Teams in Space” OR assignee=captainjoe

project = HZPI and fixVersion = "v19.19.5(2019-10-29)"

  JQL Fields
https://confluence.atlassian.com/jirasoftwareserver082/advanced-searching-fields-reference-974359687.html
Affected version
Approvals
Assignee
Attachments
Category
Comment
Component
Created
Creator
Custom field
Customer Request Type
Description
Due
Environment
Epic link
Filter
Fix version
Issue key
Issue link type

Last viewed
Level
Original estimate
Parent
Priority
Project
Remaining estimate
Reporter
Request channel type
Request last activity time
Resolution
Resolved
SLA
Sprint
Status
Summary
Text
Time spent
Type
Updated
Voter
Votes
Watcher
Watchers
Work log author
Work log comment
Work log date
Work ratio
```
## ab_test与ab_test_messages 

ab_test是关系表，messages字段存储ab_test_messages里的实验消息id
```
 {
    "id": "32",
    "project_id": "3",
    "creator_id": "166110",
    "updater_id": "166110",
    "created_at": "17/10/2019 14:42:18.368",
    "updated_at": "17/10/2019 14:42:39.124",
    "state": "stop",
    "messages": "[0:3]={5855,5856,5857,5858}",
    "latest_messages": "[0:1]={5857,5858}",
    "name": "弹窗20191017224159",
    "ab_dimension": "vstr_gio_ma_abtest_32", -- ma --> "dimension":"vstr_gio_ma_abtest_32"
    "ai": "0a1b4118dd954ec3bcc69da5138bdb96",
    "compare_type": "control、material、activity"  控制型AB测，素材型AB测 推广型AB测. 
  }, 
```
ab_test_messages是字典表
```
"symbol"--ma--->"A1"
```

metric：转化目标

## AB弹窗后台逻辑

正常上线ab弹窗后就会将数据写进ab_test_messages与ab_test，再刷新缓存。

如果缓存里没有，就根据ai与schemal找到所有弹窗，再根据u/cs过滤segment。
对ab_test_messages表中命中的弹窗按比例分流。


### ab命中逻辑

u--ab_test_hash--> bucketId，将所有消息分配成100个桶，1-rate*100 桶里的为实验A


当某消息的rate大于bucketId时，命中消息将其isCtrl改造为false

### AB测相关接口

POST    /projects/:projectId/marketing/gtouch/abtest { "messages":[{},{} ]} 创建一对AB弹窗

返回body多一个dimension字段

PUT    /projects/:projectId/marketing/gtouch/abtest/:abtestid 更新AB弹窗

GET    /projects/:projectId/marketing/gtouch/abtest/latestMsgs/latestMsgs/:abtestId   进入编辑页时获取当前ab弹窗的最新一对弹窗

GET    /projects/:projectId/marketing/gtouch/abtest/history/:abtestId   详情页获取ab弹窗所有历史数据

DELETE    /projects/:projectId/marketing/gtouch/abtest/:abtestId
删除AB测所有弹窗

POST      /_private/v4/projects/nxog09md/chartdata  转化率
```
metrics
{
  - id
  - name 弹窗的展示
  - type custom
  - attributes 弹窗的名称 id valueType
  - filter 过滤 var_in_app_message_name = 文章2
},{
  - 转化目标
}
timeRange:""
userType:"usv"
```

response:"data[0.0]"

## 移动端测量协议
- page:打开新页面 t:page u p tl cd1 esid：请求id
- vst:新访问 u t cs1 fv:{au：无埋点版本 ra：RN版本 tv：触达版本}
- activate: app首次请求
- reengage: Deeplink请求
- clck：点击 u t p e cs1
- imp:元素展现 u t p e cs1
- chng:输入元素改变 u s t p e
- cstm:track类型 u s t d !!var num
- pvar:setPageVariable 
- vstr:setVisitor
- evar:setEvar
- ppl:setPeopleVariable

## 数据库

弹窗与推送是两套「变量+指标」
events.event_variables 事件级变量
events.custom_event 埋点事件
growing.push_metrics 触达事件级变量


## 查询某分群的csid的方法
概述

触达产品核心依赖分群，以登录用户分群"GTouch分群–李四"为例。操作环境是ci环境，域名以k8s开头的。

步骤
1 navicat 进入qa环境数据源growing库user_segment表。搜索 select * from user_segment where name = 'GTouch分群–李四'.拿到分群id '85410'。

2 jumpbox 进入跳转机后执行 ssh qa-online0 ,进入qa-online0的权限需要找sre申请。进入后马上切换用户 sudo su - apps  。

3 进入phonex目录 cd /apps/phoenix ，进入后执行./bin/sqlline.py qa-hd0  。

4 执行select * from SEGMENT where TAG_ID = '85410'. 表中USER字段就是「GTouch分群–李四」分群里所有的csid .

## 如何用Postman查询数据端
利用站内数据端接口的x-request-id 与 http://kibana.infra.growingio.com/

以查询某web弹窗的今日展示次数为例

找到对应chartdata接口的x-request-id

去kibana搜索

拿到body与服务器信息

链接内网vpn，查询url为http://m6qs4:6060/stat/metric/v2/table?ignoreCache=true，配好Headers




## qs接口查询

1. 在线上拿到chatdata接口的requestId
2. 去kibama搜这个id，拿到相关的body与服务器（m6qs4还是其它）
3. 去postman 请求http://m6qs4:6060/stat/metric/v2/table?ignoreCache=true 接口



## Web-JS-SDK的自动化
### 自动化
  配置了一个jenkines-job：http://jenkins.infra.growingio.com/view/Release/job/push-sdk-demo-rs/  将测试demo编译好后推送到 https://www-release.growingio.com/testpage/index.html，通过办公室wifi即可访问
### 改进思路
  仓库 ssh://vcs-user@codes.growingio.com/diffusion/281/growing-sdk-web-push.git (push)
  lib与src是打包后的目录，不要动
  bin是webpack目录，不要动
  conf是线上打包目录，绝对不能动
  dist是打包生成的目录,dist/1.0/与dist/是给线上用的,dist/javascript/是给demo用的

### 原理
- web项目的index.html里嵌入vds-sdk与growingio-sdk，同时向远程拉vds.js与access.js。
- vds先生成一个page预定义事件，塞进EventMessageQueue. access.js在第一次获取到notification接口里的数据后会塞进PushMessageQuene，并主动去消费EventMessageQueue，并同加载render.js.
- render.js主动消费PushMessageQuene。
- 后续EventMessageQueue里有新的事件产出时，access.js被动消费。仅遇到page事件才会调用render.js消费PushMessageQuene。

## arc
arc diff master --preview
arc diff master --update D13595

arc patch D13595
arc land onto master

## 推送
### AppId,AppKey,AppSecret
appId是唯一账户编号，可以拥有多个appKey。
appKey是公钥，是权限集合，描述你有哪些权限。
appScrect是秘钥，是证明你是你的一种手段。
账户所在平台的服务器会存有你的AppId,AppKey,AppSecret。所以客户端只需向服务器发送appKey与appScrect即可

最终会生成一个access_token,保存到app的缓存里。免得每次都要重复请求
触达推送会给每个加载了推送渠道模块的sdk生成一个gio_push_token供触达服务器调用


## 相关参数
- 邀请链接 http://k8s-qa-www.growingio.com/invitations/ac4880bbcf8bdcab
-   """
        一 触达弹窗脚本的完整使用示例：
        1.1 python popWin_tool_2.7.py
            请输入脚本功能，默认为diff：diff
            请输入访问环境，默认为qa：qa
        二 参数讲解：
        2.1 -c:默认为’qa‘
        2.1.1 ’qa‘ 对应qa测试环境
        2.1.2 ’ci‘ 对应ci测试环境
        2.1.3 ’online‘ 对象线上环境
        2.2 -f:默认为’latest‘
        2.2.1 latest 自动调用浏览器打开最新的弹窗H5
        2.2.2 diff 下载最新弹窗H5并与本地准备好的html文件li利用vscode作diff对比，需要vscode事先在命令面板内执行’Install ‘code' command in PATH‘
        2.2.3 dir 自动下载对应产品，分群，环境的所有弹窗H5
        2.2.4 list 列出当前ai与growing.schemal的所有弹窗
        2.3 -u:默认为’growing.638b52710867187c‘
        growing.638b52710867187c 对应产品’GTouch-Android‘
        2.4 -s:默认为’lisi‘
        lisi 对应’GTouch分群-用户李四‘
        三 注意事项：
        3.1 使用脚本前请先确认你的mac能访问线上，qa，ci这三个环境
        3.2 同时确保你的mac上没有运行代理或拦截等软件
        四 后续开发：
        4.1 python2.7版本会改成input式填写参数，方便人员使用
        4.2 计划引入diffHtml库与线上稳定的弹窗资源对比
        五 常用参数:
            frontend-app{'GTouch触达列表页URL':'http://k8s-qa-www.growingio.com/projects/nxog09md/marketing-automation/manage/message/popup-window'}

            GTouch-Android{'id':'q9ApEpoW' ,'urlSchema':'638b52710867187c' ,'spn':'com.growingio.gtouch'}
            GTouch-IOS{'id':'L9GVzZo6' ,'urlSchema':'0e06d947ebba35b7' ,'spn':'com.growingio.TouchDemo'}
            电商demo-iOS{'id':'xogdzD9m' ,'urlSchema':'9683a369c615f77d' ,'spn':'com.gio.growingiodemo'}
            
            GrowingIO{'id':'nxog09md',ai':'0a1b4118dd954ec3bcc69da5138bdb96','projectId':'3','orgnazationId':'2'}
            电商Demo{'id':'z98jGyZP',ai':'97fd6815651f25fb','projectId':'112439','orgnazationId':'2'}
            Mina Growth{'ai':'9c76fe4756c3404d','projectId':'81624','orgnazationId':'2'}
            Minapp弹窗测试Demo remote='codes.growingio.com/source/marketing-push-minp-demo.git',name='弹窗Test',productId='xRxzpbo5',platform='minp',spn='wx0686f7c349efef47',urlSchema='wx0686f7c349efef47',直接本地调试+线上wang'g
            push注册 http://k8s-qa-www.growingio.com/oauth2/qrcode_token/b5772a277567df4b3e83367042b6cb41677952ecfd7f5afd34a0b07e3acc0a33?circleRoomNumber=JK2lqZHF2SXscYoV&campaignGroup=gTouch&userId=a9BL8qwP&productId=xogdzD9m&gtouchType=preview&messageId=GQPD1yoN
            登录用户ID 李四的bu=553306，bcs=137554
            访问用户ID vivoZ3的u=deviceId='eab19098-a90f-3935-b775-820a3257a61b'
            产品 GTouch-Test-Android的productId='bR78krPG',spn='com.growingio.gtouchtest',urlSchema='c3240a35f1c2c394'

            消息关闭事件 "messageClose": "4PKyZJ9E",
            消息展示事件 "messageImp": "GPnlGO9Y",
            消息点击事件 "ctaMetrics": "EoZ7Ge9k"
            
            黄日超的GTouch小程序 secret c749426df9d54ebe16687d595e5970b2
                        appId  wxd4626ea0768f555b

        """

## GQL Charts Service
### Query
![](https://tva1.sinaimg.cn/large/006y8mN6ly1g6hogs7lxij30l60pat97.jpg)

*漏斗* type = funnel漏斗/retention留存
*大数字图、漏斗* aggregation = 是否只做聚合运算：boolean 
*大数字图* aggregator = 聚合算法：sum,avg,min,max

*指标* metrics = id=指标id,level=action/complex
*漏斗，转化率* 变化率、转化周期 attrs = rateChange:true

*聚合* level = complex聚合/dash打点/simple简单/original指标/gel表达式/expression全局id

dimensions = "tm","region","countryName"等
granularities = {id=tm,interval=8640000},{id=countryName,top=10}

*展开* expanded = 按最后一个维度展开

*维度组合上限* limit :多维度组合的组合上限

*过滤* filter ={
    "op": "=",
    "key": "b",
    "value": "Web", 
    "name": "网站/手机应用"
}
timeRange:String = "day:8,1" ,"abs:11510000:1161000","dur:151000+3000"某天开始，5分钟粒度，"week:2,1","month:2,1","year:2,1","date:20180101,20180130" ,"year:prev上一年"

userTag:String = "" 应用分群
orders = 排序序列：List<Order>



### Result
![](https://tva1.sinaimg.cn/large/006y8mN6gy1g6hrvn1ac7j30py1g60tw.jpg)
data ：dimensions所有维度的值 + metrics里所有指标的值
meta = columns+ aggregator 
column = id指标维度+ name指标维度+ isDim是否維度+ isRate是否比率


## 触达常用query
``` 
漏斗 - 趋势
{
  "type": "funnel",
  "aggregation": false,
  "metrics": [
    {
      "id": "woV7nW92",
      "action": "page",
      "level": "original"
    },
    {
      "id": "4PYbJ1go",
      "action": "clck",
      "level": "original"
    }
  ],
  "dimensions": [
    "tm",
    "rd"
  ],
  "granularities": [
    {
      "id": "rd",
      "values": [
        "link.zhihu.com",
        "www.baidu.com"
      ]
    }
  ],
  "timeRange": "abs:1516982400000,1517327999999",
  "attrs": {
    "conversionWindow": 1,
    "userType": "uv"
  }
}
```

```
漏斗--转化率
{
  "type": "funnel",
  "aggregation": true,
  "timeRange": "day:15,1",
  "attrs": {
    "conversionWindow": 1
  },
  "metrics": [
    {
      "id": "woV7nW92",
      "level": "original",
      "action": "page"
    },
    {
      "id": "4PYbJ1go",
      "level": "original",
      "action": "clck"
    }
  ]
}

```

```
大数字图
{
  "aggregation": true,
  "aggregator": "sum",
  "dimensions": [
    "tm"
  ],
  "granularities": [
    {
      "id": "tm",
      "interval": 86400000
    }
  ],
  "metrics": [
    {
      "level": "complex",
      "id": "9yGbpp8x"
    }
  ],
  "timeRange": "day:8,1"
}
```

## GTouch Android Banner

### messages接口请求的发起
http.HttpClient
- HttpRequest.get请求 
- UrlCongif.host() + "v2" + CertificationUtil.getProjectId() + "notification"
  - CertificationUtil.getProjectId()
### CoreInitialize SDK核心功能
    - getSPN
    - getProjectId
    - getNetworkStateName
    - getForegroundActivity
    - getResumedActivity
    - getCurrentRootWindowsHashCode
  - CoreInitialize.gConfig()
    - getAppUserId
    - getGrowingScheme
  - CoreInitialize.deviceUUIDFactory()
    - getDeviceId
    - getDeviceImei
    - getAndroidId
    - getIMEI
    - getUUID
    - getOldDeviceId
  - CoreInitialize.messageProcessor()
  - CoreInitialize.growingIOIPC()
    - getRunningProcess
    - getAlivePid
    - getGioUserId
    - getToken
    - getWsServerUrl
    - getSpecialModel
    - getSessionId
    - getUserId
    - getAppVar
    - getLastResumeTime
    - getLastPauseTime
  - CoreInitialize.deeplinkManager()

### DataHelper GTouch SDk核心缓存机制

### TouchDatabase GTouch缓存功能
"TAG":"TouchDatabase"
- db_name:GrowingioTouch.db
- table:gtouch
- columns:
  - event_id
  - show_count
  - show_timestamp
  - is_click
  - user_id
- 旧版的gtouch表version为1，没有 show_timestamp 这个字段
- 新版的gtouch表version为2，多了一个 show_timestamp 字段
- queryPopupEventState(eventId) 根据事件key与UserId找到对应的触发记录
- saveClickedEvent(enevtId) 先生成一个行记录ContentValues cv.put(K,V)的形式生成字段与对应的数据。is_click：1，user_id：userId.最后调用db.insert(table,null,cv)实现插入数据
- addShowedEvent(eventId) eventId,showCuont,showTimeStamp,userId四元组 默认-1，弹过一次就是1
### 资源位模板 BannerData
序列化DO对象
- name
- bannerKey
- List<BannerItemData> itemss

### banner核心模板与功能定义 BannerItemData
- mIsFirstBind = false 
- Index 坑位号
- Title
- ImageUrl
- TargetUrl
定义点击监听方法 bindItemDataToClickView(),点击后调用TouchMessageDispatcher.postBannerItemEvent()方法借助HttpClient.uploadEventImmediately()上报埋点事件，Tag:TouchMessageDispatcher

### BaseBanner 基础模板
- initDefaultAttrs（）
- initCustomAttrs（）
- initView（） 序列圆点
- showPlaceholder
- setPageChangeDuration（）页面切换时长
- setAutoPlayAble（）自动切换 在setData前
- setData(List<View> views, List models, List<String> tips)
- setData(@LayoutRes int layoutResId, List models, List<String> tips) 
- setData(List models, List<String> tips)
- setData(List<View> views)
- setData( LocalImageSize localImageSize,  ImageView.ScaleType scaleType,  int... resIds)  720，1280，320，640
- setAllowUserScrollable（）允许用户手指滑动
### banner滑动视图
- mDuration
- startScroll(x,y,dx,dy)
- startScroll(x,y,dx,dy,duration)

### banner核心处理逻辑 TouchMessageDispatcher
Tag:TouchMessageDispatcher
事件:gio_touch_bannerItem_clicked && gio_touch_bannerItem_showed
请求：postBannerItemEvent(eventType,itemData)
事件类型：类内枚举
```
@StringDef({EVENT_TOUCH_BANNERITEM_CLICKED, EVENT_TOUCH_BANNERITEM_SHOWED})
@Retention(RetentionPolicy.SOURCE)
public @interface EventType {}
```
postBannerItemEvent(event.setKey(eventType).setValue(itemJson),DataCallback),上报失败的话，主动track一下，存到本地。所以最快立马上报，最迟30秒上报。



## COMMON包

*exception/GTouchSDKException*
- extends了RuntimeException，非受检异常，被调的方法里抛出了GTouchSDKException时无需调用。
- 仅debug模式抛出该异常，非debug模式打印错误日志

*DataCallback<T>*
- 数据回调泛型接口，做一些方法声明
- onSuncess(T result,Map<String, List<String>> headers)
- onFailed(int errorCode)

*HttpRequestTask*  产品
- mHttpRequest
- cance() 

*HttpRequest* 产品设备
DEFAULT_CONNECT_TIMEOUT ： 5
DEFAULT_READ_TIMEOUT ： 10


*OkHttpClient* 设备核心
- Request.Builder().url().build() --> Request对象
  - reuqest.post(RequestBody.create(MediaType.get("text/x-markdown; charset=utf-8"),postBody))
- new OkHttpClient().newCall(request); --> Call对象
- client.newBuilder().connectTimeout(); 弱修改 client
- GetRequestBuilder get(url) 返回一个BaseRequestBuilder<GetRequestBuilder>

*RequestExtra* 零件
- mRetryTimes
- mEnableGzip

*BaseRequestBuilder* 工厂
- mUrl
- mHeaders
- mRetryTimes
- mEnableGzip
- getRequestBody()
- build() --> HttpRequest 将body，url，header，RetryTimes信息封装成Request，再return new HttpRequest().



*NetWorkReachability* 网络工具
- isNewWorkConnected(context)
- newWorkState(context) --> int



*Url* urlDAO
- mHost
- mPaths == List<String>
- mParams == Map<String,String> 



*MonitorManager*  无关弹窗,依赖gmonitor包
- register
- isSdkException(Analysed)
- unRegister() 不建议使用
- close 关闭上报功能 ， 自动化时需要关闭
- isEnabled
- sendMessage
- sendException
- sendEvent()
- recordBreadcrumb()


*ScanErrorDialog*
- @ScanType 限定这个注解修饰的变量只能是注解定义的范围
```
异步执行流，对关键字段做安全保护
   synchronized (this) {
   if (executed) throw new IllegalStateException("Already Executed");
      executed = true;
   }

```

*ClassExistHelper*
- hasClass
```
1、forName和newInstance结合起来使用，可以根据存储在字符串中的类名创建对象。例如
    Object obj = Class.forName(s).newInstance();

2、虚拟机为每种类型管理一个独一无二的Class对象。因此可以使用==操作符来比较类对象。例如：
    if(e.getClass() == Employee.class)...
```


```
阻止编译器优化
 volatile boolean mIsCancel = false
```
```
cancel时需要清空当前线程的handler信息
mUiHandler.removeCallbacksAndMessages(null)
```




## gtouch
*BuryService*
- ServiceLoader.load(IBuryService.class).itereator().next();
- 获取IBuryService接口的所有实现类

*VdsAgentMask*
- loadUrl(webView, url) 反射调用埋点的VdsAgent方法 从而track一个webView

### config
*DefalutEventPopupListener* 
- onLoadSuccess(eventId,eventType)
- onLoadFailed(eventId,eventType,errorCode,description)

*GTouchConfig*
- DEFAULT_EVENT_POPUP_TIMEOUT = 5s
- setEventPopupListener(eventPopupListener) 懒汉模式
- setEventPopupShowTimeout(eventPopupShowTimeout) 0s-100s
- getEventPopupListener()
- getEventPopupShowTimeout()
- isEventPopupEnable()
- setEventPopupEnable()
- isDebugEnable()
- setDebugEnable
- isUploadExceptionEnable
- setUploadExceptionEnable -> GTouchConfig
- getMessageHost
- setMessageHost
- isPushEnable
- setPushEnable
- clone
- @NonNull toString() 检测这个域内若存在空指则idea提出警告

### data
*DataHelper*
SP_NAME=“growing_touch_data”
TOUCH_EVENT_CONFIG=“touch_event_config”
OLD_APP_USER_ID=“old_app_user_id”
ID_MAPPINGS_EXPIRY=“id_mappings_expiry” id映射过期 u-->bu cs-->bcs
“mapping_device_id”
“mapping_app_user_id”
“growing_people_variable”

ExecutorService
SharedPreferences
TouchDatabase

PopupEventState sPreviewPopupEventState
```
id,
showCount,
showTimestamp,
isClicked
```

sIsPreviewMode

- init(context)
- setPreviewMode()
- clearPreviewCache() sPreviewPopupEventState = null
- getOldAppUserId()
- saveCurrentAppUserId()
- getMappingDeviceId()
- getMappingAppUserId
- saveBannerData
```
putString(bannerKey,bannerData.toHexString)
```
- saveClickedEvent(id)
- sTouchDatabase.saveClickedEvent(id);
- addShowedEvent(id)
- queryPopupEventState(id) 弹窗预览state不存进数据库，直接从DataHelper里读取
- saveTrackEvent(event) --> 保存埋点事件
- queryTodayTrackEvent(eventName,type)
- cleanHistoryTrackEvent() 保存，修改与插入操作需要 线程池安全操作，池内只要一个线程且出了问题会生成新线程来替代。
- isNewUser() 数据库里没有，当前有。数据库里有，当前也有且不一样。
- saveIdMappings(IdMappings)
- getIdMappings() 新用户则saveCurrentAppUserId(OLD_APP_USER_ID，userId)，如果expiry小了过期了则无mappings。deviceId就是bu,appUserId就是bcs
- savePeopleVariable()
- removePeopleVariable()
- getPeopleVariable()

*TouchDatabase*
“gtouch”
“track_event”
- onCreate(SQLiteDatabase)
- onUpgrade(onUpgrade)
- queryPopupEventState(id)





## 常见回归
- target：分群
- filters.expr：分群属性
- triggerFilter：触发事件	
- conditions.key:	触发事件名称
- conditions.dimFilters.dim：事件变量名 
- conditions.dimFilters.values:事件变量值
- limit
- cd 









# 用户属性
## 用例截图
![](https://tva1.sinaimg.cn/large/006tNbRwly1g9sm4binusj31jd0u0q6p.jpg)

![](https://tva1.sinaimg.cn/large/006tNbRwly1g9sm4luafbj31xy0ne0v1.jpg)

### GTouch 代码走读
  json协议
- 用户属性 sdk：filters value变values，前端：audienceFilter 
- 事件条件 sdk: triggerFilter(conditions事件 + dimFilters事件变量)


## v2与v3对比
    v2
当有用户属性或事件变量时，
前端会传 audiencceFilter {
    exprs:[
        { symbol:"a",op:"=",type:"loginUserFilter",value:"10",key:"imgOpenCnt" }
    ]
    op:"(a && b) && c"
}
 服务端给SDK 
    http://messages.growingio.com/v2/0a1b4118dd954ec3bcc69da5138bdb96/notifications/preview?url_scheme=growing.638b52710867187c&message_id=LPdzaq9N

filters : {
   expr:"(a && b) && c" 
   exprs: [
    {
        symbol: "a",
        op: "==",
        type: "loginUserFilter",
        value: "10",
        key: "imgOpenCnt"
    }
    ]
}

    v3
前端给服务端
    true == （ 1 && audienceId || audienceFilter ）
    注册至今 key:"gio_user_registry_time_millis"
    http://yapi.infra.growingio.com/project/200/interface/api/1907

服务端给SDK
    http://yapi.infra.growingio.com/project/133/interface/api/1891
filters : {
   <!-- expr:"(a && b) && c"  -->
   op:"&&"
   expr:"a"
   exprs: [
    {
        symbol: "a",
        op: "==",
        type: "loginUserFilter",
        <!-- value: "10", -->
        values:[]
        key: "imgOpenCnt"
    }
    ]
}

rule里多了个 truggerFilter字段

## 注意
v2接口的exprs不可出现values
v3接口的exprs不可出现value

回归 web的事件属性触发 in


## v3联调接口
```json
{
  "splashs": [],
  "popupWindows": [
    {
      "id": 2,
      "state": "activated",
      "name": "弹窗201912-01",
      "platform": "app",
      "content": "https://k8s-statics.growingio.com/pages/20191204/1/1575449042025/1575449042025-popupWindow.html?url_scheme=growing.8137d31f4e7b819f",
      "priority": 1,
      "index": 0,
      "updateAt": 1575420241949,
      "rule": {
        "type": "system",
        "action": null,
        "target": "",
        "endAt": 4102387200000,
        "startAt": 1571195246007,
        "triggerPages": [],
        "triggerCd": 86400,
        "triggerDelay": 0,
        "limit": 1,
        "filters": {
          "op": "&&",
          "exprs": [
            {
              "symbol": "a",
              "op": "==",
              "values": [
                "2"
              ],
              "type": "loginUserFilter",
              "value": null,
              "key": "userVIP"
            }
          ],
          "expr": "a"
        },
        "triggerFilter": {
          "conditionExpr": "a",
          "conditions": [
            {
              "type": "event",
              "alias": "a",
              "key": "",
              "measurementType": "system",
              "aggregator": "",
              "op": "",
              "values": [],
              "attribute": "",
              "dimFiltersOp": "",
              "dimFilters": []
            }
          ]
        }
      },
      "abTest": {
        "dimension": "",
        "symbol": "",
        "ctrlGroup": false
      }
    },
    {
      "id": 3,
      "state": "activated",
      "name": "弹窗201912-01",
      "platform": "app",
      "content": "https://k8s-statics.growingio.com/pages/20191204/1/1575449042025/1575449042025-popupWindow.html?url_scheme=growing.8137d31f4e7b819f",
      "priority": 1,
      "index": 0,
      "updateAt": 1575420241949,
      "rule": {
        "type": "system",
        "action": null,
        "target": "",
        "endAt": 4102387200000,
        "startAt": 1571195246007,
        "triggerPages": [],
        "triggerCd": 86400,
        "triggerDelay": 0,
        "limit": 1,
        "filters": {
          "op": "&&",
          "exprs": [
            {
              "symbol": "a",
              "op": "==",
              "values": [
                "3"
              ],
              "type": "loginUserFilter",
              "value": null,
              "key": "userVIP"
            }
          ],
          "expr": "a"
        },
        "triggerFilter": {
          "conditionExpr": "a",
          "conditions": [
            {
              "type": "event",
              "alias": "a",
              "key": "",
              "measurementType": "system",
              "aggregator": "",
              "op": "",
              "values": [],
              "attribute": "",
              "dimFiltersOp": "",
              "dimFilters": []
            }
          ]
        }
      },
      "abTest": {
        "dimension": "",
        "symbol": "",
        "ctrlGroup": false
      }
    },
    {
      "id": 1,
      "state": "activated",
      "name": "弹窗201912-01",
      "platform": "app",
      "content": "https://k8s-statics.growingio.com/pages/20191204/1/1575449042025/1575449042025-popupWindow.html?url_scheme=growing.8137d31f4e7b819f",
      "priority": 1,
      "index": 0,
      "updateAt": 1575420241949,
      "rule": {
        "type": "system",
        "action": null,
        "target": "",
        "endAt": 4102387200000,
        "startAt": 1571195246007,
        "triggerPages": [],
        "triggerCd": 86400,
        "triggerDelay": 0,
        "limit": 1,
        "filters": {
          "op": "&&",
          "exprs": [
            {
              "symbol": "a",
              "op": "==",
              "values": [
                "1"
              ],
              "type": "loginUserFilter",
              "value": null,
              "key": "userVIP"
            }
          ],
          "expr": "a"
        },
        "triggerFilter": {
          "conditionExpr": "a",
          "conditions": [
            {
              "type": "event",
              "alias": "a",
              "key": "",
              "measurementType": "system",
              "aggregator": "",
              "op": "",
              "values": [],
              "attribute": "",
              "dimFiltersOp": "",
              "dimFilters": []
            }
          ]
        }
      },
      "abTest": {
        "dimension": "",
        "symbol": "",
        "ctrlGroup": false
      }
    },
    {
      "id": 5,
      "state": "activated",
      "name": "弹窗201912-01",
      "platform": "app",
      "content": "https://k8s-statics.growingio.com/pages/20191204/1/1575449042025/1575449042025-popupWindow.html?url_scheme=growing.8137d31f4e7b819f",
      "priority": 1,
      "index": 0,
      "updateAt": 1575420241949,
      "rule": {
        "type": "system",
        "action": null,
        "target": "",
        "endAt": 4102387200000,
        "startAt": 1571195246007,
        "triggerPages": [],
        "triggerCd": 86400,
        "triggerDelay": 0,
        "limit": 1,
        "filters": {
          "op": "&&",
          "exprs": [
            {
              "symbol": "a",
              "op": "==",
              "values": [
                "1"
              ],
              "type": "loginUserFilter",
              "value": null,
              "key": "userVIP"
            }
          ],
          "expr": "a"
        },
        "triggerFilter": {
          "conditionExpr": "A1 || A2",
          "conditions": [
            {
              "type": "event",
              "alias": "A1",
              "key": "支付成功",
              "measurementType": "custom",
              "aggregator": "sum",
              "op": ">=",
              "values": [
                "100分"
              ],
              "attribute": "订单总金额",
              "dimFiltersOp": "and",
              "dimFilters": [
                {
                  "dim": "平台",
                  "op": "==",
                  "values": [
                    "ios"
                  ]
                }
              ]
            },
            {
              "type": "event",
              "alias": "A1",
              "key": "闯关成功",
              "measurementType": "custom",
              "aggregator": "count",
              "op": ">=",
              "values": [
                1
              ],
              "attribute": "",
              "dimFiltersOp": "and",
              "dimFilters": [
                {
                  "dim": "关卡数",
                  "op": "==",
                  "values": [
                    "1"
                  ]
                }
              ]
            }
          ]
        }
      },
      "abTest": {
        "dimension": "",
        "symbol": "",
        "ctrlGroup": false
      }
    },
    {
      "id": 4,
      "state": "activated",
      "name": "弹窗201912-01",
      "platform": "app",
      "content": "https://k8s-statics.growingio.com/pages/20191204/1/1575449042025/1575449042025-popupWindow.html?url_scheme=growing.8137d31f4e7b819f",
      "priority": 1,
      "index": 0,
      "updateAt": 1575420241949,
      "rule": {
        "type": "system",
        "action": null,
        "target": "",
        "endAt": 4102387200000,
        "startAt": 1571195246007,
        "triggerPages": [],
        "triggerCd": 86400,
        "triggerDelay": 0,
        "limit": 1,
        "filters": {
          "op": "&&",
          "exprs": [
            {
              "symbol": "a",
              "op": "==",
              "values": [
                "1"
              ],
              "type": "loginUserFilter",
              "value": null,
              "key": "userVIP"
            }
          ],
          "expr": "a"
        },
        "triggerFilter": {
          "conditionExpr": "A1 || A2",
          "conditions": [
            {
              "type": "event",
              "alias": "A1",
              "key": "支付成功",
              "measurementType": "custom",
              "aggregator": "sum",
              "op": ">=",
              "values": [
                "100分"
              ],
              "attribute": "订单总金额",
              "dimFiltersOp": "and",
              "dimFilters": [
                {
                  "dim": "平台",
                  "op": "==",
                  "values": [
                    "ios"
                  ]
                }
              ]
            },
            {
              "type": "event",
              "alias": "A1",
              "key": "闯关成功",
              "measurementType": "custom",
              "aggregator": "count",
              "op": ">=",
              "values": [
                1
              ],
              "attribute": "",
              "dimFiltersOp": "and",
              "dimFilters": [
                {
                  "dim": "关卡数",
                  "op": "==",
                  "values": [
                    "1"
                  ]
                }
              ]
            }
          ]
        }
      },
      "abTest": {
        "dimension": "",
        "symbol": "",
        "ctrlGroup": false
      }
    }
  ],
  "banners": [
    {
      "name": "test",
      "key": "82d22e7f2c8399cf",
      "messages": [
        {
          "id": 10086,
          "state": "activated",
          "name": "弹窗201912-05-2",
          "platform": "app",
          "content": "https://k8s-statics.growingio.com/media/20191204/101381/1575439805669/1204img.jpeg?url_scheme=growing.8137d31f4e7b819f",
          "priority": 0,
          "index": 0,
          "updateAt": 1575484437362,
          "rule": {
            "type": "system",
            "action": null,
            "target": "",
            "endAt": 4102387200000,
            "startAt": 1571195246007,
            "triggerPages": [],
            "triggerCd": 86400,
            "triggerDelay": 0,
            "limit": 1,
            "filters": {
              "expr": "",
              "exprs": []
            },
            "triggerFilter": {
              "conditionExpr": "",
              "conditions": []
            }
          },
          "abTest": {
            "dimension": "",
            "symbol": "",
            "ctrlGroup": false
          }
        },
        {
          "id": 10087,
          "state": "activated",
          "name": "弹窗201912-05-1",
          "platform": "app",
          "content": "https://k8s-statics.growingio.com/media/20191204/101381/1575439805669/1204img.jpeg?url_scheme=growing.8137d31f4e7b819f",
          "priority": 0,
          "index": 1,
          "updateAt": 1575484343738,
          "rule": {
            "type": "system",
            "action": null,
            "target": "",
            "endAt": 4102387200000,
            "startAt": 1571195246007,
            "triggerPages": [],
            "triggerCd": 86400,
            "triggerDelay": 0,
            "limit": 1,
            "filters": {
              "expr": "",
              "exprs": []
            },
            "triggerFilter": {
              "conditionExpr": "",
              "conditions": []
            }
          },
          "abTest": {
            "dimension": "",
            "symbol": "",
            "ctrlGroup": false
          }
        }
      ]
    }
  ],
  "idMappings": {
    "bu": 0,
    "bcs": 6238029
  }
}
```

## Android代码走读
- PopupWindowEvent：id|name|state|content|priority|updateAt|rule|abTest
- Rule: target | filters | triggerFilter | startAt | endAt | triggerCd | clickMode | limit 
  - 用户属性 RuleFilters: expr如 a&&(b||c) ， exprs如 List<RuleExpr>
    - RuleExpr: visitorFilter | loginUserFilter
  - 触发事件 TriggerFilter: conditionExpr如 A&&B   conditions如 List<TriggerConditions>
    - 多个事件 TriggerConditions:type | alias | key | measurementType | aggregator | op | dimFiltersOp | values | dimFilters 
      - DimFilter: dim | op| valueType | values


### 自定义弹窗事件
- data.entity目录下新增 EventPopupDecisionAction
  - PopupWindowEvent 单个弹窗消息
  - appeared() 往数据库里对应id的弹窗的showCount+1 ，或者预览弹窗的showCount。并发送实时事件
  - clicked() 同上
  - closed() 只发送实时事件

- PreviewTackEventPipeline 新增 popupEventDecideShow()方法，向originListener触达事件监听器注册自定义弹窗
- TackEventPipeline的show方法，如果popupListener.popupEventDecideShow返回的是true，则执行onRun(),防止下一个模板弹窗。
- banner/listner目录下新增CompletionCallback接口
- gtouch新增loadPopupWindowEvents API，内部执行getTouchEventConfig，使用mUiHandler判断进程初始化是否完成，
  - mUiHandler.post() ui线程里执行 当mTouchEventConfig非空且不再请求弹窗配置时，callback.onSuccess。如果是第一次请求，将callback加进列表，否则callback.onFailed();


## 什么是回调函数

- 回调函数：具体业务 
- 中间函数：业务模板
- 起始函数：调用业务
`给中间函数传入什么样的回调函数，是在起始函数里决定的`

```
def getOddNumber(k, getEvenNumber):
    return 1 + getEvenNumber(k)

def quadruple(x):
    return x * 4

i = getOddNumber(k, quadruple) 
i = getOddNumber(k, lambda x: x * 8)
```
给`getOddNumber`传入不同的回调函数，它的表现也不同，这就是回调机制的优势所在。值得一提的是，上面的第三个回调函数是一个匿名函数。有点像函数式编程思想，本质上是编辑器的优化。