// in javascript functions can be also treated as data types

function sayHi(){

    console.log('say hi');

    return 20;

}


// console.log(sayHi);


// functions are veriable 
// veriables can be passed as parameter

// funtion can be also passed as parameter

let fun = function (){
    console.log('say hi');

}

// console.log(fun);

// fun();

// passing function as parameter


function fun2(fun1){
    console.log('fun2');
    fun1();
}

let fun1 =  function (){
    console.log('fun1');
}

fun2(fun1);

// output 
// fun2 
// fun1