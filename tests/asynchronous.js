async function fetchData() {
  try {
      const response = await fetch('https://cnt-5e232c96-d7e3-4996-8b90-7af6afc1e2b8.containerhub.tripleten-services.com/api/v1/warehouses');
      const data = await response.json();
      console.log(data);
  } catch (error) {
      // If an error occurs, log it to the console
      console.error(error);
  }
}

fetchData();