import Snippet from "./Snippet";

function Lab5a() {
  return (
    <div style={{ margin: 50 }}>
      <Snippet
        step="3"
        language="bash"
        code={`cd ~/code
npx @splunk/create@10.2`}
      />

      <Snippet
        step="6"
        language="jsx"
        code={`"extends": "../../tsconfig.base.json",
  "include": [
    "src/**/*",
    "../types/declarations.d.ts"`}
      />

      <Snippet
        step="9"
        language="jsx"
        code={`declare module '@types/navigation' {
    export interface NavigationState {
        activeTab: string;
        mapCenter: [number, number];
        zoom: number;
    }
}
declare module '@splunk/visualizations/Map' {
    import { ComponentType } from 'react';
    const Map: ComponentType<any>;
    export default Map;
}`}
      />

      <Snippet
        step="11"
        language="bash"
        code={`cd ~/code
        yarn install`}
      />

      <Snippet
        step="13"
        language="jsx"
        code={`import React, { useEffect } from 'react';

import { StyledContainer } from './ShippingStyles';

// --- Type Definitions ---


// --- End Type Definitions ---


const Shipping = () => {


// ==== SEARCHES ====


// ==== Map Search ====

useEffect(() => {

   console.log('Hello Map')

},[]);  


    return (
      <StyledContainer>

      {/* ===== VISUALIZATIONS ===== */}

          Hello World!

      </StyledContainer>
   );
};

export default Shipping;`}
      />

      <Snippet
        step="16"
        language="jsx"
        code={`import styled from 'styled-components';
import { variables, mixins } from '@splunk/themes';

export const StyledContainer = styled.div/\`
        \${mixins.reset('inline')};
        display: block;
        font-size: \${variables.fontSizeLarge};
        flex-direction: row;
        margin: \${variables.spacingLarge};
        width: 80vw;
        padding-top: 0 !important;
        padding-left: 40px;
/\`;

export const SectionTitle = styled.h2/\`
        font-size: 24px;
        margin: 10; 
/\`;

export const VizContainer = styled.div/\`
        flex: 1;
        height: 100%;
        width: 100%;
        border: 1px solid #d3d3d3;
        border-radius: 4px;
        padding: 10px;
        overflow-x: auto;
/\`;`}
      />

      <Snippet
        step="19"
        language="jsx"
        code={`import Ship from '@splunk/react-icons/Ship';


| 'shipping'


, shippingContent 

<TabLayout.Panel panelId="shipping" label="Shipping" icon={<Ship />}>
            {shippingContent}
        </TabLayout.Panel>`}
      />

      <Snippet
        step="22"
        language="jsx"
        code={`shippingContent: <div>Shipping content</div>,`}
      />

      <Snippet
        step="25"
        language="jsx"
        code={`import Inventory from '@splunk/inventory';
import Shipping from '@splunk/shipping';

 | 'shipping'


location.pathname.includes('/shipping')
    ? 'shipping'
    :

shippingContent={<Shipping />}`}
      />

      <Snippet
        step="28"
        language="jsx"
        code={`import React from 'react';
import layout from '@splunk/react-page/18';
import { getUserTheme } from '@splunk/splunk-utils/themes';
import { HashRouter } from 'react-router-dom';
import AppShell from '../../AppShell';

getUserTheme().then((theme) => {
    layout(
        <HashRouter>
            <AppShell />
        </HashRouter>,
        { theme, hideAppBar: true }
    );
});`}
      />

      <Snippet
        step="30"
        language="bash"
        code={`yarn build
yarn start`}
      />

      <Snippet
        step="31"
        language="bash"
        code={`/opt/splunk/bin/splunk restart`}
      />

      <Snippet
        step="34"
        language="jsx"
        code={`, useState, useMemo 

import { MapContextProvider, testTileConfig } from '@splunk/visualization-context/MapContext';
import WaitSpinner from '@splunk/react-ui/WaitSpinner';
import SearchJob from '@splunk/search-job';	
import type { SearchJobRawResults } from '@splunk/search-job';`}
      />

      <Snippet
        step="35"
        language="jsx"
        code={`type MapField = { name: string; type?: string };

const SEARCH_TIME_RANGE = { earliest_time: "-24h@h", latest_time: "now" };`}
      />

      <Snippet
        step="36"
        language="jsx"
        code={`const [loadingMap, setLoadingMap] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [rawFields, setRawFields] = useState<MapField[]>([]);
    const [rawColumns, setRawColumns] = useState<unknown[][]>([]);
    const [resultCount, setResultCount] = useState(0);`}
      />

      <Snippet
        step="37"
        language="jsx"
        code={`    const safeConfig = useMemo(() => {
        const defaultConfig = {
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution: '© OpenStreetMap contributors',
            maxZoom: 18,
            minZoom: 1,
            subdomains: ['a', 'b', 'c'],
            zoomConstraints: {
                minZoom: 1,
                maxZoom: 18,
            },
        };
        return testTileConfig || defaultConfig;
    }, []);

    const contextValue = useMemo(
        () => ({
            defaultTileConfig: safeConfig,
        }),
        [safeConfig]
    );
`}
      />

      <Snippet
        step="38"
        language="jsx"
        code={`   let isMounted = true;
   setLoadingMap(true);
   setError(null);

   const mapSearch = SearchJob.create({
       search:
         'index=bccscm sourcetype=scm:logistics vendor=* ' +
         '| eval shipDate=strftime(strptime(shipDate, "%Y-%m-%d"), "%Y-%m") ' +
         '| eval location_info=Roast+", shipDate: "+shipDate ' +
         '| geostats latfield=vendorLatitude longfield=vendorLongitude sum(Amount) by location_info',
        ...SEARCH_TIME_RANGE,
    });

   const subscription = mapSearch.getResults().subscribe({
       next: (results: SearchJobRawResults) => {
           const fields: MapField[] = (results.fields ?? []).map((f) =>
               typeof f === 'string' ? { name: f } : { name: f.name }
           );

           const rows = (results.results ?? []) as Record<string, unknown>[];
           const fieldNames = fields.map((f) => f.name);

           const columns = fieldNames.map((name) =>
               rows.map((row) => {
                   const val = row[name];
                   return val ?? null;
               })
           );

           if (!isMounted) return;
           setRawFields(fields);
           setRawColumns(columns);
           setResultCount(rows.length);
           setLoadingMap(false);
       },
       error: (err: Error) => {
           if (!isMounted) return;
           setError(err);
           setLoadingMap(false);
       },
     });

    return () => {
        isMounted = false;
        subscription.unsubscribe();
    };
 }, []);`}
      />

      <Snippet
        step="39"
        language="jsx"
        code={`import Map from '@splunk/visualizations/Map';

, SectionTitle, VizContainer`}
      />

      <Snippet
        step="40"
        language="jsx"
        code={`<SectionTitle>Shipping</SectionTitle>

 {/* ===== VISUALIZATIONS ===== */}
 <VizContainer>
  <MapContextProvider value={contextValue}>
   {loadingMap ? (
    <div role="status" aria-live="polite">
     <WaitSpinner size="medium" />
     <div>Loading map data...</div>
    </div>
   ) : (
       <>
         <Map
             options={{
                center: [14.1615, -21.0599],
                zoom: 1.2,
             }}
             dataSources={{
                primary: {
                  requestParams: {
                    offset: 0,
                  },
                  data: {
                    fields: rawFields,
                    columns: rawColumns,
                  },
                  meta: {
                    totalCount: resultCount,
                    done: true,
                  },
               },
             }}
             width="100%"    
             height="600px"
          />

          {!resultCount && (
             <div
                  style={{
                     position: 'absolute',
                     top: '50%',
                     left: '50%',
                     transform: 'translate(-50%, -50%)',
                  }}
             >
                  No data available 
            </div>
          )}
        </>
     )}

     {error && <div>Error loading map data: {error.message || 'Unknown error occurred.'}</div>}
   </MapContextProvider>
  </VizContainer>`}
      />

      <Snippet
        step="42"
        language="bash"
        code={`yarn build
yarn start`}
      />

      <Snippet
        step="43"
        language="jsx"
        code={`/opt/splunk/bin/splunk restart`}
      />

     
    </div>
  );
}

export default Lab5a;