import Snippet from './Snippet';

function Lab5() {


const step10 = `import React, { useState } from 'react';

const TabSearch = () => {
    return (<div style={{ margin: 25 }}>
        TAB SEARCH
    </div>);
};

export default TabSearch;`;

const step13 = `import TabSearch from './TabSearch';`;

const step14 = `<TabSearch/>`;

const step16 = `cd ~/code/packages/my-react-component
yarn add @splunk/react-search
yarn add @splunk/dashboard-utils`;

const step18 = `import SearchBar from '@splunk/react-search/components/Bar';
import searchBNF from "@splunk/dashboard-utils/defaultSPLSyntax.json";`;

const step20 = `    const [options, setOptions] = useState({
        "earliest": "-7d@d",
        "latest": "now",
        "search": "",
        "syntax": searchBNF
    });`;

const step22 = `const handleOptionsChange = (option) => {
    console.log(option);
    setOptions({...options, ...option});
};

const handleEventTrigger = (eventType) => {
    console.log(eventType);
};`;

const step23 = `    <SearchBar
        options={options}
        onOptionsChange={handleOptionsChange}
        onEventTrigger={handleEventTrigger}
    />`;

const step26 = `cd ~/code/packages/my-react-component
yarn add @splunk/search-job`;

const step28 = `import SearchJob from '@splunk/search-job';
import * as config from '@splunk/splunk-utils/config';`;

const step31 = `    const job = SearchJob.create(options, {
        app: config.app,
        owner: config.username
    });`;

const step34 = `    const progress = job.getProgress().subscribe({
        next: searchState => {
            console.log(searchState);
        },
        error: err => {
            console.log(err);
        },
        complete: () => {
            console.log("search complete!");
        }
    });`;

const step37 = `    const results = job.getResults().subscribe({
        next: response => {
            console.log(response);
        },
        error: err => {
            console.log(err);
        },
        complete: () => {
            console.log("results retrieved!");
        }
    });`;

const step41 = `index=bcg_sales sourcetype=sales:web`;

const step45 = `const [fields, setFields] = useState([]);
const [events, setEvents] = useState([]);
const [status, setStatus] = useState("");
const [duration, setDuration] = useState("");`;

const step47 = `        setStatus(searchState.content.dispatchState);
        setDuration(searchState.content.runDuration);`;

const step49 = `        setFields(response.fields);
        setEvents(response.results);`;

const step52 = `import JSONTree from '@splunk/react-ui/JSONTree';
import StaticContent from '@splunk/react-ui/StaticContent';`;

const step54 = `    <StaticContent>Status: {status} {duration}</StaticContent>
    <StaticContent>Fields</StaticContent>
    <JSONTree json={fields} expandChildrenOnShiftKey />
    <StaticContent>Events</StaticContent>
    <JSONTree json={events} expandChildrenOnShiftKey />`;

const step57 = `import Table from '@splunk/react-ui/Table';`;

const step59 = `    <Table>
        <Table.Head>
            {fields.map((field,i) => (
                <Table.HeadCell key={'f'+i}>{field.name}</Table.HeadCell>
            ))}
        </Table.Head>
        <Table.Body>
            {events.map((event,i) => (
                <Table.Row key={'r'+i}>
                    {fields.map((field,ii) => (
                        <Table.Cell key={'c'+ii}>{event[field.name]}</Table.Cell>
                    ))}   
                </Table.Row>
            ))}
        </Table.Body>
    </Table>`;

const step62 = `        let filtered = response.fields.filter(f => !f.name.startsWith("_"));
        filtered.push({"name": "_raw"});

        setFields(filtered);`;



    return(<div style={{margin:50}}>
        <Snippet step="10" code={step10} language="language-jsx"/>
        <Snippet step="13" code={step13} language="language-jsx"/>
        <Snippet step="14" code={step14} language="language-jsx"/>
        <Snippet step="16" code={step16} language="language-bash"/>
        <Snippet step="18" code={step18} language="language-jsx"/>
        <Snippet step="20" code={step20} language="language-jsx"/>
        <Snippet step="22" code={step22} language="language-jsx"/>
        <Snippet step="23" code={step23} language="language-jsx"/>
        <Snippet step="26" code={step26} language="language-bash"/>
        <Snippet step="28" code={step28} language="language-jsx"/>
        <Snippet step="31" code={step31} language="language-jsx"/>
        <Snippet step="34" code={step34} language="language-jsx"/>
        <Snippet step="37" code={step37} language="language-jsx"/>
        <Snippet step="41" code={step41} language="language-splunk-spl"/>
        <Snippet step="45" code={step45} language="language-jsx"/>
        <Snippet step="47" code={step47} language="language-jsx"/>
        <Snippet step="49" code={step49} language="language-jsx"/>
        <Snippet step="52" code={step52} language="language-jsx"/>
        <Snippet step="54" code={step54} language="language-jsx"/>
        <Snippet step="57" code={step57} language="language-jsx"/>
        <Snippet step="59" code={step59} language="language-jsx"/>
        <Snippet step="62" code={step62} language="language-jsx"/>
    </div>);

}

export default Lab5;
