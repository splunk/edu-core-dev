import Snippet from './Snippet';

function Lab4() {

    return(<div style={{margin:50}}>


<Snippet step="3" language="bash"
    code={`cd ~/labs/lab4
nano post.sh`}
/>

<Snippet step="4" language="uri"
    code={`/services/apps/local`}
/>

<Snippet step="5" language="bash"
    code={`--data-urlencode "author=Rest Client" \\
--data-urlencode "label=Rest App" \\
--data-urlencode "name=rest_app" \\
--data-urlencode "version=1.0.0"`}
/>

<Snippet step="20" language="uri"
    code={`/servicesNS/restclient/-/saved/searches`}
/>

<Snippet step="24" language="uri"
    code={`/servicesNS/restclient/search/saved/searches`}
/>

<Snippet step="25" language="uri"
    code={`/servicesNS/neil/rest_app/saved/searches`}
/>

<Snippet step="29" language="uri"
    code={`/servicesNS/neil/rest_app/saved/searches/Saved_Search_2/acl`}
/>

<Snippet step="30" language="bash"
    code={`--data-urlencode "owner=neil" \\
--data-urlencode "perms.read=*" \\
--data-urlencode "sharing=global"`}
/>


    </div>);

}

export default Lab4;
