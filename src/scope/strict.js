// 'use strict'; usando strict me obliga a declarar
pi = 3.1416;
console.log(pi);

function myFunction(){
   // 'use strict'; dentro de la funcion no tengo alcance 
   // a ella
    return pi = 3.1316; 
}
console.log(myFunction());