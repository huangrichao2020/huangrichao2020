## 3.0 SDk总体功能

CustomEventSender 类里通过mock框架拦截到传入的参数，并自行封装一个equal类对其进行判断。

程序API
- 采集策略配置
- 运行时API
- 发送策略配置
- 埋点事件接口
- 内部API

云控制配置
- 拦截配置
- 报警策略配置
- 发送策略自定义

调试能力
- 各模块配置信息
- 各模块初始化状态
- 模块运行时统计信息


事件采集
- 无埋点部分：native.page native.action RN/Hybrid Avtivity.page
报警系统
- crash采集
- 模块初始化异常
- 接口调用报警
- 数据流报警

数据存储与发送
- 实时数据发送策略
- 4G数据发送策略
- wifi数据发送策略

## 事件采集细节

session改变的时机
- cs1空到非空，非空到空不发
- cs1由a到空再到非空发
- cs1改变
- App冷启动
- 切到后台超过30s


vist
- cs1空到非空，非空到空不发 
- cs1由a到空再到非空发
- App冷启动第一个界面出现时 必发
- 切到后台超过30s再打开
- cs1从无到有不发，从a到b发送
- GPS从无到有发送
- IMEI，OAID第一次获取时发送

auto.page
- Activity的onResume触发
- Fragment的setUserVisibleHint触发
- 客户代码手动触发
- 实现接口发送pvar
- name pvar

auto.click
- xpath 不同viewTree结果的xpath不同
- id，界面内非唯一
- 关键元素 key-view
- OnClickListener 我们有唯一的方法签名
- 变量名 view的别名
- v 点击的元素内容


chng
- 半自动Adapter模式
- EditText的v改变。失去焦点，界面不可见时触发

evar vstr ppl
- 属性事件，后台不发送
- 后台调用过相关api的话，下次打开再发送
- vstr会将缓存的先发送出去

埋点运行接口(自动化内容)
- startWithConfiguration
- track(name,map<string,string>)
- setEvar
- setPeopleVariable
- setVisitor
- getDeviceId
- setUserId
- setLocation
- isDeeplinkURL（广告）
- doDeeplinkURL（广告）
- setGDPREnabled
- getSessionId
- getVersion
- setCustomId
- setPageAttributes
- markViewImpression/stopMarkViewImpression 

配置接口
- setProjectId
- getProjectId
- setUrlScheme
- setChannel
- getChannel
- setUploadExceptionEnable
- isUploadExceptionEnable
- setDebugMode
- isDebugMode



圈选
- 事件圈选
- 界面圈选
- mobileDebugger