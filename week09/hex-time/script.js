$(document).ready(function() {
  window.setInterval(function() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    
    if (parseInt(d.getMinutes()) < 10) {
      minutes = "0" + d.getMinutes();
    } else {
      minutes = d.getMinutes();
    }

    if (parseInt(d.getSeconds()) < 10) {
      seconds = "0" + d.getSeconds();
    } else {
      seconds = d.getSeconds();
    }

    var color = "#" + h + m + s;
    var clock = h + ":" + m + ":" + s

    $("#time").text(clock)
    $("#color").text(color)
    $("body").css("background", color)

  }, 1000);

});