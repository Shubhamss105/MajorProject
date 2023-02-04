import express from 'express';
import bcrypt from 'bcrypt'
import Connection from './db/db.js';
import User from './model/user.js';


const app=express();

app.use(express.json())


app.post('/signup',async(req,res)=>{

    try{
        const hashedPassword=await bcrypt.hash(req.body.password.toString(),10);
        const user={name:req.body.name,email:req.body.email,password:hashedPassword};
        const newUser=new User(user);
        await newUser.save();
        res.status(201).json({msg:'user registered successfully'});
    }catch(error){
        console.log(error);
    }
})


app.post('/login',async(req,res)=>{
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).json({ msg: 'Username does not match' });
    }

    try {
        let match = await bcrypt.compare(req.body.password.toString(), user.password);
        if (match) {

            res.status(200).json({msg:'login successfully'})

            // res.status(200).json({ name: user.name, email: user.email });
        
        } else {
            res.status(400).json({ msg: 'Password does not match' })
        }
    }catch(err){
        return res.status(500).json({msg:'Error while login user'});
    }
})




app.listen(8000,()=>{
    console.log('server is running on port 8000');
})

Connection();