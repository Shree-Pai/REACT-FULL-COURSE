// function display(){
//     console.log("Good Afternoon");
//     console.log("How are you?");
//     console.log("welcome to Javascript Session!");
// }
// display();
// console.log(".........After 10 Minutes...........");
// display();
// console.log(".........After 20 Minutes...........");
// display();
// console.log(".........After 30 Minutes...........");
// display();

// function Greet(name){
//     console.log("Welcome :",name);
// }

// Greet("Shree");
// Greet("Abhi");

// function add(first_num, sec_num){
//     return first_num+sec_num;
// }
// let result=add(10,20);
// console.log("Result:", result);

//Function without any name is anonymous function
// let display=function(name){
//     console.log("Welcome :",name);
// }
// display("Ram");

// let result=function(x,y)
// {
//     return x+y;
// }
// console.log("Result:",result(10,20));

//shortest way to create a function is a array function
// let display=(name)=>{
//     console.log("Welcome:",name);
// }
// display("Shree");

// let display=name=>console.log("Welcome:",name);
// display("Shree");

// let result=(x,y)=>x+y
// console.log("Result:",result(30,50));

// let display=setTimeout((name)=>{
//     console.log("Welcome!",name)
// }, 10000,"Abhi");
// display;


//Callback
// function Greet(name,callback){
    
//     console.log("Hello!",name);
//     callback();
    
// }
// function sayBye(){
//     console.log("Bye!");
// }
// Greet("Abhi",sayBye); //passing a function as a argument to another function

//Default Parameter
// function Greet(name="Friends"){   //uses default parameter when no argument is passed default value is been used
//     console.log("Welcome:",name);
// }
// Greet("Abhi");
// Greet("Krithika");
// Greet();


//Object
let employee={
    id:111,
    name:"Shree",
    city:"Mangalore"
}
// console.log(employee);

//console.log(employee.name); //dot notation
//console.log(employee["id"]); //bracket notation

// employee.salary=50000; //to add more attributes
// console.log(employee);


// //for in loop for object
// for(let key in employee){
//     console.log("Key:"+key+" Value:"+employee[key]);
// }

//Destructuring of Object
//Extracting a value from an object and storing in variable

// let {id,name,city}=employee;
// console.log(id);
// console.log(name);
// console.log(city);