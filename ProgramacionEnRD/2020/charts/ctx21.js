var ctx21 = document.getElementById('pq21').getContext('2d');
var chart = new Chart(ctx21, {
  type: 'horizontalBar',
  data: {
    labels: ['Servicios de IT ', 'Finanzas ', 'Ingeniería ', 'Telecomunicaciones ', 'Comercio en línea ', 'Administración Pública ', 'Economía ', 'Salud ', 'Educación (docencia) ', 'Manufactura ', 'Marketing ', 'Ciberseguridad ', 'Academia (investigación) ', 'Servicios geográficos/cartográficos ', 'Automotriz '],
    datasets: [{
      backgroundColor: '#1dc4f7',
      borderColor: '#202529',
      data: [28.6, 25, 14.6, 14.1, 12.6, 11.9, 10, 9.7, 9.2, 9.2, 8.5, 5.1, 4.6, 1.7, 1.2]
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
          max: 40,
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
