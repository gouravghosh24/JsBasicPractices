const arr1 =[20,50,30,70,10];
const arr2 = [90,40,80,100,60];

//UNSORTED JUST CONCATED ARRAY

let unsortd = arr1.concat(arr2);
console.log(`${'THIS IS AN UNSORTED ARRAY '+ unsortd +'\n'}`);

//FUN BEGINS BELOW SORTS AND MERGES THE ARRAY
function sorting(arr1,arr2){
    let sort1 = arr1.sort((a,b)=>{return a-b});
    let sort2 = arr2.sort((a,b)=>{return a-b});
    let sorts = sort1.concat(sort2);
    let sotings = sorts.sort((a,b)=>{return a-b;});
    console.log(`${'THIS IS A SORTED ARRAY ' + sotings}`);
};
sorting(arr1,arr2);
