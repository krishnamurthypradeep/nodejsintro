import asyncHandler from 'express-async-handler'
import User from '../model/userSchema'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const loginUser = asyncHandler( async (req,res)=>{
    const {email,password} = req.body

    const user = await User.findOne({email})
    if(user && (await bcrypt.compare(password,user.password))){
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)

        })
    }
    else{
        res.status(401)
        throw new Error('Invalid Credentials')
    }

    
})

const registerUser = asyncHandler( async (req,res)=>{
    const {name,email,password} = req.body
    if(!name || !email || !password){
        res.status(400)
        throw new Error('please include all fields') 
    }
    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error('User with email already exists') 
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const user = await User.create({name,email,password: hashedPassword})
    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }
})
const generateToken = (id:any) => jwt.sign({id},'admin123',{expiresIn:'30d'})

export default {loginUser,registerUser}