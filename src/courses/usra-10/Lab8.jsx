import Snippet from './Snippet';
import Task from './Task';

function Lab8() {

    return(<div style={{margin:50}}>

<Task num="1" language="bash"
    code={`#!/bin/bash

URL="https://localhost:8089/servicesNS/nobody/search/storage/collections/config"

curl -k -X POST $URL \
-H "Authorization: Bearer $TOKEN" \\
--data-urlencode "name=employees"`}
/>

<Task num="2" language="bash"
    code={`#!/bin/bash

URL="https://localhost:8089/servicesNS/nobody/search/storage/collections/data/employees/batch_save"

curl -k -X POST $URL \\
-H "Authorization: Bearer $TOKEN" \\
-H "Content-Type: application/json" \\
--data-binary "@employees.json"

echo ""`}
/>

<Snippet step="20" language="splunk-spl"
    code={`first_name, last_name, contact, city, office, rating, notes, _user, _key`}
/>

<Snippet step="23" language="splunk-spl"
    code={`| inputlookup employees_lookup | sort last_name`}
/>

<Task num="4" language="bash"
    code={`#!/bin/bash

URL="https://localhost:8089/servicesNS/nobody/search/storage/collections/data/employees?sort=last_name"

curl -k -X GET $URL \\
-H "Authorization: Bearer $TOKEN" \\
| jq '.'`}
/>

<Task num="5" language="bash"
    code={`#!/bin/bash

URL="https://localhost:8089/servicesNS/nobody/search/storage/collections/data/employees/hgeerhart"

curl -k -X POST $URL \\
-H "Authorization: Bearer $TOKEN" \\
-H "Content-Type: application/json" \\
--data-binary "@helga.json"

echo ""`}
/>

    </div>);

}

export default Lab8;
