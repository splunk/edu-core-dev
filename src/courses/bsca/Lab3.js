import React, { useEffect } from "react";

import Solution from './Solution';

import Prism from 'prismjs';

function Lab3() {

    useEffect(() => {
        Prism.highlightAll();
    },[]);



const step9 = `cd /opt/splunk/etc/apps/buttercup/appserver/static
unzip lab3_files.zip
ll`;

const step10 = `mkdir ../../static
mv app* ../../static
ll ../../static
rm lab3_files.zip`;

const step11 = `/opt/splunk/bin/splunk restart`;

const step17 = `...
    <collection label="Sales Dashboards">
        <view source="all" match="buttercup"/>
    </collection>
</nav>`;



    return(<div style={{margin:50}}>
        <Solution step="9" code={step9} language="language-bash" lines=""/>
        <Solution step="10" code={step10} language="language-bash" lines=""/>
        <Solution step="11" code={step11} language="language-bash" lines=""/>
        <Solution step="17" code={step17} language="language-xml" lines="2-4"/>
    </div>);

}

export default Lab3;
