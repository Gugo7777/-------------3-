const express = require("express");

const app = express();


app.use(express.static(__dirname + '/static'));



app.get("/", function (request, response) {
    response.sendFile(__dirname + "/public/main.html");
});

app.listen(4000, (err) => {
    if (err) console.log(err);
    console.log('hello');
});