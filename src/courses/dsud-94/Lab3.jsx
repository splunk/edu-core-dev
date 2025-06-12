import Snippet from './Snippet';

function Lab3() {

    return(<div style={{margin:50}}>

<Snippet step="2" language="bash"
    code={`cd ~/code
yarn add @splunk/search-job -W
yarn add @splunk/visualizations -W
yarn add @splunk/visualization-context -W`}
/>

<Snippet step="4" language="jsx"
    code={`import React from 'react';
import { StyledContainer } from './OverviewStyles';
const Overview = () => {
    return (
        <StyledContainer>
        </StyledContainer>
    );
};
export default Overview;`}
/>

<Snippet step="7" language="jsx"
    code={`import styled from 'styled-components';
import { variables, mixins } from '@splunk/themes';

const StyledContainer = styled.div\`
    \${mixins.reset('inline')};
    display: block;
    width: '100%',
    font-size: \${variables.fontSizeLarge};
    margin-top: '6px';
    margin-bottom: \${variables.spacingXXLarge};
    margin-left: \${variables.spacingXXLarge};
    margin-right: \${variables.spacingXXLarge};
    width: 80vw;
\`;

const sectionTitle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
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

<Snippet step="10" language="jsx"
    code={`, { useState, useEffect }`}
/>

<Snippet step="11" language="jsx"
    code={`import SearchJob from '@splunk/search-job';`}
/>

<Snippet step="12" language="jsx"
    code={`, vizContainer, sectionTitle, labelStyle`}
/>

<Snippet step="13" language="jsx"
    code={`const SEARCH_TIME_RANGE = { earliest_time: "-24h@h", latest_time: "now" };`}
/>

<Snippet step="14" language="jsx"
    code={`// ==== SEARCHES ====
// ==== Column Chart Search ====
useEffect(() => {
    console.log('hello')
},[]);`}
/>

<Snippet step="19" language="jsx"
    code={`import Column from '@splunk/visualizations/Column';
import WaitSpinner from '@splunk/react-ui/WaitSpinner';`}
/>

<Snippet step="20" language="jsx"
    code={`const [columnChartResults, setColumnChartResults] = useState({ fields: [], results: [] });
const [loadingColumnChart, setLoadingColumnChart] = useState(true);`}
/>

<Snippet step="21" language="jsx"
    code={`setLoadingColumnChart(true);
const columnChartSearch = SearchJob.create({
    search: \`index=bccscm | chart sum(Amount) AS KilosPurchased by Country\`,
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

<Snippet step="22" language="jsx"
    code={`// ==== VISUALIZATIONS ====

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

<Snippet step="25" language="js"
    code={`resolve: {
    alias: {
        '@splunk/overview': path.resolve(__dirname, '../overview/src/Overview.jsx'),
    },
    extensions: ['.js', '.jsx'],
},`}
/>

<Snippet step="29" language="jsx"
    code={`const [barChartResults, setBarChartResults] = useState({ fields: [], results: [] });
const [loadingBarChart, setLoadingBarChart] = useState(true);`}
/>

<Snippet step="30" language="jsx"
    code={`// ==== Bar Chart Search ====
useEffect(() => {
    console.log('hello')
},[]);`}
/>

<Snippet step="35" language="jsx"
    code={`import Bar from '@splunk/visualizations/Bar';`}
/>

<Snippet step="36" language="jsx"
    code={`setLoadingBarChart(true);
const barChartSearch = SearchJob.create({
    search: \`index=bccscm | chart count(inventory) AS Inventory by warehouse, Roast\`,
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

<Snippet step="37" language="jsx"
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

<Snippet step="40" language="jsx"
    code={`const vizRowStyle = {
    display: 'flex',
    height: '100%',
    gap: '20px',
    marginBottom: '20px',
};

vizRowStyle,`}
/>

<Snippet step="43" language="jsx"
    code={`, vizRowStyle`}
/>

<Snippet step="44" language="jsx"
    code={`<div style={vizRowStyle}>

<div>`}
/>



    </div>);

}

export default Lab3;
