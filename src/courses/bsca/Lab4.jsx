import Snippet from './Snippet';

function Lab4() {

    return(<div style={{margin:50}}>


<Snippet step="2" language="bash"
    code={`pip install -t /tmp splunk-sdk
cp -r /tmp/splunklib /opt/splunk/etc/apps/buttercup/bin`}
/>

<Snippet step="3" language="bash"
    code={`ll /opt/splunk/etc/apps/buttercup/bin
ll /opt/splunk/etc/apps/buttercup/bin/splunklib/searchcommands`}
/>

<Snippet step="4" language="bash"
    code={`cd /opt/splunk/etc/apps/buttercup`}
/>

<Snippet step="5" language="bash"
    code={`nano bin/bcgReviewScores.py`}
/>

<Snippet step="6" language="python"
    code={`import sys

from splunklib.searchcommands import dispatch, StreamingCommand, Configuration

@Configuration()
class GetReviewScoresCommand(StreamingCommand):
    def stream(self, events):
        for event in events:
            yield event

dispatch(GetReviewScoresCommand, sys.argv, sys.stdin, sys.stdout, __name__)`}
/>

<Snippet step="7" language="python"
    code={`from random import randint

# for lab brevity, just return a random number from 1 to 5!
def getAvgReviewScore(productId):
    return str(randint(1,5))`}
/>

<Snippet step="8" language="python"
    code={`
            productId = event["productId"]
            event["review"] = getAvgReviewScore(productId)`}
/>

<Snippet step="12" language="bash"
    code={`nano local/commands.conf`}
/>

<Snippet step="13" language="properties"
    code={`[getreviews]
chunked = true
filename = bcgReviewScores.py`}
/>

<Snippet step="17" language="bash"
    code={`nano local/searchbnf.conf`}
/>

<Snippet step="18" language="properties"
    code={`[getreviews-command]
syntax = getreviews
shortdesc = get online game reviews
usage = public`}
/>

<Snippet step="20" language="bash"
    code={`/opt/splunk/bin/splunk restart`}
/>

<Snippet step="22" language="splunk-spl"
    code={`| getrev`}
/>

<Snippet step="23" language="splunk-spl"
    code={`tag=bcg_sales
| stats sum(price) as "Total Sales" by productName, productId
| getreviews`}
/>

<Snippet step="27" language="splunk-spl"
    code={`tag=bcg_sales
| eval web=if(eventtype="bcg_web_sales",price,null())
| eval mtx=if(eventtype="bcg_mtx_sales",price,null())
| stats sum(web) as "Web", sum(mtx) as "Micro", sum(price) as "Total" by productName, productId
| getreviews
| rename productId as "ID", productName as "Name", review as "Avg Review"`}
/>


    </div>);

}

export default Lab4;
