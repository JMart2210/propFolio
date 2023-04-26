let ctx = document.getElementById('myChart');
let placeholder = document.getElementById('chartPlaceholder');
const propertyId = window.location.pathname.split("/")[2]; // Extract property ID from URL

// let madeAChart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: [],
//     datasets: [{
//       label: 'Property Values',
//       data: [],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       },
//       x: {
//         reverse: false
//       }
//     }
//   }
// });
placeholder.innerHTML = 'loading ...'
fetch(`/api/data/${propertyId}`)
  .then(response => response.json())
  .then(data => {
    const dates = data.map((data) => dayjs(data.date).format('MMM D, YYYY')).reverse();
    const values = data.map((data) => data.value).reverse();
    // madeAChart.destroy()
    // placeholder.innerHTML = 'finished'
    placeholder.remove()
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
