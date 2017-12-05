const rp = require('request-promise')
const urls = require('./url.json')
let URL = ""

let intervalFunction = function(URL){
    console.log(`This is a test of ${URL}`)
    const date = new Date()
    const domain = URL
    rp(URL)
    .then(function (htmlString) {
        // Process html...
        if (typeof htmlString !== 'string' || !htmlString.includes("FVI")){
            //post to slack
            const options = {
                "uri" : "https://hooks.slack.com/services/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",
                "method": "POST",
                "body" : {"text": `There was an error connecting to ${domain}, Timestamp:${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}
            }
            rp(package)
        }
        else{
            console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}, to: ${domain}, Succesful Connection`)
        }
    })
    .catch(function (err) {
        console.log("Failed.")
        //post to slack
        const options = {
            "uri" : "https://hooks.slack.com/services/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",
            "method": "POST",
            "body" : {"text": `There was an error connecting to ${domain}, Timestamp:${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`},
            "json" : true
        }
        rp(options)
    });
}


intervalFunction(urls.url1);
