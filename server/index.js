const express = require('express');
const mongoose = require('mongoose');
const cors= require('cors');

const clientes = require("./controllers/clientes.js");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;
const URL_MONGO = 'mongodb+srv://linhetsa:l1nh3tj43n@clusterdevfroja-ugo6l.mongodb.net/test?retryWrites=true&w=majority';
app.use(express.json())

mongoose.connect(URL_MONGO,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(!err){
        console.log("Connected DB");
    } else{
        console.log(err);
    }
});



app.use('/clientes',clientes);
//app.use('/directors', directors)



app.listen(PORT,()=>{
    console.log("its running");
})