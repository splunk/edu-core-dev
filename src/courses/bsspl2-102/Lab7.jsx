import Snippet from './Snippet';

function Lab7() {

    return(<div style={{margin:50}}>


<Snippet step="8" language="bash"
    code={`cd ~/labs

curl -k -G -u {splunk-id}:{password} \\
https://localhost:8089/services/orchestrator/v1/spl2/modules/permissions \\
--data-urlencode "resourceName=apps.buttercup._resources" \\
| jq '.' > response.json
`}
/>

<Snippet step="11" language="bash"
    code={`node convertPermissions.js`}
/>

<Snippet step="13" language="json"
    code={`               ,
        "user"
`}
/>

<Snippet step="15" language="bash"
    code={`curl -k -X PUT -u {splunk-id}:{password} \\
-s -o /dev/null -w "\\nresponse code: %{response_code}\\n" \\
https://localhost:8089/services/orchestrator/v1/spl2/modules/permissions \\
--data-binary "@request.json"`}
/>

<Snippet step="21" language="bash"
    code={`curl -k -G -u {splunk-id}:{password} \\
url https://localhost:8089/services/orchestrator/v1/datasets \\
--data-urlencode "namespace=~.apps.buttercup" \\
| jq '.'`}
/>

<Snippet step="23" language="bash"
    code={`curl -k -G -u {splunk-id}:{password} \\
https://localhost:8089/services/orchestrator/v1/datasets \\
--data-urlencode "namespace=apps.buttercup" \\
--data-urlencode "module=_resources" \\
--data-urlencode "kind=view" \\
| jq '.'`}
/>

<Snippet step="26" language="bash"
    code={`curl -k -X POST -u {splunk-id}:{password} \\
https://localhost:8089/services/orchestrator/v1/spl2/convert \\
--data '{ "spl1": "search index=bcg_sales action=purchase", "runtime": "splunkd" }' \\
| jq '.'`}
/>

<Snippet step="31" language="bash"
    code={`curl -k -X POST -u {splunk-id}:{password} \\
https://localhost:8089/services/orchestrator/v1/spl2/modules/dispatch \\
--data-binary "@searches.json" \\
| jq '.'`}
/>

<Snippet step="35" language="bash"
    code={`curl -k -G -u {splunk-id}:{password} \\
https://localhost:8089/services/search/jobs/{sid} \\
--data-urlencode "output_mode=json" \\
| jq '.'`}
/>

<Snippet step="38" language="bash"
    code={`curl -k -G -u {splunk-id}:{password} \\
https://localhost:8089/services/search/v2/jobs/{sid}/results \\
--data-urlencode "output_mode=json" \\
| jq '.'`}
/>

<Snippet step="40" language="bash"
    code={`curl -k -G -u {splunk-id}:{password} \\
https://localhost:8089/services/search/v2/jobs/{sid}/results \\
--data-urlencode "output_mode=json" \\
--data-urlencode "offset=150" \\
--data-urlencode "count=50" \\
| jq '.'`}
/>

<Snippet step="45" language="bash"
    code={`curl -k -X PUT -u {splunk-id}:{password} \\
https://localhost:8089/services/orchestrator/v1/spl2/modules/apps.buttercup.rest_api?isUpdate=false \\
--data-binary "@definition.json" \\
| jq '.'`}
/>

<Snippet step="52" language="json"
    code={`where action=purchase`}
/>

<Snippet step="54" language="bash"
    code={`curl -k -X PUT -u {splunk-id}:{password} \\
https://localhost:8089/services/orchestrator/v1/spl2/modules/apps.buttercup.rest_api?isUpdate=true \\
--data-binary "@definition.json" \\
| jq '.'`}
/>

<Snippet step="58" language="bash"
    code={`curl -k -G -u {splunk-id}:{password} \\
https://localhost:8089/services/orchestrator/v1/spl2/modules/apps.buttercup.rest_api \\
| jq '.'`}
/>

<Snippet step="62" language="bash"
    code={`curl -k -X DELETE -u {splunk-id}:{password} \\
-s -o /dev/null -w "\\nresponse code: %{response_code}\\n" \\
https://localhost:8089/services/orchestrator/v1/spl2/modules/apps.buttercup.rest_api`}
/>


    </div>);

}

export default Lab7;
