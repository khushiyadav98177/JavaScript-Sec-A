let user =  { 
    name:"khushi yadav ",
    age: 18,
    skills:"gurugram",
    favcolor: ["re","blue","green"]
}
console.log(user.fullname,user.mobileno,user.favcolor[1]);

//string literal
console.log("my name is"+user.fullname+".my fav color is")

//object method

// object.keys(variablename)
//console.log(Object.keys(user));
//console.log(Object.value(user));
//console.log.entries(user);

const car={
    make:"mahindra",
    model: "thar"

};
//object.freeze(car); we cant add a key value or change and  update the existing value

Object.seal(car);
car.model = "xuv700"
car.color = "black"
console.log(car);
 


