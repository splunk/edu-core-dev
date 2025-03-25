import Snippet from './Snippet';

function Lab6() {

    return(<div style={{margin:50}}>
        

<Snippet step="3" language="uri"
    code={`https://postman-echo.com/get?$@field_name$=$@field_value$`}
/>

<Snippet step="9" language="splunk-spl"
    code={`tag=bcg_sales`}
/>

<Snippet step="15" language="uri"
    code={`https://postman-echo.com/post`}
/>

<Snippet step="21" language="splunk-spl"
    code={`tag=bcg_sales eventtype="bcg_web_sales"`}
/>

<Snippet step="27" language="splunk-spl"
    code={`eventtype=bcg_mtx_sales productId=$productId$`}
/>

<Snippet step="33" language="splunk-spl"
    code={`tag=bcg_sales eventtype="bcg_web_sales"`}
/>


    </div>);

}

export default Lab6;
