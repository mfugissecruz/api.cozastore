const { compare } = require("bcrypt");
const db = require('../configs/db/connect');
const AppError = require('../utils/AppError');
const authConfig = require("../configs/auth");
const { sign } = require("jsonwebtoken");

class SessionController {
    async create (req, res){
        const {email, password} = req.body;
        
        const user = await db.query(`SELECT * FROM customers WHERE email LIKE '${email}'`);
    
        if(!user.length) {
            throw new AppError('Email e/ou senha Incorreta', 401);
        }
        
        const passwordMatched = await compare(password, user[0].password);
        if(!passwordMatched){
            throw new AppError('Email e/ou senha Incorreta', 401);
        }

        const { secret, expiresIn } = authConfig.jwt;
        const token = sign({}, secret, {
            subject: String(user[0].id),
            expiresIn
        });
        
        return res.json({
            user,
            token
        })
    }
}

module.exports = SessionController;