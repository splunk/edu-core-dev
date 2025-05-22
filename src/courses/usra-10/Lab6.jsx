//import Snippet from './Snippet';
import Task from './Task';

function Lab6() {

    return(<div style={{margin:50}}>

<Task num="1" language="bash"
    code={`#!/bin/bash

URL="https://localhost:8089/services/search/v2/jobs/export"

curl -k -X POST $URL \\
-H "Authorization: Bearer $TOKEN" \\
--data-urlencode "search=search index=bcg_sales sourcetype=sales:addons" \\
--data-urlencode "earliest_time=-1d@d" \\
--data-urlencode "latest_time=now"`}
/>

<Task num="2" language="bash"
    code={`#!/bin/bash

URL="https://localhost:8089/services/search/jobs"

curl -k -X POST $URL \\
-H "Authorization: Bearer $TOKEN" \\
--data-urlencode "search=search index=bcg_sales sourcetype=sales:addons" \\
--data-urlencode "earliest_time=rt-1h@h" \\
--data-urlencode "latest_time=rt" \\
--data-urlencode "search_mode=realtime"`}
/>

<Task num="3" language="bash"
    code={`#!/bin/bash

URL="https://localhost:8089/services/search/jobs/{search_id}"

curl -k -X GET $URL \\
-H "Authorization: Bearer $TOKEN"`}
/>

<Task num="4" language="bash"
    code={`#!/bin/bash

URL="https://localhost:8089/services/search/v2/jobs/{search_id}/results_preview"

curl -k -X GET $URL \\
-H "Authorization: Bearer $TOKEN"`}
/>

<Task num="5" language="bash"
    code={`#!/bin/bash

URL="https://localhost:8089/services/search/jobs/{search_id}/control"

curl -k -X POST $URL \\
-H "Authorization: Bearer $TOKEN" \\
--data-urlencode "action=cancel"`}
/>


    </div>);

}

export default Lab6;
