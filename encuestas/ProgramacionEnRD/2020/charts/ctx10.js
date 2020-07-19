var ctx10 = document.getElementById('pq10').getContext('2d');
var chart = new Chart(ctx10, {
    type: 'outlabeledPie',
    data: {
  labels: ['Sí ', 'No '],
  datasets: [{
      backgroundColor: ['#684B7D', '#3591B3'],
      borderColor: '#202529',
      data: [0.146, 0.854]
  }]
    },
    options: {legend: {display: false}}
});
