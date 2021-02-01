require('./db/connection');
const exprees = require('express');
const {User} = require('./models/User.js')


const port = process.env.PORT || 5000 ;
const app = exprees();
app.use(exprees.json());


app.get("/health", (req, res)=>{
    res.status(200).send({message: "erro 200"})
});


app.get("/users", async (req, res)=>{
    try{
        const allUsers= await User.find({});
        res.status(200).send(allUsers);
    }catch(error){
        res.status(500).send({message: "error"});
    }   
});

app.post("/users", async (req, res)=>{
    try {
        const user = new User(req.body);
        const savedUser = await user.save();
        console.log(req.body);
        res.status(201).send({message: "added to database"});
    }catch (error){
        res.status(500).send({message: "could not connect"});
    } 
});

app.patch('/users:id', async (req ,res)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        console.log(user);
        res.status(200).send(user);
    }catch (error){
        res.status(404).send({message: "user don't found"})
    }
})

app.delete('/usrers:id', async (req,res)=>{
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        
    }catch (error){

    }
})




app.listen(port, ()=> {
    console.log(`server is on ${port}`);
});