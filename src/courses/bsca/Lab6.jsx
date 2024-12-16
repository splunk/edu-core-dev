import Snippet from './Snippet';

function Lab6() {



const step3 = `https://postman-echo.com/get?$@field_name$=$@field_value$`;

const step9 = `tag=bcg_sales`;

const step15 = `https://postman-echo.com/post`;

const step21 =  `tag=bcg_sales eventtype="bcg_web_sales"`;

const step27 = `eventtype=bcg_mtx_sales productId=$productId$`;

const step33 = `tag=bcg_sales eventtype="bcg_web_sales"`;



    return(<div style={{margin:50}}>
        <Snippet step="3" code={step3} language="language-uri"/>
        <Snippet step="9" code={step9} language="language-splunk-spl"/>
        <Snippet step="15" code={step15} language="language-uri"/>
        <Snippet step="21" code={step21} language="language-splunk-spl"/>
        <Snippet step="27" code={step27} language="language-splunk-spl"/>
        <Snippet step="33" code={step33} language="language-splunk-spl"/>
    </div>);

}

export default Lab6;
