"use strict";(self.webpackChunkedu_core_dev=self.webpackChunkedu_core_dev||[]).push([[46,751],{1751:(e,n,t)=>{t.r(n),t.d(n,{default:()=>o});var s=t(1046),a=t(579);const o=function(){return(0,a.jsxs)("div",{style:{margin:50},children:[(0,a.jsx)(s.default,{step:"9",language:"jsx",code:"import React, { useState } from 'react';\n\nconst TabSearch = () => {\n    return (<div style={{ margin: 25 }}>\n        TAB SEARCH\n    </div>);\n};\n\nexport default TabSearch;"}),(0,a.jsx)(s.default,{step:"12",language:"jsx",code:"import TabSearch from './TabSearch';"}),(0,a.jsx)(s.default,{step:"13",language:"jsx",code:"<TabSearch/>"}),(0,a.jsx)(s.default,{step:"15",language:"bash",code:"cd ~/code/packages/my-react-component\nyarn add @splunk/react-search\nyarn add @splunk/dashboard-utils"}),(0,a.jsx)(s.default,{step:"17",language:"jsx",code:"import SearchBar from '@splunk/react-search/components/Bar';\nimport searchBNF from \"@splunk/dashboard-utils/defaultSPLSyntax.json\";"}),(0,a.jsx)(s.default,{step:"19",language:"jsx",code:'    const [options, setOptions] = useState({\n        "earliest": "-7d@d",\n        "latest": "now",\n        "search": "",\n        "syntax": searchBNF\n    });'}),(0,a.jsx)(s.default,{step:"21",language:"jsx",code:"const handleOptionsChange = (option) => {\n    console.log(option);\n    setOptions({...options, ...option});\n};\n\nconst handleEventTrigger = (eventType) => {\n    console.log(eventType);\n};"}),(0,a.jsx)(s.default,{step:"22",language:"jsx",code:"    <SearchBar\n        options={options}\n        onOptionsChange={handleOptionsChange}\n        onEventTrigger={handleEventTrigger}\n    />"}),(0,a.jsx)(s.default,{step:"25",language:"bash",code:"cd ~/code/packages/my-react-component\nyarn add @splunk/search-job"}),(0,a.jsx)(s.default,{step:"27",language:"jsx",code:"import SearchJob from '@splunk/search-job';\nimport * as config from '@splunk/splunk-utils/config';"}),(0,a.jsx)(s.default,{step:"30",language:"jsx",code:"    const job = SearchJob.create(options, {\n        app: config.app,\n        owner: config.username\n    });"}),(0,a.jsx)(s.default,{step:"33",language:"jsx",code:'    const progress = job.getProgress().subscribe({\n        next: searchState => {\n            console.log(searchState);\n        },\n        error: err => {\n            console.log(err);\n        },\n        complete: () => {\n            console.log("search complete!");\n        }\n    });'}),(0,a.jsx)(s.default,{step:"36",language:"jsx",code:'    const results = job.getResults().subscribe({\n        next: response => {\n            console.log(response);\n        },\n        error: err => {\n            console.log(err);\n        },\n        complete: () => {\n            console.log("results retrieved!");\n        }\n    });'}),(0,a.jsx)(s.default,{step:"40",language:"splunk-spl",code:"index=bcg_sales sourcetype=sales:web"}),(0,a.jsx)(s.default,{step:"44",language:"jsx",code:'const [fields, setFields] = useState([]);\nconst [events, setEvents] = useState([]);\nconst [status, setStatus] = useState("");\nconst [duration, setDuration] = useState("");'}),(0,a.jsx)(s.default,{step:"46",language:"jsx",code:"        setStatus(searchState.content.dispatchState);\n        setDuration(searchState.content.runDuration);"}),(0,a.jsx)(s.default,{step:"48",language:"jsx",code:"        setFields(response.fields);\n        setEvents(response.results);"}),(0,a.jsx)(s.default,{step:"51",language:"jsx",code:"import JSONTree from '@splunk/react-ui/JSONTree';\nimport StaticContent from '@splunk/react-ui/StaticContent';"}),(0,a.jsx)(s.default,{step:"53",language:"jsx",code:"    <StaticContent>Status: {status} {duration}</StaticContent>\n    <StaticContent>Fields</StaticContent>\n    <JSONTree json={fields} expandChildrenOnShiftKey />\n    <StaticContent>Events</StaticContent>\n    <JSONTree json={events} expandChildrenOnShiftKey />"}),(0,a.jsx)(s.default,{step:"56",language:"jsx",code:"import Table from '@splunk/react-ui/Table';"}),(0,a.jsx)(s.default,{step:"58",language:"jsx",code:"    <Table>\n        <Table.Head>\n            {fields.map((field,i) => (\n                <Table.HeadCell key={'f'+i}>{field.name}</Table.HeadCell>\n            ))}\n        </Table.Head>\n        <Table.Body>\n            {events.map((event,i) => (\n                <Table.Row key={'r'+i}>\n                    {fields.map((field,ii) => (\n                        <Table.Cell key={'c'+ii}>{event[field.name]}</Table.Cell>\n                    ))}   \n                </Table.Row>\n            ))}\n        </Table.Body>\n    </Table>"}),(0,a.jsx)(s.default,{step:"61",language:"jsx",code:'        let filtered = response.fields.filter(f => !f.name.startsWith("_"));\n        filtered.push({"name": "_raw"});\n\n        setFields(filtered);'})]})}},1046:(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});var s=t(5043),a=t(1045),o=t(9336),l=t(683),r=t(2999),c=t.n(r),d=(t(3817),t(6149),t(3636),t(337),t(3994),t(3839),t(4194),t(8496),t(7337),t(4608),t(579));const i=function(e){let{step:n,code:t,language:r}=e;return(0,s.useEffect)((()=>{c().highlightAll()}),[]),(0,d.jsxs)("div",{children:[(0,d.jsx)(o.A,{}),(0,d.jsxs)(l.A,{direction:"row",spacing:5,sx:{margin:3},children:[(0,d.jsx)(a.A,{sx:{bgcolor:"#f56a00",margin:2},children:n}),(0,d.jsx)("pre",{style:{width:"80%"},children:(0,d.jsx)("code",{className:`language-${r}`,children:t})})]})]})}},4608:()=>{}}]);
//# sourceMappingURL=751.55a85417.chunk.js.map