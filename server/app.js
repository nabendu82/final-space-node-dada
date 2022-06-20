const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send({
        title: 'Final Space',
        name: 'Final Space Site'
    })
})

app.get('/about',(req, res) => {
    res.send('Welcome to express')
})

app.get('/help', (req, res) => {
    res.send({
        helpText: 'This is some helpful text',
        title: 'Help',
        name: 'Final Space Site'
    })
})

app.listen(8080, () => console.log('Server is up on port 8080'))