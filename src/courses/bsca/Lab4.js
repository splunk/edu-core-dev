import React, { useEffect } from "react";

import Solution from './Solution';

import Prism from 'prismjs';

function Lab4() {

    useEffect(() => {
        Prism.highlightAll();
    },[]);



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

const step7 = `import sys
from random import randint

# for lab brevity, just return a random number from 1 to 5!
def getAvgReviewScore(productId):
    return str(randint(1,5))

from splunklib.searchcommands import dispatch, StreamingCommand, Configuration`;

const step8 = `class GetReviewScoresCommand(StreamingCommand):
    def stream(self, events):
        for event in events:
            productId = event["productId"]
            event["review"] = getAvgReviewScore(productId)
            yield event`;

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



    return(<div style={{margin:50}}>
        <Solution step="2" code={step2} language="language-bash" lines="" />
        <Solution step="3" code={step3} language="language-bash" lines=""/>
        <Solution step="4" code={step4} language="language-bash" lines=""/>
        <Solution step="5" code={step5} language="language-xml" lines=""/>
        <Solution step="6" code={step6} language="language-python" lines=""/>
        <Solution step="7" code={step7} language="language-python" lines="2-6"/>
        <Solution step="8" code={step8} language="language-python" lines="4-5"/>
        <Solution step="12" code={step12} language="language-bash" lines=""/>
        <Solution step="13" code={step13} language="language-solution-file" lines=""/>
        <Solution step="17" code={step17} language="language-bash" lines=""/>
        <Solution step="18" code={step18} language="language-solution-file" lines=""/>
        <Solution step="20" code={step20} language="language-bash" lines=""/>
    </div>);

}

export default Lab4;
