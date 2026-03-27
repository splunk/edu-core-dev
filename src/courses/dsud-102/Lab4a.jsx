import Snippet from "./Snippet";

function Lab4a() {
  return (
    <div style={{ margin: 50 }}>
      <Snippet
        step="2"
        language="jsx"
        code={`// Single Value Search Tokens

    const countryFilter = useMemo(() => {
        const escapedCountry = normalizedCountry
            .replace(/\\/g, '\\\\')
            .replace(/"/g, '\\"');

        return normalizedCountry === '*'
            ? ''
            : \` | search Country="\${escapedCountry}"\`;
    }, [normalizedCountry]);
    `}
      />

      <Snippet
        step="3"
        language="jsx"
        code={`
                    // Reset loading when country changes
   setLoadingKilosPurchased(true);

  // Apply the countryFilter to the search
   const sv1Search = SearchJob.create({
   search: \`index=bccscm sourcetype=scm:logistics \${countryFilter} | stats sum(Amount) as KilosPurchased\`.replace(/\s+/g, ' ').trim(),
      ...SEARCH_TIME_RANGE,
  });


      // Cancel job on cleanup
    sv1Search.cancel?.();
  };
    // Rerun when the shared filter changes
 }, [countryFilter]);


`}
      />

      <Snippet
        step="4"
        language="jsx"
        code={`// Reset loading when country changes
        setLoadingKiloBags(true);

    const sv2Search = SearchJob.create({
      // Apply shared countryFilter to the search
      search: \`index=bccscm \${countryFilter} | stats sum(Amount) as KiloBags | eval KiloBags=round(KiloBags/70,2) \`.replace(/\s+/g, ' ').trim(),
      ...SEARCH_TIME_RANGE,
    });

// Cancel job on cleanup
    sv2Search.cancel?.();
  };
    // Rerun when the shared filter changes
 }, [countryFilter]);
 `}
      />

      <Snippet
        step="5"
        language="jsx"
        code={`
            
     // Reset loading when country changes
     setLoadingShippingCosts(true);

     const sv3Search = SearchJob.create({
     // Apply shared countryFilter to the search
       search: \`index=bccscm sourcetype=scm:logistics \${countryFilter} | stats sum(shipCost) as ShippingCosts\` .replace(/\s+/g, ' ').trim(),
       ...SEARCH_TIME_RANGE,
     });

    // Cancel job on cleanup
    sv3Search.cancel?.();
  };
       // Rerun when the shared filter changes
}, [countryFilter]);
            
            `}
      />

      <Snippet
        step="8"
        language="jsx"
        code={`
            setTotalResults(0);

            const filter =
                countryToken === '*'
                    ? ''
                    : \`| search Country="\${countryToken.replace(
                      /"/g,
                      '\\"',
                    )}"\`; 

            const tableSearch = SearchJob.create({
                search: \`index=bccscm sourcetype=scm:logistics \${filter}\``}
      />

      <Snippet step="9" language="bash" code={`countryToken`} />
    </div>
  );
}

export default Lab4a;
