import Snippet from './Snippet';

function Lab6() {

    return(<div style={{margin:50}}>


<Snippet step="11" language="jsx"
    code={`document.body.style.background = (theme === "light") ? "#FFFFFF" : "#181D21";`}
/>

<Snippet step="20" language="bash"
    code={`cd ~/code/packages/my-react-component
yarn add @splunk/react-icons`}
/>

<Snippet step="22" language="jsx"
    code={`import FileLogs from '@splunk/react-icons/FileLogs';
import Magnifier from '@splunk/react-icons/Magnifier';
import Rocket from '@splunk/react-icons/Rocket';`}
/>

<Snippet step="24" language="jsx"
    code={`icon={<Rocket/>}

icon={<Magnifier/>}

icon={<FileLogs/>}`}
/>

<Snippet step="27" language="jsx"
    code={`import Globe from '@splunk/react-icons/Globe';
import InformationCircle from '@splunk/react-icons/InformationCircle';
import PlusCircle from '@splunk/react-icons/PlusCircle';
import MinusCircle from '@splunk/react-icons/MinusCircle';`}
/>

<Snippet step="29" language="jsx"
    code={`icon={<InformationCircle/>}

icon={<PlusCircle/>}

icon={<MinusCircle/>}

icon={<Globe/>}`}
/>

<Snippet step="33" language="jsx"
    code={`import React from 'react';
import Message from '@splunk/react-ui/Message';

const TabLogs = ({messages}) => {
    return (<div style={{ margin: 25 }}>
        {messages.map((item,i) => (
            <Message key={i} type={item.type}>{item.text}</Message>
        ))}
    </div>);
};

export default TabLogs;`}
/>

<Snippet step="36" language="jsx"
    code={`import TabLogs from './TabLogs';`}
/>

<Snippet step="37" language="jsx"
    code={`<TabLogs/>`}
/>

<Snippet step="40" language="jsx"
    code={`    const [messages, setMessages] = useState([]);

    function logMessage(msg) {
        messages.push(msg);
        setMessages(messages);
    }`}
/>

<Snippet step="41" language="jsx"
    code={`messages={messages}`}
/>

<Snippet step="43" language="jsx"
    code={`logMessage={logMessage}`}
/>

<Snippet step="46" language="jsx"
    code={`{logMessage}`}
/>

<Snippet step="48" language="jsx"
    code={`    const type = (response.status >= 400) ? "error" : "success";
    logMessage({ "type": type, "text": "[" + response.status + "] " + response.url});`}
/>


    </div>);

}

export default Lab6;
