//import Snippet from './Snippet';
import Task from './Task';

function Lab5() {

    return(<div style={{margin:50}}>
 

<Task num="2" language="bash"
    code={`#!/bin/bash

URL="https://localhost:8089/services/search/jobs"

curl -k -X POST $URL \\
-H "Authorization: Bearer $TOKEN" \\
--data-urlencode "search=search index=bcg_sales sourcetype=sales:web" \\
--data-urlencode "earliest_time=-7d@d" \\
--data-urlencode "latest_time=now"`}
/>

<Task num="3" language="bash"
    code={`#!/bin/bash

URL="https://localhost:8089/services/search/jobs/{search_id}"

curl -k -X GET $URL \\
-H "Authorization: Bearer $TOKEN"`}
/>

<Task num="4" language="bash"
    code={`#!/bin/bash

URL="https://localhost:8089/services/search/jobs/{search_id}/results"

curl -k -X GET $URL \\
-H "Authorization: Bearer $TOKEN"`}
/>

<Task num="5" language="bash"
    code={`#!/bin/bash

URL="https://localhost:8089/services/search/jobs/{search_id}/results?offset=150&count=50"

curl -k -X GET $URL \\
-H "Authorization: Bearer $TOKEN"`}
/>

<Task num="6" language="bash"
    code={`#!/bin/bash

URL="https://localhost:8089/services/search/jobs"

curl -k -X POST $URL \\
-H "Authorization: Bearer $TOKEN" \\
--data-urlencode "search=search index=bcg_sales sourcetype=sales:web" \\
--data-urlencode "earliest_time=-7d@d" \\
--data-urlencode "latest_time=now" \\
--data-urlencode "exec_mode=oneshot"`}
/>

    </div>);

}

export default Lab5;
