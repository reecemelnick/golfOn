const express = require("express");
const app = express();
app.use(express.json());
const fs = require("fs");

app.use("/js", express.static("./public/script"));
app.use("/css", express.static("./public/style"));
app.use("/img", express.static("./public/img"));

app.get("/", function (req, res) {
    //console.log(process.env);
    // retrieve and send an HTML document from the file system
    let doc = fs.readFileSync("./app/index.html", "utf8");
    res.send(doc);
});

// RUN SERVER
let port = 8000;
app.listen(port, function () {
    console.log("Example app listening on port " + port + "!");
});