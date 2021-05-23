/*                                      @@@@ === Problem One === @@@@
    1.)Write a Javascript program to check two numbers and return true if one of the number is 100 
*/

const isEqualto100 = (a,b) => a===0 || b===0 || a+b === 100;

//console.log(isEqualto100(20,80));
//console.log(isEqualto100(0,0));

let values = (a,b)=>{
    if(a+b===50 || a+b===100 || a-b===100){
        return('Correct');
    }
    else if(a+b===10 || a-b===10){
        return("somewhat correct");
    }
    else{
        return("Wrong");
    }
}
console.log(values(200,100));