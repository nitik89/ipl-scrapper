let fs =require("fs");
let path=require('path');
let arr=process.argv.slice(2);
let commands=[];
let files=[]
for(let i of arr){
    if(i=='-s'||i=='-b'||i=='-n'){
        
        commands.push(i);
    }
    else{
        files.push(i);
    }
}
if(files.length==1&&commands.length==0){
    let fileToBeRead=files[0];
    if(fs.existsSync(fileToBeRead)){
        let data=fs.readFileSync(fileToBeRead,"utf-8");
        console.log(data);
    }
    else{
        console.log("Error!! File doesn't exists")
    }
}
else if(files.length>1&&commands.length==0){
    let data="";
    for(let i of files){
        let dataFromFile=fs.readFileSync(i);
        data+=dataFromFile+"\r\n";
    }
    console.log(data);
}
else if(files.length==1&&commands.length==1&&commands[0]=='-s'){
    let fileToBeRead=files[0];
    if(fs.existsSync(fileToBeRead)){
        let data=fs.readFileSync(fileToBeRead,"utf-8");
       
  let ans=data.split("\r\n");
  let toBePrinted="";
  for(i of ans){
      if(i!=''){
          toBePrinted+=i+"\n";
      }
  }

  console.log(toBePrinted.trim());
    }
    else{
        console.log("Error!! File doesn't exists")
    }
}
else if(files.length==1&&commands.length==1&&commands[0]=='-n'){
    let fileToBeRead=files[0];
    if(fs.existsSync(fileToBeRead)){
        let data=fs.readFileSync(fileToBeRead,"utf-8");
       
  let ans=data.split("\r");
  let totalAns='';
  let count=0;
  for(let i of ans){
      totalAns=totalAns+count+" "+i+'\r';
      count++;
  }
  console.log(totalAns);
    }
    else{
        console.log("Error!! File doesn't exists")
    }
}

