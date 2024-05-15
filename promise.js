const students =[

    {
    name: "tsega",
    age: 20,
    gender: "male",
    education: "bachelor"
}
   ,
    {
    name: "abel",
    age: 35,
    gender: "male",
    education: "bachelor"
},
{
    name: "zeferu",
    age: 45,

    gender: "male",
    education: "bachelor"
}
]
 const simplepromise = new Promise((resolve, reject)=>{ 
    setTimeout(() =>{
        const above30 =students.filter((students )=> students.age >= 30 )
            if(above30.length>0){
                resolve(above30);
            }
            else{
                reject(above30)
            }
    },2000)
});
    console.log(simplepromise)
    simplepromise.then(data=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log("error block",error);
    })

   