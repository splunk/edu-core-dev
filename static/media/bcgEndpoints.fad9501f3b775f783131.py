from splunk.persistconn.application import PersistentServerConnectionApplication
import json

class Echo(PersistentServerConnectionApplication):
    def __init__(self, _command_line, _command_arg):
        super(PersistentServerConnectionApplication, self).__init__()

    def handle(self, in_bytes):
        request = json.loads(in_bytes)

        method = request['method'].lower()
        if method == "post":
            data = request['form']
        elif method == "get":
            data = request['query']

        payload = {}
        for key,val in data:
            payload[key] = val
        
        #payload = json.dumps(request)
        return {
            'payload': payload,
            'status': 200,
            'headers': { 'Content-Type':'application/json' }
        }
