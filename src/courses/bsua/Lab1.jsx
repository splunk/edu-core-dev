import Snippet from './Snippet';

function Lab1() {

   return(<div style={{margin:50}}>
<<<<<<< HEAD
<div>Hello World</div>
=======

>>>>>>> 7a50687e1b77529cbb8621fa334eae1c803265f4
<Snippet step="15" language="bash"
    code={`ll /opt/splunk/etc/apps`}
/>

<Snippet step="16" language="bash"
    code={`/opt/splunk/bin/splunk version
/opt/splunk/bin/splunk show web-port
/opt/splunk/bin/splunk show splunkd-port`}
/>

<Snippet step="17" language="bash"
    code={`node --version
npm --version
yarn --version`}
/>

<Snippet step="19" language="properties"
    code={`cacheEntriesLimit = 0
cacheBytesLimit = 0`}
/>

<Snippet step="21" language="bash"
    code={`/opt/splunk/bin/splunk restart`}
/>

    </div>);

}

export default Lab1;
