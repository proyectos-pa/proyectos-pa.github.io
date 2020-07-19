var ctx4 = document.getElementById('pq4').getContext('2d');
var chart = new Chart(ctx4, {
    type: 'horizontalBar',
    data: {
      labels: ['Hace menos de un año ', 'Entre 1 y 2 años ', 'Entre 3 y 4 años ', 'Entre 5 y 9 años ', 'Entre 10 y 14 años ', 'Entre 15 y 19 años ', 'Entre 20 y 30 años ', 'Entre 31 y 40 años ', '41 años o más '],
      datasets: [{
        backgroundColor: '#1dc4f7',
        borderColor: '#202529',
        data: [13.5, 20.7, 25, 20, 9.4, 6.9, 3.7, 0.4, 0.4]
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
            max: 30,
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
