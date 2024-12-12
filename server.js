const http = require('http');
const fs = require('fs');
const { error } = require('console');


console.log("before server");
const server = http.createServer( (req, res) =>{
    console.log("server started.........");
    const url = req.url;
    const method = req.method;

    console.log (url);
    console.log (method);
    if(url === "/message" && method === "POST"){
        // console.log(req.body.message);
        console.log("From if");
        const body = []
        req.on('data', (chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on("end", (error)=>{
            // console.log(error);
            console.log(body);
            const ParsedBody = Buffer.concat(body).toString();
            console.log(ParsedBody);
            let message = ParsedBody.split('=')[1];
            console.log(message);
            fs.writeFileSync("./message.txt", message);

        })
        
        // console.log(req.message);
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>First Page</title></head>')
        res.write('<body><h1>Hello From my node.js server</h1></body>')
        res.write('</html>');
        return res.end();

        }

    // console.log(req.url, req.method, req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(`<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
    <body>
    <form action="/message" method="POST">
        <input type="text" name="message" >
        <button type="submit">Send</button>
    </form>
    </body>
    </html>`);
    res.end();
    
    // process.exit();
});


server.listen(3000);