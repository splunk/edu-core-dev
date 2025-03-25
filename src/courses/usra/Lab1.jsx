import Snippet from './Snippet';

function Lab1() {

   return(<div style={{margin:50}}>
  

<Snippet step="13" language="bash"
    code={`/opt/splunk/bin/splunk version
/opt/splunk/bin/splunk show web-port
/opt/splunk/bin/splunk show splunkd-port`}
/>

<Snippet step="17" language="bash"
    code={`cd ~/labs/lab1
nano get.sh`}
/>

<Snippet step="18" language="uri"
    code={`/services/authentication/users`}
/>

<Snippet step="19" language="bash"
    code={`-u restclient:splunk3du`}
/>

<Snippet step="26" language="uri"
    code={`/services/auth/login`}
/>

<Snippet step="27" language="bash"
    code={`\\
--data-urlencode "username=restclient" \\
--data-urlencode "password=splunk3du"`}
/>

<Snippet step="33" language="bash"
    code={`\\
-H "Authorization: Splunk {sessionKey}"`}
/>

<Snippet step="47" language="bash"
    code={`export TOKEN={paste token value}
echo $TOKEN`}
/>

<Snippet step="50" language="bash"
    code={`-H "Authorization: Bearer $TOKEN"`}
/>


    </div>);

}

export default Lab1;
