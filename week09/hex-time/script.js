$(document).ready(function() {
  window.setInterval(function() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    if (m < 10) {
        m = "0"+m;
    };
    var s = d.getSeconds();
    if (s < 10) {
        s = "0"+s;
    };
    var timeNow = h+":"+m+":"+s;
    var color = timeNow.replace(/:/g, "");
    $('#color').val(color);
    $('#time').val(timeNow);
    $('.wrap').attr('background-color', '#'+color);
    console.log($('#color'));
    console.log(m);

    $("body").css("background-color", color);
    $("#color").html(color);

  }, 1000);

});