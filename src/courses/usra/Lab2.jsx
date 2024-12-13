import Snippet from './Snippet';

function Lab2() {



const step3 = `cd ~/labs/lab2
nano get.sh`;

const step4 = `/services/data/indexes`;

const step6 = `bash get.sh`;

const step8 = `nano get.sh`;

const step9 = `| xmlstarlet sel -N a="http://www.w3.org/2005/Atom" -t \
-m /a:feed/a:entry -v a:title -n`;

const step11 = `bash get.sh`;

const step13 = `nano get.py`;

const step14 = `/services/data/indexes`;

const step16 = `python3 get.py`;

const step18 = `nano get.py`;

const step19 = `#print(response.content)
print("Request: [" + response.request.method + "] " + response.request.url)
print("Response: [" + str(response.status_code) + "] " + response.reason)`;

const step20 = `# XML / Atom namespaces
# '' = atom, s = splunk
ns = {
    '': 'http://www.w3.org/2005/Atom',
    's': 'http://dev.splunk.com/ns/rest',
    'opensearch': 'http://a9.com/-/spec/opensearch/1.1/'
}`;

const step21 = `if (response.status_code == 200):
    # get xml root element
    root = ET.fromstring(response.text)
    # for all entries in the atom namespace
    for entry in root.findall('entry', ns):
        # print the entry title
        print(" " + entry.find('title', ns).text)`;

const step23 = `python3 get.py`;

const step25 = `nano get.sh`;

const step26 = `--data-urlencode "output_mode=json" \
| jq '.'`;

const step28 = `bash get.sh`;

const step31 = `nano get.sh`;

const step32 = `'.entry[].name'`;

const step34 = `bash get.sh`;

const step36 = `nano get.js`;

const step37 = `/services/data/indexes?output_mode=json`;

const step39 = `node get.js`;

const step41 = `nano get.js`;

const step42 = `//console.log(data);
console.log("Request: [GET] " + response.url);
console.log("Response: [" + response.status + "] " + response.statusText);`;

const step43 = `if (response.status === 200) {
    data.entry.forEach(function(entry) {
        console.log(" " + entry.name);
    });
}`;

const step45 = `node get.js`;



    return(<div style={{margin:50}}>
        <Snippet step="3" code={step3} language="language-bash"/>
        <Snippet step="4" code={step4} language="language-bash"/>
        <Snippet step="6" code={step6} language="language-bash"/>
        <Snippet step="8" code={step8} language="language-bash"/>
        <Snippet step="9" code={step9} language="language-bash"/>
        <Snippet step="11" code={step11} language="language-bash"/>
        <Snippet step="13" code={step13} language="language-bash"/>
        <Snippet step="14" code={step14} language="language-python"/>
        <Snippet step="16" code={step16} language="language-bash"/>
        <Snippet step="18" code={step18} language="language-bash"/>
        <Snippet step="19" code={step19} language="language-python"/>
        <Snippet step="20" code={step20} language="language-python"/>
        <Snippet step="21" code={step21} language="language-python"/>
        <Snippet step="23" code={step23} language="language-bash"/>
        <Snippet step="25" code={step25} language="language-bash"/>
        <Snippet step="26" code={step26} language="language-bash"/>
        <Snippet step="28" code={step28} language="language-bash"/>
        <Snippet step="31" code={step31} language="language-bash"/>
        <Snippet step="32" code={step32} language="language-bash"/>
        <Snippet step="34" code={step34} language="language-bash"/>
        <Snippet step="36" code={step36} language="language-bash"/>
        <Snippet step="37" code={step37} language="language-bash"/>
        <Snippet step="39" code={step39} language="language-bash"/>
        <Snippet step="41" code={step41} language="language-bash"/>
        <Snippet step="42" code={step42} language="language-javascript"/>
        <Snippet step="43" code={step43} language="language-javascript"/>
        <Snippet step="45" code={step45} language="language-bash"/>
    </div>);

}

export default Lab2;
