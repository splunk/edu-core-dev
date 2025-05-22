import Snippet from './Snippet';

function Lab7() {

    return(<div style={{margin:50}}>

<Snippet step="8" language="makefile"
    code={`Buttercup Games vX.Y.Z
MM YYYY
This is the latest release of the Buttercup Games app.`}
/>

<Snippet step="26" language="properties"
    code={`[package]
id = buttercup`}
/>

<Snippet step="28" language="bash"
    code={`cd ~/
sudo pip install splunk-appinspect`}
/>

<Snippet step="29" language="bash"
    code={`splunk-appinspect inspect /opt/splunk/etc/apps/buttercup --mode precert`}
/>

<Snippet step="32" language="bash"
    code={`sudo pip install pyclean

pyclean -v /opt/splunk/etc/apps/buttercup`}
/>

<Snippet step="33" language="bash"
    code={`splunk-appinspect inspect /opt/splunk/etc/apps/buttercup --mode precert`}
/>

<Snippet step="34" language="bash"
    code={`cd /opt/splunk/bin
./splunk package app buttercup -auth {splunk-id}:{password}`}
/>

<Snippet step="36" language="bash"
    code={`./splunk remove app buttercup -auth {splunk-id}:{password}`}
/>

<Snippet step="38" language="bash"
    code={`./splunk install app /opt/splunk/share/splunk/app_packages/buttercup.spl -auth {splunk-id}:{password}`}
/>


    </div>);

}

export default Lab7;
