import Snippet from './Snippet';

function Lab4() {



const step3 = `cd ~/code/packages/my-react-component
yarn add @splunk/splunk-utils`;

const step6 = `import * as config from '@splunk/splunk-utils/config';
import { createRESTURL } from '@splunk/splunk-utils/url';
import { getDefaultFetchInit } from '@splunk/splunk-utils/fetch';`;

const step8 = `    const url = createRESTURL(uri + "?output_mode=json", {
        app: config.app,
        owner: config.username,
        sharing: 'app'
    });`;

const step9 = `    let fetchInit = getDefaultFetchInit();
    fetchInit.method = method;
    if (method.toLowerCase() === 'post') {
        fetchInit.body = new URLSearchParams(JSON.parse(body));
    }`;

const step10 = `    const response = await fetch(url, fetchInit);
    setData(await response.json());`;

const step17 = `{"name": "myindex"}`;

const step30 = `{"name": "myuser", "password": "mypassword", "realm": "myrealm"}`;



    return(<div style={{margin:50}}>
        <Snippet step="3" code={step3} language="language-bash"/>
        <Snippet step="6" code={step6} language="language-jsx"/>
        <Snippet step="8" code={step8} language="language-jsx"/>
        <Snippet step="9" code={step9} language="language-jsx"/>
        <Snippet step="10" code={step10} language="language-jsx"/>
        <Snippet step="17" code={step17} language="language-json"/>
        <Snippet step="30" code={step30} language="language-json"/>
    </div>);

}

export default Lab4;
