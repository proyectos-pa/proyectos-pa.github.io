var ctx17 = document.getElementById('pq17').getContext('2d');
var chart = new Chart(ctx17, {
    type: 'outlabeledPie',
    data: {
  labels: ['Dominicana ', 'Extranjera '],
  datasets: [{
      backgroundColor: ['#684B7D', '#3591B3'],
      borderColor: '#202529',
      data: [0.974, 0.026]
  }]
    },
    options: {legend: {display: false}}
});
