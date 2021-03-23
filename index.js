
const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');


app.get('/api/v2/tags', (req, res) => {

    if(!req.query.historianName){

        return res.status(400).send('historianName parameter is required')

    }

    let rawdata = fs.readFileSync('data.json');
    if(!rawdata){
        
        return res.status(500).send('Server Error: Cannot find server data.')
    }

    try{
        let tags = JSON.parse(rawdata);
        return res.status(200).send(tags)

    }
    catch(e){

        return res.status(500).send('Server Error: Cannot parse server data.')

    }
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

// http://localhost:3000/api/v2/tags?historianName=abir
