import Snippet from './Snippet';

function Lab7() {

    return(<div style={{margin:50}}>


<Snippet step="11" language="bash"
    code={`cd ~/labs
export TOKEN=
echo $TOKEN
`}
/>

<Snippet step="15" language="bash"
    code={`curl -k -G -H "Authorization: Bearer $TOKEN" \\
https://localhost:8089/services/orchestrator/v1/spl2/modules/permissions \\
--data-urlencode "resourceName=apps.buttercup._resources" \\
| jq '.' > response.json
`}
/>

<Snippet step="18" language="bash"
    code={`node convertPermissions.js`}
/>

<Snippet step="20" language="json"
    code={`               ,
        "user"
`}
/>

<Snippet step="22" language="bash"
    code={`curl -k -X PUT -H "Authorization: Bearer $TOKEN" \\
-s -o /dev/null -w "\\nresponse code: %{response_code}\\n" \\
https://localhost:8089/services/orchestrator/v1/spl2/modules/permissions \\
--data-binary "@request.json"`}
/>

<Snippet step="28" language="bash"
    code={`curl -k -G -H "Authorization: Bearer $TOKEN" \\
url https://localhost:8089/services/orchestrator/v1/datasets \\
--data-urlencode "namespace=~.apps.buttercup" \\
| jq '.'`}
/>

<Snippet step="30" language="bash"
    code={`curl -k -G -H "Authorization: Bearer $TOKEN" \\
https://localhost:8089/services/orchestrator/v1/datasets \\
--data-urlencode "namespace=apps.buttercup" \\
--data-urlencode "module=_resources" \\
--data-urlencode "kind=view" \\
| jq '.'`}
/>

<Snippet step="33" language="bash"
    code={`curl -k -X POST -H "Authorization: Bearer $TOKEN" \\
https://localhost:8089/services/orchestrator/v1/spl2/convert \\
--data '{ "spl1": "search index=bcg_sales action=purchase", "runtime": "splunkd" }' \\
| jq '.'`}
/>

<Snippet step="38" language="bash"
    code={`curl -k -X POST -H "Authorization: Bearer $TOKEN" \\
https://localhost:8089/services/orchestrator/v1/spl2/modules/dispatch \\
--data-binary "@searches.json" \\
| jq '.'`}
/>

<Snippet step="42" language="bash"
    code={`curl -k -G -H "Authorization: Bearer $TOKEN" \\
https://localhost:8089/services/search/jobs/{sid} \\
--data-urlencode "output_mode=json" \\
| jq '.'`}
/>

<Snippet step="45" language="bash"
    code={`curl -k -G -H "Authorization: Bearer $TOKEN" \\
https://localhost:8089/services/search/v2/jobs/{sid}/results \\
--data-urlencode "output_mode=json" \\
| jq '.'`}
/>

<Snippet step="47" language="bash"
    code={`curl -k -G -H "Authorization: Bearer $TOKEN" \\
https://localhost:8089/services/search/v2/jobs/{sid}/results \\
--data-urlencode "output_mode=json" \\
--data-urlencode "offset=150" \\
--data-urlencode "count=50" \\
| jq '.'`}
/>

<Snippet step="52" language="bash"
    code={`curl -k -X PUT -H "Authorization: Bearer $TOKEN" \\
https://localhost:8089/services/orchestrator/v1/spl2/modules/apps.buttercup.rest_api?isUpdate=false \\
--data-binary "@definition.json" \\
| jq '.'`}
/>

<Snippet step="59" language="json"
    code={`where action=purchase`}
/>

<Snippet step="61" language="bash"
    code={`curl -k -X PUT -H "Authorization: Bearer $TOKEN" \\
https://localhost:8089/services/orchestrator/v1/spl2/modules/apps.buttercup.rest_api?isUpdate=true \\
--data-binary "@definition.json" \\
| jq '.'`}
/>

<Snippet step="65" language="bash"
    code={`curl -k -G -H "Authorization: Bearer $TOKEN" \\
https://localhost:8089/services/orchestrator/v1/spl2/modules/apps.buttercup.rest_api \\
| jq '.'`}
/>

<Snippet step="69" language="bash"
    code={`curl -k -X DELETE -H "Authorization: Bearer $TOKEN" \\
-s -o /dev/null -w "\\nresponse code: %{response_code}\\n" \\
https://localhost:8089/services/orchestrator/v1/spl2/modules/apps.buttercup.rest_api`}
/>


    </div>);

}

export default Lab7;
