import Snippet from './Snippet';

function Lab3() {



const step9 = `cd /opt/splunk/etc/apps/buttercup/appserver/static
unzip lab3_files.zip
ll`;

const step10 = `mkdir ../../static
mv app* ../../static
ll ../../static
rm lab3_files.zip`;

const step11 = `/opt/splunk/bin/splunk restart`;

const step17 = `<collection label="Sales Dashboards">
    <view source="all" match="buttercup"/>
</collection>`;



    return(<div style={{margin:50}}>
        <Snippet step="9" code={step9} language="language-bash"/>
        <Snippet step="10" code={step10} language="language-bash"/>
        <Snippet step="11" code={step11} language="language-bash"/>
        <Snippet step="17" code={step17} language="language-xml"/>
    </div>);

}

export default Lab3;
