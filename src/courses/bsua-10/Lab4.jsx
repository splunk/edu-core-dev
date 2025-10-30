import Snippet from './Snippet';

function Lab4() {

    return(<div style={{margin:50}}>


<Snippet step="5" language="jsx"
    code={`import * as config from '@splunk/splunk-utils/config';
import { createRESTURL } from '@splunk/splunk-utils/url';
import { getDefaultFetchInit } from '@splunk/splunk-utils/fetch';`}
/>

<Snippet step="9" language="jsx"
    code={`        const url = createRESTURL(uri + "?output_mode=json", {
            app: config.app,
            owner: config.username
        });`}
/>

<Snippet step="13" language="jsx"
    code={`        let fetchInit = getDefaultFetchInit();
        fetchInit.method = method;
        if (method.toLowerCase() === 'post') {
            fetchInit.body = new URLSearchParams(JSON.parse(body));
        }`}
/>

<Snippet step="15" language="jsx"
    code={`        const response = await fetch(url, fetchInit);
        setData(await response.json());`}
/>

<Snippet step="22" language="uri"
    code={`data/indexes`}
/>

<Snippet step="24" language="json"
    code={`data/indexes
    
{"name": "myindex"}`}
/>

<Snippet step="27" language="uri"
    code={`data/indexes/myindex`}
/>

<Snippet step="35" language="uri"
    code={`storage/passwords`}
/>

<Snippet step="37" language="json"
    code={`storage/passwords
    
{"name": "myuser", "password": "mypassword", "realm": "myrealm"}`}
/>

<Snippet step="43" language="uri"
    code={`storage/passwords/myrealm:myuser`}
/>

    </div>);

}

export default Lab4;
