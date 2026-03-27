import Snippet from "./Snippet";

function Lab4() {
  return (
    <div style={{ margin: 50 }}>
      <Snippet
        step="3"
        language="jsx"
        code={`import Select from '@splunk/react-ui/Select';`}
      />

      <Snippet
        step="4"
        language="jsx"
        code={`// Dropdown state
            const [countryToken, setCountryToken] = useState('*');
            const [countryOptions, setCountryOptions] = useState<string[]>([]);

            const normalizedCountry = useMemo(() => countryToken.trim() || '*', [countryToken]);`}
      />

      <Snippet
        step="5"
        language="jsx"
        code={`// Change Handler 
            const handleCountryChange = (_event: React.SyntheticEvent, { value }: { value: string | number | boolean }) => {
                setCountryToken(String(value));
                setCurrentPage(1);
            };`}
      />

      <Snippet
        step="6"
        language="jsx"
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

      <Snippet
        step="7"
        language="jsx"
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

      <Snippet step="9" language="jsx" code={`countryToken`} />
    </div>
  );
}

export default Lab4;
