import Snippet from './Snippet';

function Lab1() {

   return(<div style={{margin:50}}>

<Snippet step="15" language="bash"
    code={`ll /opt/splunk/etc/apps`}
/>

<Snippet step="16" language="bash"
    code={`/opt/splunk/bin/splunk version
/opt/splunk/bin/splunk show web-port
/opt/splunk/bin/splunk show splunkd-port`}
/>

<Snippet step="17" language="bash"
    code={`cd ~/
wget https://splunk.github.io/edu-core-dev/downloads/BuildingSPL2Apps_LabFiles.zip
unzip BuildingSPL2Apps_LabFiles.zip
`}
/>


    </div>);

}

export default Lab1;
