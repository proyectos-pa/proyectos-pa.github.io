var ctx13 = document.getElementById('pq13').getContext('2d');
var chart = new Chart(ctx13, {
  type: 'horizontalBar',
  data: {
    labels: ['Udemy ', 'Coursera ', 'Codecademy ', 'EdX ', 'Datacamp '],
    datasets: [{
      backgroundColor: '#1dc4f7',
      borderColor: '#202529',
      data: [74.5, 35.1, 33.4, 30.6, 15.2]
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
          max: 80,
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
