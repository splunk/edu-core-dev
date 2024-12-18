import Snippet from './Snippet';

function Lab7() {

    return(<div style={{margin:50}}>


<Snippet step="5" language="bash"
    code={`ls /opt/splunk/etc/apps/my-splunk-app`}
/>

<Snippet step="6" language="bash"
    code={`ls -l /opt/splunk/etc/apps/my-splunk-app`}
/>

<Snippet step="12" language="makefile"
    code={`Buttercup Games vX.Y.Z
MM YYYY
This is the latest release of the Buttercup Games app.`}
/>

<Snippet step="20" language="bash"
    code={`sudo pip install splunk-appinspect`}
/>

<Snippet step="21" language="bash"
    code={`cd /opt/splunk/etc/apps
splunk-appinspect inspect my-splunk-app --mode precert`}
/>

<Snippet step="25" language="bash"
    code={`rm my-splunk-app/static/bcg_icons.zip`}
/>

<Snippet step="26" language="bash"
    code={`splunk-appinspect inspect my-splunk-app --mode precert`}
/>

<Snippet step="27" language="bash"
    code={`cd /opt/splunk/bin
./splunk package app my-splunk-app -auth {splunk-id}:{password}`}
/>

<Snippet step="32" language="bash"
    code={`unlink /opt/splunk/etc/apps/my-splunk-app
ll /opt/splunk/etc/apps`}
/>

<Snippet step="33" language="bash"
    code={`/opt/splunk/bin/splunk restart`}
/>

<Snippet step="35" language="bash"
    code={`./splunk install app /opt/splunk/share/splunk/app_packages/my-splunk-app.spl -auth {splunk-id}:{password}`}
/>

<Snippet step="36" language="bash"
    code={`./splunk restart`}
/>

    </div>);

}

export default Lab7;
