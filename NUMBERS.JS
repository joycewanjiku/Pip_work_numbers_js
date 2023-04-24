// Math.round=it returns the value of a number rounded
// to the nearest integer
console.log(Math.round(46,9));
console.log(Math.round(5.95)),Math.round(5.5),Math.round(-5.95)
console.log(-5.05),Math.round(-5.5), Math.round(-5.95)

// Math.min()
// returns the smallest of the number given input parameters
console.log(Math.min(2,3,1));
console.log(Math.min(-1,-3,-1));
const array1=[2,3,1]
console.log(Math.min(...array1));

const b=10;
const y=-20;
const z=Math.min(b,y)

// let x =y(foo);
// if(x> boundary){
//     x=boundary
// }

// Math.max()
// returns the largest of the numbers as input parameters or Infinity
console.log(Math.max(1,3,2));
console.log(Math.max(-1,13,12));

const array2=[1,,3,2];
// console.log(Math.max);

function getMaxOfArray(numArrays){
    return Math.max.apply(null,numArrays);
}


// const arra =[1,2,3];
// const max =arra.reduce((a,b) => Math.max(a))


// math.pow()
// returns the value of a based raised to a power

console.log(Math.pow(7,3));
console.log(Math.pow(4,0.5));
console.log(Math.pow(-7,-2));
console.log(Math.pow(-7,0.5));

// math.floor
// Always round down and returns the largest integer less than or equal
// to a given number

console.log(Math.floor(5,5.95));
console.log(Math.floor(5.05));
console.log(Math.floor(5));
console.log(Math.floor(-5.05));

function myFunc(theobject){
    theobject.make="Toyota"

}
const mycar={
    make:"Honda",
    model:"Accord",
    year:1998,
};
console.log(mycar.make);
myFunc(mycar);
console.log(mycar.make);

const square=function(number){
    return number * number;

};
console.log(square(4));

function map(f,a){
    const result =new Array(a.lengt);
    for(let i = 0; i < a .length; i++){
        result[i]=f(a[i]);

    }
    const cube =function(x){
        return result 

    }
   
};
const numbers=[0,1,2,5,20];
// console.log(map(cube,numbers));

// in
// it returns true if the specified property is in specified object
 const trees=["redwood","bay","cedar","oak","maple"];
 0 in trees;
 3 in trees;
 6 in trees;
 "bay" in trees

//  (you must specify the ibdex number ,not the value 
// at that index)

function testNumb(a){
    let result;
    if(a> 0){
        result='positive';
    }else{
        result='Not positive';
    }
   return result;
}
console.log(testNumb(-5));

function chekValue(a,b) {
    if(a===1){

        if(b===2){
            console.log("a is 1 and b is in 2");
        }
    }else{
        console.log("a is not 1");
    }    

    
    
}
