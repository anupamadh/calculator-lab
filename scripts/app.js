$(document).ready(function() {
  $('#basic-calc').click(function() {
    var num1 = $('#basic-num-1').val();
    var num2 = $('#basic-num-2').val();
    var operator = $('#basic-operation').val();
    var result = eval(num1 + " " + operator + " " + num2);
    $('#basic-answer-alert').html(result);
  });

  $('#trip-calc').click(function() {
    var distance = $('#trip-distance').val();
    var mpg = $('#trip-mpg').val();
    var costGallon = $('#trip-cost').val();
    var speed = $('#trip-speed').val();
    var result;
    if (speed < 60) {
      result = (distance / (mpg * costGallon));
    }
    else {
      result = distance / ((mpg - ((speed - 60) * 2)) * costGallon);
    }
    $('#trip-answer-alert').html(result);
  });

  $('#bmi-calc').click(function() {
    var num1 = $('#bmi-mass').val();
    var num2 = $('#bmi-height').val();
    var result;
    num1 = num1 * 2.20462;
    num2 = num2 * 39.3701;
    result = ( num1 / ( num2 * num2  ) ) * 703
    $('#bmi-answer-alert').html(result);
  });


});
