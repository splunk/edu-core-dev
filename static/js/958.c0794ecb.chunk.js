"use strict";(self.webpackChunkedu_core_dev=self.webpackChunkedu_core_dev||[]).push([[0,958],{8958:(e,n,s)=>{s.r(n),s.d(n,{default:()=>l});var a=s(1e3),t=s(579);const l=function(){return(0,t.jsxs)("div",{style:{margin:50},children:[(0,t.jsx)(a.default,{step:"32",language:"bash",code:"cd ~/\nwget https://docs.splunk.com/images/Tutorial/tutorialdata.zip\nwget https://docs.splunk.com/images/d/db/Prices.csv.zip\nunzip tutorialdata.zip\nunzip Prices.csv.zip\nll"}),(0,t.jsx)(a.default,{step:"33",language:"bash",code:"cd /opt/splunk/etc/apps/bcg_eventgen\nmkdir samples\ncp ~/www1/access.log samples/"}),(0,t.jsx)(a.default,{step:"34",language:"bash",code:"mkdir lookups\ncp ~/prices.csv lookups/"}),(0,t.jsx)(a.default,{step:"37",language:"bash",code:"nano local/eventgen.conf"}),(0,t.jsx)(a.default,{step:"38",language:"properties",code:"[access.log]\nmode = replay\nsampletype = raw\nbackfill = -7d\nindex = bcg_sales\nhost = bcg_eventgen\nsource = bcg\nsourcetype = sales:web"}),(0,t.jsx)(a.default,{step:"39",language:"properties",code:"token.0.token = d{2}/w{3}/d{4}:d{2}:d{2}:d{2}\ntoken.0.replacementType = replaytimestamp\ntoken.0.replacement = %d/%b/%Y:%H:%M:%S"}),(0,t.jsx)(a.default,{step:"41",language:"bash",code:"/opt/splunk/bin/splunk restart"}),(0,t.jsx)(a.default,{step:"57",language:"splunk-spl",code:'index=bcg_sales sourcetype="sales:web"'}),(0,t.jsx)(a.default,{step:"61",language:"bash",code:"cd /opt/splunk/etc/apps/bcg_eventgen"}),(0,t.jsx)(a.default,{step:"62",language:"bash",code:"nano samples/mtx_event.sample"}),(0,t.jsx)(a.default,{step:"63",language:"makefile",code:"timestamp=!timestamp! gameId=!1! addon=!2! amount=!3!"}),(0,t.jsx)(a.default,{step:"65",language:"bash",code:"nano samples/games.sample"}),(0,t.jsx)(a.default,{step:"66",language:"makefile",code:"DB-SG-G01\nDC-SG-G02\nFS-SG-G03\nWC-SH-G04\nPZ-SG-G05\nCU-PG-G06\nMB-AG-G07\nFI-AG-G08\nBS-AG-G09\nSC-MG-G10\nWC-SH-A01\nWC-SH-A02\nSF-BVS-G01\nSF-BVS-01"}),(0,t.jsx)(a.default,{step:"68",language:"bash",code:"nano samples/addons.sample"}),(0,t.jsx)(a.default,{step:"69",language:"makefile",code:"currency\nmap\nitem\nweapon\nskin\npet"}),(0,t.jsx)(a.default,{step:"72",language:"bash",code:"nano local/eventgen.conf"}),(0,t.jsx)(a.default,{step:"73",language:"properties",code:"[mtx_event.sample]\ninterval = 3m\nbackfill = -7d\nindex = bcg_sales\nhost = bcg_eventgen\nsource = bcg\nsourcetype = sales:addons"}),(0,t.jsx)(a.default,{step:"74",language:"properties",code:"token.0.token = !timestamp!\ntoken.0.replacementType = timestamp\ntoken.0.replacement = %d/%b/%Y:%H:%M:%S"}),(0,t.jsx)(a.default,{step:"75",language:"properties",code:"token.1.token = !1!\ntoken.1.replacementType = file\ntoken.1.replacement = $SPLUNK_HOME/etc/apps/bcg_eventgen/samples/games.sample\n\ntoken.2.token = !2!\ntoken.2.replacementType = file\ntoken.2.replacement = $SPLUNK_HOME/etc/apps/bcg_eventgen/samples/addons.sample"}),(0,t.jsx)(a.default,{step:"76",language:"properties",code:"token.3.token = !3!\ntoken.3.replacementType = random\ntoken.3.replacement = float[1.00:5]"}),(0,t.jsx)(a.default,{step:"78",language:"bash",code:"/opt/splunk/bin/splunk restart"}),(0,t.jsx)(a.default,{step:"87",language:"splunk-spl",code:"index=bcg_sales sourcetype=sales:addons"})]})}},1e3:(e,n,s)=>{s.r(n),s.d(n,{default:()=>g});var a=s(5043),t=s(1045),l=s(9336),p=s(683),o=s(2999),c=s.n(o),d=(s(3817),s(6149),s(3636),s(337),s(3994),s(3839),s(4194),s(8496),s(7337),s(4608),s(579));const g=function(e){let{step:n,code:s,language:o}=e;return(0,a.useEffect)((()=>{c().highlightAll()}),[]),(0,d.jsxs)("div",{children:[(0,d.jsx)(l.A,{}),(0,d.jsxs)(p.A,{direction:"row",spacing:5,sx:{margin:3},children:[(0,d.jsx)(t.A,{sx:{bgcolor:"#f56a00",margin:2},children:n}),(0,d.jsx)("pre",{style:{width:"80%"},children:(0,d.jsx)("code",{className:`language-${o}`,children:s})})]})]})}},4608:()=>{}}]);
//# sourceMappingURL=958.c0794ecb.chunk.js.map