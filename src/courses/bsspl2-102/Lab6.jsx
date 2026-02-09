import Snippet from './Snippet';

function Lab6() {

    return(<div style={{margin:50}}>


<Snippet step="6" language="splunk-spl"
    code={`type http_error = int where $value >= 400`}
/>

<Snippet step="12" language="splunk-spl"
    code={`function isError($code:number): boolean {
    return if(($code IS http_error), true, false)
}`}
/>

<Snippet step="18" language="splunk-spl"
    code={`import status_lookup from ~/apps.bcg_datagen.lookups`}
/>

<Snippet step="19" language="splunk-spl"
    code={`$view_admins = from bcg_sales
    | rex field=_raw "^(?:[^ \\\\n]* ){8}(?P<status>\\\\d+)"
    | lookup status_lookup status OUTPUT status_description`}
/>

<Snippet step="20" language="splunk-spl"
    code={`, $view_admins`}
/>

<Snippet step="24" language="splunk-spl"
    code={`, view_admins`}
/>

<Snippet step="25" language="splunk-spl"
    code={`, isError`}
/>

<Snippet step="26" language="splunk-spl"
    code={`$httpErrors = from view_admins | where isError(status)`}
/>

<Snippet step="27" language="splunk-spl"
    code={`, $httpErrors`}
/>

<Snippet step="35" language="bash"
    code={`cd /opt/splunk/bin
./splunk download-spl2-modules app buttercup -dest local -auth {splunk-id}`}
/>









    </div>);

}

export default Lab6;
