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
})
