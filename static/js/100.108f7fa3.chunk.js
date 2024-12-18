"use strict";(self.webpackChunkedu_core_dev=self.webpackChunkedu_core_dev||[]).push([[100,450],{4100:(e,s,t)=>{t.r(s),t.d(s,{default:()=>o});var n=t(3450),a=t(579);const o=function(){return(0,a.jsxs)("div",{style:{margin:50},children:[(0,a.jsx)(n.default,{step:"3",language:"bash",code:"cd ~/labs/lab2\nnano get.sh"}),(0,a.jsx)(n.default,{step:"4",language:"uri",code:"/services/data/indexes"}),(0,a.jsx)(n.default,{step:"9",language:"bash",code:'\\\n| xmlstarlet sel -N a="http://www.w3.org/2005/Atom" -t \\\n-m /a:feed/a:entry -v a:title -n'}),(0,a.jsx)(n.default,{step:"14",language:"uri",code:"/services/data/indexes"}),(0,a.jsx)(n.default,{step:"19",language:"python",code:'#print(response.content)\nprint("Request: [" + response.request.method + "] " + response.request.url)\nprint("Response: [" + str(response.status_code) + "] " + response.reason)'}),(0,a.jsx)(n.default,{step:"20",language:"python",code:"# XML / Atom namespaces\n# '' = atom, s = splunk\nns = {\n    '': 'http://www.w3.org/2005/Atom',\n    's': 'http://dev.splunk.com/ns/rest',\n    'opensearch': 'http://a9.com/-/spec/opensearch/1.1/'\n}"}),(0,a.jsx)(n.default,{step:"21",language:"python",code:"if (response.status_code == 200):\n    # get xml root element\n    root = ET.fromstring(response.text)\n    # for all entries in the atom namespace\n    for entry in root.findall('entry', ns):\n        # print the entry title\n        print(\" \" + entry.find('title', ns).text)"}),(0,a.jsx)(n.default,{step:"26",language:"bash",code:"--data-urlencode \"output_mode=json\" \\\n| jq '.'"}),(0,a.jsx)(n.default,{step:"32",language:"bash",code:"'.entry[].name'"}),(0,a.jsx)(n.default,{step:"37",language:"uri",code:"/services/data/indexes?output_mode=json"}),(0,a.jsx)(n.default,{step:"42",language:"javascript",code:'//console.log(data);\nconsole.log("Request: [GET] " + response.url);\nconsole.log("Response: [" + response.status + "] " + response.statusText);'}),(0,a.jsx)(n.default,{step:"43",language:"javascript",code:'if (response.status === 200) {\n    data.entry.forEach(function(entry) {\n        console.log(" " + entry.name);\n    });\n}'})]})}},3450:(e,s,t)=>{t.r(s),t.d(s,{default:()=>c});var n=t(5043),a=t(1045),o=t(9336),r=t(683),l=t(2999),d=t.n(l),u=(t(3817),t(6149),t(3636),t(337),t(3994),t(3839),t(4194),t(8496),t(7337),t(4608),t(579));const c=function(e){let{step:s,code:t,language:l}=e;return(0,n.useEffect)((()=>{d().highlightAll()}),[]),(0,u.jsxs)("div",{children:[(0,u.jsx)(o.A,{}),(0,u.jsxs)(r.A,{direction:"row",spacing:5,sx:{margin:3},children:[(0,u.jsx)(a.A,{sx:{bgcolor:"#f56a00",margin:2},children:s}),(0,u.jsx)("pre",{style:{width:"80%"},children:(0,u.jsx)("code",{className:`language-${l}`,children:t})})]})]})}},4608:()=>{}}]);
//# sourceMappingURL=100.108f7fa3.chunk.js.map