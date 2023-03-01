const express=require('express');
const app=express();

app.get('/hubino/home',(request, response) =>{
response.send('Welcome to HomePage');
});

app.get('/hubino/career/:role', (req, res)=>{
    res.send(req.params);
});

app.get('/hubino/location/:branch', (req, res)=>{
    res.send(req.params);
});

app.get('/hubino/employee/:firstName/:lastName', (req, res)=>{
    res.send(req.params);
});

app.get('/hubino/employeeDetails/:firstName', (req,res)=>{
    res.send(req.query);
});

app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), ()=>{
console.log(`Server running on Port ${app.get('port')}`);
});