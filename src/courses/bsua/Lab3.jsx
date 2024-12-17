import Snippet from './Snippet';

function Lab3() {



const step7 = `import React, { useState } from 'react';

const MyReactComponent = () => {
    return (<div>
        Hello World!
    </div>);
};

export default MyReactComponent;`;

const step10 = `import TabLayout from '@splunk/react-ui/TabLayout';`;

const step11 = `    <TabLayout defaultActivePanelId="rest">
        <TabLayout.Panel label="REST" panelId="rest">
            REST Placeholder
        </TabLayout.Panel>
        <TabLayout.Panel label="Search" panelId="search">
            SEARCH Placeholder
        </TabLayout.Panel>
        <TabLayout.Panel label="Logs" panelId="logs">
            LOGS Placeholder
        </TabLayout.Panel>
    </TabLayout>
`;

const step15 = `import React, { useState } from 'react';

const TabRest = () => {
    return (<div style={{ margin: 25 }}>
        TAB REST
    </div>);
};

export default TabRest;`;

const step18 = `import TabRest from './TabRest';`;

const step19 = `<TabRest/>`;

const step23  = `    const [body, setBody] = useState('');
    const [method, setMethod] = useState('get');
    const [uri, setUri] = useState('');
    const [data, setData] = useState({});`;

const step27 = `const handleBody = (e, {value}) => { setBody(value); };
const handleMethod = (e, {value}) => { setMethod(value); };
const handleUri = (e, {value}) => { setUri(value); };

async function handleSubmit () {

}`;

const step30 = `import Button from '@splunk/react-ui/Button';
import ControlGroup from '@splunk/react-ui/ControlGroup';
import JSONTree from '@splunk/react-ui/JSONTree';
import Select from '@splunk/react-ui/Select';
import Text from '@splunk/react-ui/Text';
import TextArea from '@splunk/react-ui/TextArea';`;

const step32 = `    <ControlGroup label="URI">
        <Text value={uri} canClear onChange={handleUri}/>
    </ControlGroup>`;

const step33 = `    <ControlGroup label="Method" controlsLayout='none'>
        <Select value={method} onChange={handleMethod}>
            <Select.Option label="GET" value="get"/>
            <Select.Option label="POST" value="post"/>
            <Select.Option label="DELETE" value="delete"/>
        </Select>
    </ControlGroup>`;

const step34 = `    <ControlGroup label="Body">
        <TextArea value={body} onChange={handleBody}/>
    </ControlGroup>`;

const step35 = `    <ControlGroup label=" " controlsLayout='none'>
        <Button label="Submit" onClick={handleSubmit}/>
    </ControlGroup>`;

const step36 = `    <JSONTree json={data} expandChildrenOnShiftKey />`;



    return(<div style={{margin:50}}>
        <Snippet step="7" code={step7} language="language-jsx"/>
        <Snippet step="10" code={step10} language="language-jsx"/>
        <Snippet step="11" code={step11} language="language-jsx"/>
        <Snippet step="15" code={step15} language="language-jsx"/>
        <Snippet step="18" code={step18} language="language-jsx"/>
        <Snippet step="19" code={step19} language="language-jsx"/>
        <Snippet step="23" code={step23} language="language-jsx"/>
        <Snippet step="27" code={step27} language="language-jsx"/>
        <Snippet step="30" code={step30} language="language-jsx"/>
        <Snippet step="32" code={step32} language="language-jsx"/>
        <Snippet step="33" code={step33} language="language-jsx"/>
        <Snippet step="34" code={step34} language="language-jsx"/>
        <Snippet step="35" code={step35} language="language-jsx"/>
        <Snippet step="36" code={step36} language="language-jsx"/>
    </div>);

}

export default Lab3;
