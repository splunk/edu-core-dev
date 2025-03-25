import Snippet from './Snippet';

function Lab2() {

    return(<div style={{margin:50}}>


<Snippet step="3" language="bash"
    code={`cd ~/labs/lab2
nano get.sh`}
/>

<Snippet step="4" language="uri"
    code={`/services/data/indexes`}
/>

<Snippet step="9" language="bash"
    code={`\\
| xmlstarlet sel -N a="http://www.w3.org/2005/Atom" -t \\
-m /a:feed/a:entry -v a:title -n`}
/>

<Snippet step="14" language="uri"
    code={`/services/data/indexes`}
/>

<Snippet step="19" language="python"
    code={`#print(response.content)
print("Request: [" + response.request.method + "] " + response.request.url)
print("Response: [" + str(response.status_code) + "] " + response.reason)`}
/>

<Snippet step="20" language="python"
    code={`# XML / Atom namespaces
# '' = atom, s = splunk
ns = {
    '': 'http://www.w3.org/2005/Atom',
    's': 'http://dev.splunk.com/ns/rest',
    'opensearch': 'http://a9.com/-/spec/opensearch/1.1/'
}`}
/>

<Snippet step="21" language="python"
    code={`if (response.status_code == 200):
    # get xml root element
    root = ET.fromstring(response.text)
    # for all entries in the atom namespace
    for entry in root.findall('entry', ns):
        # print the entry title
        print(" " + entry.find('title', ns).text)`}
/>

<Snippet step="26" language="bash"
    code={`--data-urlencode "output_mode=json" \\
| jq '.'`}
/>

<Snippet step="32" language="bash"
    code={`'.entry[].name'`}
/>

<Snippet step="37" language="uri"
    code={`/services/data/indexes?output_mode=json`}
/>

<Snippet step="42" language="javascript"
    code={`//console.log(data);
console.log("Request: [GET] " + response.url);
console.log("Response: [" + response.status + "] " + response.statusText);`}
/>

<Snippet step="43" language="javascript"
    code={`if (response.status === 200) {
    data.entry.forEach(function(entry) {
        console.log(" " + entry.name);
    });
}`}
/>


    </div>);

}

export default Lab2;
