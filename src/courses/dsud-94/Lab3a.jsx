import Snippet from './Snippet';

function Lab3a() {

    return(<div style={{margin:50}}>


<Snippet step="4" language="jsx"
    code={`height: 30 vw;
    
    const colStyle = {
	border: '1px solid #d3d3d3',
	padding: 10,
	minHeight: 80,
};

const columnRowStyles = {
	display: 'flex',
	alignItems: 'flex-start',
	justifyContent: 'space-between',
	flexWrap: 'nowrap',
	display: 'flex',
	height: '150px',
};


colStyle,
columnRowStyles,`}
/>

<Snippet step="8" language="jsx"
    code={`import ColumnLayout from '@splunk/react-ui/ColumnLayout';
import SingleValue from "@splunk/visualizations/SingleValue";`}
/>

<Snippet step="9" language="jsx"
    code={`colStyle, columnRowStyles`}
/>

<Snippet step="10" language="jsx"
    code={`const [KiloBags, setKiloBags] = useState(0);
const [KilosPurchased, setKilosPurchased] = useState(0);
const [ShippingCosts, setShippingCosts] = useState(0);
const [loadingKiloBags, setLoadingKiloBags] = useState(true);
const [loadingKilosPurchased, setLoadingKilosPurchased] = useState(true);
const [loadingShippingCosts, setLoadingShippingCosts] = useState(true);`}
/>

<Snippet step="11" language="jsx"
    code={`// ==== Single Value 1 Search - Kilos Purchased ====
useEffect(() => {
	const sv1Search = SearchJob.create({
		search: \`index=bccscm sourcetype=scm:logistics | stats sum(Amount) as KilosPurchased\`,
		...SEARCH_TIME_RANGE,
	});

	const subscription = sv1Search.getResults().subscribe({
		next: (results) => {
			console.log("KilosPurchased data received:", results);
			setKilosPurchased(Number(results?.results?.[0]?.KilosPurchased) || 0);
   
			if (results?.results?.length) {
   			setKilosPurchased(Number(latestDataPoint?.KilosPurchased) || 0);
		       } else {
			  setKiloBags(0);
		       }
		       setLoadingKilosPurchased(false);
		   },
		   error: (err) => {
		      console.error("Error fetching KilosPurchased results:", err);
		      setKilosPurchased(0);
		      setLoadingKilosPurchased(false);
		  },
	      });
	
	  return () => {
		  subscription.unsubscribe();
	      };
	  }, []);`}
/>

<Snippet step="12" language="jsx"
    code={`// ==== Single Value 2 Search – Total Bags ====
useEffect(() => {
	const sv2Search = SearchJob.create({
		search: \`index=bccscm sourcetype=scm:logistics | stats sum(Amount) as KiloBags | eval KiloBags=round(KiloBags/70,2)\`,
		...SEARCH_TIME_RANGE,
	});

	const subscription = sv2Search.getResults().subscribe({
		next: (results) => {
			console.log("KiloBags data received:", results);
   
			if (results?.results?.length) {
				const latestDataPoint = results.results[results.results.length - 1];
				setKiloBags(Number(latestDataPoint?.KiloBags) || 0);
			} else {
				setKiloBags(0);
			}
			setLoadingKiloBags(false);
		},
		error: (err) => {
			console.error("Error fetching KiloBags results:", err);
			setKiloBags(0);
			setLoadingKiloBags(false);
		},
	});

	return () => subscription.unsubscribe();
}, []);`}
/>

<Snippet step="13" language="jsx"
    code={`// ==== Single Value 3 Search – Shipping Costs ====
useEffect(() => {
	const sv3Search = SearchJob.create({
		search: \`index=bccscm sourcetype=scm:logistics | stats sum(shipCost) as ShippingCosts\`,
		...SEARCH_TIME_RANGE,
	});

	const subscription = sv3Search.getResults().subscribe({
		next: (results) => {
			console.log("ShippingCosts data received:", results);
			if (results?.results?.length) {
				const latestDataPoint = results.results[results.results.length - 1];
				setShippingCosts(Number(latestDataPoint?.ShippingCosts) || 0);
			} else {
				setShippingCosts(0);
				setShippingSparklineData([]);
			}
			setLoadingShippingCosts(false);
		},
		error: (err) => {
			console.error("Error fetching Shipping Costs results:", err);
			setShippingCosts(0);
			setLoadingShippingCosts(false);
		},
	});
	
	return () => subscription.unsubscribe();
}, []);`}
/>

<Snippet step="14" language="jsx"
    code={`<ColumnLayout gutter={8}>
	<ColumnLayout.Row style={columnRowStyles}>
	  <ColumnLayout.Column span={4} style={colStyle}>`}
/>

<Snippet step="15" language="jsx"
    code={`{/* ===== SV 1 Viz Total Kilos Purchased ===== */}
	<p style={labelStyle}>Kilos Purchased</p>
 
	<SingleValue
		height={100}
		context={{
			majorColorThresholds: [
				{ from: 0, value: '#118832' },
				{ to: 0, value: '#D41F1F' },
			],
		}}
		options={{
			majorFontSize: 58,
			unit: 'kg',
			unitPosition: 'after',
			unitFontSize: 12,
			majorValue: KilosPurchased,
			underLabel: 'Last 24 hours',
			underLabelFontSize: 14,
		}}
		dataSources={{
			primary: {
				data: {
					fields: [{ name: 'KilosPurchased' }],
					columns: [[KilosPurchased]],
				},
			},
		}}
		style={{ height: '100px' }}
	/>
</ColumnLayout.Column>`}
/>

<Snippet step="16" language="jsx"
    code={`<ColumnLayout.Column span={4} style={colStyle}>
    
{/* ===== SV 2 Viz Total Bags Shipped ===== */}
	<p style={labelStyle}>Total Bags (70kg) Shipped</p>
	<SingleValue
		height={100}
		context={{
			majorColorThresholds: [
				{ from: 0, value: '#118832' },
				{ to: 0, value: '#D41F1F' },
			],
		}}
		options={{
			majorFontSize: 58,
			majorValue: KiloBags,
			underLabel: 'Last 24 hours',
			underLabelFontSize: 14,
		}}
		dataSources={{
			primary: {
				data: {
					fields: [{ name: 'KiloBags' }],
					columns: [[KiloBags]],
				},
			},
		}}
		style={{ height: '100px' }}
	/>
</ColumnLayout.Column>`}
/>

<Snippet step="17" language="jsx"
    code={`<ColumnLayout.Column span={4} style={colStyle}>
    
	{/* ===== SV 3 Viz Shipping Costs ===== */}
		<p style={labelStyle}>Shipping Costs</p>
		<SingleValue
			height={100}
			context={{
				majorColorThresholds: [
					{ from: 0, value: "#118832" },
					{ to: 0, value: "#D41F1F" },
				],
			}}
			options={{
				majorFontSize: 58,
				unit: "$",
				unitPosition: "before",
				majorValue: ShippingCosts,
				underLabel: "Last 24 hours",
				underLabelFontSize: 14,
			}}
			dataSources={{
				primary: {
					data: {
						fields: [{ name: "ShippingCosts" }],
						columns: [[ShippingCosts]],
					},
				},
			}}
			style={{ height: "100px" }}
		/>
	</ColumnLayout.Column>
</ColumnLayout.Row>`}
/>

<Snippet step="18" language="jsx"
    code={`<ColumnLayout.Row style={columnRowStyles}>
	<ColumnLayout.Column span={6} style={colStyle}>`}
/>

<Snippet step="20" language="jsx"
    code={`</ColumnLayout.Column>
<ColumnLayout.Column span={6} style={colStyle}>`}
/>

<Snippet step="22" language="jsx"
    code={`		</ColumnLayout.Column>
	</ColumnLayout.Row>
</ColumnLayout>`}
/>




    </div>);

}

export default Lab3a;
