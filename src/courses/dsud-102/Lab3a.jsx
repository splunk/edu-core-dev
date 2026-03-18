import Snippet from "./Snippet";

function Lab3a() {
  return (
    <div style={{ margin: 50 }}>

      <Snippet
        step="3"
        language="jsx"
        code={`import SingleValue from '@splunk/visualizations/SingleValue';`}
      />

      <Snippet
        step="4"
        language="jsx"
        code={`// Single Value Data State
const [KiloBags, setKiloBags] = useState(0);
const [KilosPurchased, setKilosPurchased] = useState(0);
const [ShippingCosts, setShippingCosts] = useState(0);

const [loadingKiloBags, setLoadingKiloBags] = useState(true);
const [loadingKilosPurchased, setLoadingKilosPurchased] = useState(true);
const [loadingShippingCosts, setLoadingShippingCosts] = useState(true);`}
      />


      <Snippet step="5" language="jsx" code={`// ==== Single Value 1 Search - Kilos Purchased ====
  useEffect(() => {
   const sv1Search = SearchJob.create({
    search: \`index=bccscm sourcetype=scm:logistics | stats sum(Amount) as KilosPurchased\`,
      ...SEARCH_TIME_RANGE,
  });
  
  const subscription = sv1Search.getResults().subscribe({
  next: (results:RawResults) => {
   if (results?.results?.length) {
   const latestDataPoint = results.results[results.results.length - 1];
      setKilosPurchased(Number((latestDataPoint as any).KilosPurchased) || 0);
   } else {
      setKilosPurchased(0);
     }
      setLoadingKilosPurchased(false);
     },
   error: (err: unknown) => {
     setKilosPurchased(0);
     setLoadingKilosPurchased(false);
    },
   });

  return () => {
    subscription.unsubscribe();
  };
 }, []);`} />


      <Snippet
        step="6"
        language="jsx"
        code={`// ==== Single Value 2 Search – Total Bags ====
  useEffect(() => {
    const sv2Search = SearchJob.create({
      search: \`index=bccscm | stats sum(Amount) as KiloBags | eval KiloBags=round(KiloBags/70,2)\`,
      ...SEARCH_TIME_RANGE,
    });

   const subscription = sv2Search.getResults().subscribe({
     next: (results: RawResults) => {
      if (results?.results?.length) {
   const latestDataPoint = results.results[results.results.length - 1];
          setKiloBags(Number((latestDataPoint as any).KiloBags) || 0);  
        } else {
          setKiloBags(0);
        }
        setLoadingKiloBags(false);
      },
  
      error: (err: unknown) => {
        setKiloBags(0);
        setLoadingKiloBags(false);
      },
    });

  return () => {
    subscription.unsubscribe();
  };
 }, []);`}
      />

      <Snippet
        step="7"
        language="jsx"
        code={`// ==== Single Value 3 Search – Shipping Costs ====
   useEffect(() => {
     const sv3Search = SearchJob.create({
       search: \`index=bccscm sourcetype=scm:logistics | stats sum(shipCost) as ShippingCosts\`,
       ...SEARCH_TIME_RANGE,
     });
  
 const subscription = sv3Search.getResults().subscribe({
     next: (results: RawResults) => {
       if (results?.results?.length) {
 const latestDataPoint = results.results[results.results.length - 1];
 setShippingCosts(Number((latestDataPoint as any).ShippingCosts) || 0);
           
         } else {
            setShippingCosts(0);
         }
          setLoadingShippingCosts(false);
        },
        error: (err: unknown) => {
          setShippingCosts(0);
          setLoadingShippingCosts(false);
        },
      });
  
  return () => {
    subscription.unsubscribe();
  };
 }, []);`}
      />

      <Snippet
        step="8"
        language="jsx"
        code={`      <VizRow>
      <VizContainer style={{ flex: 1,  minWidth: 0 }}>
      {/* ===== SV 1 Viz Total Kilos Purchased ===== */}
      <Label>Kilos Purchased</Label>

       <SingleValue
           mode="view"
           width={300}
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
                 requestParams: {}, 
                 meta: {},  
                 data: {
                     fields: [{ name: 'KilosPurchased' }],
                     columns: [[KilosPurchased]], 
                 },
               },
           }}
           style={{ height: '100px' }}
       />
      </VizContainer>`}
      />

      <Snippet
        step="9"
        language="jsx"
        code={`<VizContainer style={{ flex: 1,  minWidth: 0 }}>

{/* ===== SV 2 Viz Total Bags Shipped ===== */}
  <Label>Total Bags (70kg) Shipped</Label>
    <SingleValue
     mode="view"
     width={300}
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
        requestParams: {}, 
        meta: {},  
        data: {
          fields: [{ name: 'KiloBags' }],
          columns: [[KiloBags]], 
        },
      },
    }}
    style={{ height: '100px' }}
  />
</VizContainer>`}
      />

      <Snippet
        step="10"
        language="jsx"
        code={`<VizContainer style={{ flex: 1,  minWidth: 0 }}>

   {/* ===== SV 3 Viz Shipping Costs ===== */}
   <Label>Shipping Costs</Label>
     <SingleValue
       mode="view"
       width={300}
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
            requestParams: {}, 
            meta: {},  
            data: {
             fields: [{ name: "ShippingCosts" }],
             columns: [[ShippingCosts]],
            },
           },
         }}
         style={{ height: "100px" }}
       />
</VizContainer>
</VizRow>`}
      />


  </div>);
}

export default Lab3a;