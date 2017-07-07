var express = require("express");
var app = express();
const port = 3005;

app.use(express.static(__dirname + "/public"));
app.listen(port, () => {
    console.log("My service is Enabled" + port);
})