import Snippet from "./Snippet";

function Lab5a() {
  return (
    <div style={{ margin: 50 }}>
      <Snippet
        step="2"
        language="bash"
        code={`cd ~/code
splunk-create`}
      />

      <Snippet
        step="6"
        language="jsx"
        code={`import React from 'react';
import { StyledContainer } from './ShippingStyles';

const Shipping = () => {

	return (
		<StyledContainer>
            Hello World!
		</StyledContainer>
	);
};
export default Shipping;`}
      />

      <Snippet
        step="9"
        language="jsx"
        code={`import styled from 'styled-components';
import { variables, mixins } from '@splunk/themes';

const StyledContainer = styled.div\`
	\${mixins.reset('inline')};
	display: block;
	font-size: \${variables.fontSizeLarge};
	margin: \${variables.spacingLarge};
\`;

const vizContainer = {
	flex: '1',
	border: '1px solid #d3d3d3',
	overflowX: 'auto',
	width: '1200px',
	height: '600px',
	position: 'relative',
};

const sectionTitle = {
	fontSize: '24px',
};

export {
	StyledContainer,
	vizContainer,
	sectionTitle,
};`}
      />

      <Snippet
        step="12"
        language="jsx"
        code={`, { useMemo, useState, useEffect }`}
      />

      <Snippet
        step="13"
        language="jsx"
        code={`import Map from '@splunk/visualizations/Map';
import { MapContextProvider, testTileConfig } from '@splunk/visualization-context/MapContext';`}
      />

      <Snippet
        step="14"
        language="jsx"
        code={`import SearchJob from '@splunk/search-job';
import WaitSpinner from '@splunk/react-ui/WaitSpinner';`}
      />

      <Snippet step="15" language="jsx" code={`, vizContainer, sectionTitle`} />

      <Snippet
        step="16"
        language="jsx"
        code={`const SEARCH_TIME_RANGE = { earliest_time: "-24h@h", latest_time: "now" };`}
      />

      <Snippet
        step="17"
        language="jsx"
        code={`const [mapResults, setMapResults] = useState({ fields: [], results: [] });
const [loadingMap, setLoadingMap] = useState(true);
const [error, setError] = useState(null);`}
      />

      <Snippet
        step="18"
        language="jsx"
        code={`const safeConfig = useMemo(() => {
	const defaultConfig = {
		url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
		attribution: '© OpenStreetMap contributors',
		maxZoom: 18,
		minZoom: 1,
		subdomains: ['a', 'b', 'c'],
		zoomConstraints: {
			minZoom: 1,
			maxZoom: 18
		}
	};
	const config = testTileConfig || defaultConfig;
	if (!config.zoomConstraints) {
		config.zoomConstraints = {
			minZoom: config.minZoom || 1,
			maxZoom: config.maxZoom || 18
		};
	}
	return config;
}, []);`}
      />

      <Snippet
        step="19"
        language="jsx"
        code={`const contextValue = useMemo(() => ({
	defaultTileConfig: safeConfig,
	...(testTileConfig && { testTileConfig })
}), [safeConfig]);`}
      />

      <Snippet
        step="20"
        language="jsx"
        code={`// ==== SEARCH ====
    
// ==== Map Search ====
useEffect(() => {
	setLoadingMap(true);
	setError(null);
	
	const mapSearch = SearchJob.create({
		search: \`index=bccscm sourcetype=logistics vendor=* | eval shipDate=strftime(strptime(shipDate, "%Y-%m-%d"), "%Y-%m") | eval location_info=Roast+", shipDate: "+shipDate | geostats latfield=vendorLatitude
			longfield=vendorLongitude sum(Amount) by location_info\`,
		...SEARCH_TIME_RANGE,
	});

	const subscription = mapSearch.getResults().subscribe({
		next: (results) => {
		      console.log('Search results:', results); 
		      setMapResults(results); 
		      setLoadingMap(false); 
		    },
	       error: (err) => {
		      console.error('Error fetching map results:', err); 
		      setError(err); 
		      setLoadingMap(false); 
	    },   
	  });

	return () => subscription.unsubscribe();
}, []);`}
      />

      <Snippet
        step="21"
        language="jsx"
        code={`const transformDataForMap = (results) => {
	if (!results?.results?.length || !results?.fields?.length) {
		return {
			fields: [],
			columns: []
		};
	}

	const fieldNames = results.fields.map(field => field.name);
	const columns = fieldNames.map(fieldName => {
	const field = results.fields.find(f => f.name === fieldName);
		return results.results.map(row => {
			const value = row[fieldName];
			if (field?.type === 'number' && !['lat', 'lon', 'Latitude', 'Longitude', '_geo'].includes(fieldName)) {
				return formatNumber(value);
			}
			return value;
		});
	});

	return {
		fields: results.fields,
		columns: columns
	};
};`}
      />

      <Snippet
        step="22"
        language="jsx"
        code={`const transformedData = useMemo(() => transformDataForMap(mapResults), [mapResults]);`}
      />

      <Snippet
        step="23"
        language="jsx"
        code={`const latField = transformedData.fields?.find(f =>
	['Latitude', 'lat', '_lat'].includes(f.name)
)?.name || 'Latitude';

const lonField = transformedData.fields?.find(f =>
	['Longitude', 'lon', '_lon'].includes(f.name)
)?.name || 'Longitude';

const valueField = transformedData.fields?.find(f =>
	f.type === 'number' && !['lat', 'lon', 'Latitude', 'Longitude', '_lat', '_lon', '_geo'].includes(f.name)
)?.name || 'count';`}
      />

      <Snippet
        step="24"
        language="jsx"
        code={`{/* ===== Map ===== */}
    
<h1 style={sectionTitle}>Shipments</h1>

<div style={vizContainer}>

</div>`}
      />

      <Snippet
        step="25"
        language="jsx"
        code={`<MapContextProvider value={contextValue}>
	{loadingMap ? (
		<WaitSpinner size="medium" label="Loading map data..." />
	) : (
	<>
		<Map
			options={{
				center: [14.1615, -21.0599],
				zoom: 1.2,
				layers: [
					{
						type: 'bubble',
						latitudeField: 'lat',
						longitudeField: 'lon',
						valueField: transformedData.fields?.find(f =>
							f.type === 'number' && !['lat', 'lon', 'Latitude', 'Longitude'].includes(f.name)
						)?.name || 'count',
						seriesColors: ['#008000', '#800080', '#FF6B35'],
						opacity: 0.8,
						tooltip: {
							enabled: true,
							excludeFields: ['lat', 'lon', 'Latitude', 'Longitude', '_lat', '_lon']
						}
					},
				],
				showLegend: true,
				showTooltip: true,
				tooltip: {
					enabled: true,
					excludeFields: ['lat', 'lon', 'Latitude', 'Longitude', '_lat', '_lon']
				}
			}}
			dataSources={{
				primary: {
					requestParams: {
						offset: 0,
						search: 'index=bccscm sourcetype=logistics vendor=* | eval shipDate=strftime(strptime(shipDate, "%Y-%m-%d"), "%Y-%m") | eval location_info=Roast+", shipDate: "+shipDate | geostats latfield=vendorLatitude longfield=vendorLongitude sum(Amount) by location_info'
					},
					data: {
						fields: transformedData.fields || [],
						columns: transformedData.columns || [],
					},
					meta: {
						totalCount: mapResults.results?.length || 0,
						done: true
					},
				},
			}}
			width="100%"
			height="100%"
		/>
		{(!mapResults?.results?.length) && (
			<div style={{ position: 'absolute', top: '50%', left: '50%', transform:'translate(-50%, -50%)' }}>
				No data available - check console for search results
			</div>
		)}
	</>
	)}
 {error && (
    <div>Error loading map data: {error.message || 'Unknown error occurred.'}</div>)}
</MapContextProvider>`}
      />

      <Snippet
        step="30"
        language="js"
        code={`'@splunk/shipping': path.resolve(__dirname, '../shipping/src/Shipping.jsx'),
    
        , '.css'

        module: {
        rules: [
            {
                test: /\.css$/i, 
                use: ['style-loader', 'css-loader'], 
            },
        ],
    },`}
      />

      <Snippet
        step="32"
        language="bash"
        code={`cd ~/code
yarn add -W --dev style-loader css-loader`}
      />

      <Snippet
        step="33"
        language="bash"
        code={`yarn run build
yarn run start`}
      />

      <Snippet
        step="34"
        language="bash"
        code={`/opt/splunk/bin/splunk restart`}
      />

      <Snippet
        step="36"
        language="jsx"
        code={`import Shipping from '@splunk/shipping';`}
      />

      <Snippet step="37" language="jsx" code={`<Shipping />`} />
    </div>
  );
}

export default Lab5a;
