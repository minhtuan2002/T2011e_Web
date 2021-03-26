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

    // tao 1 routing chuyen dua ra danh sach khach hang
    app.get("/danh _sach_khach_hang", function (reg, res) {
        res.send("Day la danh sach:");
    });

