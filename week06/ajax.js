$( document ).ready( function() {
    $('button').click( function(){
        var xmlh; 
        xmlh = new XMLHttpRequest();

        xmlh.onreadystatechange = function() {
            if (xmlh.readyState === 4) {
                if(xmlh.status === 200) {
                    document.getElementById("serverTime").innerHTML = xmlh.responseText;
                } else if (xmlh.status === 400) {
                    alert('There was an error 400');
                } else {
                    alert('something else other than 200 was returned');
                }
            }
        };
        // use URL provided by class
        xmlh.open("GET", "https://hb-server-time.herokuapp.com", true);
        xmlh.send();        
    });
});