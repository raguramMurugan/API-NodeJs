const express=require('express');
const app=express();

app.get('/home',(request, response)=>{

    response.send('Welcome to Hubino HomePage');
});

app.get('/api/career', (request, response)=>{

    response.send('This is the Career Sections');
});

app.listen(8080,()=>{
    console.log('Server Running on Port 8080');
})