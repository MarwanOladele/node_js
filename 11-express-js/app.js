const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send('yaaaaaaay')
})


app.all('*', (req, res) => {
    res.status(400).send('yaaaaaaay')
})



app.listen(5000, () => {
    console.log('Server listening on port 5000...');
}) 