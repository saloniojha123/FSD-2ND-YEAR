console.log("saloni ojha");
console.error("0 division error");
console.warn("error may occure");
console.info;

let student={name:"saloni",age:20,course:"cse"};
console.table(student);
console.table(["apple","b","c"]);
console.time("test");
for(let i=0;i<10000;i++){}
    console.timeEnd("test");

console.group("cse24");
console.log("name:saloni");
console.groupEnd()  ;
console.count("click");
console.count("click");
console.count("click");
console.count("click");
console.count("click");

console.log(1+2);

function add(p,q){   //funcion defining is performed here
  return p+q;
}
console.log(  "add two no:",add(10,20)); //function calling

const multiply=(p,q)=>p*q;// very important for react 
//in arrow function is used when constant function need to be used;


console.log("arrow function",multiply(5,5));


let arr=[10,20,30,40,50];
console.log(arr[0]);
arr.push(20);
console.log(arr);
arr.pop();
console.log(arr);


// object creation
let student1={
    name:"saloni",
    age:19,
    course:"b.tech",
};

console.log(student1.name);


// math
console.log(Math.random());

//string

text="hello saloi kumari";
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.includes("java"));

//type coversion
let strnum="123";
let convert=Number(strnum);
console.log(convert);

// Not a number
console.log(isNaN("abc"));
console.log(isNaN(123));

// DOM MAUPULATION 
setTimeout(()=>{
    console.log("executed after 2 second");
},2000);

//FOR LOOP IS USED
 let x="hello";
for(let i=0;i<12;i++){
   console.log(x);
};

// IF CONDITION CHECK
 
let z=10;
if(z>20){
    console.log("greater");
}
else{
    console.log("smaller");
}

//TRY AD CATCH
try{
    let result=x/0;
    console.log(result);

}
catch(error){
    console.log("error");
}

