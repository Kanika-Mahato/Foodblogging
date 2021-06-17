const {response} = require("express")
const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')

router.post('/contact',(request,response) =>{
   const signedUpUser = new signUpTemplateCopy({
       fullname:request.body.fullname,
       location:request.body.location,
       email:request.body.email,
       password:request.body.password
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})


module.exports =router;