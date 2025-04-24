import Snippet from './Snippet';

function Lab5() {

    return(<div style={{margin:50}}>


<Snippet step="9" language="jsx"
    code={`import React, { useState } from 'react';

const TabSearch = () => {
    return (<div style={{ margin: 25 }}>
        TAB SEARCH
    </div>);
};

export default TabSearch;`}
/>

<Snippet step="12" language="jsx"
    code={`import TabSearch from './TabSearch';`}
/>

<Snippet step="13" language="jsx"
    code={`<TabSearch/>`}
/>

<Snippet step="16" language="bash"
    code={`cd ~/code/packages/my-react-component
yarn add @splunk/react-search
yarn add @splunk/dashboard-utils`}
/>

<Snippet step="18" language="jsx"
    code={`import SearchBar from '@splunk/react-search/components/Bar';
import searchBNF from '@splunk/dashboard-utils/defaultSPLSyntax.json';`}
/>

<Snippet step="20" language="jsx"
    code={`    const [options, setOptions] = useState({
        "earliest": "-7d@d",
        "latest": "now",
        "search": "",
        "syntax": searchBNF
    });`}
/>

<Snippet step="22" language="jsx"
    code={`    const handleOptionsChange = (option) => {
        console.log(option);
        setOptions({...options, ...option});
    };
    
    const handleEventTrigger = (e) => {
    
    };`}
/>

<Snippet step="23" language="jsx"
    code={`        <SearchBar
            options={options}
            onOptionsChange={handleOptionsChange}
            onEventTrigger={handleEventTrigger}
        />`}
/>

<Snippet step="27" language="bash"
    code={`cd ~/code/packages/my-react-component
yarn add @splunk/search-job`}
/>

<Snippet step="29" language="jsx"
    code={`import SearchJob from '@splunk/search-job';
import * as config from '@splunk/splunk-utils/config';`}
/>

<Snippet step="33" language="jsx"
    code={`        const job = SearchJob.create({
            search: options.search,
            earliest_time: options.earliest,
            latest_time: options.latest
        }, {
            app: config.app, owner: config.username
        });`}
/>

<Snippet step="37" language="jsx"
    code={`        const progress = job.getProgress().subscribe({
            next: searchState => {
                console.log("\\njob.getProgress.next");
                console.log(searchState);        
            },
            error: err => {
                console.log(err);
            },
            complete: () => {
                console.log("\\njob.getProgress.complete!");
            }
        });`}
/>

<Snippet step="41" language="jsx"
    code={`        const results = job.getResults().subscribe({
            next: response => {
                console.log("\\njob.getResults.next");
                console.log(response);
            },
            error: err => {
                console.log(err);
            },
            complete: () => {
                console.log("\\njob.getResults.complete!");
            }
        });`}
/>

<Snippet step="47" language="splunk-spl"
    code={`index=bcg_sales sourcetype=sales:web`}
/>

<Snippet step="49" language="jsx"
    code={`    const [fields, setFields] = useState([]);
    const [events, setEvents] = useState([]);
    const [status, setStatus] = useState("");
    const [duration, setDuration] = useState("");`}
/>

<Snippet step="51" language="jsx"
    code={`                setStatus(searchState.content.dispatchState);
                setDuration(searchState.content.runDuration);`}
/>

<Snippet step="53" language="jsx"
    code={`                setFields(response.fields);
                setEvents(response.results);`}
/>

<Snippet step="56" language="jsx"
    code={`import JSONTree from '@splunk/react-ui/JSONTree';
import StaticContent from '@splunk/react-ui/StaticContent';`}
/>

<Snippet step="58" language="jsx"
    code={`        <StaticContent>Status: {status} {duration}</StaticContent>
        <StaticContent>Fields</StaticContent>
        <JSONTree json={fields} expandChildrenOnShiftKey />
        <StaticContent>Events</StaticContent>
        <JSONTree json={events} expandChildrenOnShiftKey />`}
/>

<Snippet step="63" language="jsx"
    code={`import Table from '@splunk/react-ui/Table';`}
/>

<Snippet step="64" language="jsx"
    code={`        <Table>
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
        </Table>`}
/>

<Snippet step="68" language="jsx"
    code={`                let filtered = response.fields.filter(f => !f.name.startsWith("_"));
                filtered.push({"name": "_raw"});

                setFields(filtered);`}
/>


    </div>);

}

export default Lab5;
