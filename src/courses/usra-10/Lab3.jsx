import Snippet from './Snippet';
import Task from './Task';

function Lab3() {

    return(<div style={{margin:50}}>


<Snippet step="4" language="splunk-spl"
    code={`| rest /services/server/info | transpose`}
/>

<Snippet step="8" language="splunk-spl"
    code={`| rest /services/server/health/splunkd/details | transpose`}
/>

<Task num="3" language="bash"
    code={`#!/bin/bash

URL="https://localhost:8089/servicesNS/nobody/SA-Eventgen/properties/app/ui/is_visible"

curl -k -X POST $URL \\
-H "Authorization: Bearer $TOKEN" \\
--data-urlencode "value=false"`}
/>

<Task num="4" language="bash"
    code={`#!/bin/bash

URL="https://localhost:8089/services/data/indexes"

curl -k -X POST $URL \\
-H "Authorization: Bearer $TOKEN" \\
--data-urlencode "name=hec_lab"`}
/>

<Task num="5" language="bash"
    code={`#!/bin/bash

URL="https://localhost:8089/services/authentication/users"

curl -k -X POST $URL \\
-H "Authorization: Bearer $TOKEN" \\
--data-urlencode "name=neil" \\
--data-urlencode "password=splunk3du" \\
--data-urlencode "realname=Neil Diaz" \\
--data-urlencode "roles=power"`}
/>


    </div>);

}

export default Lab3;
