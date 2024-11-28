"use strict";(self.webpackChunkedu_core_dev=self.webpackChunkedu_core_dev||[]).push([[600,835],{7835:(e,a,n)=>{n.r(a),n.d(a,{default:()=>c});var s=n(5043),t=n(4600),l=n(2999),o=n.n(l),u=n(579);const c=function(){return(0,s.useEffect)((()=>{o().highlightAll()}),[]),(0,u.jsxs)("div",{style:{margin:50},children:[(0,u.jsx)(t.default,{step:"2",code:"cd /opt/splunk/etc/apps/buttercup",language:"language-bash"}),(0,u.jsx)(t.default,{step:"3",code:"nano bin/bcgEndpoints.py",language:"language-bash"}),(0,u.jsx)(t.default,{step:"4",code:"from splunk.persistconn.application import PersistentServerConnectionApplication\nimport json\n\nclass Echo(PersistentServerConnectionApplication):\n    def __init__(self, _command_line, _command_arg):\n        super(PersistentServerConnectionApplication, self).__init__()\n\n    def handle(self, in_bytes):\n        request = json.loads(in_bytes)        \n        #payload = json.dumps(request)\n        return {\n            'payload': payload,\n            'status': 200\n        }\n",language:"language-python"}),(0,u.jsx)(t.default,{step:"8",code:"nano local/restmap.conf",language:"language-bash"}),(0,u.jsx)(t.default,{step:"9",code:"[script:bcg_echo]\nmatch = /bcg/echo\nscript = bcgEndpoints.py\nscripttype = persist\nhandler = bcgEndpoints.Echo\npython.version = python3",language:"language-solution-file"}),(0,u.jsx)(t.default,{step:"13",code:"nano local/web.conf",language:"language-bash"}),(0,u.jsx)(t.default,{step:"14",code:"[expose:bcg_echo]\nmethods = GET,POST\npattern = /bcg/echo",language:"language-solution-file"}),(0,u.jsx)(t.default,{step:"16",code:"/opt/splunk/bin/splunk restart",language:"language-bash"}),(0,u.jsx)(t.default,{step:"17",code:'curl -k -X GET -u {splunk-id}:{password} --url "https://localhost:8089/services/bcg/echo?myGetArg=myvalue"',language:"language-bash"}),(0,u.jsx)(t.default,{step:"19",code:'curl -k -X POST -u {splunk-id}:{password} --url https://localhost:8089/services/bcg/echo -d "myPostArg=myvalue"',language:"language-bash"}),(0,u.jsx)(t.default,{step:"21",code:"nano bin/bcgEndpoints.py",language:"language-bash"}),(0,u.jsx)(t.default,{step:"22",code:"\n        method = request['method'].lower()\n        if method == \"post\":\n            data = request['form']\n        elif method == \"get\":\n            data = request['query']\n",language:"language-python"}),(0,u.jsx)(t.default,{step:"23",code:"\n        payload = {}\n        for key,val in data:\n            payload[key] = val\n",language:"language-python"}),(0,u.jsx)(t.default,{step:"24",code:"\n        #payload = json.dumps(request)\n        return {\n            'payload': payload,\n            'status': 200,\n            'headers': { 'Content-Type':'application/json' }\n        }\n",language:"language-python"}),(0,u.jsx)(t.default,{step:"26",code:'curl -k -X GET -u {splunk-id}:{password} --url "https://localhost:8089/services/bcg/echo?myGetArg=myvalue"',language:"language-bash"}),(0,u.jsx)(t.default,{step:"28",code:'curl -k -X POST -u {splunk-id}:{password} --url https://localhost:8089/services/bcg/echo -d "myPostArg=myvalue"',language:"language-bash"}),(0,u.jsx)(t.default,{step:"30",code:'curl -k -X GET -u {splunk-id}:{password} --url https://localhost:8089/services/bcg/echo -d "myGetArg=myvalue" -i',language:"language-bash"})]})}},4600:(e,a,n)=>{n.r(a),n.d(a,{default:()=>g});var s=n(5043),t=n(1045),l=n(9336),o=n(683),u=n(2999),c=n.n(u),d=(n(3817),n(6149),n(8443),n(579));const g=function(e){let{step:a,code:n,language:u}=e;return(0,s.useEffect)((()=>{c().highlightAll()}),[]),(0,d.jsxs)("div",{children:[(0,d.jsx)(l.A,{}),(0,d.jsxs)(o.A,{direction:"row",spacing:5,sx:{margin:3},children:[(0,d.jsx)(t.A,{sx:{margin:2},children:a}),(0,d.jsx)("pre",{style:{width:"80%"},children:(0,d.jsx)("code",{className:u,children:n})})]})]})}}}]);
//# sourceMappingURL=835.b7ebd61d.chunk.js.map