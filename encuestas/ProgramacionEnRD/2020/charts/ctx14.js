var ctx14 = document.getElementById('pq14').getContext('2d');
var chart = new Chart(ctx14, {
    type: 'outlabeledPie',
    data: {
  labels: ['Totalmente de acuerdo ', 'De acuerdo ', 'Neutral ', 'En desacuerdo ', 'Muy en desacuerdo '],
  datasets: [{
      backgroundColor: ['#684B7D', '#3591B3', '#83C01E', '#F09314', '#EA4B72'],
      borderColor: '#202529',
      data: [0.379, 0.205, 0.179, 0.099, 0.137]
  }]
    },
    options: {legend: {display: false}}
});
