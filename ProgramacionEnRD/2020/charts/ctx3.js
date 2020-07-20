var ctx3 = document.getElementById('pq3').getContext('2d');
var chart = new Chart(ctx3, {
    type: 'horizontalBar',
    data: {
      labels: ['MySQL ', 'Microsoft SQL Server ', 'Oracle ', 'PostgreSQL ', 'SQLite ', 'MongoDB ', 'MariaDB ', 'Firebase ', 'Ninguno ', 'Redis ', 'Elasticsearch ', 'IBM DB2 ', 'DynamoDB ', 'Cassandra ', 'Couchbase '],
      datasets: [{
        backgroundColor: '#1dc4f7',
        borderColor: '#202529',
        data: [58.6, 55, 23, 22.2, 21.8, 20.9, 13.6, 13.1, 9.4, 5.2, 3.3, 2.6, 2.3, 1.7, 1]
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
