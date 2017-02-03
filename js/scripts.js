$(document).ready(function() {
  console.log('ready!');
  var thermostat = new Thermostat();


  $('.temp-value').text(thermostat._temperature);


  $('.button-up').on('click', function() {
    thermostat.up();
    updateTemperature();
  })

  $('.button-down').on('click', function() {
    thermostat.down();
    updateTemperature();
    // $('.temp-value').text(thermostat._temperature);
  })

  $('.button-psm-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('.temp-range').text('PSM ON');
    updateTemperature();
  })

  $('.button-psm-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('.temp-range').text('PSM OFF');
    updateTemperature();
  })

  $('.button-reset').click(function() {
    thermostat.resetTemperature();
    $('.temp-range').text('PSM ON');
    updateTemperature();
  })

  function updateTemperature() {
    $('.temp-value').text(thermostat._temperature);
  };

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp)
    })
  })

})
