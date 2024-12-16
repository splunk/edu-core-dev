import Snippet from './Snippet';

function Lab7() {



const step14 = `cd ~/labs/lab7
cat single.json`;

const step18 = `:8088/services/collector`;

const step19 = `-H "Authorization: Splunk {hec token}"`;

const step20 = `-H "X-Splunk-Request-Channel: 4b72a336-3ce0-4fdb-ad02-9f933150fe6e"`;

const step29 = `--data-binary "@multi.json"`;

const step37 = `:8088/services/collector/ack`;

const step38 = `-H "Authorization: Splunk {hec token}"`;

const step39 = `-H "X-Splunk-Request-Channel: 4b72a336-3ce0-4fdb-ad02-9f933150fe6e"`;

const step40 = `-d '{"acks":[0,1,2,3,4,5,6]}'`;

const step46 = `index=hec_lab source=single`;

const step47 = `index=hec_lab source=multi`;



    return(<div style={{margin:50}}>
        <Snippet step="14" code={step14} language="language-bash"/>
        <Snippet step="18" code={step18} language="language-uri"/>
        <Snippet step="19" code={step19} language="language-bash"/>
        <Snippet step="20" code={step20} language="language-bash"/>
        <Snippet step="29" code={step29} language="language-bash"/>
        <Snippet step="37" code={step37} language="language-uri"/>
        <Snippet step="38" code={step38} language="language-bash"/>
        <Snippet step="39" code={step39} language="language-bash"/>
        <Snippet step="40" code={step40} language="language-bash"/>
        <Snippet step="46" code={step46} language="language-splunk-spl"/>
        <Snippet step="47" code={step47} language="language-splunk-spl"/>
    </div>);

}

export default Lab7;
