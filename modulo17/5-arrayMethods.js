// let arr = ["Yo","estudio","JavaScript"];

// arr.splice(1, 1);

// console.log(arr);

// console.log(arr.length);


// let newArr = arr.splice(0,3, "con","muchas","ganas");

// console.log(arr);
// console.log(newArr);


// let arr = ["t","e","s","t"];

// console.log(arr.slice(1,3));

// let arr = [1,2]

//console.log(arr.concat([3,4]));

// const newArray = arr.concat([3,4])
// console.log(arr);

// console.log(newArray);

// let arr = ["Yo","estudio","JavaScript"];

// arr.forEach(function(item,index,array){

//     console.log(item);
//     console.log(index);
//     console.log(array);
//     console.log("----------------");
// })

//let arr = [1, 5 , false];

// console.log(arr.indexOf(5));
// console.log(arr.indexOf(false));
// console.log(arr.indexOf(null));
// console.log(arr.includes(1));

// let users = [
// {id: 1, name: "john"},
// {id: 2, name: "David"},
// {id: 3, name: "Franco"}

// ];

// let user = users.find(function(item){
//     return item.id === 1
// })
// let userindex = users.findIndex(function(item){
//     return item.id === 1
// })

// console.log(user);
// console.log(userindex);


let users = [
    {id: 1, name: "john", age:12},
    {id: 2, name: "David",age:21},
    {id: 3, name: "Franco",age:31}
    ];


    let someUsers = users.filter(item => item.age > 18);
    console.log(someUsers);
    // let result = arr.map(function(item,index,array){

    // })