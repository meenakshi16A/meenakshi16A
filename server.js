const express    = require('express')
const mongoose    = require('mongoose')
const morgan    = require('morgan')
const bodyParser    = require('body-parser')


mongoose.connect('mongodb://localhost:27017/testdb',{useNewUrlParser: true ,useUnifiedTopology:true})
const db =mongoose.connection

db.on('error',(err)=>
{
    console.log('error in connection'+err)
})

db.on('open',()=>
{
    console.log('Database connection establised')
})

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended :true}))
app.use(bodyParser.json())

const PORT= process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})


app.get('/', (req, res) => {
    res.send('<h1>Front Page</h1>');
  });



