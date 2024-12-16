import Snippet from './Snippet';

function Lab1() {



const step13 = `/opt/splunk/bin/splunk version
/opt/splunk/bin/splunk show web-port
/opt/splunk/bin/splunk show splunkd-port`;

const step17 = `cd ~/labs/lab1
nano get.sh`;

const step18 = `/services/authentication/users`;

const step19 = `-u restclient:splunk3du`;

const step26 = `/services/auth/login`;

const step27 = `\\
--data-urlencode "username=restclient" \\
--data-urlencode "password=splunk3du"`;

const step33 = `\\
-H "Authorization: Splunk {sessionKey}"`;

const step47 = `export TOKEN={paste token value}
echo $TOKEN`;

const step50 = `-H "Authorization: Bearer $TOKEN"`;



   return(<div style={{margin:50}}>
        <Snippet step="13" code={step13} language="language-bash"/>
        <Snippet step="17" code={step17} language="language-bash"/>
        <Snippet step="18" code={step18} language="language-uri"/>
        <Snippet step="19" code={step19} language="language-bash"/>
        <Snippet step="26" code={step26} language="language-uri"/>
        <Snippet step="27" code={step27} language="language-bash"/>
        <Snippet step="33" code={step33} language="language-bash"/>
        <Snippet step="47" code={step47} language="language-bash"/>
        <Snippet step="50" code={step50} language="language-bash"/>
    </div>);

}

export default Lab1;
