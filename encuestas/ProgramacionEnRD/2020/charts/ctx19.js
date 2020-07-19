var ctx19 = document.getElementById('pq19').getContext('2d');
var chart = new Chart(ctx19, {
    type: 'outlabeledPie',
    data: {
  labels: ['Soy estudiante ', 'Estoy desempleado ', 'Otra razón '],
  datasets: [{
      backgroundColor: ['#684B7D', '#3591B3', '#83C01E'],
      borderColor: '#202529',
      data: [0.67, 0.209, 0.122]
  }]
    },
    options: {legend: {display: false}}
});
