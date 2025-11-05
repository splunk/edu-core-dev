import React, { useState } from 'react';
import Button from '@splunk/react-ui/Button';
import ColumnLayout from '@splunk/react-ui/ColumnLayout';
import Select from '@splunk/react-ui/Select';
import Text from '@splunk/react-ui/Text';
import JSONTree from '@splunk/react-ui/JSONTree';
import StaticContent from '@splunk/react-ui/StaticContent';

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

                setFields(response.fields);
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
        <StaticContent>Fields</StaticContent>
        <JSONTree json={fields} expandChildrenOnShiftKey />
        <StaticContent>Events</StaticContent>
        <JSONTree json={events} expandChildrenOnShiftKey />
    </>);
};

export default TabSearch;