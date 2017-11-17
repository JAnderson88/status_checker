const rp = require('request-promise')
let URL = ""

let intervalFunction = function(URL){
    console.log(`This is a test of ${URL}`)
    rp(URL)
    .then(function (htmlString) {
        // Process html...
        if (typeof htmlString !== 'string' || !htmlString.includes("FVI")){
            //post to slack
            console.log("Ready to post to slack")
        }
        else{
            console.log("timestamp, domain, success msg")
        }
    })
    .catch(function (err) {
        // Crawling failed...
        console.log(err)
    });
}



setInterval(function(){
    URL = (URL === "https://fvi.edu") ? 'https://fvi.edu/es' : 'https://fvi.edu'
    intervalFunction(URL)
}, 15000)
