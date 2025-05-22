import Snippet from './Snippet';

function Lab2() {

    return(<div style={{margin:50}}>


<Snippet step="2" language="bash"
    code={`mkdir ~/code
cd ~/code`}
/>

<Snippet step="3" language="bash"
    code={`npm install -g @splunk/create`}
/>

<Snippet step="4" language="bash"
    code={`splunk-create`}
/>

<Snippet step="14" language="bash"
    code={`cd ~/code
yarn run setup`}
/>

<Snippet step="15" language="bash"
    code={`yarn run build`}
/>

<Snippet step="16" language="bash"
    code={`export SPLUNK_HOME=/opt/splunk
cd packages/my-splunk-app
yarn run link:app`}
/>

<Snippet step="17" language="bash"
    code={`ls -l /opt/splunk/etc/apps/my-splunk-app`}
/>

<Snippet step="18" language="bash"
    code={`cd ~/code
yarn run start`}
/>

<Snippet step="20" language="bash"
    code={`/opt/splunk/bin/splunk restart`}
/>

<Snippet step="33" language="properties"
    code={`[ui]
label = Buttercup Games

[launcher]
author = <your name>
description = My SUI app!

[install]
is_configured = 0`}
/>

<Snippet step="41" language="bash"
    code={`cd ~/code/packages/my-splunk-app/src/main/resources/splunk
mkdir static
cd static`}
/>

<Snippet step="42" language="bash"
    code={`wget https://splunk.github.io/edu-core-dev/downloads/bcg_icons.zip
unzip bcg_icons.zip
ll`}
/>

<Snippet step="50" language="bash"
    code={`cd ~/code
splunk-create`}
/>

<Snippet step="55" language="bash"
    code={`yarn run start`}
/>

    </div>);

}

export default Lab2;
