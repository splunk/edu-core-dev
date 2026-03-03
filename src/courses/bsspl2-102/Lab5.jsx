import Snippet from './Snippet';

function Lab5() {

    return(<div style={{margin:50}}>

<Snippet step="7" language="bash"
    code={`cd /opt/splunk/bin
./splunk download-spl2-modules app buttercup -dest default -auth {splunk-id}
`}
/>

<Snippet step="12" language="makefile"
    code={`Buttercup Games vX.Y.Z
MM YYYY
The SPL2 modules in this app can be installed and used as follows`}
/>

<Snippet step="14" language="bash"
    code={`cd ~/labs
sudo pip install splunk-appinspect`}
/>

<Snippet step="15" language="bash"
    code={`splunk-appinspect inspect /opt/splunk/etc/apps/buttercup --mode precert`}
/>

<Snippet step="29" language="bash"
    code={`splunk-appinspect inspect /opt/splunk/etc/apps/buttercup --mode precert`}
/>

<Snippet step="31" language="bash"
    code={`cd /opt/splunk/bin
./splunk package app buttercup -auth {splunk-id}:{password}`}
/>

<Snippet step="33" language="bash"
    code={`./splunk remove app buttercup -auth {splunk-id}:{password}
./splunk restart`}
/>

<Snippet step="36" language="bash"
    code={`./splunk install app /opt/splunk/share/splunk/app_packages/buttercup.spl -auth {splunk-id}:{password}`}
/>


    </div>);

}

export default Lab5;
