import Snippet from './Snippet';

function Lab3() {

    return(<div style={{margin:50}}>

<Snippet step="3" language="jsx"
    code={`, 
    "dependencies": {
    "@splunk/react-icons": "^5.8.0",
    "@splunk/react-ui": "5.8.0",
    "@splunk/search-job": "3.1.0",
    "@splunk/themes": "1.5.0",
    "@splunk/visualization-context": "28.4.0",
    "@splunk/visualizations": "28.4.0",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "react-is": "^18.2.0",
    "styled-components": "5.3.11"
  },
  "resolutions": {
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "@types/react": "18.3.28",
    "@types/react-dom": "18.3.7"
  }`}
/>

<Snippet step="5" language="bash"
    code={`yarn install`}
/>

<Snippet step="7" language="jsx"
    code={`import { createGlobalStyle } from 'styled-components';
import { variables } from '@splunk/themes';

const GlobalStyle = createGlobalStyle\`
  html, body {
    background-color: \${variables.white} !important;
  }
\`;

getUserTheme()
    .then((theme) => {
        layout(
            <>
                <GlobalStyle />
                <StyledContainer>
                    <Overview />
                </StyledContainer>
            </>,`}
/>

<Snippet step="10" language="jsx"
    code={`import React, { useState, useEffect } from 'react';

import { StyledContainer } from './OverviewStyles';

// --- Type Definitions ---


// --- End Type Definitions ---

const Overview = () => {

// ==== SEARCHES ====


// ==== Column Chart Search ====

useEffect(() => {

   console.log('Hello Column Chart')

},[]);  


    return (
      <StyledContainer>

      {/* ===== VISUALIZATIONS ===== */}

          Hello World!

      </StyledContainer>
   );
};

export default Overview;`}
/>


<Snippet step="13" language="jsx"
    code={`import styled from 'styled-components';
import { variables, mixins } from '@splunk/themes';

export const StyledContainer = styled.div\`
        \${mixins.reset('inline')};
        display: block;
        font-size: \${variables.fontSizeLarge};
        flex-direction: row;
        margin: \${variables.spacingLarge};
        width: 80vw;
        padding-top: 0 !important;
        padding-left: 40px;
\`;

export const SectionTitle = styled.h2\`
        font-size: 24px;
        margin: 10; 
\`;

export const VizContainer = styled.div\`
        flex: 1;
        height: 100%;
        width: 100%;
        border: 1px solid #d3d3d3;
        border-radius: 4px;
        padding: 10px;
        overflow-x: auto;
\`;

export const Label = styled.p\`
        margin: 0;
        font-weight: bold;
        font-size: 14px;
\`;

export const VizRow = styled.div\`
        display: flex; 
        height: 100%; 
        gap: 20px; 
        margin-bottom: 20px;
\`;

export const containerStyle = styled.div\`
    width: 100%; 
    height: auto;
    overflow-x: hidden;
\`;`}
/>

<Snippet step="15" language="bash"
    code={`yarn build
yarn start`}
/>

<Snippet step="19" language="jsx"
    code={`, useRef, useMemo`}
/>

<Snippet step="20" language="jsx"
    code={`interface SearchResultField {
    name: string;
}

interface ColumnChartResultRow {
    Country: string;
    KilosPurchased: number;
}

interface SplunkSearchResults<T> {
    fields: SearchResultField[];
    results: T[];
}

type RawResults = {
    fields?: Array<string | { name: string }>;
    results?: Array<Record<string, unknown>>;
};

type AnyRow = Record<string, unknown>;`}
/>

<Snippet step="21" language="jsx"
    code={`const SearchJob = require('@splunk/search-job').default`}
/>

<Snippet step="22" language="jsx"
    code={`const normalizeFields = (rawFields?: Array<string | { name: string }>): SearchResultField[] => {
    if (!rawFields) {
        return [];
    }
    return rawFields.map(field => {
        if (typeof field === 'string') {
            return { name: field };
        }
        return field;
    });
};`}
/>

<Snippet step="23" language="jsx"
    code={`const SEARCH_TIME_RANGE = { earliest_time: "-24h@h", latest_time: "now" };`}
/>

<Snippet step="24" language="jsx"
    code={`// Column Chart Data State
const [columnChartResults, setColumnChartResults] = useState<SplunkSearchResults<ColumnChartResultRow>>({ fields: [], results: [] });
const [loadingColumnChart, setLoadingColumnChart] = useState(true);`}
/>

<Snippet step="25" language="jsx"
    code={`const columnMeasureRef = useRef<HTMLDivElement | null>(null);
const [columnWidth, setColumnWidth] = useState(0);
const safeColumnWidth = Math.max(400, columnWidth);`}
/>

<Snippet step="26" language="jsx"
    code={`const vizData = useMemo(() => ({
    fields: ['Country', 'KilosPurchased'],
    columns: [
        columnChartResults.results.map((r) => r.Country),
        columnChartResults.results.map((r) => r.KilosPurchased),
    ],
}), [columnChartResults]);`}
/>

<Snippet step="27" language="jsx"
    code={`useEffect(() => {
  const observers: Array<ResizeObserver> = []; 
  const observeElement = (el: HTMLDivElement | null, setter: (w: number) => void) => {
      if (!el) return;
      const ro = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const w = Math.floor(entry.contentRect.width);
          setter(w);
        }
      });
      ro.observe(el);
      observers.push(ro);
      setter(Math.floor(el.clientWidth));
    };

    observeElement(columnMeasureRef.current, setColumnWidth);

    return () => {
      observers.forEach((ro) => {
        ro.disconnect();
      });
    };
}, []);`}
/>

<Snippet step="28" language="jsx"
    code={`setLoadingColumnChart(true);
const columnChartSearch = SearchJob.create({
   search:
     'index=bccscm sourcetype=scm:logistics | chart sum(Amount) as KilosPurchased over Country',
      ...SEARCH_TIME_RANGE,
   });
   if (typeof (columnChartSearch as any).start === 'function') {
      (columnChartSearch as any).start();
   }
   const subscription = columnChartSearch.getResults().subscribe({
    next: (raw: unknown) => {
     const rawResults = raw as RawResults;
         if (rawResults && Array.isArray(rawResults.results)) {
          const normalizedFields = normalizeFields(rawResults.fields);
      const mappedResults: SplunkSearchResults<ColumnChartResultRow> =   {
       fields: normalizedFields,
       results: rawResults.results.map((r) => ({
       Country: String(r?.Country ?? ''),
          KilosPurchased: Number(
          (r?.KilosPurchased as number | string | undefined) ?? 0
          ),
       })),
      };
      setColumnChartResults(mappedResults);
    } else {
      setColumnChartResults({ fields: [], results: [] });
    }
    setLoadingColumnChart(false);
    },
    error: (err: unknown) => {
      console.error('Error fetching column chart results:', err);
         setColumnChartResults({ fields: [], results: [] });
          setLoadingColumnChart(false);
    },
 });

return () => {
   subscription?.unsubscribe();
   (columnChartSearch as any)?.cancel?.();
};`}
/>

<Snippet step="29" language="jsx"
    code={`import Column from '@splunk/visualizations/Column';
import WaitSpinner from '@splunk/react-ui/WaitSpinner';`}
/>


<Snippet step="30" language="jsx"
    code={`import {
    StyledContainer,
    VizContainer,
    SectionTitle,
    Label,
    VizRow,
} from './OverviewStyles'

`}/>

<Snippet step="31" language="jsx"
    code={`<SectionTitle>Overview</SectionTitle>

    <VizRow>

     {/* ===== Column Chart ===== */}
     <VizContainer style={{ flex: 1,  minWidth: 0 }}>
       <div ref={columnMeasureRef} style={{ width: '100%' }}>
         <Label>Coffee Shipments</Label>
         {loadingColumnChart ? (
            <WaitSpinner size="medium" />
         ) : (
            <Column
              mode="view"
              width={safeColumnWidth}
              height={400}
              options={{
                title: 'Sales by Country',
                yAxisTitleVisibility: 'hide',
                xAxisTitleVisibility: 'hide',
                legendDisplay: 'bottom',
              }}
              dataSources={{
                primary: {
                  requestParams: {},
                  meta: {},
                  data: vizData,
                },
              }}
            />
           )}
         </div>
     </VizContainer>

    </VizRow>`}
/>

    </div>);

}

export default Lab3;