import Snippet from './Snippet';

function Lab1() {



const step13 = `/opt/splunk/bin/splunk version
/opt/splunk/bin/splunk show web-port
/opt/splunk/bin/splunk show splunkd-port`;

const step17 = `cd ~/labs/lab1
nano get.sh`;

const step18 = `/services/authentication/users`;

const step19 = `-u restclient:splunk3du`;

const step21 = `bash get.sh`;

const step25 = `nano post.sh`;

const step26 = `/services/auth/login`;

const step27 = `\
--data-urlencode "username=restclient" \
--data-urlencode "password=splunk3du"`;

const step29 = `bash post.sh`;

const step31 = `nano get.sh`;

const step33 = `\
-H "Authorization: Splunk {sessionKey}"`;

const step35 = `bash get.sh`;

const step47 = `export TOKEN={paste token value}
echo $TOKEN`;

const step49 = `nano get.sh`;

const step50 = `-H "Authorization: Bearer $TOKEN"`;

const step52 = `bash get.sh`;



   return(<div style={{margin:50}}>
        <Snippet step="13" code={step13} language="language-bash"/>
        <Snippet step="17" code={step17} language="language-bash"/>
        <Snippet step="18" code={step18} language="language-bash"/>
        <Snippet step="19" code={step19} language="language-bash"/>
        <Snippet step="21" code={step21} language="language-bash"/>
        <Snippet step="25" code={step25} language="language-bash"/>
        <Snippet step="26" code={step26} language="language-bash"/>
        <Snippet step="27" code={step27} language="language-bash"/>
        <Snippet step="29" code={step29} language="language-bash"/>
        <Snippet step="31" code={step31} language="language-bash"/>
        <Snippet step="33" code={step33} language="language-bash"/>
        <Snippet step="35" code={step35} language="language-bash"/>
        <Snippet step="47" code={step47} language="language-bash"/>
        <Snippet step="49" code={step49} language="language-bash"/>
        <Snippet step="50" code={step50} language="language-bash"/>
        <Snippet step="52" code={step52} language="language-bash"/>
    </div>);

}

export default Lab1;
