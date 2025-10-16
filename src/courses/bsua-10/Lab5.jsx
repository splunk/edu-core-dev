import Snippet from './Snippet';

function Lab5() {

    return(<div style={{margin:50}}>


<Snippet step="10" language="jsx"
    code={`import React, { useState } from 'react';

const TabSearch = () => {
    return (<>
        TAB SEARCH
    </>);
};

export default TabSearch;`}
/>

<Snippet step="13" language="jsx"
    code={`import TabSearch from './TabSearch';`}
/>

<Snippet step="14" language="jsx"
    code={`<TabSearch/>`}
/>

<Snippet step="18" language="jsx"
    code={`    const [earliest, setEarliest] = useState('-7d@d');
    const [search, setSearch] = useState('');`}
/>

<Snippet step="21" language="jsx"
    code={`    const handleEarliest = (e, {value}) => { setEarliest(value); console.log(value); };
    const handleSearch = (e, {value}) => { setSearch(value); console.log(value); };

    const handleSubmit = (e) => {

    };`}
/>

<Snippet step="25" language="jsx"
    code={`import Button from '@splunk/react-ui/Button';
import ColumnLayout from '@splunk/react-ui/ColumnLayout';
import Select from '@splunk/react-ui/Select';
import Text from '@splunk/react-ui/Text';
`}
/>

<Snippet step="27" language="jsx"
    code={`        <ColumnLayout>
            <ColumnLayout.Row>
                <ColumnLayout.Column span={10}>
                    <Text value={search} canClear onChange={handleSearch}/>
                </ColumnLayout.Column>
                <ColumnLayout.Column span={1}>
                    <Select value={earliest} onChange={handleEarliest} >
                        <Select.Option label="1 hour ago" value="-1h"/>
                        <Select.Option label="24 hours ago" value="-24h"/>
                        <Select.Option label="7 days ago" value="-7d@d"/>
                    </Select>
                </ColumnLayout.Column>
                <ColumnLayout.Column span={1}>
                    <Button label="Search!" appearance="primary" onClick={handleSubmit}/>
                </ColumnLayout.Column>
            </ColumnLayout.Row>
        </ColumnLayout>`}
/>

<Snippet step="31" language="bash"
    code={`cd ~/code/packages/my-page
yarn add @splunk/search-job`}
/>

<Snippet step="33" language="jsx"
    code={`import SearchJob from '@splunk/search-job';
import * as config from '@splunk/splunk-utils/config';`}
/>

<Snippet step="37" language="jsx"
    code={`        const job = SearchJob.create({
            search: search,
            earliest_time: earliest,
            latest_time: 'now'
        }, {
            app: config.app,
            owner: config.username
        });`}
/>

<Snippet step="41" language="jsx"
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

<Snippet step="45" language="jsx"
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

<Snippet step="49" language="splunk-spl"
    code={`index=bcg_sales sourcetype=sales:web`}
/>

<Snippet step="53" language="jsx"
    code={`    const [fields, setFields] = useState([]);
    const [events, setEvents] = useState([]);
    const [status, setStatus] = useState("");
    const [duration, setDuration] = useState("");`}
/>

<Snippet step="54" language="jsx"
    code={`                setStatus(searchState.content.dispatchState);
                setDuration(searchState.content.runDuration);`}
/>

<Snippet step="55" language="jsx"
    code={`                setFields(response.fields);
                setEvents(response.results);`}
/>

<Snippet step="58" language="jsx"
    code={`import JSONTree from '@splunk/react-ui/JSONTree';
import StaticContent from '@splunk/react-ui/StaticContent';`}
/>

<Snippet step="60" language="jsx"
    code={`        <StaticContent>Status: {status} {duration}</StaticContent>
        <StaticContent>Fields</StaticContent>
        <JSONTree json={fields} expandChildrenOnShiftKey />
        <StaticContent>Events</StaticContent>
        <JSONTree json={events} expandChildrenOnShiftKey />`}
/>

<Snippet step="65" language="jsx"
    code={`import Table from '@splunk/react-ui/Table';`}
/>

<Snippet step="66" language="jsx"
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

<Snippet step="70" language="jsx"
    code={`                let filtered = response.fields.filter(f => !f.name.startsWith("_"));
                filtered.push({"name": "_raw"});

                setFields(filtered);`}
/>


    </div>);

}

export default Lab5;
