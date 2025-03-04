import Snippet from './Snippet';

function Lab4() {

    return(<div style={{margin:50}}>

<Snippet step="3" language="bash"
    code={`cd ~/code/packages/my-react-component
yarn add @splunk/splunk-utils`}
/>

<Snippet step="6" language="jsx"
    code={`import * as config from '@splunk/splunk-utils/config';
import { createRESTURL } from '@splunk/splunk-utils/url';
import { getDefaultFetchInit } from '@splunk/splunk-utils/fetch';`}
/>

<Snippet step="10" language="jsx"
    code={`        const url = createRESTURL(uri + "?output_mode=json", {
            app: config.app,
            owner: config.username
        });`}
/>

<Snippet step="14" language="jsx"
    code={`        let fetchInit = getDefaultFetchInit();
        fetchInit.method = method;
        if (method.toLowerCase() === 'post') {
            fetchInit.body = new URLSearchParams(JSON.parse(body));
        }`}
/>

<Snippet step="16" language="jsx"
    code={`        const response = await fetch(url, fetchInit);
        setData(await response.json());`}
/>

<Snippet step="25" language="json"
    code={`{"name": "myindex"}`}
/>

<Snippet step="38" language="json"
    code={`{"name": "myuser", "password": "mypassword", "realm": "myrealm"}`}
/>


    </div>);

}

export default Lab4;
