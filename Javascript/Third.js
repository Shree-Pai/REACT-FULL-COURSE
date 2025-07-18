//import export

// export function add(x,y){
//     return x+y;
// }

// // let result=add(10,20);
// // console.log("Result:",result);
// export function sub(x,y){
//     return x-y;
// }
// export function product(x,y){
//     return x*y;
// }

// export function div(x,y){
//     return x/y;
// }

// export default add; //if we have to import only 1 function


// console.log("Program Started...");
// setTimeout(() => {
//     console.log("fetching data from API");
// }, 5000);
// console.log("Closing our Application...");

const datas =[
    {name:"ABC",Profession:"Software Developer"},
    {name:"XYZ",Profession:"Software Tester"}
];

function getDatas(){

    setTimeout(()=>{
        let output="";
        datas.forEach((data,index)=>{
        output+=`<li>${data.name}-${data.Profession}</li>`
    })
    document.body.innerHTML=output;
    },3000);
    
}

//callback
// function createData(newData,callback){
//     setTimeout(()=>{
//         datas.push(newData);
//         callback();
//     },5000);
// }
// createData({name:"Abhi",Profession:"Database Manager"},getDatas);
// getDatas();


//promise
// function createData(newData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         datas.push(newData);
//         let error=false;
//         if(!error){
//             resolve();
//         }
//         else{
//             reject("Some Error Occured");
//         }
//     },5000);
// }) 
// }
// createData({name:"Abhi",Profession:"Database Manager"}).then(getDatas).catch(err=>console.log(err));

//async-awake
function createData(newData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        datas.push(newData);
        let error=false;
        if(!error){
            resolve();
        }
        else{
            reject("Some Error Occured");
        }
    },5000);
}) 
}
async function start() {
    await createData({name:"Abhi",Profession:"Database Manager"});
    getDatas();
}
start();

