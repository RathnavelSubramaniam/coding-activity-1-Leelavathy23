const express= require('express');

//import express from 'express';
const app = express();

const port= 3000;
app.get('/data', (req, res) => {
       res.send('Hello Good morning!.... Data will show here',)
     })
    
  app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
