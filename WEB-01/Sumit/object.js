//object always const dia kora valo

const car = {
    name : "BMW" ,
    modle : 500 ,
    weight : "850 KG",
    color : "white",
    // calling obj property as a function
    start: function(){
        this.drive();  //calling the function inside a function
        console.log("car is startinh") ;
    },
    drive : function() {
        console.log("car is driving")
    } ,
};

console.log(car.color);
car.start();


