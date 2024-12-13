import Snippet from './Snippet';

function Lab5() {



const step2 = `cd /opt/splunk/etc/apps/buttercup`;

const step3 = `nano bin/bcgEndpoints.py`;

const step4 = `from splunk.persistconn.application import PersistentServerConnectionApplication
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
        }`;

const step8 = `nano local/restmap.conf`;

const step9 = `[script:bcg_echo]
match = /bcg/echo
script = bcgEndpoints.py
scripttype = persist
handler = bcgEndpoints.Echo
python.version = python3`;

const step13 = `nano local/web.conf`;

const step14 = `[expose:bcg_echo]
methods = GET,POST
pattern = /bcg/echo`;

const step16 = `/opt/splunk/bin/splunk restart`;

const step17 = `curl -k -X GET -u {splunk-id}:{password} \
--url "https://localhost:8089/services/bcg/echo?myGetArg=myvalue"`;

const step19 = `curl -k -X POST -u {splunk-id}:{password} \
--url https://localhost:8089/services/bcg/echo -d "myPostArg=myvalue"`;

const step21 = `nano bin/bcgEndpoints.py`;

const step22 = `
        method = request['method'].lower()
        if method == "post":
            data = request['form']
        elif method == "get":
            data = request['query']`;

const step23 = `
        payload = {}
        for key,val in data:
            payload[key] = val`;

const step24 = `
        #payload = json.dumps(request)
        return {
            'payload': payload,
            'status': 200,
            'headers': { 'Content-Type':'application/json' }
        }`;

const step26 = `curl -k -X GET -u {splunk-id}:{password} \
--url "https://localhost:8089/services/bcg/echo?myGetArg=myvalue"`;

const step28 = `curl -k -X POST -u {splunk-id}:{password} \
--url https://localhost:8089/services/bcg/echo -d "myPostArg=myvalue"`;

const step30 = `curl -k -X GET -u {splunk-id}:{password} \
--url https://localhost:8089/services/bcg/echo -d "myGetArg=myvalue" -i`;



    return(<div style={{margin:50}}>
        <Snippet step="2" code={step2} language="language-bash"/>
        <Snippet step="3" code={step3} language="language-bash"/>
        <Snippet step="4" code={step4} language="language-python"/>
        <Snippet step="8" code={step8} language="language-bash"/>
        <Snippet step="9" code={step9} language="language-solution-file"/>
        <Snippet step="13" code={step13} language="language-bash"/>
        <Snippet step="14" code={step14} language="language-solution-file"/>
        <Snippet step="16" code={step16} language="language-bash"/>
        <Snippet step="17" code={step17} language="language-bash"/>
        <Snippet step="19" code={step19} language="language-bash"/>
        <Snippet step="21" code={step21} language="language-bash"/>
        <Snippet step="22" code={step22} language="language-python"/>
        <Snippet step="23" code={step23} language="language-python"/>
        <Snippet step="24" code={step24} language="language-python"/>
        <Snippet step="26" code={step26} language="language-bash"/>
        <Snippet step="28" code={step28} language="language-bash"/>
        <Snippet step="30" code={step30} language="language-bash"/>
    </div>);

}

export default Lab5;
