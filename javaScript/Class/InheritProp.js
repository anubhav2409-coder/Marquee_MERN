// let name = "Anubhav";

// let reversed = name.split("").reverse().join("");

// console.log(reversed);


let str="anubhav"
let str1="rahul"
// str.__proto__.Reverse=function(){
//     return this.split("").reverse("").join("");

// }
// console.log(Object().__proto__);

// console.log(str.Reverse());
// console.log(str1.Reverse());


String.prototype.transform=function(){
    return this.split("").join("*");
}

console.log(str.transform());
console.log(str1.transform());
