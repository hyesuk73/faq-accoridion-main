
let express = require("express");
let app = express();

app.listen(3000, function(){
    console.log("App is running on port 3000");
});

app.get("/", function(req, res){
    res.sendFile("/repo/side_project/faq-accordion-mainindex.html");
});