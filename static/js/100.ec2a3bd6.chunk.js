"use strict";(self.webpackChunkedu_core_dev=self.webpackChunkedu_core_dev||[]).push([[100,450],{4100:(e,a,s)=>{s.r(a),s.d(a,{default:()=>g});var n=s(3450),t=s(579);const g=function(){return(0,t.jsxs)("div",{style:{margin:50},children:[(0,t.jsx)(n.default,{step:"3",code:"cd ~/labs/lab2\nnano get.sh",language:"language-bash"}),(0,t.jsx)(n.default,{step:"4",code:"/services/data/indexes",language:"language-bash"}),(0,t.jsx)(n.default,{step:"6",code:"bash get.sh",language:"language-bash"}),(0,t.jsx)(n.default,{step:"8",code:"nano get.sh",language:"language-bash"}),(0,t.jsx)(n.default,{step:"9",code:'| xmlstarlet sel -N a="http://www.w3.org/2005/Atom" -t -m /a:feed/a:entry -v a:title -n',language:"language-bash"}),(0,t.jsx)(n.default,{step:"11",code:"bash get.sh",language:"language-bash"}),(0,t.jsx)(n.default,{step:"13",code:"nano get.py",language:"language-bash"}),(0,t.jsx)(n.default,{step:"14",code:"/services/data/indexes",language:"language-python"}),(0,t.jsx)(n.default,{step:"16",code:"python3 get.py",language:"language-bash"}),(0,t.jsx)(n.default,{step:"18",code:"nano get.py",language:"language-bash"}),(0,t.jsx)(n.default,{step:"19",code:'#print(response.content)\nprint("Request: [" + response.request.method + "] " + response.request.url)\nprint("Response: [" + str(response.status_code) + "] " + response.reason)',language:"language-python"}),(0,t.jsx)(n.default,{step:"20",code:"# XML / Atom namespaces\n# '' = atom, s = splunk\nns = {\n    '': 'http://www.w3.org/2005/Atom',\n    's': 'http://dev.splunk.com/ns/rest',\n    'opensearch': 'http://a9.com/-/spec/opensearch/1.1/'\n}",language:"language-python"}),(0,t.jsx)(n.default,{step:"21",code:"if (response.status_code == 200):\n    # get xml root element\n    root = ET.fromstring(response.text)\n    # for all entries in the atom namespace\n    for entry in root.findall('entry', ns):\n        # print the entry title\n        print(\" \" + entry.find('title', ns).text)",language:"language-python"}),(0,t.jsx)(n.default,{step:"23",code:"python3 get.py",language:"language-bash"}),(0,t.jsx)(n.default,{step:"25",code:"nano get.sh",language:"language-bash"}),(0,t.jsx)(n.default,{step:"26",code:"--data-urlencode \"output_mode=json\" | jq '.'",language:"language-bash"}),(0,t.jsx)(n.default,{step:"28",code:"bash get.sh",language:"language-bash"}),(0,t.jsx)(n.default,{step:"31",code:"nano get.sh",language:"language-bash"}),(0,t.jsx)(n.default,{step:"32",code:"'.entry[].name'",language:"language-bash"}),(0,t.jsx)(n.default,{step:"34",code:"bash get.sh",language:"language-bash"}),(0,t.jsx)(n.default,{step:"36",code:"nano get.js",language:"language-bash"}),(0,t.jsx)(n.default,{step:"37",code:"/services/data/indexes?output_mode=json",language:"language-bash"}),(0,t.jsx)(n.default,{step:"39",code:"node get.js",language:"language-bash"}),(0,t.jsx)(n.default,{step:"41",code:"nano get.js",language:"language-bash"}),(0,t.jsx)(n.default,{step:"42",code:'//console.log(data);\nconsole.log("Request: [GET] " + response.url);\nconsole.log("Response: [" + response.status + "] " + response.statusText);',language:"language-javascript"}),(0,t.jsx)(n.default,{step:"43",code:'if (response.status === 200) {\n    data.entry.forEach(function(entry) {\n        console.log(" " + entry.name);\n    });\n}',language:"language-javascript"}),(0,t.jsx)(n.default,{step:"45",code:"node get.js",language:"language-bash"})]})}},3450:(e,a,s)=>{s.r(a),s.d(a,{default:()=>p});var n=s(5043),t=s(1045),g=s(9336),l=s(683),o=s(2999),u=s.n(o),d=(s(3817),s(6149),s(8443),s(4608),s(579));const p=function(e){let{step:a,code:s,language:o}=e;return(0,n.useEffect)((()=>{u().highlightAll()}),[]),(0,d.jsxs)("div",{children:[(0,d.jsx)(g.A,{}),(0,d.jsxs)(l.A,{direction:"row",spacing:5,sx:{margin:3},children:[(0,d.jsx)(t.A,{sx:{bgcolor:"#f56a00",margin:2},children:a}),(0,d.jsx)("pre",{style:{width:"80%"},children:(0,d.jsx)("code",{className:o,children:s})})]})]})}},4608:()=>{}}]);
//# sourceMappingURL=100.ec2a3bd6.chunk.js.map