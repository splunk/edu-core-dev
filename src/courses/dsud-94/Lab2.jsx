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

<Snippet step="20" language="bash"
    code={`cd ~/code
yarn add @splunk/react-ui -W
yarn add @splunk/themes -W`}
/>

<Snippet step="24" language="bash"
    code={`cd ~/code
yarn run setup`}
/>

<Snippet step="25" language="bash"
    code={`yarn run build`}
/>

<Snippet step="26" language="bash"
    code={`cd ~/code
export SPLUNK_HOME=/opt/splunk
yarn run link:app`}
/>

<Snippet step="27" language="bash"
    code={`ls -l /opt/splunk/etc/apps/buttercup-coffee`}
/>

<Snippet step="28" language="bash"
    code={`cd ~/code
yarn run start`}
/>

<Snippet step="30" language="bash"
    code={`/opt/splunk/bin/splunk restart`}
/>

<Snippet step="40" language="properties"
    code={`[ui]
label = Buttercup Coffee Company

[launcher]
author = <your name>
description = Supply Chain Management
version = 1.0.0

[install]
is_configured = 0`}
/>

<Snippet step="43" language="jsx"
    code={`Buttercup Coffee Company`}
/>

<Snippet step="45" language="bash"
    code={`/opt/splunk/bin/splunk restart`}
/>

<Snippet step="51" language="bash"
    code={`cd ~/code/packages/buttercup-coffee/src/main/resources/splunk
mkdir static
cd static`}
/>

<Snippet step="52" language="bash"
    code={`wget https://splunk.github.io/edu-core-dev/downloads/bccIcons.zip; unzip bccIcons.zip`}
/>

<Snippet step="53" language="bash"
    code={`ll`}
/>

<Snippet step="54" language="bash"
    code={`rm bccIcons.zip`}
/>

    </div>);

}

export default Lab2;
