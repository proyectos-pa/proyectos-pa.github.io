var ctx22 = document.getElementById('pq22').getContext('2d');
var chart = new Chart(ctx22, {
    type: 'outlabeledPie',
    data: {
  labels: ['Trabajo independiente/solo ', 'De 2-3 integrantes (incluyéndome) ', 'De 4-6 integrantes (incluyéndome) ', 'De 7-9 integrantes (incluyéndome) ', 'De 10-15 integrantes (incluyéndome) ', 'De 16-30 integrantes (incluyéndome) ', 'Más de 30 integrantes (incluyéndome) '],
  datasets: [{
      backgroundColor: ['#684B7D', '#3591B3', '#83C01E', '#F09314', '#EA4B72', '#B07AD2', '#2F55C1'],
      borderColor: '#202529',
      data: [0.122, 0.223, 0.221, 0.127, 0.129, 0.108, 0.07]
  }]
    },
    options: {legend: {display: false}}
});
