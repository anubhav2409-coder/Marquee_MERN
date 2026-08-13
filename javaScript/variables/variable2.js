debugger;
console.log('global excution contex start');

var globalVariable=-'i am a gloabl variable';

console.log(globalVariable);
console.log(greet());
greet();

console.log('global excution context end');

function greet(){
    var name='harshit';
    console.log('inside global function');
    return 900;
}