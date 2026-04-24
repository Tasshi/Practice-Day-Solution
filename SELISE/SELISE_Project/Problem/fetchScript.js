    const statusEl = document.getElementById('status');
    const nameEl = document.getElementById('name');
    const capitalEl = document.getElementById('capital');
    const populationEl = document.getElementById('population');
    const regionEl = document.getElementById('region');
    const flagEl = document.getElementById('flag');
    const selectEl = document.getElementById('countrySelect');

    async function fetchCountry(country) {
      statusEl.textContent = "Loading…";
      nameEl.textContent = "";
      capitalEl.textContent = "";
      populationEl.textContent = "";
      regionEl.textContent = "";
      flagEl.src = "";

      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        const info = data[0];

        nameEl.textContent = `Name: ${info.name.common}`;
        capitalEl.textContent = `Capital: ${info.capital ? info.capital[0] : "N/A"}`;
        populationEl.textContent = `Population: ${info.population.toLocaleString()}`;
        regionEl.textContent = `Region: ${info.region}`;
        flagEl.src = info.flags.png;
        statusEl.textContent = "";
      } catch (error) {
        statusEl.textContent = "Error loading country data";
        statusEl.className = "error";
        console.error(error);
      }
    }

    // Initial load
    fetchCountry("bhutan");

    // Refetch when dropdown changes
    selectEl.addEventListener("change", (e) => {
      fetchCountry(e.target.value);
    });