const fruits = ['apple','banana','cherry'];
const fruits1 = new Array("apple","banana","cherry"); 

console.log("second fruit", fruits);

fruits[2]="grape";               
fruits[1]="orange";


console.log("length of fruit", fruits.length); 

fruits.push("kiwi");
console.log("kiwi added", fruits);  

fruits.pop();
console.log("kiwi removed",fruits); 

for (let i=0; i<fruits.length; i++) {      
    console.log(fruits[i]);
}

fruits.forEach((fruit)=>{         
    console.log(fruit);
})