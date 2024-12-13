import Snippet from './Snippet';

function Lab2() {



const step32 = `cd ~/
wget https://docs.splunk.com/images/Tutorial/tutorialdata.zip
wget https://docs.splunk.com/images/d/db/Prices.csv.zip
unzip tutorialdata.zip
unzip Prices.csv.zip
ll`;

const step33 = `cd /opt/splunk/etc/apps/bcg_eventgen
mkdir samples
cp ~/www1/access.log samples/`;

const step34 = `mkdir lookups
cp ~/prices.csv lookups/`;

const step37 = `nano local/eventgen.conf`;

const step38 = `[access.log]
mode = replay
sampletype = raw
backfill = -7d
index = bcg_sales
host = bcg_eventgen
source = bcg
sourcetype = sales:web`;

// eslint-disable-next-line
const step39 = `token.0.token = \d{2}/\w{3}/\d{4}:\d{2}:\d{2}:\d{2}
token.0.replacementType = replaytimestamp
token.0.replacement = %d/%b/%Y:%H:%M:%S`;

const step41 = `/opt/splunk/bin/splunk restart`;

const step61 = `cd /opt/splunk/etc/apps/bcg_eventgen`;

const step62 = `nano samples/mtx_event.sample`;

const step63 = `timestamp=!timestamp! gameId=!1! addon=!2! amount=!3!`;

const step65 = `nano samples/games.sample`;

const step66 = `DB-SG-G01
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
SF-BVS-01`;

const step68 = `nano samples/addons.sample`;

const step69 = `currency
map
item
weapon
skin
pet`;

const step72 = `nano local/eventgen.conf`;

const step73 = `[mtx_event.sample]
interval = 3m
backfill = -7d
index = bcg_sales
host = bcg_eventgen
source = bcg
sourcetype = sales:addons`;

const step74 = `token.0.token = !timestamp!
token.0.replacementType = timestamp
token.0.replacement = %d/%b/%Y:%H:%M:%S`;

const step75 = `token.1.token = !1!
token.1.replacementType = file
token.1.replacement = $SPLUNK_HOME/etc/apps/bcg_eventgen/samples/games.sample
token.2.token = !2!
token.2.replacementType = file
token.2.replacement = $SPLUNK_HOME/etc/apps/bcg_eventgen/samples/addons.sample`;

const step76 = `token.3.token = !3!
token.3.replacementType = random
token.3.replacement = float[1.00:5]`;

const step78 = `/opt/splunk/bin/splunk restart`;



    return(<div style={{margin:50}}>
        <Snippet step="32" code={step32} language="language-bash"/>
        <Snippet step="33" code={step33} language="language-bash"/>
        <Snippet step="34" code={step34} language="language-bash"/>
        <Snippet step="37" code={step37} language="language-bash"/>
        <Snippet step="38" code={step38} language="language-solution-file"/>
        <Snippet step="39" code={step39} language="language-solution-file"/>
        <Snippet step="41" code={step41} language="language-bash"/>
        <Snippet step="61" code={step61} language="language-bash"/>
        <Snippet step="62" code={step62} language="language-bash"/>
        <Snippet step="63" code={step63} language="language-solution-file"/>
        <Snippet step="65" code={step65} language="language-bash"/>
        <Snippet step="66" code={step66} language="language-solution-file"/>
        <Snippet step="68" code={step68} language="language-bash"/>
        <Snippet step="69" code={step69} language="language-solution-file"/>
        <Snippet step="72" code={step72} language="language-bash"/>
        <Snippet step="73" code={step73} language="language-solution-file"/>
        <Snippet step="74" code={step74} language="language-solution-file"/>
        <Snippet step="75" code={step75} language="language-solution-file"/>
        <Snippet step="76" code={step76} language="language-solution-file"/>
        <Snippet step="78" code={step78} language="language-bash"/>
    </div>);

}

export default Lab2;
