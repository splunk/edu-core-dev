import Snippet from './Snippet';

function Lab5() {

    return(<div style={{margin:50}}>


<Snippet step="2" language="bash"
    code={`cd /opt/splunk/etc/apps/buttercup`}
/>

<Snippet step="3" language="bash"
    code={`nano bin/bcgEndpoints.py`}
/>

<Snippet step="4" language="python"
    code={`from splunk.persistconn.application import PersistentServerConnectionApplication
import json

class Echo(PersistentServerConnectionApplication):
    def __init__(self, _command_line, _command_arg):
        super(PersistentServerConnectionApplication, self).__init__()

    def handle(self, in_bytes):
        request = json.loads(in_bytes)    
        payload = json.dumps(request)
        return {
            'payload': payload,
            'status': 200
        }`}
/>

<Snippet step="8" language="bash"
    code={`nano local/restmap.conf`}
/>

<Snippet step="9" language="properties"
    code={`[script:bcg_echo]
match = /bcg/echo
script = bcgEndpoints.py
scripttype = persist
handler = bcgEndpoints.Echo
python.version = python3`}
/>

<Snippet step="13" language="bash"
    code={`nano local/web.conf`}
/>

<Snippet step="14" language="properties"
    code={`[expose:bcg_echo]
methods = GET,POST
pattern = /bcg/echo`}
/>

<Snippet step="16" language="bash"
    code={`/opt/splunk/bin/splunk restart`}
/>

<Snippet step="17" language="bash"
    code={`curl -k -X GET -u {splunk-id}:{password} \\
--url "https://localhost:8089/services/bcg/echo?myGetArg=myvalue"`}
/>

<Snippet step="19" language="bash"
    code={`curl -k -X POST -u {splunk-id}:{password} \\
--url https://localhost:8089/services/bcg/echo -d "myPostArg=myvalue"`}
/>

<Snippet step="21" language="bash"
    code={`nano bin/bcgEndpoints.py`}
/>

<Snippet step="22" language="python"
    code={`
        method = request['method'].lower()
        if method == "post":
            data = request['form']
        elif method == "get":
            data = request['query']`}
/>

<Snippet step="23" language="python"
    code={`
        payload = {}
        for key,val in data:
            payload[key] = val`}
/>

<Snippet step="24" language="python"
    code={`
        #payload = json.dumps(request)
        return {
            'payload': payload,
            'status': 200,
            'headers': { 'Content-Type':'application/json' }
        }`}
/>

<Snippet step="26" language="bash"
    code={`curl -k -X GET -u {splunk-id}:{password} \\
--url "https://localhost:8089/services/bcg/echo?myGetArg=myvalue"`}
/>

<Snippet step="28" language="bash"
    code={`curl -k -X POST -u {splunk-id}:{password} \\
--url https://localhost:8089/services/bcg/echo -d "myPostArg=myvalue"`}
/>

<Snippet step="30" language="bash"
    code={`curl -k -X GET -u {splunk-id}:{password} \\
--url https://localhost:8089/services/bcg/echo -d "myGetArg=myvalue" -i`}
/>


    </div>);

}

export default Lab5;
