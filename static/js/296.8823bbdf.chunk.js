"use strict";(self.webpackChunkedu_core_dev=self.webpackChunkedu_core_dev||[]).push([[46,296],{296:(e,a,s)=>{s.r(a),s.d(a,{default:()=>l});var n=s(1046),t=s(579);const l=function(){return(0,t.jsxs)("div",{style:{margin:50},children:[(0,t.jsx)(n.default,{step:"2",language:"bash",code:"mkdir ~/code\ncd ~/code"}),(0,t.jsx)(n.default,{step:"3",language:"bash",code:"npm install -g @splunk/create"}),(0,t.jsx)(n.default,{step:"4",language:"bash",code:"splunk-create"}),(0,t.jsx)(n.default,{step:"14",language:"bash",code:"cd ~/code\nyarn run setup"}),(0,t.jsx)(n.default,{step:"15",language:"bash",code:"yarn run build"}),(0,t.jsx)(n.default,{step:"16",language:"bash",code:"export SPLUNK_HOME=/opt/splunk\ncd packages/my-splunk-app\nyarn run link:app"}),(0,t.jsx)(n.default,{step:"17",language:"bash",code:"ls -l /opt/splunk/etc/apps/my-splunk-app"}),(0,t.jsx)(n.default,{step:"18",language:"bash",code:"cd ~/code\nyarn run start"}),(0,t.jsx)(n.default,{step:"20",language:"bash",code:"/opt/splunk/bin/splunk restart"}),(0,t.jsx)(n.default,{step:"33",language:"properties",code:"[ui]\nlabel = Buttercup Games\n\n[launcher]\nauthor = <your name>\ndescription = My SUI app!\n\n[install]\nis_configured = 0"}),(0,t.jsx)(n.default,{step:"41",language:"bash",code:"cd ~/code/packages/my-splunk-app/src/main/resources/splunk\nmkdir static\ncd static"}),(0,t.jsx)(n.default,{step:"42",language:"bash",code:"wget https://splunk.github.io/edu-core-dev/downloads/bcg_icons.zip\nunzip bcg_icons.zip\nll"}),(0,t.jsx)(n.default,{step:"50",language:"bash",code:"cd ~/code\nsplunk-create"}),(0,t.jsx)(n.default,{step:"55",language:"bash",code:"yarn run start"})]})}},1046:(e,a,s)=>{s.r(a),s.d(a,{default:()=>r});var n=s(5043),t=s(1045),l=s(9336),u=s(683),d=s(2999),c=s.n(d),p=(s(3817),s(6149),s(3636),s(337),s(3994),s(3839),s(4194),s(8496),s(7337),s(4608),s(579));const r=function(e){let{step:a,code:s,language:d}=e;return(0,n.useEffect)((()=>{c().highlightAll()}),[]),(0,p.jsxs)("div",{children:[(0,p.jsx)(l.A,{}),(0,p.jsxs)(u.A,{direction:"row",spacing:5,sx:{margin:3},children:[(0,p.jsx)(t.A,{sx:{bgcolor:"#f56a00",margin:2},children:a}),(0,p.jsx)("pre",{style:{width:"90%"},children:(0,p.jsx)("code",{className:`language-${d}`,children:s})})]})]})}},4608:()=>{}}]);
//# sourceMappingURL=296.8823bbdf.chunk.js.map