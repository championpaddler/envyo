const express = require('express')
const app = express()
const app1 = express()
const app2  = express()
const app3  = express()

const port0 = 3000
const port1 = 3001
const port2 = 3002
const port3 = 3003


var cors = require('cors')
app.use(cors())
app1.use(cors())
app2.use(cors())
app3.use(cors())


let random  =()=>Math.floor(Math.random()*10000);
app.get('/', (req, res) => {
    setTimeout(()=>  res.send('Hello World!'),random());
})

app.listen(port0, () => {
  console.log(`Example app listening at http://localhost:${port0}`)
})

app1.get('/', (req, res) => {
    setTimeout(()=>  res.send('Hello World!'),random());
})

app1.listen(port1, () => {
  console.log(`Example app listening at http://localhost:${port1}`)
})

app2.get('/', (req, res) => {
    setTimeout(()=>  res.send('Hello World!'),random());
})

app2.listen(port2, () => {
  console.log(`Example app listening at http://localhost:${port2}`)
})

app3.get('/', (req, res) => {
    setTimeout(()=>  res.send('Hello World!'),random());
})

app3.listen(port3, () => {
  console.log(`Example app listening at http://localhost:${port3}`)
})

