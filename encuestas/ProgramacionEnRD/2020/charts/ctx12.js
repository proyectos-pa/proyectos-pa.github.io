var ctx12 = document.getElementById('pq12').getContext('2d');
var chart = new Chart(ctx12, {
    type: 'outlabeledPie',
    data: {
  labels: ['Sí ', 'No '],
  datasets: [{
      backgroundColor: ['#684B7D', '#3591B3'],
      borderColor: '#202529',
      data: [0.856, 0.144]
  }]
    },
    options: {legend: {display: false}}
});
