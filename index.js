
const express = require('express')
const app = express()
const port = 3000
const axios = require("axios")
const fs = require('fs');


app.get('/api/v2/tags', (req, res) => {

    if(!req.query.historianName){

        return res.status(400).send('historianName parameter is required')

    }

    let rawdata = fs.readFileSync('data.json');
    if(!rawdata){
        
        return res.status(500).send('Server Error: Cannot find server data.')
    }

    let student = JSON.parse(rawdata);

    if(!student){
        return res.status(500).send('Server Error: Cannot parse server data.')
    }

    res.status(200).send(student)
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

