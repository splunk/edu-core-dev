import Snippet from './Snippet';

function Lab3() {

    return(<div style={{margin:50}}>


<Snippet step="4" language="splunk-spl"
    code={`| rest /services/server/info | transpose`}
/>

<Snippet step="8" language="splunk-spl"
    code={`| rest /services/server/health/splunkd/details | transpose`}
/>

<Snippet step="18" language="bash"
    code={`cd ~/labs/lab3
nano post.sh`}
/>

<Snippet step="19" language="uri"
    code={`/servicesNS/nobody/SA-Eventgen/properties/app/ui/is_visible`}
/>

<Snippet step="20" language="bash"
    code={`--data-urlencode "value=false"`}
/>

<Snippet step="29" language="uri"
    code={`/services/data/indexes`}
/>

<Snippet step="30" language="bash"
    code={`--data-urlencode "name=hec_lab"`}
/>

<Snippet step="37" language="uri"
    code={`/services/authentication/users`}
/>

<Snippet step="38" language="bash"
    code={`--data-urlencode "name=neil" \\
--data-urlencode "password=splunk3du" \\
--data-urlencode "realname=Neil Diaz" \\
--data-urlencode "roles=power"`}
/>


    </div>);

}

export default Lab3;
