import express from 'express'
import dotenv from 'dotenv'; dotenv.config();

const app = express();

app.get("/",(req,res)=>{

    try {
        let {name = 'Anoymous'} = req.params
        return res.send(`Hello , ${name}`)
        
    } catch (error) {
        console.log(error)
    }
})

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    `Server listening on port ${PORT}`
})