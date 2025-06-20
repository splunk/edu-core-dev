import Snippet from './Snippet';

function Lab2() {

    return(<div style={{margin:50}}>


<Snippet step="3" language="bash"
    code={`mkdir ~/code
cd ~/code`}
/>

<Snippet step="4" language="bash"
    code={`npm install -g @splunk/create`}
/>

<Snippet step="5" language="bash"
    code={`splunk-create`}
/>

<Snippet step="12" language="json"
    code={`,
"link:app": "lerna run link:app --scope @splunk/buttercup-coffee"`}
/>

<Snippet step="19" language="bash"
    code={`cd ~/code
yarn run setup`}
/>

<Snippet step="20" language="bash"
    code={`yarn run build`}
/>

<Snippet step="21" language="bash"
    code={`cd ~/code
export SPLUNK_HOME=/opt/splunk
yarn run link:app`}
/>

<Snippet step="22" language="bash"
    code={`ls -l /opt/splunk/etc/apps/buttercup-coffee`}
/>

<Snippet step="23" language="bash"
    code={`cd ~/code
yarn run start`}
/>

<Snippet step="25" language="bash"
    code={`/opt/splunk/bin/splunk restart`}
/>

<Snippet step="30" language="bash"
    code={`import layout from '@splunk/react-page/18';`}
/>

<Snippet step="36" language="properties"
    code={`label = Buttercup Coffee Company
description = Supply Chain Management
version = 1.0.0
is_configured = 0`}
/>

<Snippet step="39" language="jsx"
    code={`Buttercup Coffee Company`}
/>

<Snippet step="41" language="bash"
    code={`/opt/splunk/bin/splunk restart`}
/>

<Snippet step="47" language="bash"
    code={`cd ~/code/packages/buttercup-coffee/src/main/resources/splunk
mkdir static
cd static`}
/>

<Snippet step="48" language="bash"
    code={`wget https://splunk.github.io/edu-core-dev/downloads/bccIcons.zip; unzip bccIcons.zip`}
/>

<Snippet step="49" language="bash"
    code={`ll`}
/>

<Snippet step="50" language="bash"
    code={`rm bccIcons.zip`}
/>

    </div>);

}

export default Lab2;
