

// Hight Order functions

// functions which takes functions as arguments





// call back function :- functions which are passed as arguments in another function


function getFirstName(){
    // return first name
    return 'Zishan';
}

function getLastName(){

    // return last name
    return "Jawed";
}


function fun(word, getNames){
    let name = getNames();

    console.log(word+" "+name);
}

fun("Hello ",getFirstName);
fun("Hello ",getLastName);


// getFirstName and getLastName are call back fucntions

// fun is HIGH ORDER FUCNTION

