//import Snippet from './Snippet';
import Task from './Task';

function Lab4() {

    return(<div style={{margin:50}}>


<Task num="1" language="bash"
    code={`#!/bin/bash

URL="https://localhost:8089/services/apps/local"

curl -k -X POST $URL \\
-H "Authorization: Bearer $TOKEN" \\
--data-urlencode "author=Rest Client" \\
--data-urlencode "label=Rest App" \\
--data-urlencode "name=rest_app" \\
--data-urlencode "version=1.0.0"`}
/>

<Task num="3" language="bash"
    code={`URL="https://localhost:8089/servicesNS/restclient/-/saved/searches"

URL="https://localhost:8089/servicesNS/restclient/search/saved/searches"

URL="https://localhost:8089/servicesNS/neil/rest_app/saved/searches"`}
/>

<Task num="4" language="bash"
    code={`#!/bin/bash

URL="https://localhost:8089/servicesNS/neil/rest_app/saved/searches/Saved_Search_2/acl"

curl -k -X POST $URL \\
-H "Authorization: Bearer $TOKEN" \\
--data-urlencode "owner=neil" \\
--data-urlencode "perms.read=*" \\
--data-urlencode "sharing=global"`}
/>


    </div>);

}

export default Lab4;
