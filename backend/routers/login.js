const express = require('express')
const router = express.Router()
const Account = require('../schemas/account')
const bcrypt = require('bcrypt') 
const jwt = require('jsonwebtoken')

router.post('/register', async (req, res) => {
    const { login, password } = req.body
    if(!login || !password) {  
        res.send('Login oraz hasło są wymagane!')
    } else {
        const name = await Account.find({login: login})
        console.log(name)
        // res.status


        const newAccount = await Account.create({
            login: login,
            password: password
        })

    }
})

router.post('/login', async (req, res) => {
    const { login, password } = req.body
    if(!login || !password) {  
        res.send('Login oraz hasło są wymagane!')
    } else {
        const userAccount = await Account.findOne({ login: login })
        if(userAccount === null) {
            return res.send('Błędne hasło lub login')   
        } 
        try {
            if(await bcrypt.compare(password, userAccount.password)) {
                const token = await jwt.sign(login, process.env.TOKEN_SECRET)
                res.status(200).json({
                    token: token
                })
            } else {
                return res.send('Błędne hasło lub login') 
            }
        } catch(err) {
            console.log(err)
        }
    }
})

module.exports = router