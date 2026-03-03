import Snippet from './Snippet';

function Lab4() {

    return(<div style={{margin:50}}>


<Snippet step="6" language="splunk-spl"
    code={`type premium_product = string WHERE $value IN ("WC-SH-G04", "SC-MG-G10", "DB-SG-G01")`}
/>

<Snippet step="7" language="splunk-spl"
    code={`export *`}
/>

<Snippet step="16" language="splunk-spl"
    code={`import * from ~.apps.buttercup.datatypes`}
/>

<Snippet step="17" language="splunk-spl"
    code={`function isPremiumProduct($id: string): boolean {
    return if(($id IS premium_product), true, false)
}`}
/>

<Snippet step="18" language="splunk-spl"
    code={`export *`}
/>

<Snippet step="27" language="splunk-spl"
    code={`import bcg_sales from ~indexes`}
/>

<Snippet step="28" language="splunk-spl"
    code={`$view_sales = from bcg_sales 
    | where isnotnull(productId)
    | where isnotnull(action)
`}
/>

<Snippet step="29" language="splunk-spl"
    code={`export { $view_sales }`}
/>

<Snippet step="38" language="splunk-spl"
    code={`import { view_sales } from ~.apps.buttercup.views`}
/>

<Snippet step="39" language="splunk-spl"
    code={`import { isPremiumProduct } from ~.apps.buttercup.functions`}
/>

<Snippet step="40" language="splunk-spl"
    code={`$purchases = from view_sales | where action="purchase"`}
/>

<Snippet step="41" language="splunk-spl"
    code={`$premiumPurchases = from $purchases | where isPremiumProduct(productId)`}
/>

<Snippet step="42" language="splunk-spl"
    code={`export { $purchases, $premiumPurchases }`}
/>

<Snippet step="53" language="splunk-spl"
    code={`from ~.apps.buttercup.purchases
from ~.apps.buttercup.premiumPurchases
`}
/>


    </div>);

}

export default Lab4;
