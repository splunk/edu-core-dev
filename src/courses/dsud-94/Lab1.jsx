import Snippet from './Snippet';

function Lab1() {

   return(<div style={{margin:50}}>

<Snippet step="16" language="properties"
    code={`cacheEntriesLimit = 0
cacheBytesLimit = 0`}
/>

<Snippet step="18" language="bash"
    code={`/opt/splunk/bin/splunk restart`}
/>

<Snippet step="19" language="bash"
    code={`ll /opt/splunk/etc/apps`}
/>

<Snippet step="20" language="bash"
    code={`/opt/splunk/bin/splunk version
/opt/splunk/bin/splunk show web-port`}
/>

<Snippet step="21" language="bash"
    code={`node --version
npm --version
yarn --version`}
/>

    </div>);

}

export default Lab1;