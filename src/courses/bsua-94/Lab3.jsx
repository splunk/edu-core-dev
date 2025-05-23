import Snippet from './Snippet';

function Lab3() {

    return(<div style={{margin:50}}>


<Snippet step="7" language="jsx"
    code={`import React, { useState } from 'react';

const MyReactComponent = () => {
    return (<>
        Hello World!
    </>);
};

export default MyReactComponent;`}
/>

<Snippet step="11" language="jsx"
    code={`import TabLayout from '@splunk/react-ui/TabLayout';`}
/>

<Snippet step="12" language="jsx"
    code={`        <TabLayout defaultActivePanelId="rest">
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
`}
/>

<Snippet step="16" language="jsx"
    code={`import React, { useState } from 'react';

const TabRest = () => {
    return (<div style={{ margin: 25 }}>
        TAB REST
    </div>);
};

export default TabRest;`}
/>

<Snippet step="19" language="jsx"
    code={`import TabRest from './TabRest';`}
/>

<Snippet step="20" language="jsx"
    code={`<TabRest/>`}
/>

<Snippet step="24" language="jsx"
    code={`    const [body, setBody] = useState('');
    const [method, setMethod] = useState('get');
    const [uri, setUri] = useState('');
    const [data, setData] = useState({});`}
/>

<Snippet step="28" language="jsx"
    code={`    const handleBody = (e, {value}) => { setBody(value); console.log(value); };
    const handleMethod = (e, {value}) => { setMethod(value); console.log(value); };
    const handleUri = (e, {value}) => { setUri(value); console.log(value); };

    const handleSubmit = async (e) => {

    };`}
/>

<Snippet step="33" language="jsx"
    code={`import Button from '@splunk/react-ui/Button';
import ControlGroup from '@splunk/react-ui/ControlGroup';
import JSONTree from '@splunk/react-ui/JSONTree';
import Select from '@splunk/react-ui/Select';
import Text from '@splunk/react-ui/Text';
import TextArea from '@splunk/react-ui/TextArea';`}
/>

<Snippet step="35" language="jsx"
    code={`        <ControlGroup label="URI" labelPosition='left'>
            <Text value={uri} canClear onChange={handleUri}/>
        </ControlGroup>`}
/>

<Snippet step="36" language="jsx"
    code={`        <ControlGroup label="Method" labelPosition='left' controlsLayout='none'>
            <Select value={method} onChange={handleMethod}>
                <Select.Option label="GET" value="get"/>
                <Select.Option label="POST" value="post"/>
                <Select.Option label="DELETE" value="delete"/>
            </Select>
        </ControlGroup>`}
/>

<Snippet step="37" language="jsx"
    code={`        <ControlGroup label="Body" labelPosition='left'>
            <TextArea value={body} onChange={handleBody}/>
        </ControlGroup>`}
/>

<Snippet step="38" language="jsx"
    code={`        <ControlGroup label=" " labelPosition='left' controlsLayout='none'>
            <Button label="Submit" onClick={handleSubmit}/>
        </ControlGroup>`}
/>

<Snippet step="39" language="jsx"
    code={`        <JSONTree json={data} expandChildrenOnShiftKey />`}
/>


    </div>);

}

export default Lab3;
