var ctx18 = document.getElementById('pq18').getContext('2d');
var chart = new Chart(ctx18, {
  type: 'horizontalBar',
  data: {
    labels: ['Menos de 10 mil pesos ', 'Entre 10 mil y 20 mil pesos ', 'Entre 20 mil y 30 mil pesos ', 'Entre 30 mil y 50 mil pesos ', 'Entre 50 mil y 75 mil pesos ', 'Entre 75 mil y 100 mil pesos ', 'Entre 100 mil y 150 mil pesos ', 'Entre 150 mil y 200 mil pesos ', 'Entre 200 mil y 300 mil pesos ', 'Más de 300 mil pesos '],
    datasets: [{
      backgroundColor: '#1dc4f7',
      borderColor: '#202529',
      data: [7.5, 8, 9.4, 21.2, 19.3, 14.2, 9.6, 5.5, 3.4, 1.9]
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
