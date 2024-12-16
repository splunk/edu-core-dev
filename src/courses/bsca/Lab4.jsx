import Snippet from './Snippet';

function Lab4() {



const step2 = `pip install -t /tmp splunk-sdk
cp -r /tmp/splunklib /opt/splunk/etc/apps/buttercup/bin`;

const step3 = `ll /opt/splunk/etc/apps/buttercup/bin
ll /opt/splunk/etc/apps/buttercup/bin/splunklib/searchcommands`;

const step4 = `cd /opt/splunk/etc/apps/buttercup`;

const step5 = `nano bin/bcgReviewScores.py`;

const step6 = `import sys

from splunklib.searchcommands import dispatch, StreamingCommand, Configuration

@Configuration()
class GetReviewScoresCommand(StreamingCommand):
    def stream(self, events):
        for event in events:
            yield event

dispatch(GetReviewScoresCommand, sys.argv, sys.stdin, sys.stdout, __name__)`;

const step7 = `from random import randint

# for lab brevity, just return a random number from 1 to 5!
def getAvgReviewScore(productId):
    return str(randint(1,5))`;

const step8 = `
            productId = event["productId"]
            event["review"] = getAvgReviewScore(productId)`;

const step12 = `nano local/commands.conf`;

const step13 = `[getreviews]
chunked = true
filename = bcgReviewScores.py`;

const step17 = `nano local/searchbnf.conf`;

const step18 = `[getreviews-command]
syntax = getreviews
shortdesc = get online game reviews
usage = public`;

const step20 = `/opt/splunk/bin/splunk restart`;

const step22 = `| getrev`;

const step23 = `tag=bcg_sales
| stats sum(price) as "Total Sales" by productName, productId
| getreviews`;

const step27 = `tag=bcg_sales
| eval web=if(eventtype="bcg_web_sales",price,null())
| eval mtx=if(eventtype="bcg_mtx_sales",price,null())
| stats sum(web) as "Web", sum(mtx) as "Micro", sum(price) as "Total" by productName, productId
| getreviews
| rename productId as "ID", productName as "Name", review as "Avg Review"`;



    return(<div style={{margin:50}}>
        <Snippet step="2" code={step2} language="language-bash"/>
        <Snippet step="3" code={step3} language="language-bash"/>
        <Snippet step="4" code={step4} language="language-bash"/>
        <Snippet step="5" code={step5} language="language-xml"/>
        <Snippet step="6" code={step6} language="language-python"/>
        <Snippet step="7" code={step7} language="language-python"/>
        <Snippet step="8" code={step8} language="language-python"/>
        <Snippet step="12" code={step12} language="language-bash"/>
        <Snippet step="13" code={step13} language="language-properties"/>
        <Snippet step="17" code={step17} language="language-bash"/>
        <Snippet step="18" code={step18} language="language-properties"/>
        <Snippet step="20" code={step20} language="language-bash"/>
        <Snippet step="22" code={step22} language="language-splunk-spl"/>
        <Snippet step="23" code={step23} language="language-splunk-spl"/>
        <Snippet step="27" code={step27} language="language-splunk-spl"/>
    </div>);

}

export default Lab4;
