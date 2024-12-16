import Snippet from './Snippet';

function Lab4() {



const step3 = `cd ~/labs/lab4
nano post.sh`;

const step4 = `/services/apps/local`;

const step5 = `--data-urlencode "author=Rest Client" \\
--data-urlencode "label=Rest App" \\
--data-urlencode "name=rest_app" \\
--data-urlencode "version=1.0.0"`;

const step20 = `/servicesNS/restclient/-/saved/searches`;

const step24 = `/servicesNS/restclient/search/saved/searches`;

const step25 = `/servicesNS/neil/rest_app/saved/searches`;

const step29 = `/servicesNS/neil/rest_app/saved/searches/Saved_Search_2/acl`;

const step30 = `--data-urlencode "owner=neil" \\
--data-urlencode "perms.read=*" \\
--data-urlencode "sharing=global"`;



    return(<div style={{margin:50}}>
        <Snippet step="3" code={step3} language="language-bash"/>
        <Snippet step="4" code={step4} language="language-uri"/>
        <Snippet step="5" code={step5} language="language-bash"/>
        <Snippet step="20" code={step20} language="language-uri"/>
        <Snippet step="24" code={step24} language="language-uri"/>
        <Snippet step="25" code={step25} language="language-uri"/>
        <Snippet step="29" code={step29} language="language-uri"/>
        <Snippet step="30" code={step30} language="language-bash"/>
    </div>);

}

export default Lab4;
