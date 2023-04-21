const ctx = document.getElementById('myChart');

fetch('/api/data')
  .then(response => response.json())
  .then(data => {
    // Use the data to populate your chart
    // For example:
    console.log(data);
    const propertyValues = data.propertyValues;
    const dates = propertyValues.map((propertyValue) => {
      return propertyValue.date;
    })
    const values = propertyValues.map((propertyValue) => {
      return propertyValue.value;
    })
    // ...
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 23, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
