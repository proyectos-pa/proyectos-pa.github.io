var ctx9 = document.getElementById('pq9').getContext('2d');
var chart = new Chart(ctx9, {
    type: 'horizontalBar',
    data: {
      labels: [[['Ingeniería de Sistemas'],['o Software']], 'Economía ', 'Otra carrera ', [['Ingeniería Electrónica'],['y de Comunicaciones']], 'Administración de Empresas ', 'Ingeniería Industrial ', 'Ingeniería Civil ', 'Matemáticas ', 'Ciencia de Datos ', 'Finanzas ', [['Ingeniería Mecánica'],['o Mecatrónica']], 'Estadística ', 'Ingeniería Eléctrica ', 'Biología/Medicina ', 'Publicidad/Mercadeo '],
      datasets: [{
        backgroundColor: '#1dc4f7',
        borderColor: '#202529',
        data: [66, 10, 9.1, 4.2, 1.6, 1.6, 1.3, 1.3, 1.1, 1.1, 1.1, 0.4, 0.4, 0.2, 0.2]
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
            max: 70,
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
