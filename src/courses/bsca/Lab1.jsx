import Snippet from './Snippet';

function Lab1() {

   return(<div style={{margin:50}}>


<Snippet step="6" language="bash"
    code={`ll /opt/splunk/etc/apps`}
/>

<Snippet step="7" language="bash"
    code={`/opt/splunk/bin/splunk version
/opt/splunk/bin/splunk show web-port
/opt/splunk/bin/splunk show splunkd-port`}
/>


    </div>);

}

export default Lab1;
