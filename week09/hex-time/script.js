$(document).ready(function() {
  window.setInterval(function() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    
    if (parseInt(d.getMinutes()) < 10) {
      m = "0" + d.getMinutes();
    } else {
      m = d.getMinutes();
    }

    if (parseInt(d.getSeconds()) < 10) {
      s = "0" + d.getSeconds();
    } else {
      s = d.getSeconds();
    }

    var color = "#" + h + m + s;
    var clock = h + ":" + m + ":" + s

    $("#time").text(clock)
    $("#color").text(color)
    $("body").css("background", color)

  }, 1000);

});