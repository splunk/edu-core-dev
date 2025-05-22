import Snippet from './Snippet';

function Lab4() {

    return(<div style={{margin:50}}>


<Snippet step="2" language="bash"
    code={`cd ~/
pip install -t /tmp splunk-sdk
cp -r /tmp/splunklib /opt/splunk/etc/apps/buttercup/bin`}
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
    code={`            productId = event["productId"]
            event["review"] = getAvgReviewScore(productId)`}
/>

<Snippet step="14" language="properties"
    code={`[getreviews]
chunked = true
filename = bcgReviewScores.py`}
/>

<Snippet step="20" language="properties"
    code={`[getreviews-command]
syntax = getreviews
shortdesc = get online game reviews
usage = public`}
/>

<Snippet step="22" language="bash"
    code={`/opt/splunk/bin/splunk restart`}
/>

<Snippet step="24" language="splunk-spl"
    code={`| getrev`}
/>

<Snippet step="25" language="splunk-spl"
    code={`tag=bcg_sales
| stats sum(price) as "Total Sales" by productName, productId
| getreviews`}
/>

<Snippet step="29" language="splunk-spl"
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
