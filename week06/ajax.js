$(document ).ready(function() {
    $('button').click(function(){
        var xmlh; //initializing the variable called xmlh

        // creating a request object
        xmlh = new XMLHttpRequest(); //// storing the request object within the variable xmlh

        // xmlh.onreadystatechange allows you to specify a function (callback) to be called whenever the state has changed
        xmlh.onreadystatechange = function() {
            // 4 or ‘complete’ means the response is complete
            if (xmlh.readyState === 4) {
                // xmlh.status check of the status code for the returned response. 
                if(xmlh.status === 200) { // 200 means OK
                    // xmlh.responseText means to get the response data as a string
                    document.getElementById("serverTime").innerHTML = xmlh.responseText;
                } else if (xmlh.status === 400) {
                    alert('There was an error 400.');
                } else {
                    alert('Something else other than 200 was returned.');
                }
            }
        };
        // use URL provided by class
        xmlh.open("GET", "https://hb-server-time.herokuapp.com", true);
        // xmlh.send sends the request to the specified url
        // usage: send(string)
        // string: only used for POST request to pass in parameters
        // example: xmlh.send(“firstname=Jane&lastname=Doe);
        xmlh.send();        
    });
});