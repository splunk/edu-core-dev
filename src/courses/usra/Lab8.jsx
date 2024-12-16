import Snippet from './Snippet';

function Lab8() {


const step3 = `cd ~/labs/lab8
nano post.sh`;

const step4 = `/servicesNS/nobody/search/storage/collections/config`;

const step5 = `--data-urlencode "name=employees"`;

const step13 = `/servicesNS/nobody/search/storage/collections/data/employees/batch_save`;

const step24 = `| inputlookup employees_lookup | sort last_name`;

const step29 = `/servicesNS/nobody/search/storage/collections/data/employees?sort=last_name`;

const step37 = `/servicesNS/nobody/search/storage/collections/data/employees/hgeerhart`;

const step38 = `--data-binary "@helga.json"`;



    return(<div style={{margin:50}}>
        <Snippet step="3" code={step3} language="language-bash"/>
        <Snippet step="4" code={step4} language="language-uri"/>
        <Snippet step="5" code={step5} language="language-bash"/>
        <Snippet step="13" code={step13} language="language-uri"/>
        <Snippet step="24" code={step24} language="language-splunk-spl"/>
        <Snippet step="29" code={step29} language="language-uri"/>
        <Snippet step="37" code={step37} language="language-uri"/>
        <Snippet step="38" code={step38} language="language-bash"/>
    </div>);

}

export default Lab8;
