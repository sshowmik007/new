
function sleep(name,time) {

    console.log( name + "i love sleeping" + time)
}
sleep(" sadman " , " 10 pm ");

function eat(eat) {

    console.log( eat + "i love Most")
    
}
eat(" mango ");
eat(" pizza ");
eat(" meat ");



// return the values
// return is used for give the output form outside


let x = prod(4,3);

function prod(a,b){
    return a*b;
}
console.log(x);


// outside of the scope declaring variable is called Global and Inside is called Local
var CNN=" hello ";
function CN(){
    let carName="BMW" ;
    console.log(carName);
}
CN();
console.log(CNN);
