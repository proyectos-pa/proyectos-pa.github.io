var ctx1 = document.getElementById('pq1').getContext('2d');
var chart = new Chart(ctx1, {
    type: 'horizontalBar',
    data: {
  labels: [['Desarrollador completo','(front-end + back-end)'], 'Desarrollador de back-end ', 'Desarrollador de front-end ', [['Analista/ingeniero'],['de datos o BI']], 'Otro', [['Desarrollador de'],['aplicaciones móviles']], [['Científico de datos o especialista'],['de aprendizaje automático']], 'Administrador de base de datos ', 'Administrador de sistemas ', 'Investigador académico ', 'Ejecutivo senior o VP ', 'Diseñador ', 'Desarrollador de video juegos ', 'Marketing o profesional de ventas ', 'Educador '],
  datasets: [{
      backgroundColor: '#1dc4f7',
      borderColor: '#202529',
      data: [32.1, 17.9, 10.6, 7.6, 6.1, 4.5, 4.5, 4.2, 3.3, 2.8, 2.1, 1.7, 1, 0.9, 0.7]
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
