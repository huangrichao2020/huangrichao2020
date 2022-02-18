# #coding=utf-8
# import json
# import requests
# import datetime
# import logging
# import time
# i = datetime.datetime.now()
# headers = {"Content-Type" :"application/json ;charset=UTF-8 "}
# webhook = 'https://oapi.dingtalk.com/robot/send?access_token=405453e0a279b28146055f77cb45dc900933cdff84d5c8a5e257b1bd84bd49eb'
# msg_body ={
#     "msgtype":"text",
#     "text":{"content":"准备投票吃饭了兄弟们"}
# }
# while(True):
#     time.sleep()
#     if(17 == i.hour):
#         try:
#             res = requests.post(webhook,data=json.dumps(msg_body),headers=headers)
#             res = res.json()
#         except Exception as e:
#             logging.error("请求异常: %s"%e)
#             res = None
#     else:
#         logging.info("时间未到")

#!/usr/bin/python
# -*- coding: utf-8 -*-
import dingtalkchatbot.chatbot as cb
import argparse
import os

def getParamer():
    parser = argparse.ArgumentParser(description='Function to this script')
    parser.add_argument('--msg', type=str, default = "SDK发版通知测试")
    parser.add_argument('--doc', type=str, default = "用户运营SDK更新日志：https://docs.growingio.com/mp/developers/integrations/changelog")
    args = parser.parse_args()
    return args

webhook = 'https://oapi.dingtalk.com/robot/send?access_token=ca1133160e0e68e5079783923a3829c33ec98fba64dfd16dd8f7f3c7ae0c188c'
#webhook = 'https://oapi.dingtalk.com/robot/send?access_token=600831f3fdfdbb75683b9bba91eea0c7668b968f283c695f0895d32acb338515'
ding = cb.DingtalkChatbot(webhook)
msg = getParamer().msg
note = getParamer().doc
text = '''{} 详细更新内容请查看下方链接
{}
'''.format(msg,note)
print(text)
ding.send_text(msg=text,is_at_all=False)