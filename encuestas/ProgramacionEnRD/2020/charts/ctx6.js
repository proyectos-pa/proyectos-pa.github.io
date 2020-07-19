var ctx6 = document.getElementById('pq6').getContext('2d');
var chart = new Chart(ctx6, {
    type: 'horizontalBar',
    data: {
      labels: ['Menos de 10 años ', 'Entre 10 y 15 años ', 'Entre 16 y 19 años ', 'Entre 20 y 24 años ', 'Entre 25 y 29 años ', 'Entre 30 y 39 años ', 'Más de 40 años '],
      datasets: [{
        backgroundColor: '#1dc4f7',
        borderColor: '#202529',
        data: [3.7, 19.9, 49.8, 19.6, 4.8, 1.8, 0.4]
  }]
    },
    plugins: [
      ChartDataLabels
    ],
    options: {
      maintainAspectRatio: false,
      legend: {display: false},
      scales: {
        yAxes: [{
          ticks: {
            fontColor: "white"
          }
        }],
        xAxes: [{
          ticks: {
            fontColor: "white",
            min: 0,
            max: 60,
            callback: function(value) {
              return value + "%"
            }
          },
          scaleLabel: {
            display: true
          }
        }]
      },
        plugins: {
        // Change options for ALL labels of THIS CHART
          datalabels: {
            color: 'white',
            anchor: 'end',
            align: 'right',
            formatter: function(value, context) {
              return value + '%';
            }
          }
        }
      }
});
