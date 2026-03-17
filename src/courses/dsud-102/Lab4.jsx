import Snippet from './Snippet';

function Lab4() {

    return(<div style={{margin:50}}>

<Snippet step="3" language="bash"
    code={`cd ~/code
npx @splunk/create@10.2`}
/>

<Snippet step="5" language="bash"
    code={`yarn install`}
/>

<Snippet step="7" language="jsx"
    code={`Buttercup Coffee Company';
<Inventory />`}
/>

<Snippet step="10" language="jsx"
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
                    <Inventory />
                </StyledContainer>
            </>,`}
/>

<Snippet step="13" language="jsx"
    code={`import React, { useState, useEffect } from 'react';

import { StyledContainer } from './InventoryStyles';


// --- Type Definitions ---



// --- End Type Definitions ---


const Inventory = () => {

// ==== SEARCHES ====


// ==== Table Search ====   

useEffect(() => {

    console.log('Hello Table')

},[]);


    return (
      <StyledContainer>

      {/* ===== VISUALIZATIONS ===== */}

          Hello World!

      </StyledContainer>
   );
};

export default Inventory;
`}
/>
        
<Snippet step="16" language="jsx"
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
        flex-direction: column;
        gap: 16px; 
        width: 100%; 
\`;

export const PaginatorWrapper = styled.div\`
        width: 100%; 
        display: flex;
        justify-content: flex-start; 
\`;

export const containerStyle = styled.div\`
        width: 100%;
        height: auto;
        overflow-x: hidden;
\`;`}
/>
        
<Snippet step="18" language="jsx"
    code={`yarn install
yarn build
yarn start`}
/>

<Snippet step="19" language="bash"
    code={`/opt/splunk/bin/splunk restart`}
/>

<Snippet step="24" language="jsx"
    code={`type RawResults = {
    fields?: Array<string | { name: string }>;
    results?: Array<Record<string, unknown>>;
};

type SearchResultRow = Record<string, unknown>;

interface SearchResultField {
    name: string;
}

interface InventoryTableState {
    fields: SearchResultField[];
    results: SearchResultRow[];
}`}
/>

<Snippet step="25" language="jsx"
    code={`const SearchJob = require('@splunk/search-job').default;`}
/>

<Snippet step="26" language="jsx"
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

<Snippet step="27" language="jsx"
    code={`const SEARCH_TIME_RANGE = { earliest_time: "-24h@h", latest_time: "now" };`}
/>

<Snippet step="28" language="jsx"
    code={`// Table Data State
const [tableResults, setTableResults] = useState<InventoryTableState>({ fields: [], results: [] });
const [loadingTable, setLoadingTable] = useState(true);
const [activeJob, setActiveJob] = useState<any>(null);`}
/>

<Snippet step="29" language="jsx"
    code={`// Pagination State
const [totalResults, setTotalResults] = useState(0);
const [currentPage, setCurrentPage] = useState(1);
const rowsPerPage = 11;`}
/>

<Snippet step="30" language="jsx"
    code={`// Event Handlers
const handlePageChange = (_event: React.SyntheticEvent, data: { page: number }) => {
    setCurrentPage(data.page);
};`}
/>

<Snippet step="31" language="jsx"
    code={`setLoadingTable(true);

  const tableSearch = SearchJob.create({
      search: \`index=bccscm sourcetype=scm:logistics | \` +
        'table orderNo, Country, Roast, schedule, shipDate, deliveryDate, Amount, warehouse',
      ...SEARCH_TIME_RANGE,
  });

  setActiveJob(tableSearch);

  return () => {
      tableSearch.cancel?.();
  };`}
/>

<Snippet step="32" language="jsx"
    code={`useEffect(() => {
  if (!activeJob) return;

  setLoadingTable(true);

  const progressSub = activeJob.getProgress().subscribe((data: any) => {
      const resultCount = data?.content?.resultCount;
      if (typeof resultCount === 'number') {
          setTotalResults(resultCount);
      }
  });

  const resultsSub = activeJob
     .getResults({
         count: rowsPerPage,
         offset: (currentPage - 1) * rowsPerPage,
     })
     .subscribe({
       next: (rawResults: RawResults) => {
         const processedFields: SearchResultField[] = (rawResults.fields || []).map((field) =>
           typeof field === 'string' ? { name: field } : field
        );

       const processedResults: SearchResultRow[] = rawResults.results || [];

       setTableResults({ fields: processedFields, results: processedResults });
       setLoadingTable(false);
      },
      error: (err: Error) => {
       console.error('Error fetching results:', err);
       setTableResults({ fields: [], results: [] });
       setLoadingTable(false);
      },
  });

 return () => {
  progressSub.unsubscribe();
  resultsSub.unsubscribe();
 };
}, [activeJob, currentPage, rowsPerPage]);`}
/>

<Snippet step="33" language="jsx"
    code={`const totalPages = Math.max(1, Math.ceil(totalResults / rowsPerPage));`}
/>

<Snippet step="34" language="jsx"
    code={`import WaitSpinner from '@splunk/react-ui/WaitSpinner';
import Table from '@splunk/react-ui/Table';
import Paginator from '@splunk/react-ui/Paginator';`}
/>

<Snippet step="35" language="jsx"
    code={`import {
    StyledContainer,
    VizContainer,
    SectionTitle,
    Label,
    VizRow,
} from './InventoryStyles'`}
/>

<Snippet step="36" language="jsx"
    code={`const startIndex = (currentPage - 1) * rowsPerPage;`}
/>

<Snippet step="43" language="jsx"
    code={`  <SectionTitle>Inventory</SectionTitle>
   <VizRow>
   {/* ===== Table ===== */}
    <VizContainer style={{ flex: 1, minWidth: 0 }}>
      <Label>Coffee Shipments</Label>
      {loadingTable ? (
          <WaitSpinner size="medium" />
        ) : tableResults.fields.length > 0 ? (
          <>
            <Table stripeRows>
              <Table.Head>
               {tableResults.fields.map((field) => (
                 <Table.HeadCell key={field.name}>{field.name}</Table.HeadCell>
                ))}
              </Table.Head>

              <Table.Body>
                  {tableResults.results.map((result, rowIndex) => (
                      <Table.Row key={\`row-\${rowIndex}\`}>
                        {tableResults.fields.map((field) => (
                            <Table.Cell key={\`cell-\${rowIndex}-\${field.name}\`}>
                                   {String(result[field.name] ?? 'N/A')}
                                  </Table.Cell>
                            ))}
                      </Table.Row>
                  ))}
              </Table.Body>
          </Table>

         <div style={{ marginTop: 12 }}>
           <Paginator
               current={currentPage}
               totalPages={Math.max(1, Math.ceil(totalResults / rowsPerPage))}
                onChange={handlePageChange}
            />
         </div>
       </>
     ) : (
    <div>No table data available.</div>
   )}
   </VizContainer>
  </VizRow>`}
/>

<Snippet step="40" language="jsx"
    code={`<Table.HeadCell>Order No.</Table.HeadCell>
     <Table.HeadCell>Country</Table.HeadCell>
     <Table.HeadCell>Roast</Table.HeadCell>
     <Table.HeadCell>Schedule</Table.HeadCell>
     <Table.HeadCell>Ship Date</Table.HeadCell>
     <Table.HeadCell>Delivery Date</Table.HeadCell>
     <Table.HeadCell>Amount (kg)</Table.HeadCell>
     <Table.HeadCell>Warehouse</Table.HeadCell>
`}
/>

<Snippet step="44" language="jsx"
    code={`, useMemo`}
/>

<Snippet step="45" language="jsx"
    code={`import Select from '@splunk/react-ui/Select';`}
/>

<Snippet step="46" language="jsx"
    code={`// Dropdown state
const [countryToken, setCountryToken] = useState('*');
const [countryOptions, setCountryOptions] = useState<string[]>([]);

const normalizedCountry = useMemo(() => countryToken.trim() || '*', [countryToken]);`}
/>

<Snippet step="47" language="jsx"
    code={`const handleCountryChange = (_event: React.SyntheticEvent, { value }: { value: string | number | boolean }) => {
     setCountryToken(String(value));
     setCurrentPage(1);
};`}
/>

<Snippet step="48" language="jsx"
    code={`// ===== Dropdown Search =====

useEffect(() => {
   const job = SearchJob.create({
    search: '| inputlookup purchasesByCountry | fields Country | dedup Country | sort Country',
    earliest_time: '0',
    latest_time: 'now',
   });

   const sub = job.getResults({ count: 1000 }).subscribe({
      next: (raw: RawResults) => {
         const values = (raw.results || [])
         .map((r: any) => String(r.Country ?? '').trim())
         .filter((v) => v.length > 0);

         setCountryOptions(values);
          },
      error: (err: Error) => {
           console.error('Error loading countries:', err);
           setCountryOptions([]);
      },
   });

   return () => {
      sub.unsubscribe();
      job.cancel?.();
   };
}, []);`}
/>

<Snippet step="49" language="jsx"
    code={`{/* ===== Dropdown Input ===== */}

     <Label>Select a Country:</ Label>
         <Select
            value={countryToken}
            onChange={handleCountryChange}
            style={{ width: 150, marginBottom: 16 }}
          >
           <Select.Option label="All Countries" value="*" />
                {countryOptions.map((c) => (
                    <Select.Option key={c} label={c} value={c} />
                ))}
         </Select>`}
/>

<Snippet step="50" language="jsx"
    code={`
 setTotalResults(0);

 const filter =
     countryToken === '*'
         ? ''
         : \`| search Country="\${countryToken.replace(/"/g, '\\\\"')}"\`; 

 const tableSearch = SearchJob.create({
    search: \`index=bccscm sourcetype=scm:logistics \${filter}\`}
`}/>

<Snippet step="51" language="jsx"
    code={`countryToken`}
/>


    </div>);

}

export default Lab4;