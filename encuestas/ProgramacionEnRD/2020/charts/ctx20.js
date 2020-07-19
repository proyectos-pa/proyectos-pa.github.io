var ctx20 = document.getElementById('pq20').getContext('2d');
var chart = new Chart(ctx20, {
    type: 'outlabeledPie',
    data: {
  labels: ['Público ', 'Privado '],
  datasets: [{
      backgroundColor: ['#684B7D', '#3591B3'],
      borderColor: '#202529',
      data: [0.2, 0.8]
  }]
    },
    options: {legend: {display: false}}
});
