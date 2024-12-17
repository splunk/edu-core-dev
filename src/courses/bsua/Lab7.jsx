import Snippet from './Snippet';

function Lab7() {



const step5 = `ls /opt/splunk/etc/apps/my-splunk-app`;

const step6 = `ls -l /opt/splunk/etc/apps/my-splunk-app`;

const step12 = `Buttercup Games vX.Y.Z
MM YYYY
This is the latest release of the Buttercup Games app.`;

const step20 = `sudo pip install splunk-appinspect`;

const step21 = `cd /opt/splunk/etc/apps
splunk-appinspect inspect my-splunk-app --mode precert`;

const step25 = `rm my-splunk-app/static/bcg_icons.zip`;

const step26 = `splunk-appinspect inspect my-splunk-app --mode precert`;

const step27 = `cd /opt/splunk/bin
./splunk package app my-splunk-app -auth {splunk-id}:{password}`;

const step32 = `unlink /opt/splunk/etc/apps/my-splunk-app
ll /opt/splunk/etc/apps`;

const step33 = `/opt/splunk/bin/splunk restart`;

const step35 = `./splunk install app /opt/splunk/share/splunk/app_packages/my-splunk-app.spl -auth {splunk-id}:{password}`;

const step36 = `./splunk restart`;



    return(<div style={{margin:50}}>
        <Snippet step="5" code={step5} language="language-bash"/>
        <Snippet step="6" code={step6} language="language-bash"/>
        <Snippet step="12" code={step12} language="language-makefile"/>
        <Snippet step="20" code={step20} language="language-bash"/>
        <Snippet step="21" code={step21} language="language-bash"/>
        <Snippet step="25" code={step25} language="language-bash"/>
        <Snippet step="26" code={step26} language="language-bash"/>
        <Snippet step="27" code={step27} language="language-bash"/>
        <Snippet step="32" code={step32} language="language-bash"/>
        <Snippet step="33" code={step33} language="language-bash"/>
        <Snippet step="35" code={step35} language="language-bash"/>
        <Snippet step="36" code={step36} language="language-bash"/>
    </div>);

}

export default Lab7;
