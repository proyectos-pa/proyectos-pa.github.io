var ctx7 = document.getElementById('pq7').getContext('2d');
var chart = new Chart(ctx7, {
    type: 'outlabeledPie',
    data: {
  labels: ['Sí ', 'No '],
  datasets: [{
      backgroundColor: ['#684B7D', '#3591B3'],
      borderColor: '#202529',
      data: [0.573, 0.427]
  }]
    },
    options: {legend: {display: false}}
});
