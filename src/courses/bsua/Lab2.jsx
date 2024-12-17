import Snippet from './Snippet';

function Lab2() {



const step2 = `mkdir ~/code
cd ~/code`;

const step3 = `npm install -g @splunk/create`;

const step4 = `splunk-create`;

const step14 = `cd ~/code
yarn run setup`;

const step15 = `yarn run build`;

const step16 = `export SPLUNK_HOME=/opt/splunk
cd packages/my-splunk-app
yarn run link:app`;

const step17 = `ls -l /opt/splunk/etc/apps/my-splunk-app`;

const step18 = `cd ~/code
yarn run start`;

const step20 = `/opt/splunk/bin/splunk restart`;

const step32 = `[ui]
label = Buttercup Games

[launcher]
author = <your name>
description = My first SUI app!

[install]
is_configured = 0`;

const step35 = `<title>
    Buttercup Games
</title>`;

const step37 = `/opt/splunk/bin/splunk restart`;

const step44 = `cd ~/code/packages/my-splunk-app/src/main/resources/splunk
mkdir static
cd static`;

const step45 = `wget https://splunk.github.io/edu-core-dev/downloads/bcg_icons.zip
unzip bcg_icons.zip
ll`;

const step46 = `/opt/splunk/bin/splunk restart`;

const step51 = `<label>Home</label>`;

const step53 = `cd ~/code
splunk-create`;

const step59 = `yarn run start`;

const step60 = `/opt/splunk/bin/splunk restart`;



    return(<div style={{margin:50}}>
        <Snippet step="2" code={step2} language="language-bash"/>
        <Snippet step="3" code={step3} language="language-bash"/>
        <Snippet step="4" code={step4} language="language-bash"/>
        <Snippet step="14" code={step14} language="language-bash"/>
        <Snippet step="15" code={step15} language="language-bash"/>
        <Snippet step="16" code={step16} language="language-bash"/>
        <Snippet step="17" code={step17} language="language-bash"/>
        <Snippet step="18" code={step18} language="language-bash"/>
        <Snippet step="20" code={step20} language="language-bash"/>
        <Snippet step="32" code={step32} language="language-properties"/>
        <Snippet step="35" code={step35} language="language-html"/>
        <Snippet step="37" code={step37} language="language-bash"/>
        <Snippet step="44" code={step44} language="language-bash"/>
        <Snippet step="45" code={step45} language="language-bash"/>
        <Snippet step="46" code={step46} language="language-bash"/>
        <Snippet step="51" code={step51} language="language-xml"/>
        <Snippet step="53" code={step53} language="language-bash"/>
        <Snippet step="59" code={step59} language="language-bash"/>
        <Snippet step="60" code={step60} language="language-bash"/>
    </div>);

}

export default Lab2;
