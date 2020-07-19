var ctx23 = document.getElementById('pq23').getContext('2d');
var chart = new Chart(ctx23, {
    type: 'horizontalBar',
    data: {
  labels: ['Bajo nivel educativo escolar', [['Bajo dominio del inglés'], ['u otros idiomas extranjeros']], [['Bajo nivel'],['educativo universitario']], [['Falta de oferta'],['académica relevante']], 'Bajos ingresos', 'Falta de empleos relevantes', 'Rigideces laborales', 'Estigmas sociales', 'Otros (especifique)'],
  datasets: [{
      backgroundColor: '#1dc4f7',
      borderColor: '#202529',
      data: [50.9, 50.7, 48.7, 48.6, 46.6, 42.8, 29.3, 20.8, 4.6]
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
