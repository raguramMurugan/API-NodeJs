const express=require('express');
const app=express();

app.get('/home/welcome',(req,res)=>{
res.send('This is the HomePage');
});

app.get('/hubino/employee', (req,res)=>{
    res.send('Welcome to Hubino Employee Page');
});

const port=process.env.PORT || 8080;

app.get('/hubino/career/:role', (req,res)=>{
    res.send(req.params);
})

app.get('/hubino/projects/:projectName/:projectLocation',(req,res) =>{
    res.send(req.params);
});

app.get('/hubino/pageSort/:clientName',(req , res) =>{
    res.send(req.query);
})

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
});
