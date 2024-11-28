import sys
from random import randint

# for lab brevity, just return a random number from 1 to 5!
def getAvgReviewScore(productId):
    return str(randint(1,5))

from splunklib.searchcommands import dispatch, StreamingCommand, Configuration

@Configuration()
class GetReviewScoresCommand(StreamingCommand):
    def stream(self, events):
        for event in events:
            productId = event["productId"]
            event["review"] = getAvgReviewScore(productId)
            yield event

dispatch(GetReviewScoresCommand, sys.argv, sys.stdin, sys.stdout, __name__)