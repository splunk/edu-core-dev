import Snippet from './Snippet';

function Lab1() {



const step6 = `ll /opt/splunk/etc/apps`;

const step7 = `/opt/splunk/bin/splunk version
/opt/splunk/bin/splunk show web-port
/opt/splunk/bin/splunk show splunkd-port`;



   return(<div style={{margin:50}}>
        <Snippet step="6" code={step6} language="language-bash"/>
        <Snippet step="7" code={step7} language="language-bash"/>
    </div>);

}

export default Lab1;
