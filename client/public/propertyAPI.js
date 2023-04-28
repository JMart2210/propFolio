function renderChart(dates, values) {
  const ctx = document.getElementById("myChart");
  const chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: dates,
      datasets: [
        {
          label: "Property Values",
          data: values,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
        x: {
          // type: "time",
          // time: {
          //   unit: "year",
          //   min: dates[0],
          //   max: dates[dates.length - 1],
          // },
          reverse: false,
        },
      },
    },
  });
}

const propertyValues = window.propertyValues;
console.log(propertyValues)
if (propertyValues && propertyValues.length > 0) {
  const dates = propertyValues.map((value) => dayjs(value.date).format("MMM D, YYYY")).reverse();
  const values = propertyValues.map((value) => value.value).reverse();
  renderChart(dates, values);
} else {
  const placeholder = document.getElementById("chartPlaceholder");
  placeholder.innerHTML = "No data available for chart.";
}
