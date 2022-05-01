const User = require('../models/User.model');

const router = require('express').Router();

router.get('/register', (req,res)=>{
    res.render('/auth/signup')
})


router.post('/register', (req,res)=>{
    console.log(req.body)
    
    User.create(req.body)
    .then(data => {
        console.log('userCreated', data)
        res.send(data)

    })
    .catch(console.log)
    
})

module.exports = router;