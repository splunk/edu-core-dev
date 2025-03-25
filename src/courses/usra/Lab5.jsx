import Snippet from './Snippet';

function Lab5() {

    return(<div style={{margin:50}}>
 

<Snippet step="7" language="bash"
    code={`cd ~/labs/lab5
nano post.sh`}
/>

<Snippet step="8" language="uri"
    code={`/services/search/jobs`}
/>

<Snippet step="9" language="bash"
    code={`--data-urlencode "search=search index=bcg_sales sourcetype=sales:web" \\
--data-urlencode "earliest_time=-7d@d" \\
--data-urlencode "latest_time=now"`}
/>

<Snippet step="16" language="uri"
    code={`/services/search/jobs/{search_id}`}
/>

<Snippet step="23" language="uri"
    code={`/services/search/jobs/{search_id}/results`}
/>

<Snippet step="30" language="uri"
    code={`/services/search/jobs/{search_id}/results?offset=150&count=50`}
/>

<Snippet step="37" language="bash"
    code={`--data-urlencode "exec_mode=oneshot"`}
/>


    </div>);

}

export default Lab5;
