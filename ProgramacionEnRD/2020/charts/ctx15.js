var ctx15 = document.getElementById('pq15').getContext('2d');
var chart = new Chart(ctx15, {
  type: 'horizontalBar',
  data: {
    labels: ['< 18 años', '18-20 años ', '21-23 años ', '24-26 años ', '27-29 años ', '30-35 años ', '36-40 años ', '41-45 años ', '46-50 años ', '51-60 años ', '> 61 años '],
    datasets: [{
      backgroundColor: '#1dc4f7',
      borderColor: '#202529',
      data: [3.3, 15.3, 16.7, 20, 14.3, 18.2, 5.5, 3.9, 1.3, 1.1, 0.4]
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
