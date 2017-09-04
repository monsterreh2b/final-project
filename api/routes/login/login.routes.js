const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const bcrypt = require('bcrypt');

var saltNum = 10;
const jwt = require('jsonwebtoken');

// TEST
// var req = {
//     email: 'asdf@asdf.com',
//     password: 'asdf'
// };

// LOGIN ROUTE 
router.get('/login', (req, res) => {
    // QUERY DATABASE FOR USER INPUT EMAIL
    User.findOne({ email : req.body.email }) 
        
        // IF USER EXISTS, THEN HASH PASSWORD AND CHECK HASH-TO-PASSWORD
        .then((data) => {
            var hash = bcrypt.hashSync(req.body.password, data.salt);

            if(data.password === hash) {
                var token = jwt.sign({
                    'email': data.email
                }, process.env.SECRET_WORD, {
                    expires: '24h'
                });

                res.json({
                    success: true,
                    message: 'Token ready',
                    token: token
                });
            } else {
                res.json({
                    success: false,
                    message: 'Incorrect login information',
                    token: null
                });
            }
        })

        // ERROR IF EMAIL DOES NTO EXIST
        .catch((err) => {
            res.json({
                success: false,
                message: 'User not found',
                token: null
            })
        });

        // OAUTH POP-UP 
        
        // 
    });

module.exports = router;