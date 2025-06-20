import Snippet from './Snippet';

function Lab4() {

    return(<div style={{margin:50}}>

<Snippet step="2" language="bash"
    code={`cd ~/code
splunk-create`}
/>

<Snippet step="6" language="jsx"
    code={`import React from 'react';
import { StyledContainer } from './InventoryStyles';
const Inventory = () => {
    return (
        <StyledContainer>
         Hello World!
        </StyledContainer>
    );
};
export default Inventory;`}
/>

<Snippet step="11" language="bash"
    code={`import Inventory from '@splunk/inventory';
<Inventory />`}
/>

<Snippet step="14" language="bash"
    code={`'@splunk/inventory': path.resolve(__dirname, '../inventory/src/Inventory.jsx'),`}
/>

<Snippet step="16" language="bash"
    code={`yarn run build
yarn run start`}
/>
        
<Snippet step="17" language="bash"
    code={`/opt/splunk/bin/splunk restart`}
/>
        
<Snippet step="19" language="jsx"
    code={`import styled from 'styled-components';
import { variables, mixins } from '@splunk/themes';

const StyledContainer = styled.div\`
    \${mixins.reset('inline')};
    display: block;
    width: '100%',
    font-size: \${variables.fontSizeLarge};
    flex-direction: row;
    margin: \${variables.spacingLarge};
    width: 80vw;
    height: 40vw;
\`;

const sectionTitle = {
    fontSize: '24px',
};

const vizContainer = {
    flex: '1',
    border: '1px solid #d3d3d3',
    borderRadius: '4px',
    padding: '10px',
    overflowX: 'auto',
};

const labelStyle = {
    margin: '0',
    fontWeight: 'bold',
    fontSize: '14px',
};

export {
    StyledContainer,
    sectionTitle,
    vizContainer,
    labelStyle,
};`}
/>

<Snippet step="22" language="jsx"
    code={`, { useState, useEffect }`}
/>

<Snippet step="23" language="jsx"
    code={`// ==== SEARCHES ====
    
// ==== Table Search ====
useEffect(() => {
    console.log('hello')
},[]);`}
/>

<Snippet step="28" language="jsx"
    code={`import SearchJob from '@splunk/search-job';
import WaitSpinner from '@splunk/react-ui/WaitSpinner';`}
/>

<Snippet step="29" language="jsx"
    code={`, sectionTitle, vizContainer, labelStyle`}
/>

<Snippet step="30" language="jsx"
    code={`const SEARCH_TIME_RANGE = { earliest_time: "-7d@d", latest_time: "now" };`}
/>

<Snippet step="31" language="jsx"
    code={`const [tableResults, setTableResults] = useState({ fields: [], results: [] });
const [loadingTable, setLoadingTable] = useState(true);`}
/>

<Snippet step="32" language="jsx"
    code={`setLoadingTable(true);
const tableSearch = SearchJob.create({
    search: \`index=bccscm sourcetype=scm:logistics | table orderNo, Country, Roast, schedule, shipDate, deliveryDate, Amount, warehouse\`,
    ...SEARCH_TIME_RANGE,
});

const subscription = tableSearch.getResults().subscribe({
    next: (results) => {
        if (results?.results?.length && results?.fields?.length) {
            setTableResults(results);
        } else {
            setTableResults({ fields: [], results: [] });
        }
        setLoadingTable(false);
    },
    error: (err) => {
        console.error("Error fetching results:", err);
        setTableResults({ fields: [], results: [] });
        setLoadingTable(false);
    },
});

return () => {
    subscription.unsubscribe();
};`}
/>

<Snippet step="33" language="jsx"
    code={`import Table from '@splunk/react-ui/Table';`}
/>

<Snippet step="34" language="jsx"
    code={`// ==== VISUALIZATIONS ====
    
    {/* ===== Table ===== */}
<div style={vizContainer}>
    {loadingTable ? (
        <WaitSpinner size="medium" label="Loading dropdown data..." />
    ) : tableResults?.fields?.length && tableResults?.results?.length ? (
        <>
        <Table stripeRows>
            <Table.Head>
                {tableResults.fields?.map((field) => (
                    <Table.HeadCell key={field.name}>{field.name}</Table.HeadCell>
                ))}
            </Table.Head>
            <Table.Body>
                {tableResults.results?.map((result, rowIndex) => (
                    <Table.Row key={rowIndex}>
                        {tableResults.fields?.map((field) => (
                            <Table.Cell key={\`\${rowIndex}-\${field.name}\`}>
                                {result[field.name] || "N/A"}
                            </Table.Cell>
                        ))}
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
        </>
    ) : (
        <div>No table data available.</div>
    )}
</div>`}
/>

<Snippet step="39" language="jsx"
    code={`import Paginator from '@splunk/react-ui/Paginator';`}
/>

<Snippet step=40" language="jsx"
    code={`const [currentPage, setCurrentPage] = useState(1);`}
/>

<Snippet step="41" language="jsx"
    code={`const rowsPerPage = 11;`}
/>

<Snippet step="42" language="jsx"
    code={`const handlePageChange = (e, { page }) => {
    setCurrentPage(page);
};`}
/>

<Snippet step="43" language="jsx"
    code={`const startIndex = (currentPage - 1) * rowsPerPage;`}
/>

<Snippet step="44" language="jsx"
    code={`const displayedRows = tableResults.results.slice(startIndex, startIndex + rowsPerPage);`}
/>

<Snippet step="45" language="jsx"
    code={`displayedRows`}
/>

<Snippet step="46" language="jsx"
    code={`{tableResults.results.length > 0 && (

)}`}
/>

<Snippet step="47" language="jsx"
    code={`<Paginator
    current={currentPage}
    totalPages={Math.max(1, Math.ceil(tableResults.results.length / rowsPerPage))}
    onChange={handlePageChange}
/>`}
/>

<Snippet step="51" language="jsx"
    code={`<h1 style={sectionTitle}>Inventory</h1>`}
/>

<Snippet step="52" language="jsx"
    code={`<h2 style={labelStyle}>Coffee Shipments</h2>`}
/>

<Snippet step="53" language="jsx"
    code={`<Table.HeadCell>Order No.</Table.HeadCell>
<Table.HeadCell>Country</Table.HeadCell>
<Table.HeadCell>Roast</Table.HeadCell>
<Table.HeadCell>Schedule</Table.HeadCell>
<Table.HeadCell>Ship Date</Table.HeadCell>
<Table.HeadCell>Delivery Date</Table.HeadCell>
<Table.HeadCell>Amount (kg)</Table.HeadCell>
<Table.HeadCell>Warehouse</Table.HeadCell>`}
/>

<Snippet step="57" language="jsx"
    code={`const dropdownButtonStyle = {
    width: '170px',
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    paddingRight: '30px'
};

const arrowStyle = {
    position: 'absolute',
    right: '10px',
    top: '50%',
    width: '0',
    height: '0',
    borderLeft: '6px solid transparent',
    borderRight: '6px solid transparent',
    borderTop: '6px solid black',
    pointerEvents: 'none',
    transform: 'translateY(-50%)'
};

const menuItemStyle = {
    textAlign: 'left'
};


dropdownButtonStyle, arrowStyle, menuItemStyle`}
/>

<Snippet step="60" language="jsx"
    code={`import Dropdown from '@splunk/react-ui/Dropdown';
import Button from '@splunk/react-ui/Button';
import Menu from '@splunk/react-ui/Menu';`}
/>

<Snippet step="61" language="jsx"
    code={`,
dropdownButtonStyle,
menuItemStyle,
arrowStyle`}
/>

<Snippet step="63" language="jsx"
    code={`const [countryToken, setCountryToken] = useState('*');
const [displayCountry, setDisplayCountry] = useState('All Countries');
const [dropdownOptions, setDropdownOptions] = useState(['All Countries']);
const [loadingDropdown, setLoadingDropdown] = useState(false);
const handleMenuItemClick = (label) => {
    if (label === 'All Countries') {
        setCountryToken('*');
        setDisplayCountry('All Countries');
    } else {
        setCountryToken(label);
        setDisplayCountry(label);
    }
};`}
/>

<Snippet step="64" language="jsx"
    code={`// ===== Dropdown Search =====
useEffect(() => {
    setLoadingDropdown(true);

    const dropdownSearch = SearchJob.create({
        search: \`| inputlookup purchasesByCountry | fields Country\`,
        ...SEARCH_TIME_RANGE
    });

    const subscription = dropdownSearch.getResults().subscribe({
        next: (results) => {
            if (results && results.results && results.fields) {
                const countries = results.results.map(result => result.Country || 'Unknown');
                setDropdownOptions(['All Countries', ...countries]);
            } else {
                setDropdownOptions(['All Countries']);
            }
            setLoadingDropdown(false);
        },
        error: (err) => {
            console.error("Error fetching data:", err, "with countryToken:", countryToken || "Not provided");
            setDropdownOptions(['All Countries']);
            setTotalSystemCount(0);
            setLoadingDropdown(false);
        },
    });

    return () => {
        if (subscription) {
            subscription.unsubscribe();
        }
    };
}, [countryToken]);`}
/>

<Snippet step="65" language="jsx"
    code={`{/* ===== Dropdown Input ===== */}
<p style={labelStyle}>Select a Country:</p>
{loadingDropdown ? (
    <WaitSpinner size="small" label="Loading dropdown data..." />
) : (
    <Dropdown
        toggle={
            <Button style={dropdownButtonStyle}>
                {displayCountry}
                <span style={arrowStyle}></span>
            </Button>
    }>
        <Menu style={{ width: 270 }}>
            {dropdownOptions.map((country, index) => (
                <Menu.Item key={index} onClick={() => handleMenuItemClick(country)} style={menuItemStyle}>{country}</Menu.Item>
            ))}
        </Menu>
    </Dropdown>
)}
<p />`}
/>

<Snippet step="66" language="jsx"
    code={`| search Country="\${countryToken}"`}
/>

<Snippet step="67" language="jsx"
    code={`countryToken`}
/>

<Snippet step="68" language="jsx"
    code={`: {displayCountry}`}
/>


    </div>);

}

export default Lab4;
