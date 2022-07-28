const express = require('express');
const cors = require('cors')
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('How is your felling after installing nodemon')
})

const users =
[
    {id:0,name:'Showmen Purkayastha',email:'showmen081@gmail.com'},
    {id:1,name:'Soumitra Chakrabartee',email:'showmen081@gmail.com'},
    {id:2,name:'Fahim Ahmed Sajib',email:'showmen081@gmail.com'},
    {id:3,name:'Desh Roy Chowdhury',email:'showmen081@gmail.com'},
    {id:4,name:'vaskor Banarjee',email:'showmen081@gmail.com'},
    {id:5,name:'Samia Tahsin',email:'tajsin081@gmail.com'},
]
//User Query Params
app.get('/users',(req,res)=>{

    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user=> user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
})

//dynamic api dynamically load data....

app.get('/user/:id',(req,res)=>{
    
    const id = req.params.id;
    const user = users[id];
    res.send(user);

})

app.post('/users',(req,res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('Hitting the post',req.body);
    // res.send('Inside the post');
    res.json(newUser);
})

app.listen(port,()=>{
    console.log('Listening from port',port);
})