import Snippet from './Snippet';

function Lab7() {



const step6 = `cd /opt/splunk/etc/apps/buttercup`;

const step7 = `nano README.txt`;

const step8 = `Buttercup Games vX.Y.Z
MM YYYY
This is the latest release of the Buttercup Games app.`;

const step10 = `cd metadata
cat local.meta >> default.meta
rm local.meta`;

const step11 = `cd ../local
ll`;

const step12 = `rm app.conf`;

const step13 = `mv *.conf ../default
ll ../default`;

const step14 = `cp -rf data/ ../default
cd ..
rm -rf local`;

const step17 = `nano default/app.conf`;

const step18 = `[package]
id = buttercup`;

const step20 = `sudo pip install splunk-appinspect`;

const step21 = `splunk-appinspect inspect /opt/splunk/etc/apps/buttercup --mode precert`;

const step24 = `cd /opt/splunk/etc/apps/buttercup

rm -rf bin/__pycache__
rm -rf bin/splunklib/__pycache__
rm -rf bin/splunklib/modularinput/__pycache__
rm -rf bin/splunklib/searchcommands/__pycache__`;

const step25 = `splunk-appinspect inspect /opt/splunk/etc/apps/buttercup --mode precert`;

const step26 = `cd /opt/splunk/bin
./splunk package app buttercup -auth {splunk-id}:{password}`;

const step28 = `./splunk remove app buttercup -auth {splunk-id}:{password}`;

const step30 = `./splunk install app /opt/splunk/share/splunk/app_packages/buttercup.spl -auth {splunk-id}:{password}`;



    return(<div style={{margin:50}}>
        <Snippet step="6" code={step6} language="language-bash"/>
        <Snippet step="7" code={step7} language="language-bash"/>
        <Snippet step="8" code={step8} language="language-makefile"/>
        <Snippet step="10" code={step10} language="language-bash"/>
        <Snippet step="11" code={step11} language="language-bash"/>
        <Snippet step="12" code={step12} language="language-bash"/>
        <Snippet step="13" code={step13} language="language-bash"/>
        <Snippet step="14" code={step14} language="language-bash"/>
        <Snippet step="17" code={step17} language="language-bash"/>
        <Snippet step="18" code={step18} language="language-properties"/>
        <Snippet step="20" code={step20} language="language-bash"/>
        <Snippet step="21" code={step21} language="language-bash"/>
        <Snippet step="24" code={step24} language="language-bash"/>
        <Snippet step="25" code={step25} language="language-bash"/>
        <Snippet step="26" code={step26} language="language-bash"/>
        <Snippet step="28" code={step28} language="language-bash"/>
        <Snippet step="30" code={step30} language="language-bash"/>
    </div>);

}

export default Lab7;
