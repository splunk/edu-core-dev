import Snippet from './Snippet';

function Lab3() {

    return(<div style={{margin:50}}>

<Snippet step="2" language="bash"
    code={`cd ~/code
yarn add -W react@^18 react-dom@^18 @splunk/react-ui@^5 @splunk/themes@^1 styled-components@^5 @splunk/search-job@^3 @splunk/visualization-context@^27 @splunk/visualizations@^27`}
/>

<Snippet step="3" language="jsx"
    code={`yarn run build
yarn run start`}
/>

<Snippet step="4" language="jsx"
    code={`/opt/splunk/bin/splunk restart`}
/>

<Snippet step="6" language="jsx"
    code={`import React from 'react';
import { StyledContainer } from './OverviewStyles';

const Overview = () => {

    return (
        <StyledContainer>
          Hello World!
        </StyledContainer>
    );
};

export default Overview;`}
/>

<Snippet step="9" language="jsx"
    code={`import styled from 'styled-components';
import { variables, mixins } from '@splunk/themes';

const StyledContainer = styled.div\`
    \${mixins.reset('inline')};
    display: block;
    font-size: \${variables.fontSizeLarge};
    flex-direction: row;
    margin: \${variables.spacingLarge};
    width: 80vw;
\`;

const sectionTitle = {
    fontSize: '24px',
};

const vizContainer = {
    flex: '1',
    height: '100%',
    width: '100%',
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

<Snippet step="12" language="jsx"
    code={`, { useState, useEffect }`}
/>

<Snippet step="13" language="jsx"
    code={`import SearchJob from '@splunk/search-job';`}
/>

<Snippet step="14" language="jsx"
    code={`, vizContainer, sectionTitle, labelStyle`}
/>

<Snippet step="15" language="jsx"
    code={`const SEARCH_TIME_RANGE = { earliest_time: "-24h@h", latest_time: "now" };`}
/>

<Snippet step="16" language="jsx"
    code={`// ==== SEARCHES ====
    
// ==== Column Chart Search ====
useEffect(() => {
    console.log('hello')
},[]);`}
/>

<Snippet step="21" language="jsx"
    code={`const [columnChartResults, setColumnChartResults] = useState({ fields: [], results: [] });
const [loadingColumnChart, setLoadingColumnChart] = useState(true);`}
/>

<Snippet step="22" language="jsx"
    code={`setLoadingColumnChart(true);
const columnChartSearch = SearchJob.create({
    search: \`index=bccscm sourcetype=scm:logistics | chart sum(Amount) AS KilosPurchased by Country\`,
    ...SEARCH_TIME_RANGE
});

const subscription = columnChartSearch.getResults().subscribe({
    next: (results) => {
        if (results && results.results) {
            setColumnChartResults(results);
        } else {
            setColumnChartResults({ fields: [], results: [] });
        }
        setLoadingColumnChart(false);
    },
    error: (err) => {
        console.error("Error fetching column chart results:", err);
        setColumnChartResults({ fields: [], results: [] });
        setLoadingColumnChart(false);
    },
});

return () => {
    if (subscription) {
        subscription.unsubscribe();
    }
    if (columnChartSearch) {
        columnChartSearch.cancel();
    }
};`}
/>

<Snippet step="23" language="jsx"
    code={`import Column from '@splunk/visualizations/Column';
import WaitSpinner from '@splunk/react-ui/WaitSpinner';`}
/>

<Snippet step="24" language="jsx"
    code={`// ==== VISUALIZATIONS ====

return (
<StyledContainer>

<h1 style={sectionTitle}>Overview</h1>

{/* ===== Column Chart ===== */}
<div style={vizContainer}>
    <h2 style={labelStyle}>Coffee Shipments</h2>
    {loadingColumnChart ? (
        <WaitSpinner size="medium" label="Loading column chart data..." />
    ) : (
        <Column
            options={{
                title: 'Sales by Country',
                yAxisTitleVisibility: 'hide',
                xAxisTitleVisibility: 'hide',
                legendDisplay: 'bottom',
            }}
            dataSources={{
                primary: {
                    data: {
                        fields: ['Country', 'KilosPurchased'],
                        columns:
                            columnChartResults.results?.length > 0 ? [
                                columnChartResults.results.map((result) => result.Country),
                                columnChartResults.results.map((result) => result.KilosPurchased),
                            ] : [[], []],
                    }
                }
            }}
        />
    )}
</div>`}
/>

<Snippet step="26" language="jsx"
    code={`yarn run build
yarn run start`}
/>

<Snippet step="27" language="jsx"
    code={`/opt/splunk/bin/splunk restart`}
/>

<Snippet step="30" language="jsx"
    code={`const [barChartResults, setBarChartResults] = useState({ fields: [], results: [] });
const [loadingBarChart, setLoadingBarChart] = useState(true);`}
/>

<Snippet step="31" language="jsx"
    code={`// ==== Bar Chart Search ====
    
useEffect(() => {
    console.log('hello')
},[]);`}
/>

<Snippet step="36" language="jsx"
    code={`import Bar from '@splunk/visualizations/Bar';`}
/>

<Snippet step="37" language="jsx"
    code={`setLoadingBarChart(true);
const barChartSearch = SearchJob.create({
    search: \`index=bccscm sourcetype=scm:logistics | chart count(inventory) AS Inventory by warehouse, Roast\`,
    ...SEARCH_TIME_RANGE
});

const subscription = barChartSearch.getResults().subscribe({
    next: (results) => {
        if (results && results.results) {
            setBarChartResults(results);
        } else {
            setBarChartResults({ fields: [], results: [] });
        }
        setLoadingBarChart(false);
    },
    error: (err) => {
        console.error("Error fetching bar chart results:", err);
        setBarChartResults({ fields: [], results: [] });
        setLoadingBarChart(false);
    },
});

return () => {
    if (subscription) {
        subscription.unsubscribe();
    }
    if (barChartSearch) {
        barChartSearch.cancel();
    }
};`}
/>

<Snippet step="38" language="jsx"
    code={`{/* ===== Bar Chart ===== */}
    
<div style={vizContainer}>

    <h2 style={labelStyle}>Stock Available</h2>
    {loadingBarChart ? (
        <WaitSpinner size="medium" label="Loading bar chart data..." />
    ) : (
        <Bar
            options={{
                title: 'Roasts by Location',
                legendDisplay: 'bottom',
            }}
            dataSources={{
                primary: {
                    data: {
                        fields: [
                            { name: 'warehouse', },
                            { name: 'Arabica', },
                            { name: 'Excelsa', },
                            { name: 'Robusta', }
                        ],
                        columns:
                            barChartResults.results?.length > 0 ? [
                                barChartResults.results.map((result) => result.warehouse),
                                barChartResults.results.map((result) => parseFloat(result.Arabica) || 0),
                                barChartResults.results.map((result) => parseFloat(result.Excelsa) || 0),
                                barChartResults.results.map((result) => parseFloat(result.Robusta) || 0),
                            ] : [[], [], [], []],
                    }
                }
            }}
        />
    )}
</div>`}
/>

<Snippet step="41" language="jsx"
    code={`const vizRowStyle = {
    display: 'flex',
    height: '100%',
    gap: '20px',
    marginBottom: '20px',
};

export {
   StyledContainer,
   sectionTitle,
   vizContainer,
   labelStyle,
   vizRowStyle,
};`}
/>

<Snippet step="44" language="jsx"
    code={`, vizRowStyle`}
/>

<Snippet step="45" language="jsx"
    code={`<div style={vizRowStyle}>

</div>`}
/>



    </div>);

}

export default Lab3;
