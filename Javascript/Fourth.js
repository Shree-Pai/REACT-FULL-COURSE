// // import { add,sub,product,div } from "./Third.js";

// import add from "./Third.js"; //default import type function without curly braces
// let result=add(10,20);
// console.log("Result:",result);
// // let sub_result=sub(30,10);
// // console.log("Result:",sub_result);
// // let prod_result=product(10,5);
// // console.log("Result:",prod_result);
// // let div_result=div(30,3);
// // console.log("Result:",div_result);


// //template literals
// let name="Shreelakshmi";
// let city="Mangalore";
// let Profession="Student";
// // console.log("Welcome to Javascript session  \nMyName is ",name,", I'm from ",city,"My Profession is",Profession);
// console.log(`My name is ${name}.Iam from city ${city}.My profession is ${Profession}`);

// //Array destructuring

// let num=[10,20,30,40];
// let[x,y,z,a]=num;

// console.log(x);
// console.log(y);
// console.log(z);
// console.log(a);

// //Spread Operators - we can store the the new elements in the array
// let num=[10,20,30,40];

// let second_num=[...num,50,60];

// console.log(num);
// console.log(second_num);

// //Rest Operators

// function displayName(...names){
//     console.log(names);
// }
// displayName("Shree","Abhi","Krithika","Pratheeksha");

// function sum(...numbers){
//     return numbers.reduce((a,b)=>a+b);
// }
// console.log(sum(10,20,3,4,5,6,7));


// //class

// class Employee{
//     constructor(name){
//         this.name=name;
//     }
//     greet(){
//         console.log(`Welcome : ${this.name}`);
//     }
// }

// let emp=new Employee("Shree");
// let emp1=new Employee("Abhi");
// let emp2=new Employee("Krithika");
// emp.greet();
// emp1.greet();
// emp2.greet();

// //map
// let emp=new Map();
// emp.set("id","111");
// emp.set("name","Shree");
// emp.set("city","Mangalore");

// console.log(emp.get("id"),emp.get("name"),emp.get("city"));


//set 
let set=new Set(); //only unique elements are stored and to add anything add function is used

set.add(10);
set.add(20);
set.add(30);
set.add(40);
set.add(20);

console.log(set);