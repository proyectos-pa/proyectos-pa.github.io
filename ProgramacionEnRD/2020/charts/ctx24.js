var ctx24 = document.getElementById('pq24').getContext('2d');
var chart = new Chart(ctx24, {
    type: 'outlabeledPie',
    data: {
  labels: ['Totalmente de acuerdo ', 'De acuerdo ', 'Neutral ', 'En desacuerdo ', 'Totalmente en desacuerdo '],
  datasets: [{
      backgroundColor: ['#684B7D', '#3591B3', '#83C01E', '#F09314', '#EA4B72'],
      borderColor: '#202529',
      data: [11.5, 13.5, 26, 24.6, 24.4]
  }]
    },
    options: {legend: {display: false}}
});
