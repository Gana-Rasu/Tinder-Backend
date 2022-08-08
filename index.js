const express = require('express')
// const mongoose = require('mongoose');
// import Cards from "dbcards.js";
// import express from "express";
// import mongoose

// gKEsDYHKG9ex6pL9
// mongodb+srv://admin:<password>@cluster0.k0k1ugo.mongodb.net/?retryWrites=true&w=majority
const app = express()
const PORT = 4000;
// const connection_url = `mongodb+srv://admin:gKEsDYHKG9ex6pL9@cluster0.k0k1ugo.mongodb.net/tinderdb?retryWrites=true&w=majority`

// mongoose.connect(connection_url,{
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true
// })

const tinder_people = [
  {
    id:0,
    name: "Rahel Vaan",
    url:
      "https://i.imgur.com/Gg6BpGn.jpeg",
  },
  {
    id:1,
    name: "Angelina cruz",
    url:
      "https://i.imgur.com/OckVkRo.jpeg",
  },
  {
    id:2,
    name: "Rahel Vaan",
    url:
      "https://i.imgur.com/Gg6BpGn.jpeg",
  },
]

app.get('/tinder/:id', function (req, res) {
  console.log(req.params)
  const {id} = req.params
  const tinder_person = tinder_people.filter((person)=>person.id==id)

   tinder_person ?   res.send(tinder_person) : res.status(404).send({ msg: "movie not found" });
})

// app.get('/tinder/cards', function (req, res) {
//   const dbcard = req.body
//   console.log(req.params)
// Cards.create(dbcard,(err,data)=>{
// if(err){
//   res.send(err)
// }else{
//   res.send(data)
// }
// })
//   res.send(tinder_people)
// })

// app.get('/tinder/cards', function (req, res) {
//   const dbcard = req.body
//   console.log(req.params)
// Cards.find(dbcard,(err,data)=>{
// if(err){
//   res.send(err)
// }else{
//   res.send(data)
// }
// })
//   res.send(tinder_people)
// })



app.listen(PORT,console.log(`App started in ${PORT}`))


// app config

// middleware

// db config

// api endpoints

// listener