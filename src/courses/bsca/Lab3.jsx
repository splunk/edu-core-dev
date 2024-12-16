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

const step20 = `index="bcg_sales" sourcetype="sales:web" action=purchase productId=*`;

const step24 = `index="bcg_sales" sourcetype="sales:addons"`;

const step37 = `tag=bcg_sales`;

const step45 = `| inputlookup prices_lookup
| fields productId, product_name
| sort product_name`;

const step51 = `eventtype="bcg_web_sales" productId=$game|s$
| stats sum(price)`;

const step54 = `eventtype="bcg_mtx_sales" productId=$game|s$
| stats sum(price)`;

const step57 = `tag=bcg_sales productId=$game|s$
| timechart sum(price) by productName`;



    return(<div style={{margin:50}}>
        <Snippet step="9" code={step9} language="language-bash"/>
        <Snippet step="10" code={step10} language="language-bash"/>
        <Snippet step="11" code={step11} language="language-bash"/>
        <Snippet step="17" code={step17} language="language-xml"/>
        <Snippet step="20" code={step20} language="language-splunk-spl"/>
        <Snippet step="24" code={step24} language="language-splunk-spl"/>
        <Snippet step="37" code={step37} language="language-splunk-spl"/>
        <Snippet step="45" code={step45} language="language-splunk-spl"/>
        <Snippet step="51" code={step51} language="language-splunk-spl"/>
        <Snippet step="54" code={step54} language="language-splunk-spl"/>
        <Snippet step="57" code={step57} language="language-splunk-spl"/>
    </div>);

}

export default Lab3;
