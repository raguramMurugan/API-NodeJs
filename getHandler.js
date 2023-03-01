const express=require('express');
const app=express();
app.use(express.json());

const employee=[
    {id:1,firstName:'Sumithra',lastName:'Thamilmani',Role:'Developer'},
    {id:2,firstName:'Raguram',lastName:'Murugan',Role:'Tester'},
    {id:3,firstName:'RagulPrasad',lastName:'Mani',Role:'.net Developer'}
    
];

app.get('/hubino/employee/:id',(req, res) =>{

    const result=employee.find(details => details.id===parseInt(req.params.id));
        if(!result) 
        {
        res.status(404).send('Employee id not present or Invalid Id');
        }else{
        res.send(result);
        }
});

app.get('/hubino/employee/name/:firstName',(req, res) =>{

    const detail=employee.find(input =>(input.firstName===req.params.firstName));
    if(!detail){
    res.status(404).send('Not found');
    }
    else{
        res.send(detail);
    }
});

app.post('/hubino/employee/save', (employeeDetails, responseEmployee) =>{

    if(!employeeDetails.body.firstName || !employeeDetails.body.lastName)  
    {
        console.log(employeeDetails.firstName==null);  
        responseEmployee.status(404).send('Required Field Should be Minimum 3 Characters');
    }
    else
    {
    const savingEmployee={
        id:employee.length + 1,
        firstName: employeeDetails.body.firstName,
        lastName: employeeDetails.body.lastName,
        role: employeeDetails.body.role
    };
    employee.push(savingEmployee);
    responseEmployee.send(savingEmployee);
}});

app.set('port',process.env.PORT || 8080);

app.listen(app.get('port'),()=>{
console.log("Server running on the Port:"+ app.get('port'));
});