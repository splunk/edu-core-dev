import React, { useState } from 'react';
import Button from '@splunk/react-ui/Button';
import ColumnLayout from '@splunk/react-ui/ColumnLayout';
import Select from '@splunk/react-ui/Select';
import Text from '@splunk/react-ui/Text';
import StaticContent from '@splunk/react-ui/StaticContent';
import Table from '@splunk/react-ui/Table';

import SearchJob from '@splunk/search-job';
import * as config from '@splunk/splunk-utils/config';

const TabSearch = () => {
    const [earliest, setEarliest] = useState('-7d@d');
    const [search, setSearch] = useState('index=bcg_sales sourcetype=sales:web');
    const [fields, setFields] = useState([]);
    const [events, setEvents] = useState([]);
    const [status, setStatus] = useState("");
    const [duration, setDuration] = useState("");

    const handleEarliest = (e, {value}) => { setEarliest(value); console.log(value); };
    const handleSearch = (e, {value}) => { setSearch(value); console.log(value); };

    const handleSubmit = (e) => {
        const job = SearchJob.create({
            search: search,
            earliest_time: earliest,
            latest_time: 'now'
        }, {
            app: config.app,
            owner: config.username
        });

        const progress = job.getProgress().subscribe({
            next: searchState => {
                console.log("\njob.getProgress.next");
                console.log(searchState);
                
                setStatus(searchState.content.dispatchState);
                setDuration(searchState.content.runDuration);
            },
            error: err => {
                console.log(err);
            },
            complete: () => {
                console.log("\njob.getProgress.complete!");
            }
        });

        const results = job.getResults().subscribe({
            next: response => {
                console.log("\njob.getResults.next");
                console.log(response);

                let filtered = response.fields.filter(f => !f.name.startsWith("_"));
                filtered.push({"name": "_raw"});

                setFields(filtered);
                setEvents(response.results);
            },
            error: err => {
                console.log(err);
            },
            complete: () => {
                console.log("\njob.getResults.complete!");
            }
        });
    };

    return (<>
        <ColumnLayout>
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
        </ColumnLayout>
        <StaticContent>Status: {status} {duration}</StaticContent>
        <Table>
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
        </Table>
    </>);
};

export default TabSearch;