'use strict';

// Run popup initialization as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        let urlext = tabs[0].url;
        document.getElementById("URL").value = urlext;

        $.ajax({

            url: "http://localhost:88/home/VerifyURL",
            data: {

                'URL': urlext,
            },
            cache: false,
            type: "POST",
            dataType: "json",

            success: function (ExtractedURLValues) {
                
                document.getElementById("Company").value = ExtractedURLValues.company;
                document.getElementById("Position").value = ExtractedURLValues.position;
                document.getElementById("Location").value = ExtractedURLValues.location;
                document.getElementById("Date").value = ExtractedURLValues.date;
                document.getElementById("Source").value = ExtractedURLValues.source;
                document.getElementById("Status").value = ExtractedURLValues.status;
                document.getElementById("URLModel").value = ExtractedURLValues.url;
                document.getElementById("ErrorMessage").innerHTML = ExtractedURLValues.errorMessage;


            },

            error: function (xhr, status, error) {
                alert("error: " + error + " status: " + status);
            }
        });

        // use `url` here inside the callback because it's asynchronous!
    });
    
   

    popup.init();
    
});
 
var popup = {
    init: function () {
        
        console.log('Popup loaded!');
    },
};

 
 