const ctx = document.getElementById('myChart');
const propertyId = window.location.pathname.split("/")[2]; // Extract property ID from URL
fetch(`/api/data/${propertyId}`)
  .then(response => response.json())
  .then(data => {
    const dates = data.map((data) => dayjs(data.date).format('MMM D, YYYY')).reverse();
    const values = data.map((data) => data.value).reverse();
    
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: dates,
        datasets: [{
          label: 'Property Values',
          data: values,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
          x: {
            reverse: false
          }
        }
      }
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
