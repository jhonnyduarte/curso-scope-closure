//Variables

var a; // declarando
let b = 'bb'; //declarando y asignando
b = 'bb'; // reasignando
var a  = 'aa'; //redeclaracion


//Global scope
var fruit = 'apple';

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries (){
    country = 'Colombia'; // Se considera global
    console.log(country);
}

countries();
console.log(country);

