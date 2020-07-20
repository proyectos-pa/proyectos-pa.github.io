var ctx16 = document.getElementById('pq16').getContext('2d');
var chart = new Chart(ctx16, {
    type: 'outlabeledPie',
    data: {
  labels: ['Hombre ', 'Mujer ', 'Prefiero no decir '],
  datasets: [{
      backgroundColor: ['#684B7D', '#3591B3', '#83C01E'],
      borderColor: '#202529',
      data: [0.903, 0.085, 0.013]
  }]
    },
    options: {legend: {display: false}}
});
