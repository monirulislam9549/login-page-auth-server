const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

const allServices = require('./data.json')

app.get('/', (req, res) => {
    res.json({ message: 'hello server is running' })
})

app.get('/allData', (req, res) => {
    res.send(allServices)
})

app.get('/allData/:id', (req, res) => {
    const id = req.params.id;
    const item = allServices[0].services.find(pd => pd.id == id)
    res.send(item);
})

app.listen(5000, () => {
    console.log('server is running on port 5000');
})