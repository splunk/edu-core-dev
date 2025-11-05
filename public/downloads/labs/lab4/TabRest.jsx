import React, { useState } from 'react';
import Button from '@splunk/react-ui/Button';
import ControlGroup from '@splunk/react-ui/ControlGroup';
import JSONTree from '@splunk/react-ui/JSONTree';
import Select from '@splunk/react-ui/Select';
import Text from '@splunk/react-ui/Text';
import TextArea from '@splunk/react-ui/TextArea';

import * as config from '@splunk/splunk-utils/config';
import { createRESTURL } from '@splunk/splunk-utils/url';
import { getDefaultFetchInit } from '@splunk/splunk-utils/fetch';

const TabRest = () => {
    const [body, setBody] = useState('');
    const [method, setMethod] = useState('get');
    const [uri, setUri] = useState('');
    const [data, setData] = useState({});

    const handleBody = (e, {value}) => { setBody(value); console.log(value); };
    const handleMethod = (e, {value}) => { setMethod(value); console.log(value); };
    const handleUri = (e, {value}) => { setUri(value); console.log(value); };

    const handleSubmit = async (e) => {
        const url = createRESTURL(uri + "?output_mode=json", {
            app: config.app,
            owner: config.username
        });

        let fetchInit = getDefaultFetchInit();
        fetchInit.method = method;
        if (method.toLowerCase() === 'post') {
            fetchInit.body = new URLSearchParams(JSON.parse(body));
        }

        const response = await fetch(url, fetchInit);
        setData(await response.json());
    };

    return (<>
        <ControlGroup label="URI" labelPosition='left'>
            <Text value={uri} canClear onChange={handleUri}/>
        </ControlGroup>
        <ControlGroup label="Method" labelPosition='left' controlsLayout='none'>
            <Select value={method} onChange={handleMethod}>
                <Select.Option label="GET" value="get"/>
                <Select.Option label="POST" value="post"/>
                <Select.Option label="DELETE" value="delete"/>
            </Select>
        </ControlGroup>
        <ControlGroup label="Body" labelPosition='left'>
            <TextArea value={body} onChange={handleBody}/>
        </ControlGroup>
        <ControlGroup label=" " labelPosition='left' controlsLayout='none'>
            <Button label="Submit" onClick={handleSubmit}/>
        </ControlGroup>
        <JSONTree json={data} expandChildrenOnShiftKey />
    </>);
};

export default TabRest;