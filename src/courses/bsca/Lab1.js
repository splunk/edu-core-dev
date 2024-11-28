import React, { useEffect } from "react";

import Solution from './Solution';

import Prism from 'prismjs';

function Lab1() {

    useEffect(() => {
        Prism.highlightAll();
    },[]);



const step6 = `ll /opt/splunk/etc/apps`;

const step7 = `/opt/splunk/bin/splunk version
/opt/splunk/bin/splunk show web-port
/opt/splunk/bin/splunk show splunkd-port`;



    return(<div style={{margin:50}}>
        <Solution step="6" code={step6} language="language-bash"/>
        <Solution step="7" code={step7} language="language-bash"/>
    </div>);

}

export default Lab1;
