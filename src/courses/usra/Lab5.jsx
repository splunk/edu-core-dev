import Snippet from './Snippet';

function Lab5() {


const step7 = `cd ~/labs/lab5
nano post.sh`;

const step8 = `/services/search/jobs`;

const step9 = `--data-urlencode "search=search index=bcg_sales sourcetype=sales:web" \\
--data-urlencode "earliest_time=-7d@d" \\
--data-urlencode "latest_time=now"`;

const step16 = `/services/search/jobs/{search_id}`;

const step23 = `/services/search/jobs/{search_id}/results`;

const step30 = `/services/search/jobs/{search_id}/results?offset=150&count=50`;

const step37 = `--data-urlencode "exec_mode=oneshot"`;


    return(<div style={{margin:50}}>
        <Snippet step="7" code={step7} language="language-bash"/>
        <Snippet step="8" code={step8} language="language-uri"/>
        <Snippet step="9" code={step9} language="language-bash"/>
        <Snippet step="16" code={step16} language="language-uri"/>
        <Snippet step="23" code={step23} language="language-uri"/>
        <Snippet step="30" code={step30} language="language-uri"/>
        <Snippet step="37" code={step37} language="language-bash"/>
    </div>);

}

export default Lab5;
