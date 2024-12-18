import Snippet from './Snippet';

function Lab6() {

    return(<div style={{margin:50}}>


<Snippet step="3" language="bash"
    code={`cd ~/labs/lab6
nano post.sh`}
/>

<Snippet step="4" language="uri"
    code={`/services/search/v2/jobs/export`}
/>

<Snippet step="5" language="bash"
    code={`--data-urlencode "search=search index=bcg_sales sourcetype=sales:addons" \\
--data-urlencode "earliest_time=-1d@d" \\
--data-urlencode "latest_time=now"`}
/>

<Snippet step="12" language="uri"
    code={`/services/search/jobs`}
/>

<Snippet step="13" language="bash"
    code={`--data-urlencode "search=search index=bcg_sales sourcetype=sales:addons" \\
--data-urlencode "earliest_time=rt-1h@h" \\
--data-urlencode "latest_time=rt" \\
--data-urlencode "search_mode=realtime"`}
/>

<Snippet step="20" language="uri"
    code={`/services/search/jobs/{search_id}`}
/>

<Snippet step="27" language="uri"
    code={`/services/search/v2/jobs/{search_id}/results_preview`}
/>

<Snippet step="34" language="uri"
    code={`/services/search/jobs/{search_id}/control`}
/>

<Snippet step="35" language="bash"
    code={`--data-urlencode "action=cancel"`}
/>


    </div>);

}

export default Lab6;
