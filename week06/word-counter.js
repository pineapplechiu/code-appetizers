$(document).ready(function() {
    $(".input-box").keyup(function() {
        var count = $(".input-box").val().length;
        console.log(count);
        $(".char-count").text(count);
        if (count <= 140 ){
            $(".response").text("Tweetable!");
        } else if (count > 160 ){
            $(".response").text("Send an email!");
        } else {
            $(".response").text("Textable!");
        }
        console.log($(".response"));
    });


});