import React,{useEffect} from 'react'
// const xlsxFile = require('read-excel-file/node');
// const second=require('read-excel-file/node');
// const sh=require('read-excel-file/node');
import readXlsxFile  from 'read-excel-file'
import sh  from 'read-excel-file'
import second from 'read-excel-file'
import Fload from './Fload';

function Teams() {
    let main=[],test=[],result=[],show=[];
    let difference=[];
    let i,shdate;
    useEffect(()=>{

console.log("welcome")

const input = document.getElementById('input');
input.addEventListener("change",()=>{
    sh((input.files[0]), { getSheets: true }).then((sheets) => {
        sheets.forEach((obj)=>{
         
             console.log(obj.name);
             shdate=obj.name;
             readXlsxFile((input.files[0]), { sheet: 'cse' }).then((rows) => {
      
                second((input.files[0]), { sheet: obj.name }).then((cols)=>{
                  //console.log(cols);
                  //console.log(rows);
                  main=rows;
                 // console.log(cols)
                  for(i=0;i<cols.length;i++)
                  {
                      if(i===0)
                      {
                          test.push(cols[i][0])
                      }
                      else if(cols[i][0]!==cols[i-1][0])
                      {
                          test.push(cols[i][0])
                      }
                  }
                  //test=cols;
                   //console.log(test);
                   show=rows;
                       
                  console.log("date"+""+obj.name);
                result.push("date"+""+obj.name);
                  //result=[];
                  //document.writeln("date"+""+obj.name)
                  test.forEach(element => {
                      //console.log(element[0])
                      for(i in main){

                          if(main[i][1]===element)
                          {
                              console.table(main[i][0])
                             //document.writeln(main[i][0])
                             result.push(main[i][0])
                           //  console.log(result)
                          }
                          
                         }
                      });  })  })          
         })
     })
    
}) },[])
     const ReptileListItems=()=> {
        
     let ronumbers=[];
     for(i in show)
     {
         ronumbers.push(show[i][0])
     }
  
     result=result.sort();
     difference = ronumbers.filter(x => !result.includes(x));
     document.writeln("<h1>Present  numbers:"+shdate+"</h1>")
    
     result.map((reptile) => {
            
        document.writeln(reptile+",\n")
        document.write('\n');
    });
     document.writeln("<h1>Absenties numbers:"+shdate+"</h1>")
     console.log("abs"+difference)
     difference.map((reptile) => {
            
            document.writeln(reptile+",\n")
            document.write('\n');
        });
 
         
     };
     return (
        <div>
        <div>
             <h1>Upload FILE </h1>
            <input type="file" id="input" />
            <button onClick={ReptileListItems}>CLICK FOR Absent Numbers</button>
      </div>
                  
               
        </div>
    )
}

export default Teams
