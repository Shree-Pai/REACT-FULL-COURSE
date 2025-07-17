// if(true){
//     var x=10;
//     console.log("X:",x);
// }

// console.log("X:",x);

// if(true){
//     let x=10;
//     console.log("X:",x);
//     x=20;
//     console.log("X:",x);
// }

// console.log("X:",x); give errors bcoz let doesnot have global scope

// if(true){
//     const x=10;
//     console.log("X:",x);
//     // x=20; //TypeError: Assignment to constant variable.
//     // console.log("X:",x);
// }

// let x=10;
// console.log(x);
// console.log(typeof(x));
// x="ABC"
// console.log(x);
// console.log(typeof(x));

// let x=true;
// let y=null;
// let z;
// let a=123n;
// let b=1234;
// console.log(typeof(x));
// console.log(typeof(y));
// console.log(typeof(z));
// console.log(typeof(a));
// console.log(typeof(b));


//Ternary Operator
// let age=20;
// (age>=20)?console.log("Eligible"):console.log("Not Eligible");


//if... else if...else
// let marks=50;
// if(marks>=90){
//     console.log("Grade: A");
// }
// else if(marks>=80&& marks<90){
//     console.log("Grade : B");
// }
// else if(marks>=70&& marks<80){
//     console.log("Grade : B");
// }
// else if(marks>=60&& marks<70){
//     console.log("Grade : C");
// }
// else {
//     console.log("Fail");
// }

//Switch Statements
// let choice=3;

// switch(choice){
//     case 1:console.log("Case 1 Executed");
//     break;

//     case 2:console.log("Case 2 Executed");
//     break;

//     case 3:console.log("Case 3 Executed");
//     break;

//     case 4:console.log("Case 4 Executed");
//     break;

//     default:console.log("Please Enter a Valid choice");
// }

//write a js program to check if the number is palindrome

// let a=121;
// let temp=a;
// let rev_num=0;

// while(temp>0){
//     let rem=temp%10;
//     rev_num=rev_num*10+rem;
//     temp=Math.floor(temp/10);//to remove fraction value
// }
// if(a==rev_num){
//     console.log("Is Pallindrome");
// }
// else{
//     console.log("Not Pallindrome");
// }

//Write a program to generate all the pallindrome number from 1 to 1000

// for(let i=1;i<=1000;i++){
//     let temp=i;
//     let rev_num=0;

//     while(temp>0){
//         let rem=temp%10;
//         rev_num=rev_num*10+rem;
//         temp=Math.floor(temp/10); //to remove fraction value
//     }
//     if(i==rev_num){
//         console.log(i);
//     }
// }


//Write a program to check if the given number is prime number or not

// let num=30;
// for(let i=2;i<=num/2;i++){
//     if(num%i==0){
//         console.log("Not a Prime Number");
//         break;
//     }
//     else{
//         console.log("Is a Prime Number");
//         break;
//     }
// }//gives o/p but not efficient


// let num=3;
// flag=true;
// for(let i=2;i<=num/2;i++){
//     if(num%i==0){
//         flag=false;
//         break;
//     }
// }
// if(flag==true){
//     console.log("Prime Number");
// }
// else
// {console.log("Not a Prime NUmber");}


//Generate Prime number from 1 to 1000

// for( let j=1;j<=1000;j++){
//     flag=true;
//     for(let i=2;i<=j/2;i++){
//         if(j%i==0){
//             flag=false;
//             break;
//         }
        
//     }
//     if(flag==true){
//         console.log(j);
//     }
// }

//Array
// let num=[10,20,30,40,50];
// console.log(num);

//or
// let num=new Array(10,20,30,40,50);
// console.log(num);

// let data=[10,20,30,10,20,10,"ABC",true];
// console.log(data);
// console.log(data[4]);
// data[1]=100;
// console.log(data);
// console.log(data.length);
// for(let i=0;i<=data.length-1;i++){
//     console.log(data[i]);
// }

//for off loop

// for(let x of data){
//     console.log(x);
// }

//Inbuilt methods in Array

// data.push(200);
// data.unshift(500); // add element in the beginning of Array
// data.pop();
//data.shift();//remove element from beginning of Array
//console.log(data);

// console.log(data.indexOf(10)); // to get the index of any element in Array
// console.log(data.lastIndexOf(10)); // to get the last occurence of the element

// let data=[90,60,40,70,10,80,20,30,50];
// console.log(data);

// //data.sort(); 
// data.reverse();
// console.log(data);

//Write a program to sort a Array in Ascending order

// let data = [10, 20, 60, 300, 250, 600];
// let sort_data = [...data];
// console.log("Original Data:", data);
// for (let i = 0; i < sort_data.length - 1; i++) {
//     for (let j = i+1; j < sort_data.length - 1 ; j++) {
//         if (sort_data[j] > sort_data[j + 1]) {
//             let temp = sort_data[j];
//             sort_data[j] = sort_data[j + 1];
//             sort_data[j + 1] = temp;
//         }
//     }
// }
// console.log("Sorted Data:", sort_data);



