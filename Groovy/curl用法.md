## 常见用法

- 以iphone4请求messages接口
curl --user-agent "Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A293 Safari/6531.22.7" http://messages.growingio.com/marketing/automation/v3/0a1b4118dd954ec3bcc69da5138bdb96/notifications

- 将请求过程详情输出到文本
curl --trace output.txt http://messages.growingio.com/marketing/automation/v3/0a1b4118dd954ec3bcc69da5138bdb96/notifications

- 查看请求过程
curl -v http://messages.growingio.com/marketing/automation/v3/0a1b4118dd954ec3bcc69da5138bdb96/notifications

- 查看请求情况
curl -i http://messages.growingio.com/marketing/automation/v3/0a1b4118dd954ec3bcc69da5138bdb96/notifications

- 请求时模拟cookie
curl --cookie "name=xxx" www.example.com

- 请求时将cookie保存到本地
curl -c cookies http://example.com

- 请求时使用本地cookie
curl -b cookies http://example.com

- 请求带头信息
curl --header "Content-Type:application/json" http://example.com

- 登录认证
curl --user name:password example.com

