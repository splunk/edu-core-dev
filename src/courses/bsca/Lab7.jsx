import Snippet from './Snippet';

function Lab7() {

    return(<div style={{margin:50}}>


<Snippet step="6" language="bash"
    code={`cd /opt/splunk/etc/apps/buttercup`}
/>

<Snippet step="7" language="bash"
    code={`nano README.txt`}
/>

<Snippet step="8" language="makefile"
    code={`Buttercup Games vX.Y.Z
MM YYYY
This is the latest release of the Buttercup Games app.`}
/>

<Snippet step="10" language="bash"
    code={`cd metadata
cat local.meta >> default.meta
rm local.meta`}
/>

<Snippet step="11" language="bash"
    code={`cd ../local
ll`}
/>

<Snippet step="12" language="bash"
    code={`rm app.conf`}
/>

<Snippet step="13" language="bash"
    code={`mv *.conf ../default
ll ../default`}
/>

<Snippet step="14" language="bash"
    code={`cp -rf data/ ../default
cd ..
rm -rf local`}
/>

<Snippet step="17" language="bash"
    code={`nano default/app.conf`}
/>

<Snippet step="18" language="properties"
    code={`[package]
id = buttercup`}
/>

<Snippet step="20" language="bash"
    code={`sudo pip install splunk-appinspect`}
/>

<Snippet step="21" language="bash"
    code={`splunk-appinspect inspect /opt/splunk/etc/apps/buttercup --mode precert`}
/>

<Snippet step="24" language="bash"
    code={`cd /opt/splunk/etc/apps/buttercup

rm -rf bin/__pycache__
rm -rf bin/splunklib/__pycache__
rm -rf bin/splunklib/modularinput/__pycache__
rm -rf bin/splunklib/searchcommands/__pycache__`}
/>

<Snippet step="25" language="bash"
    code={`splunk-appinspect inspect /opt/splunk/etc/apps/buttercup --mode precert`}
/>

<Snippet step="26" language="bash"
    code={`cd /opt/splunk/bin
./splunk package app buttercup -auth {splunk-id}:{password}`}
/>

<Snippet step="28" language="bash"
    code={`./splunk remove app buttercup -auth {splunk-id}:{password}`}
/>

<Snippet step="30" language="bash"
    code={`./splunk install app /opt/splunk/share/splunk/app_packages/buttercup.spl -auth {splunk-id}:{password}`}
/>


    </div>);

}

export default Lab7;
