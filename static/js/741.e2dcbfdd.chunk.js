"use strict";(self.webpackChunkedu_core_dev=self.webpackChunkedu_core_dev||[]).push([[600,741],{1741:(e,a,s)=>{s.r(a),s.d(a,{default:()=>c});var l=s(5043),u=s(4600),t=s(2999),n=s.n(t),p=s(579);const c=function(){return(0,l.useEffect)((()=>{n().highlightAll()}),[]),(0,p.jsxs)("div",{style:{margin:50},children:[(0,p.jsx)(u.default,{step:"6",code:"cd /opt/splunk/etc/apps/buttercup",language:"language-bash"}),(0,p.jsx)(u.default,{step:"7",code:"nano README.txt",language:"language-bash"}),(0,p.jsx)(u.default,{step:"8",code:"Buttercup Games vX.Y.Z\nMM YYYY\nThis is the latest release of the Buttercup Games app.",language:"language-solution-file"}),(0,p.jsx)(u.default,{step:"10",code:"cd metadata\ncat local.meta >> default.meta\nrm local.meta",language:"language-bash"}),(0,p.jsx)(u.default,{step:"11",code:"cd ../local\nll",language:"language-bash"}),(0,p.jsx)(u.default,{step:"12",code:"rm app.conf",language:"language-bash"}),(0,p.jsx)(u.default,{step:"13",code:"mv *.conf ../default\nll ../default",language:"language-bash"}),(0,p.jsx)(u.default,{step:"14",code:"cp -rf data/ ../default\ncd ..\nrm -rf local",language:"language-bash"}),(0,p.jsx)(u.default,{step:"17",code:"nano default/app.conf",language:"language-bash"}),(0,p.jsx)(u.default,{step:"18",code:"[package]\nid = buttercup",language:"language-solution-file"}),(0,p.jsx)(u.default,{step:"20",code:"sudo pip install splunk-appinspect",language:"language-bash"}),(0,p.jsx)(u.default,{step:"21",code:"splunk-appinspect inspect /opt/splunk/etc/apps/buttercup --mode precert",language:"language-bash"}),(0,p.jsx)(u.default,{step:"24",code:"cd /opt/splunk/etc/apps/buttercup\n\nrm -rf bin/__pycache__\nrm -rf bin/splunklib/__pycache__\nrm -rf bin/splunklib/modularinput/__pycache__\nrm -rf bin/splunklib/searchcommands/__pycache__",language:"language-bash"}),(0,p.jsx)(u.default,{step:"25",code:"splunk-appinspect inspect /opt/splunk/etc/apps/buttercup --mode precert",language:"language-bash"}),(0,p.jsx)(u.default,{step:"26",code:"cd /opt/splunk/bin\n./splunk package app buttercup -auth {splunk-id}:{password}",language:"language-bash"}),(0,p.jsx)(u.default,{step:"28",code:"./splunk remove app buttercup -auth {splunk-id}:{password}",language:"language-bash"}),(0,p.jsx)(u.default,{step:"30",code:"./splunk install app /opt/splunk/share/splunk/app_packages/buttercup.spl -auth {splunk-id}:{password}",language:"language-bash"})]})}},4600:(e,a,s)=>{s.r(a),s.d(a,{default:()=>d});var l=s(5043),u=s(1045),t=s(9336),n=s(683),p=s(2999),c=s.n(p),g=(s(3817),s(6149),s(8443),s(579));const d=function(e){let{step:a,code:s,language:p}=e;return(0,l.useEffect)((()=>{c().highlightAll()}),[]),(0,g.jsxs)("div",{children:[(0,g.jsx)(t.A,{}),(0,g.jsxs)(n.A,{direction:"row",spacing:5,sx:{margin:3},children:[(0,g.jsx)(u.A,{sx:{margin:2},children:a}),(0,g.jsx)("pre",{style:{width:"80%"},children:(0,g.jsx)("code",{className:p,children:s})})]})]})}}}]);
//# sourceMappingURL=741.e2dcbfdd.chunk.js.map