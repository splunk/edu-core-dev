"use strict";(self.webpackChunkedu_core_dev=self.webpackChunkedu_core_dev||[]).push([[0,147],{1147:(e,s,a)=>{a.r(s),a.d(s,{default:()=>n});var l=a(1e3),t=a(579);const n=function(){return(0,t.jsxs)("div",{style:{margin:50},children:[(0,t.jsx)(l.default,{step:"9",code:"cd /opt/splunk/etc/apps/buttercup/appserver/static\nunzip lab3_files.zip\nll",language:"language-bash"}),(0,t.jsx)(l.default,{step:"10",code:"mkdir ../../static\nmv app* ../../static\nll ../../static\nrm lab3_files.zip",language:"language-bash"}),(0,t.jsx)(l.default,{step:"11",code:"/opt/splunk/bin/splunk restart",language:"language-bash"}),(0,t.jsx)(l.default,{step:"17",code:'<collection label="Sales Dashboards">\n    <view source="all" match="buttercup"/>\n</collection>',language:"language-xml"}),(0,t.jsx)(l.default,{step:"20",code:'index="bcg_sales" sourcetype="sales:web" action=purchase productId=*',language:"language-splunk-spl"}),(0,t.jsx)(l.default,{step:"24",code:'index="bcg_sales" sourcetype="sales:addons"',language:"language-splunk-spl"}),(0,t.jsx)(l.default,{step:"37",code:"tag=bcg_sales",language:"language-splunk-spl"}),(0,t.jsx)(l.default,{step:"45",code:"| inputlookup prices_lookup\n| fields productId, product_name\n| sort product_name",language:"language-splunk-spl"}),(0,t.jsx)(l.default,{step:"51",code:'eventtype="bcg_web_sales" productId=$game|s$\n| stats sum(price)',language:"language-splunk-spl"}),(0,t.jsx)(l.default,{step:"54",code:'eventtype="bcg_mtx_sales" productId=$game|s$\n| stats sum(price)',language:"language-splunk-spl"}),(0,t.jsx)(l.default,{step:"57",code:"tag=bcg_sales productId=$game|s$\n| timechart sum(price) by productName",language:"language-splunk-spl"})]})}},1e3:(e,s,a)=>{a.r(s),a.d(s,{default:()=>d});var l=a(5043),t=a(1045),n=a(9336),u=a(683),c=a(2999),p=a.n(c),g=(a(3817),a(6149),a(3636),a(3839),a(4194),a(8496),a(7337),a(4608),a(579));const d=function(e){let{step:s,code:a,language:c}=e;return(0,l.useEffect)((()=>{p().highlightAll()}),[]),(0,g.jsxs)("div",{children:[(0,g.jsx)(n.A,{}),(0,g.jsxs)(u.A,{direction:"row",spacing:5,sx:{margin:3},children:[(0,g.jsx)(t.A,{sx:{bgcolor:"#f56a00",margin:2},children:s}),(0,g.jsx)("pre",{style:{width:"80%"},children:(0,g.jsx)("code",{className:c,children:a})})]})]})}},4608:()=>{}}]);
//# sourceMappingURL=147.f496e6ac.chunk.js.map