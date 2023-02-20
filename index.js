const fs=require("fs");
const[, ,num1,num2,msg]=process.argv;
const sum=(n1,n2)=>n1+n2;
    console.log(sum(+num1,+num2));

const welcome=(message)=>{
    console.log(`hi ${message} welcome to node js`)
}
welcome(msg);

fs.readFile("./sample.txt","utf-8",(err,data)=>{
   if(err){
    console.log(err)
   }
   else{
    console.log(data)
   }
 })
 const content="make a new file from node package"

 //File create a file 
 fs.writeFile("./newfile.txt",content,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("file written successfully")
    }
 })
const newcontent="\n New content added"
 //Update in the existing file
 fs.appendFile("./newfile.txt",newcontent,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("file updated successfully")
    }
 })

//delete
// fs.unlink("./sample.txt",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("deleted thee file")
//     }
// })
for(fs;fs<=5;fs++){
fs.writeFile("./newfile1.txt",content,(err)=>{
    if(err){
        console.log(err)
    }else{
        
            console.log("created file")
        }
    
})}


 let time=Date.now()
 console.log(time)
 let date=new Date();
 let utc=date.toUTCString();
 console.log("date",date)
console.log("utc",utc)


//os functions
console.log("Os version----",os.version());
console.log("free memory---0",os.freemem());
console.log("Total memory--",os.totalmem());
console.log("CPU---",os.cpu)