import Snippet from './Snippet';

function Lab3() {



const step4 = `| rest /services/server/info | transpose`;

const step8 = `| rest /services/server/health/splunkd/details | transpose`;

const step18 = `cd ~/labs/lab3
nano post.sh`;

const step19 = `/servicesNS/nobody/SA-Eventgen/properties/app/ui/is_visible`;

const step20 = `--data-urlencode "value=false"`;

const step29 = `/services/data/indexes`;

const step30 = `--data-urlencode "name=hec_lab"`;

const step37 = `/services/authentication/users`;

const step38 = `--data-urlencode "name=neil" \\
--data-urlencode "password=splunk3du" \\
--data-urlencode "realname=Neil Diaz" \\
--data-urlencode "roles=power"`;


    return(<div style={{margin:50}}>
        <Snippet step="4" code={step4} language="language-splunk-spl"/>
        <Snippet step="8" code={step8} language="language-splunk-spl"/>
        <Snippet step="18" code={step18} language="language-bash"/>
        <Snippet step="19" code={step19} language="language-uri"/>
        <Snippet step="20" code={step20} language="language-bash"/>
        <Snippet step="29" code={step29} language="language-uri"/>
        <Snippet step="30" code={step30} language="language-bash"/>
        <Snippet step="37" code={step37} language="language-uri"/>
        <Snippet step="38" code={step38} language="language-bash"/>
    </div>);

}

export default Lab3;
