import Snippet from './Snippet';

function Lab3() {

    return(<div style={{margin:50}}>
       

<Snippet step="9" language="bash"
    code={`cd /opt/splunk/etc/apps/buttercup/appserver/static
unzip lab3_files.zip
ll`}
/>

<Snippet step="10" language="bash"
    code={`mkdir ../../static
mv app* ../../static
ll ../../static
rm lab3_files.zip`}
/>

<Snippet step="11" language="bash"
    code={`/opt/splunk/bin/splunk restart`}
/>

<Snippet step="17" language="xml"
    code={`<collection label="Sales Dashboards">
    <view source="all" match="buttercup"/>
</collection>`}
/>

<Snippet step="20" language="splunk-spl"
    code={`index="bcg_sales" sourcetype="sales:web" action=purchase productId=*`}
/>

<Snippet step="24" language="splunk-spl"
    code={`index="bcg_sales" sourcetype="sales:addons"`}
/>

<Snippet step="37" language="splunk-spl"
    code={`tag=bcg_sales`}
/>

<Snippet step="45" language="splunk-spl"
    code={`| inputlookup prices_lookup
| fields productId, product_name
| sort product_name`}
/>

<Snippet step="51" language="splunk-spl"
    code={`eventtype="bcg_web_sales" productId=$game|s$
| stats sum(price)`}
/>

<Snippet step="54" language="splunk-spl"
    code={`eventtype="bcg_mtx_sales" productId=$game|s$
| stats sum(price)`}
/>

<Snippet step="57" language="splunk-spl"
    code={`tag=bcg_sales productId=$game|s$
| timechart sum(price) by productName`}
/>


    </div>);

}

export default Lab3;
