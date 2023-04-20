function juiceMachine(fruit) {
    // return "this is a " + fruit + " juice";
    // return 'this is a ' + fruit + ' juice';
    return `this is a ${fruit} juice`;
}
let juice = juiceMachine('apple');
console.log(juice);

console.log(juiceMachine('banana'));
console.log(juiceMachine('mango'));

function of_X(x) {
    return (x + (x * x));
}
let y = of_X(2);

// console.log(y);

function banana_shake_machine(banana, milk, ice) {
    return `this is banana shake of ${banana} , ${milk}, ${ice}}`
}
console.log(banana_shake_machine("banana,cream,icecream"));


let x = 2;
let z = 3;


function sum(a, b) {

    return (a + b);
}
console.log(sum(x, z));


function subtract(p, q) {
    return (p - q);
}
console.log("the substraction of two value 7-3 is " + subtract(7, 4));


function multiply(f, g) {
    return (f * g);
}

function devide(f, g) {
    return (f % g);
}

function calculator(operation, a, b) {
    console.log(operation);
    if (operation == "add") {
        return sum(a, b);
    } else if (operation == "subtract") {
        return subtract(a, b);
    } else if (operation == "multiply") {
        return multiply(a, b);
    } else if (operation == "devide"){
        return devide(a,b);
    }
}

console.log(calculator("add", 5, 7));
console.log(calculator("subtract", 12,10));

//calculator 2nd

//function calculator2( operation,a,b){
//switch(operator){

let week="thursday";

switch('sunday'){
    case "monday":
    console.log("today is monday");
    break;
    case "tuesday":
        console.log("today is tuesday");
    break;
    case "thursday":
        console.log("today is thursday");
    break;
    case "wednesday":
        console.log("today is wednesday");
    break;
    case "friday":
        console.log("today is friday");
    break;
    case "saturday":
        console.log("today is saturday");
    break;
    case "sunday":
        console.log("today is sunday");
    break;
}

function calculator_2(operation,a,b){
   
    switch(operation){
        case "add":   
            return sum(a,b);

        case "subtract":
            return subtract(a,b);
            
        case "multiply":
            return multiply(a,b);

        case "devide":
            return devide(a,b);     
    }
}

console.log(calculator_2("devide",10,2));
