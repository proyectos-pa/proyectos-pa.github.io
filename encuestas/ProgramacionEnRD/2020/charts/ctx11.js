var ctx11 = document.getElementById('pq11').getContext('2d');
var chart = new Chart(ctx11, {
    type: 'outlabeledPie',
    data: {
  labels: ['Primaria ', 'Secundaria/bachillerato ', 'Técnico ', 'Grado (Licenciatura, Ingeniería) ', 'Posgrado (especialidad)', 'Maestría ', 'Otro'],
  datasets: [{
      backgroundColor: ['#684B7D', '#3591B3', '#83C01E', '#F09314', '#EA4B72', '#B07AD2', '#2F55C1'],
      borderColor: '#202529',
      data: [0.075, 0.075, 0.213, 0.175, 0.063, 0.563, 0.1]
  }]
    },
    options: {legend: {display: false}}
});
