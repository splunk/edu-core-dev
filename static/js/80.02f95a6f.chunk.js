"use strict";(self.webpackChunkedu_core_dev=self.webpackChunkedu_core_dev||[]).push([[80,450],{80:(e,s,a)=>{a.r(s),a.d(s,{default:()=>r});var d=a(3450),c=a(579);const r=function(){return(0,c.jsxs)("div",{style:{margin:50},children:[(0,c.jsx)(d.default,{step:"3",language:"bash",code:"cd ~/labs/lab6\nnano post.sh"}),(0,c.jsx)(d.default,{step:"4",language:"uri",code:"/services/search/v2/jobs/export"}),(0,c.jsx)(d.default,{step:"5",language:"bash",code:'--data-urlencode "search=search index=bcg_sales sourcetype=sales:addons" \\\n--data-urlencode "earliest_time=-1d@d" \\\n--data-urlencode "latest_time=now"'}),(0,c.jsx)(d.default,{step:"12",language:"uri",code:"/services/search/jobs"}),(0,c.jsx)(d.default,{step:"13",language:"bash",code:'--data-urlencode "search=search index=bcg_sales sourcetype=sales:addons" \\\n--data-urlencode "earliest_time=rt-1h@h" \\\n--data-urlencode "latest_time=rt" \\\n--data-urlencode "search_mode=realtime"'}),(0,c.jsx)(d.default,{step:"20",language:"uri",code:"/services/search/jobs/{search_id}"}),(0,c.jsx)(d.default,{step:"27",language:"uri",code:"/services/search/v2/jobs/{search_id}/results_preview"}),(0,c.jsx)(d.default,{step:"34",language:"uri",code:"/services/search/jobs/{search_id}/control"}),(0,c.jsx)(d.default,{step:"35",language:"bash",code:'--data-urlencode "action=cancel"'})]})}},3450:(e,s,a)=>{a.r(s),a.d(s,{default:()=>o});var d=a(5043),c=a(1045),r=a(9336),t=a(683),l=a(2999),n=a.n(l),u=(a(3817),a(6149),a(3636),a(337),a(3994),a(3839),a(4194),a(8496),a(7337),a(4608),a(579));const o=function(e){let{step:s,code:a,language:l}=e;return(0,d.useEffect)((()=>{n().highlightAll()}),[]),(0,u.jsxs)("div",{children:[(0,u.jsx)(r.A,{}),(0,u.jsxs)(t.A,{direction:"row",spacing:5,sx:{margin:3},children:[(0,u.jsx)(c.A,{sx:{bgcolor:"#f56a00",margin:2},children:s}),(0,u.jsx)("pre",{style:{width:"80%"},children:(0,u.jsx)("code",{className:`language-${l}`,children:a})})]})]})}},4608:()=>{}}]);
//# sourceMappingURL=80.02f95a6f.chunk.js.map