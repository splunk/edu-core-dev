import Snippet from './Snippet';

function Lab3() {

    return(<div style={{margin:50}}>
       

<Snippet step="9" language="bash"
    code={`cd /opt/splunk/etc/apps/buttercup/static
wget https://splunk.github.io/edu-core-dev/downloads/bcg_icons.zip
unzip bcg_icons.zip
rm bcg_icons.zip
ll`}
/>

<Snippet step="16" language="xml"
    code={`<collection label="Sales Dashboards">
    <view source="all" match="buttercup"/>
</collection>`}
/>

<Snippet step="19" language="splunk-spl"
    code={`index="bcg_sales" sourcetype="sales:web" action=purchase productId=*`}
/>

<Snippet step="23" language="splunk-spl"
    code={`index="bcg_sales" sourcetype="sales:addons"`}
/>

<Snippet step="36" language="splunk-spl"
    code={`tag=bcg_sales`}
/>

<Snippet step="44" language="splunk-spl"
    code={`| inputlookup prices_lookup
| fields productId, product_name
| sort product_name`}
/>

<Snippet step="50" language="splunk-spl"
    code={`eventtype="bcg_web_sales" productId=$game|s$
| stats sum(price)`}
/>

<Snippet step="53" language="splunk-spl"
    code={`eventtype="bcg_mtx_sales" productId=$game|s$
| stats sum(price)`}
/>

<Snippet step="56" language="splunk-spl"
    code={`tag=bcg_sales productId=$game|s$
| timechart sum(price) by productName`}
/>


    </div>);

}

export default Lab3;
