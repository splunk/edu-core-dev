import Snippet from './Snippet';

function Lab2() {

    return(<div style={{margin:50}}>       


<Snippet step="13" language="python"
    code={`    "disable_existing_loggers": True,
    
            "level": DEFAULT_LOGGING_LEVEL,`}
/>

<Snippet step="38" language="bash"
    code={`cd ~/
wget https://docs.splunk.com/images/Tutorial/tutorialdata.zip
wget https://docs.splunk.com/images/d/db/Prices.csv.zip
unzip tutorialdata.zip
unzip Prices.csv.zip -x "__MACOSX/*"
ll`}
/>

<Snippet step="39" language="bash"
    code={`cd /opt/splunk/etc/apps/bcg_eventgen
mkdir samples
cp ~/www1/access.log samples/`}
/>

<Snippet step="40" language="bash"
    code={`mkdir lookups
cp ~/prices.csv lookups/`}
/>

<Snippet step="46" language="properties"
    code={`[access.log]
mode = replay
sampletype = raw
backfill = -7d
index = bcg_sales
host = bcg_eventgen
source = bcg
sourcetype = sales:web`}
/>

<Snippet step="47" language="properties"
// eslint-disable-next-line
    code={`token.0.token = \d{2}/\w{3}/\d{4}:\d{2}:\d{2}:\d{2}
token.0.replacementType = replaytimestamp
token.0.replacement = %d/%b/%Y:%H:%M:%S`}
/>

<Snippet step="49" language="bash"
    code={`/opt/splunk/bin/splunk restart`}
/>

<Snippet step="65" language="splunk-spl"
    code={`index=bcg_sales sourcetype="sales:web"`}
/>

<Snippet step="61" language="bash"
    code={`cd /opt/splunk/etc/apps/bcg_eventgen`}
/>

<Snippet step="69" language="bash"
    code={`cd /opt/splunk/etc/apps/bcg_eventgen/samples
touch {addons,games,mtx_event}.sample
ll`}
/>

<Snippet step="71" language="makefile"
    code={`timestamp=!timestamp! gameId=!1! addon=!2! amount=!3!`}
/>

<Snippet step="74" language="makefile"
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

<Snippet step="77" language="makefile"
    code={`currency
map
item
weapon
skin
pet`}
/>

<Snippet step="81" language="properties"
    code={`[mtx_event.sample]
interval = 3m
backfill = -7d
index = bcg_sales
host = bcg_eventgen
source = bcg
sourcetype = sales:addons`}
/>

<Snippet step="82" language="properties"
    code={`token.0.token = !timestamp!
token.0.replacementType = timestamp
token.0.replacement = %d/%b/%Y:%H:%M:%S`}
/>

<Snippet step="83" language="properties"
    code={`token.1.token = !1!
token.1.replacementType = file
token.1.replacement = $SPLUNK_HOME/etc/apps/bcg_eventgen/samples/games.sample

token.2.token = !2!
token.2.replacementType = file
token.2.replacement = $SPLUNK_HOME/etc/apps/bcg_eventgen/samples/addons.sample`}
/>

<Snippet step="84" language="properties"
    code={`token.3.token = !3!
token.3.replacementType = random
token.3.replacement = float[1.00:5]`}
/>

<Snippet step="86" language="bash"
    code={`/opt/splunk/bin/splunk restart`}
/>

<Snippet step="95" language="splunk-spl"
    code={`index=bcg_sales sourcetype=sales:addons`}
/>

    </div>);

}

export default Lab2;
