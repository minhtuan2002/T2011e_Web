const express = require("express");
const app = express();
app.listen(5000,function () {
    // start hosting nodejs port 5000
    const PORT = process.env.PORT || 5000;
    app.listen(5000, function () {
        console.log("server is running....");
    });
    // tao 1 routing
    app.get("/", function (reg, res) {
        res.send("xin chao");
    });
}