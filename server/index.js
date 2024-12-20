const express = require("express");
const router = require("./routes");
const cors = require('cors');

const app = express();

app.use(cors());
app.use("/api", router);

app.get("/", (req, res) => {
    res.send("hello");
})

app.listen(3000, () => {
    console.log("Server Running");
})