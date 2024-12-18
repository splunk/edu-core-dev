import Snippet from './Snippet';

function Lab2() {

    return(<div style={{margin:50}}>       


<Snippet step="32" language="bash"
    code={`cd ~/
wget https://docs.splunk.com/images/Tutorial/tutorialdata.zip
wget https://docs.splunk.com/images/d/db/Prices.csv.zip
unzip tutorialdata.zip
unzip Prices.csv.zip
ll`}
/>

<Snippet step="33" language="bash"
    code={`cd /opt/splunk/etc/apps/bcg_eventgen
mkdir samples
cp ~/www1/access.log samples/`}
/>

<Snippet step="34" language="bash"
    code={`mkdir lookups
cp ~/prices.csv lookups/`}
/>

<Snippet step="37" language="bash"
    code={`nano local/eventgen.conf`}
/>

<Snippet step="38" language="properties"
    code={`[access.log]
mode = replay
sampletype = raw
backfill = -7d
index = bcg_sales
host = bcg_eventgen
source = bcg
sourcetype = sales:web`}
/>

<Snippet step="39" language="properties"
// eslint-disable-next-line
    code={`token.0.token = \d{2}/\w{3}/\d{4}:\d{2}:\d{2}:\d{2}
token.0.replacementType = replaytimestamp
token.0.replacement = %d/%b/%Y:%H:%M:%S`}
/>

<Snippet step="41" language="bash"
    code={`/opt/splunk/bin/splunk restart`}
/>

<Snippet step="57" language="splunk-spl"
    code={`index=bcg_sales sourcetype="sales:web"`}
/>

<Snippet step="61" language="bash"
    code={`cd /opt/splunk/etc/apps/bcg_eventgen`}
/>

<Snippet step="62" language="bash"
    code={`nano samples/mtx_event.sample`}
/>

<Snippet step="63" language="makefile"
    code={`timestamp=!timestamp! gameId=!1! addon=!2! amount=!3!`}
/>

<Snippet step="65" language="bash"
    code={`nano samples/games.sample`}
/>

<Snippet step="66" language="makefile"
    code={`DB-SG-G01
DC-SG-G02
FS-SG-G03
WC-SH-G04
PZ-SG-G05
CU-PG-G06
MB-AG-G07
FI-AG-G08
BS-AG-G09
SC-MG-G10
WC-SH-A01
WC-SH-A02
SF-BVS-G01
SF-BVS-01`}
/>

<Snippet step="68" language="bash"
    code={`nano samples/addons.sample`}
/>

<Snippet step="69" language="makefile"
    code={`currency
map
item
weapon
skin
pet`}
/>

<Snippet step="72" language="bash"
    code={`nano local/eventgen.conf`}
/>

<Snippet step="73" language="properties"
    code={`[mtx_event.sample]
interval = 3m
backfill = -7d
index = bcg_sales
host = bcg_eventgen
source = bcg
sourcetype = sales:addons`}
/>

<Snippet step="74" language="properties"
    code={`token.0.token = !timestamp!
token.0.replacementType = timestamp
token.0.replacement = %d/%b/%Y:%H:%M:%S`}
/>

<Snippet step="75" language="properties"
    code={`token.1.token = !1!
token.1.replacementType = file
token.1.replacement = $SPLUNK_HOME/etc/apps/bcg_eventgen/samples/games.sample

token.2.token = !2!
token.2.replacementType = file
token.2.replacement = $SPLUNK_HOME/etc/apps/bcg_eventgen/samples/addons.sample`}
/>

<Snippet step="76" language="properties"
    code={`token.3.token = !3!
token.3.replacementType = random
token.3.replacement = float[1.00:5]`}
/>

<Snippet step="78" language="bash"
    code={`/opt/splunk/bin/splunk restart`}
/>

<Snippet step="87" language="splunk-spl"
    code={`index=bcg_sales sourcetype=sales:addons`}
/>


    </div>);

}

export default Lab2;
