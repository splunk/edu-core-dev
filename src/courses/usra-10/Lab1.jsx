import Snippet from './Snippet';
import Task from './Task';

function Lab1() {

   return(<div style={{margin:50}}>
  

<Snippet step="15" language="bash"
    code={`/opt/splunk/bin/splunk version
/opt/splunk/bin/splunk show web-port
/opt/splunk/bin/splunk show splunkd-port`}
/>

<Snippet step="16" language="bash"
    code={`cd ~/
wget https://splunk.github.io/edu-core-dev/downloads/UsingSplunkRestApi_LabFiles.zip
unzip UsingSplunkRestApi_LabFiles.zip
`}
/>

<Task num="7" language="bash"
    code={`#!/bin/bash

URL="https://localhost:8089/services/authentication/users"

curl -k -X GET -u restclient:splunk3du $URL`}
/>

<Task num="8" language="bash"
    code={`#!/bin/bash

URL="https://localhost:8089/services/auth/login"

curl -k -X POST $URL \\
--data-urlencode "username=restclient" \\
--data-urlencode "password=splunk3du"`}
/>

<Task num="9" language="bash"
    code={`#!/bin/bash

URL="https://localhost:8089/services/authentication/users"

curl -k -X GET $URL \\
-H "Authorization: Splunk {sessionKey}"`}
/>

<Task num="12" language="bash"
    code={`#!/bin/bash

URL="https://localhost:8089/services/authentication/users"

curl -k -X GET $URL \\
-H "Authorization: Bearer $TOKEN"`}
/>


    </div>);

}

export default Lab1;
