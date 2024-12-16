import Snippet from './Snippet';

function Lab6() {



const step3 = `cd ~/labs/lab6
nano post.sh`;

const step4 = `/services/search/v2/jobs/export`;

const step5 = `--data-urlencode "search=search index=bcg_sales sourcetype=sales:addons" \\
--data-urlencode "earliest_time=-1d@d" \\
--data-urlencode "latest_time=now"`;

const step12 = `/services/search/jobs`;

const step13 = `--data-urlencode "search=search index=bcg_sales sourcetype=sales:addons" \\
--data-urlencode "earliest_time=rt-1h@h" \\
--data-urlencode "latest_time=rt" \\
--data-urlencode "search_mode=realtime"`;

const step20 = `/services/search/jobs/{search_id}`;

const step27 = `/services/search/v2/jobs/{search_id}/results_preview`;

const step34 = `/services/search/jobs/{search_id}/control`;

const step35 = `--data-urlencode "action=cancel"`;



    return(<div style={{margin:50}}>
        <Snippet step="3" code={step3} language="language-bash"/>
        <Snippet step="4" code={step4} language="language-uri"/>
        <Snippet step="5" code={step5} language="language-bash"/>
        <Snippet step="12" code={step12} language="language-uri"/>
        <Snippet step="13" code={step13} language="language-bash"/>
        <Snippet step="20" code={step20} language="language-uri"/>
        <Snippet step="27" code={step27} language="language-uri"/>
        <Snippet step="34" code={step34} language="language-uri"/>
        <Snippet step="35" code={step35} language="language-bash"/>
    </div>);

}

export default Lab6;
