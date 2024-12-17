import Snippet from './Snippet';

function Lab6() {



const step13 = `document.body.style.background = (theme === "light") ? "#FFFFFF" : "#181D21";`;

const step22 = `cd ~/code/packages/my-react-component
yarn add @splunk/react-icons`;

const step24 = `import FileLogs from '@splunk/react-icons/FileLogs';
import Magnifier from '@splunk/react-icons/Magnifier';
import Rocket from '@splunk/react-icons/Rocket';`;

const step26 = `icon={<Rocket/>}

icon={<Magnifier/>}

icon={<FileLogs/>}`;

const step29 = `import Globe from '@splunk/react-icons/Globe';
import InformationCircle from '@splunk/react-icons/InformationCircle';
import PlusCircle from '@splunk/react-icons/PlusCircle';
import MinusCircle from '@splunk/react-icons/MinusCircle';`;

const step31 = `icon={<InformationCircle/>}

icon={<PlusCircle/>}

icon={<MinusCircle/>}

icon={<Globe/>}`;

const step35 = `import React from 'react';
import Message from '@splunk/react-ui/Message';

const TabLogs = ({messages}) => {
    return (<div style={{ margin: 25 }}>
        {messages.map((item,i) => (
            <Message key={i} type={item.type}>{item.text}</Message>
        ))}
    </div>);
};

export default TabLogs;`;

const step38 = `import TabLogs from './TabLogs';`;

const step39 = `<TabLogs/>`;

const step42 = `    const [messages, setMessages] = useState([]);

    function logMessage(msg) {
        messages.push(msg);
        setMessages(messages);
    }`;

const step43 = `messages={messages}`;

const step45 = `logMessage={logMessage}`;

const step48 = `{logMessage}`;

const step50 = `    const type = (response.status >= 400) ? "error" : "success";
    logMessage({ "type": type, "text": "[" + response.status + "] " + response.url});`;



    return(<div style={{margin:50}}>
        <Snippet step="13" code={step13} language="language-jsx"/>
        <Snippet step="22" code={step22} language="language-bash"/>
        <Snippet step="24" code={step24} language="language-jsx"/>
        <Snippet step="26" code={step26} language="language-jsx"/>
        <Snippet step="29" code={step29} language="language-jsx"/>
        <Snippet step="31" code={step31} language="language-jsx"/>
        <Snippet step="35" code={step35} language="language-jsx"/>
        <Snippet step="38" code={step38} language="language-jsx"/>
        <Snippet step="39" code={step39} language="language-jsx"/>
        <Snippet step="42" code={step42} language="language-jsx"/>
        <Snippet step="43" code={step43} language="language-jsx"/>
        <Snippet step="45" code={step45} language="language-jsx"/>
        <Snippet step="48" code={step48} language="language-jsx"/>
        <Snippet step="50" code={step50} language="language-jsx"/>
    </div>);

}

export default Lab6;
