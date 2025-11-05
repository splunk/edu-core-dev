import Snippet from './Snippet';
import Task from './Task';

function Lab7() {

    return(<div style={{margin:50}}>

<Task num="3" language="bash"
    code={`#!/bin/bash

URL="https://localhost:8088/services/collector"

curl -k -X POST $URL \\
-H "Authorization: Splunk {hec token}" \\
-H "X-Splunk-Request-Channel: 4b72a336-3ce0-4fdb-ad02-9f933150fe6e" \\
--data-binary "@single.json"

echo ""`}
/>

<Task num="4" language="bash"
    code={`#!/bin/bash

URL="https://localhost:8088/services/collector"

curl -k -X POST $URL \\
-H "Authorization: Splunk {hec token}" \\
-H "X-Splunk-Request-Channel: 4b72a336-3ce0-4fdb-ad02-9f933150fe6e" \\
--data-binary "@multi.json"

echo ""`}
/>

<Task num="5" language="bash"
    code={`#!/bin/bash

URL="https://localhost:8088/services/collector/ack"

curl -k -X POST $URL \\
-H "Authorization: Splunk {hec token}" \\
-H "X-Splunk-Request-Channel: 4b72a336-3ce0-4fdb-ad02-9f933150fe6e" \\
-d '{"acks":[0,1,2,3,4,5,6]}'

echo ""`}
/>

<Snippet step="44" language="splunk-spl"
    code={`index=hec_lab source=single`}
/>

<Snippet step="45" language="splunk-spl"
    code={`index=hec_lab source=multi`}
/>


    </div>);

}

export default Lab7;
