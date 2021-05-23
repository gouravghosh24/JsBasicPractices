/* 
Write a Javascript program to get the current date.
Expected Output :
mm-dd-yyyy, mm/dd/yyyy, or dd-mm-yyyy, dd/mm/yyyy
*/
const DispDate = (date= new Date())=>{
    const days = date.getDate();
    const months = date.getMonth() +1;
    const years = date.getFullYear();

    return `${days}/${months}/${years}`;
    
}
//console.log(DispDate());

const ShowDate=()=>{let Data = new Date();return Data;}
console.log(ShowDate());