var ctx8 = document.getElementById('pq8').getContext('2d');
var chart = new Chart(ctx8, {
    type: 'outlabeledPie',
    data: {
  labels: ['Primaria ', 'Secundaria/bachillerato ', 'Técnico ', 'Grado (Licenciatura, Ingeniería) ', 'Posgrado (Especialidad)', 'Maestría ', 'Otro '],
  datasets: [{
      backgroundColor: ['#684B7D', '#3591B3', '#83C01E', '#F09314', '#EA4B72', '#B07AD2', '#2F55C1'],
      borderColor: '#202529',
      data: [0.005, 0.151, 0.206, 0.469, 0.024, 0.131, 0.013]
  }]
    },
    options: {legend: {display: false}}
});
