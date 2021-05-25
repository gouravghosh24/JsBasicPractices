/* 
Exercise :
You are now working on the Gourav Kendriya Vidyala school web portal.
build some calculators to check weather :

**** NOTE: We have a function already GouravKv()

1. Write a function that calculates the highest marks students have achieved. 
    In their term-end examinations.

2. calculate if some students are below 35% to check if they have passed their exams.

3. check if the student is active based on their marks above 40% needs to extra effort.
   & above 60% needs to improve & if student above 80% "He is doing great". 
   Rate the student grade based on your calculation taken into consideration the StudentDB array, 
   Rate their performances 1-5 ratings may work great for good students. This is a concept of star ratings.
 

**** NOTE : follow StudentsDB array of objects
**** NOTE : Every output must be console logged

::::::Thank You::::::
*/

function GouravKv(data){

    let Act1 = data.filter(
        (item)=>{ if(item.active !== true && item.mark < 35)
                        {   
                           return console.log("Student Failed!! " +item.name +"\n"+ "Marks Obtained : " + item.mark +"\n"+ "Good student : " + item.active +"\n"+"\n");

                        };});

                        let Acto = Math.max.apply(Math, data.map((i)=>{
                            if(i.mark >= 60){
                                 
                                return console.log("Student Name " + i.name + " Marks Obtained : "+ i.mark);
                            }
                        }
                        ));
                        
                        let Act2 = data.forEach((a)=>{
                            const ratings1 =["5 Star", "3 Stars", "2 Stars","1 Star"];
                            const remarkss = ["Excellent","Needs Improvement","Needs Huge improvement","Career at Risk"];
                            
                            if(a.mark <= 35){
                                console.log("\n"+"Student Name: " + a.name + " Ratings: " + ratings1[3]+ " Remarks: " + remarkss[3]);
                            }
                            if(a.mark <= 40 && a.mark < 60){
                                console.log("\n"+"Student Name: " + a.name + " Ratings: " + ratings1[2]+ " Remarks: " + remarkss[2]);
                            }
                            if(a.mark >=60 && a.mark < 80){
                                console.log("\n"+"Student Name: " + a.name + " Ratings: " + ratings1[1]+ " Remarks: " + remarkss[1]);
                            }
                            if(a.mark>=80){
                                console.log("\n"+"Student Name: " + a.name + " Ratings: " + ratings1[0]+ " Remarks: " + remarkss[0]);
                            }
                            
                        });
                        
        
    
    return Act1;
};





//We have StudentDB of their carriculam details:
const StudentDB =[
        passmark =[35],
        {active:true,name:"Amit Chatterji",mark:80,studentgrade:''},
        {active:false,name:"nilesh Mukherjii",mark:50,studentgrade:''},
        {active:true,name:"Nabadeep maheta",mark:69,studentgrade:''},
        {active:false,name:"Ashish Karmakar",mark:90,studentgrade:''},
        {active:false,name:"James Nolen",mark:20,studentgrade:''},
        {active:false,name:"George Boyer",mark:34.9,studentgrade:''}
];
console.log(GouravKv(StudentDB,item => item.name, item => item.mark,item => item.studentgrade));
// console.log(GouravKv(ratings1.a));