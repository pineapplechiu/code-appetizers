$(document).ready(function(){

  // Your code goes here
  // When someone types in an email in the input, replace the image with that person's gravatar
  // The format for the gravatar URL: http://www.gravatar.com/avatar/HASH?s=256
  // Where the hash is calculated as follows:
  //  1. Strip out all trailing and leading spaces from the email
  //  2. convert the email to all lowercase
  //  3. create the MD5 hash of that string using the MD5 function provided
  // MD5("stuff") will return the MD5 hash of the string "stuff"
  
  $(document).keypress(function(e) {
    if (e.which==13) {
        e.preventDefault();
        var test = $("input").val().toLowerCase();
        console.log(test);
        var image = MD5(test);
        $("#avatar").attr("src", "http://www.gravatar.com/avatar/"+image+"?s=256");
        console.log("http://www.gravatar.com/avatar/"+image+"?s=256");
    }
  });
});