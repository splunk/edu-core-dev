import Snippet from './Snippet';

function Lab1() {

   return(<div style={{margin:50}}>


<Snippet step="15" language="bash"
    code={`ll /opt/splunk/etc/apps`}
/>

<Snippet step="16" language="bash"
    code={`/opt/splunk/bin/splunk version
/opt/splunk/bin/splunk show web-port
/opt/splunk/bin/splunk show splunkd-port`}
/>

<Snippet step="18" language="properties"
    code={`cacheEntriesLimit = 0
cacheBytesLimit = 0`}
/>

<Snippet step="20" language="bash"
    code={`/opt/splunk/bin/splunk restart`}
/>


    </div>);

}

export default Lab1;
