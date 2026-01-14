// function greetUser(user){
//     console.log("Hello " + user.name + " "  + "your age is " + user.age);
//     if(user.age > 18){
//         console.log("You are eligible to vote.");
//     }else{
//         console.log("You are not eligible to vote.");
//     }
// }


// user = {
//     name:"Mehedi",
//     age:22,
//     gender:"Male"
// }

// greetUser(user);


// const user = ["Raju", "Mehedi", "Naim", "Sakib"];
// console.log(user.length);
// console.log(user[2]);


// const users = [{
//     name: "Raju",
//     age: 22
// },{
//     name: "Mehedi",
//     age: 21
// },{
//     name: "Naim",
//     age: 20
// }];

// // console.log(users[0]);



// for(let i=0; i<users.length; i++){
//     console.log("Name: " + users[i].name + ", Age: " + users[i].age);
// }


//Asynchronous programming

// console.log("Start");

// setTimeout(() => {
//     console.log("This is the inside of setTimeout");

// }, 2000);

// console.log("End");


const fs = require('fs');

function print(err, data){
    if(err){
        console.log("Error: ", err);
        return;
    }
    console.log(data);
}

fs.readFile('a.txt', 'utf-8', print); //asynchronous function
fs.readFile('b.txt', 'utf-8', print); //asynchronous function

console.log("End!")




//Callback function

// function getData(Callback){
//     setTimeout(() =>{
//         Callback("This is the data.");
//     },2000);
// }


// getData((data)=> {
//     console.log(data);
// });