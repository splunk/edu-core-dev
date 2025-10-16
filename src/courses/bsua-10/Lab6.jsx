import Snippet from './Snippet';

function Lab6() {

    return(<div style={{margin:50}}>


<Snippet step="13" language="bash"
    code={`cd ~/code/packages/my-splunk-app
yarn add @types/react`}
/>

<Snippet step="15" language="jsx"
    code={`import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle\`
    body {
        background-color: \${variables.backgroundColorPage};
    }
\`;
`}
/>

<Snippet step="18" language="jsx"
    code={`, GlobalStyles`}
/>

<Snippet step="19" language="jsx"
    code={`                <GlobalStyles/>`}
/>

<Snippet step="20" language="jsx"
    code={`                "pageTitle": "BCG - Home"`}
/>

<Snippet step="28" language="bash"
    code={`cd ~/code/packages/my-page
yarn add @splunk/react-icons`}
/>

<Snippet step="29" language="bash"
    code={`yarn install
yarn run start`}
/>

<Snippet step="31" language="jsx"
    code={`import Magnifier from '@splunk/react-icons/Magnifier';
import Rocket from '@splunk/react-icons/Rocket';`}
/>

<Snippet step="32" language="jsx"
    code={`icon={<Rocket/>}

icon={<Magnifier/>}`}
/>

<Snippet step="35" language="jsx"
    code={`import Globe from '@splunk/react-icons/Globe';
import InformationCircle from '@splunk/react-icons/InformationCircle';
import PlusCircle from '@splunk/react-icons/PlusCircle';
import MinusCircle from '@splunk/react-icons/MinusCircle';`}
/>

<Snippet step="36" language="jsx"
    code={`icon={<InformationCircle/>}

icon={<PlusCircle/>}

icon={<MinusCircle/>}`}
/>

<Snippet step="37" language="jsx"
    code={`icon={<Globe/>}`}
/>

<Snippet step="40" language="jsx"
    code={`import Message from '@splunk/react-ui/Message';`}
/>

<Snippet step="41" language="jsx"
    code={`    const [message, setMessage] = useState({'type':'info','text':'REST API response'});`}
/>

<Snippet step="42" language="jsx"
    code={`        const type = (response.status >= 400) ? "error" : "success";
        setMessage({"type":type, "text":"[" + response.status + "] " + response.statusText});`}
/>


<Snippet step="43" language="jsx"
    code={`            <Message type={message.type}>{message.text}</Message>`}
/>

    </div>);

}

export default Lab6;
