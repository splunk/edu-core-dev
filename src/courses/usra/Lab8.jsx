import Snippet from './Snippet';

function Lab8() {

    return(<div style={{margin:50}}>


<Snippet step="3" language="bash"
    code={`cd ~/labs/lab8
nano post.sh`}
/>

<Snippet step="4" language="uri"
    code={`/servicesNS/nobody/search/storage/collections/config`}
/>

<Snippet step="5" language="bash"
    code={`--data-urlencode "name=employees"`}
/>

<Snippet step="13" language="uri"
    code={`/servicesNS/nobody/search/storage/collections/data/employees/batch_save`}
/>

<Snippet step="24" language="splunk-spl"
    code={`| inputlookup employees_lookup | sort last_name`}
/>

<Snippet step="29" language="uri"
    code={`/servicesNS/nobody/search/storage/collections/data/employees?sort=last_name`}
/>

<Snippet step="37" language="uri"
    code={`/servicesNS/nobody/search/storage/collections/data/employees/hgeerhart`}
/>

<Snippet step="38" language="bash"
    code={`--data-binary "@helga.json"`}
/>


    </div>);

}

export default Lab8;
