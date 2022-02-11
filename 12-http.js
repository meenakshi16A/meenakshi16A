const http = require('http')
const server = http.createServer((req, res)=>{
    if(req.url === '/')
    { 
        res.end('welcome to our home page')
    }
    if(req.url === '/about')
    {
        res.end('welcome to our About page')
    }
    res.end(`<h1>opps!</h1>
<p>we cant seem to find the page</p>
<a href="/">back home</a>`)
})
server.listen(5000)

