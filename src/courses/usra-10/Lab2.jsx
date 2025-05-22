//import Snippet from './Snippet';
import Task from './Task';

function Lab2() {

    return(<div style={{margin:50}}>


<Task num="2" language="bash"
    code={`#!/bin/bash

URL="https://localhost:8089/services/data/indexes"

curl -k -X GET $URL \\
-H "Authorization: Bearer $TOKEN" \\
| xmlstarlet sel -N a="http://www.w3.org/2005/Atom" -t \\
-m /a:feed/a:entry -v a:title -n`}
/>

<Task num="3" language="python"
    code={`import os
import requests
import urllib3
import xml.etree.ElementTree as ET

# suppress HTTPS warning messages
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

# REST API endpoint
url = "https://localhost:8089/services/data/indexes"

# Headers to send with the request (a JSON object)
headers = {
        'Authorization': 'Bearer ' + os.environ['TOKEN'],
        'Content-Type': 'application/x-www-form-urlencoded'
}

# invoke the REST API
response = requests.get(url=url, headers=headers, verify=False)

# retrieve and print response data
#print(response.content)
print("Request: [" + response.request.method + "] "  + response.request.url)
print("Response: [" + str(response.status_code) + "] " + response.reason)

# XML / Atom namespaces
# '' = atom, s = splunk
ns = {
        '': 'http://www.w3.org/2005/Atom',
        's': 'http://dev.splunk.com/ns/rest',
        'opensearch': 'http://a9.com/-/spec/opensearch/1.1/'
}

if (response.status_code == 200):
        # get xml root element
        root = ET.fromstring(response.text)
        # for all entries in the atom namespace
        for entry in root.findall('entry', ns):
                # print the entry title
                print("  " + entry.find('title', ns).text)`}
/>

<Task num="4" language="bash"
    code={`#!/bin/bash

URL="https://localhost:8089/services/data/indexes"

curl -k -X GET $URL \\
-H "Authorization: Bearer $TOKEN" \\
--data-urlencode "output_mode=json" \\
| jq '.entry[].name'`}
/>

<Task num="5" language="javascript"
    code={`// suppress warning messages
process.removeAllListeners('warning');
// allow self-signed certificates
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

(async function() {

        // REST API endpoint
        const url = "https://localhost:8089/services/data/indexes?output_mode=json";

        // Headers to send with the request (a JSON object)
        const headers = new Headers({
                'Authorization': 'Bearer ' + process.env.TOKEN,
                'Content-Type': 'application/x-www-form-urlencoded'
        });

        // invoke the REST API
        const response = await fetch(url, {'method':'get', 'headers':headers});

        // retrieve and print response data
        let data = await response.json();
        //console.log(data);
        console.log("Request: [GET] " + response.url);
        console.log("Response: [" + response.status + "] " + response.statusText);

        if (response.status === 200) {
                data.entry.forEach(function(entry) {
                        console.log("  " + entry.name);
                }); 
        }

})().catch(err => console.log(err));`}
/>



    </div>);

}

export default Lab2;
