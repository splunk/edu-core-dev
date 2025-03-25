import Snippet from './Snippet';

function Lab7() {

    return(<div style={{margin:50}}>


<Snippet step="14" language="bash"
    code={`cd ~/labs/lab7
cat single.json`}
/>

<Snippet step="18" language="uri"
    code={`:8088/services/collector`}
/>

<Snippet step="19" language="bash"
    code={`-H "Authorization: Splunk {hec token}"`}
/>

<Snippet step="20" language="bash"
    code={`-H "X-Splunk-Request-Channel: 4b72a336-3ce0-4fdb-ad02-9f933150fe6e"`}
/>

<Snippet step="29" language="bash"
    code={`--data-binary "@multi.json"`}
/>

<Snippet step="37" language="uri"
    code={`:8088/services/collector/ack`}
/>

<Snippet step="38" language="bash"
    code={`-H "Authorization: Splunk {hec token}"`}
/>

<Snippet step="39" language="bash"
    code={`-H "X-Splunk-Request-Channel: 4b72a336-3ce0-4fdb-ad02-9f933150fe6e"`}
/>

<Snippet step="40" language="bash"
    code={`-d '{"acks":[0,1,2,3,4,5,6]}'`}
/>

<Snippet step="46" language="splunk-spl"
    code={`index=hec_lab source=single`}
/>

<Snippet step="47" language="splunk-spl"
    code={`index=hec_lab source=multi`}
/>


    </div>);

}

export default Lab7;
