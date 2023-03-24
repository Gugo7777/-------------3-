const http = require("http")
const { appendFile } = require("fs")

const server = http.createServer((req, res) => {
    if(req.url === "/" || req.url === "/home") {
        let file = fs.readFileSync("./index.html", "utf8")
        res.write(file)
    }
    res.end()
})

server.listen(4000, "localhost", (err) => {
    err ? console.error(err) : console.log("Listening port 4000");;
})