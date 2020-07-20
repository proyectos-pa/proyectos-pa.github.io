var ctx2 = document.getElementById('pq2').getContext('2d');
var chart = new Chart(ctx2, {
    type: 'horizontalBar',
    data: {
      labels: ['SQL ', 'Javascript ', 'HTML/CSS ', 'C# ', 'Python ', 'Java ', 'PHP ', 'TypeScript ', 'R ', 'C++ ', 'VBA ', 'Bash ', 'C ', 'Dart ', 'MATLAB ', 'Kotlin ', 'Stata ', 'Ruby ', 'Eviews ', 'Go ', 'Swift ', 'Rust ', 'Objective-C ', 'Perl ', 'Assembly ', 'Haskell ', 'Scala '],
      datasets: [{
        backgroundColor: '#1dc4f7',
        borderColor: '#202529',
        data: [67.1, 64.4, 63.8, 43.1, 40.1, 27, 25.6, 21.5, 12.5, 11.2, 8.1, 8, 7.3, 3.8, 3.8, 3.5, 3.1, 2.8, 2.6, 1.7, 1.2, 1, 1, 0.7, 0.7, 0.5, 0.3]
      }]
    },
    plugins: [ChartDataLabels],
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
