// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

{
    // Second Block
    var secondVar = "This is a var";
    let secondLet = "This is a second let";
    const secondConst = "This is a second const";

    secondVar = "This is the updated second var";
    secondLet = "this is an updated second let";
    //secondConst = "this is an updated second const";

    //console.log(secondVar);
    console.log(secondLet);
    console.log(secondConst);
}

console.log(secondVar);
console.log(secondLet);
console.log(secondConst);