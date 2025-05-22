import Snippet from './Snippet';

function Lab6() {

    return(<div style={{margin:50}}>


<Snippet step="13" language="jsx"
    code={`import { createGlobalStyle } from 'styled-components';
import { variables } from '@splunk/themes';

const GlobalStyles = createGlobalStyle\`
    body {
        background-color: \${variables.backgroundColorPage};
    }
\`;

export { GlobalStyles };`}
/>

<Snippet step="16" language="jsx"
    code={`GlobalStyles`}
/>

<Snippet step="17" language="jsx"
    code={`            <>
                <GlobalStyles/>
                <MyReactComponent />
            </>`}
/>

<Snippet step="18" language="jsx"
    code={`                "pageTitle": "BCG - Home"`}
/>

<Snippet step="26" language="bash"
    code={`cd ~/code/packages/my-react-component
yarn add @splunk/react-icons`}
/>

<Snippet step="28" language="jsx"
    code={`import FileLogs from '@splunk/react-icons/FileLogs';
import Magnifier from '@splunk/react-icons/Magnifier';
import Rocket from '@splunk/react-icons/Rocket';`}
/>

<Snippet step="29" language="jsx"
    code={`icon={<Rocket/>}

icon={<Magnifier/>}

icon={<FileLogs/>}`}
/>

<Snippet step="32" language="jsx"
    code={`import Globe from '@splunk/react-icons/Globe';
import InformationCircle from '@splunk/react-icons/InformationCircle';
import PlusCircle from '@splunk/react-icons/PlusCircle';
import MinusCircle from '@splunk/react-icons/MinusCircle';`}
/>

<Snippet step="33" language="jsx"
    code={`icon={<InformationCircle/>}

icon={<PlusCircle/>}

icon={<MinusCircle/>}`}
/>

<Snippet step="34" language="jsx"
    code={`icon={<Globe/>}`}
/>

<Snippet step="38" language="jsx"
    code={`import React from 'react';
import Message from '@splunk/react-ui/Message';

const TabLogs = ({messages = []}) => {
    return (<div style={{ margin: 25 }}>
        {messages.map((item,i) => (
            <Message key={i} type={item.type}>{item.text}</Message>
        ))}
    </div>);
};

export default TabLogs;`}
/>

<Snippet step="41" language="jsx"
    code={`import TabLogs from './TabLogs';`}
/>

<Snippet step="42" language="jsx"
    code={`<TabLogs/>`}
/>

<Snippet step="46" language="jsx"
    code={`    const [messages, setMessages] = useState([]);

    function addLogMessage(msg) {
        messages.push(msg);
        setMessages(messages);
    }`}
/>

<Snippet step="47" language="jsx"
    code={`messages={messages}`}
/>

<Snippet step="48" language="jsx"
    code={`sendMessage={addLogMessage}`}
/>

<Snippet step="51" language="jsx"
    code={`{sendMessage}`}
/>

<Snippet step="52" language="jsx"
    code={`        const type = (response.status >= 400) ? "error" : "success";
        sendMessage({"type":type, "text":"[" + response.status + "] " + response.url});`}
/>


    </div>);

}

export default Lab6;
