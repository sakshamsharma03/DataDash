import React from 'react'

const Stats = () => {
    const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    endYear: '',
    topics: '',
    sector: '',
    region: '',
    pest: '',
    source: '',
    swot: '',
    country: '',
    city: '',
  });

  useEffect(() => {
    axios.get('http://localhost:5000/data')
      .then(response => {
        setData(response.data);
        setFilteredData(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  // const applyFilters = () => {
  //   let filtered = data;
  //   Object.keys(filters).forEach(key => {
  //     if (filters[key]) {
  //       filtered = filtered.filter(item => item[key] === filters[key]);
  //     }
  //   });
  //   setFilteredData(filtered);
  // };

  // const handleFilterChange = (e) => {
  //   setFilters({ ...filters, [e.target.name]: e.target.value });
  // };
  return (
    <div><h1>Data Visualization Dashboard</h1>

    {/* Filters */}
    <div>
      <input name="endYear" placeholder="End Year"  />
      <input name="topics" placeholder="Topics"  />
      <input name="sector" placeholder="Sector"  />
      <input name="region" placeholder="Region"  />
      <input name="pest" placeholder="PEST"  />
      <input name="source" placeholder="Source"  />
      <input name="swot" placeholder="SWOT"  />
      <input name="country" placeholder="Country"  />
      <input name="city" placeholder="City"  />
      <button >Apply Filters</button>
    </div>

    {/*       {/* <div>
      <h2>Bar Chart</h2>
      <Bar
        data={{
          labels: filteredData.map(item => item.year),
          datasets: [
            {
              label: 'Intensity',
              data: filteredData.map(item => item.intensity),
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
          ],
        }}
      />

      <h2>Line Chart</h2>
      <Line
        data={{
          labels: filteredData.map(item => item.year),
          datasets: [
            {
              label: 'Likelihood',
              data: filteredData.map(item => item.likelihood),
              backgroundColor: 'rgba(153, 102, 255, 0.6)',
            },
          ],
        }}
      />

      <h2>Pie Chart</h2>
      <Pie
        data={{
          labels: filteredData.map(item => item.region),
          datasets: [
            {
              label: 'Relevance',
              data: filteredData.map(item => item.relevance),
              backgroundColor: filteredData.map(() => `#${Math.floor(Math.random()*16777215).toString(16)}`),
            },
          ],
        }}
      />
    </div> */}</div>
  )
}

export default Stats