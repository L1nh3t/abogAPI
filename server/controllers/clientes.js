const express = require('express');
const router =  express.Router();


const {Clientes} = require('../models/clientes.js');

router.get('/saludo',(req,res)=>{
    res.send("hola funciono");
})

router.get("/:name", (req,res)=>{
 Clientes
 .findOne(
     {
         name: req.params.name
     })
     .then (clie => {
         res.json(clie);
     })
     .catch(err => {
         res.json(err);
     })

})

router.get ("/all", (req, res) => {
 Movies
 .find()
 .then(movies => {
     res.json(movies);
 })
 .catch(err => {
     res.json(err);
 })
})

// router.patch('/update/:id', (req, res) => {
//     const { id } = req.params;
//     const body = req.body
//     Movies
//         .findByIdAndUpdate(
//             id,
//             {$set:{
//                 ...body
//             }},
//             {useFindAndModify: false}
//         )
//         .exec()
//         .then( updatedMovie => res.status(200).send(updatedMovie))
//         .catch( error => res.status(400).send(error) )
// });

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Movies
        .findById(id)
        .exec()
        .then( movieById => res.status(200).send(movieById))
        .catch( error => res.status(400).send(error) )

})

router.get('/read', (_req, res) => {
    Movies
        .find()
        .exec()
        .then(movies => res.status(200).send(movies))
        .catch(movies => res.status(400).send(error))
});

router.patch('/update/:id', (req,res)=>{
    const {id} = req.params;
    const body = req.body
    Movies
        .findByIdAndUpdate(
            id,
             {$set:{
                ...body
             } },
           {useFindAndModify:false}  
        )
        .exec()
        .then(updatedMovie => res.status(200).send(updatedMovie) )
        .catch(error => res.status(400).send(error))
});

router.get('/prueba/:id', (req, res) => {
    const {id} = req.params;
    Movies
    .findById(id)
    .exec()
    .then(movieById => res.status(200).send(movieById))
    .catch(error => res.status(400).send(error))
})

router.post('/create', (req, res) => {
    const {
        title,
        genre,
        year,
        premier,
        img_url
    } = req.body;

    const newMovie = Movies({
        title: title,
        genre:genre,
        year:year,
        premier:premier,
        img_url:img_url
    });

    newMovie
        .save((error, movie) => {
            if(error){
                res.status(400).send({
                    error:error,
                    message: "Lo sentimos"
                })
            } else {
                res.status(201).send({
                    movie:movie,
                    message:"petición exitosa"
                })
            }
        })

})

//Agregar Clientes
router.post('/add',(req,res)=>{
    const {nombre,correo,numero,areaDeInteres} =req.body
    Clientes
    .create({
        nombre: nombre,
        correo: correo,
        numero: numero,
        areaDeInteres: areaDeInteres
    })
    .then(clie =>{
        res.json(clie);
    })
    .catch((err)=>{
        res.json(err);
    })
})

module.exports = router;