import Snippet from './Snippet';

function Lab1() {



const step15 = `ll /opt/splunk/etc/apps`;

const step16 = `/opt/splunk/bin/splunk version
/opt/splunk/bin/splunk show web-port
/opt/splunk/bin/splunk show splunkd-port
`;

const step18 = `cacheEntriesLimit = 0
cacheBytesLimit = 0
`;

const step20 = `/opt/splunk/bin/splunk restart`;



   return(<div style={{margin:50}}>
        <Snippet step="15" code={step15} language="language-bash"/>
        <Snippet step="16" code={step16} language="language-bash"/>
        <Snippet step="18" code={step18} language="language-properties"/>
        <Snippet step="20" code={step20} language="language-bash"/>
    </div>);

}

export default Lab1;
