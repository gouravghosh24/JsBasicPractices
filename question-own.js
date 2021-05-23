/*
A banking System 
1. Find the minimum Balance of the A/c Holder below 10000 
2. Find if the account is inactive
3. Find the interest earned by the A/c Holder

Get data from  the Array object named AccountHolder

*/
function MaxBalance(data){
    let ActiveStats = data.filter((item)=>{
        return item.active !== true && item.Intearn === ''});

    let ActiveFilter = ActiveStats.map((o)=>{
        if(o.acbalance <= 10000){
            return o.name;
        }  
    });

    let IntrestCal = ActiveStats.filter((intr)=>{
        let I = intr.acbalance * 0.02 * 12;
         if(intr.Intearn ===''){
                return intr.Intearn = I;
        }
    });


    //return ActiveFilter;
    return ActiveStats;
    
};

const AccountHolder =[{
    name :"Rashid Khan",
    accountnumber : "123456",
    active : true,
    acbalance : 30000,
    Intearn :'',
    },
    
    {
        name :"Abdul rahaman",
        accountnumber : "789101",
        active : false,
        acbalance : 9000,
        Intearn :'',
        },
        
        {
            name :"Vikram Aditya",
            accountnumber : "986787",
            active : true,
            acbalance : 130000,
            Intearn :'',
            },
            
            {
                name :"Habib Ali",
                accountnumber : "547867",
                active : false,
                acbalance : 3000,
                Intearn :'',
                },
                
                {
                    name :"jonny Shetty",
                    accountnumber : "889689",
                    active : false,
                    acbalance : 300000,
                    Intearn :'',
                },
                {
                    name :"mohan Preet",
                    accountnumber : "897969",
                    active : true,
                    acbalance : 9800,
                    Intearn :'',
                },
                

];

console.log(MaxBalance(AccountHolder, item => item.name));
