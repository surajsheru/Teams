import React,{useEffect,useState} from 'react'
import readXlsxFile  from 'read-excel-file'
import sh  from 'read-excel-file'
import second from 'read-excel-file'
import { MDBBtn } from 'mdbreact';
function Check() {
    let test=[],result=[];
    let difference=[],di=[],res=[];
    let i,shdate;
    const[showabs,setShowabs]=useState([])
    const [showpre,setShowpre]=useState([])
    const[Dates,setDate]=useState([])
    useEffect(()=>{
const input = document.getElementById('input');
input.addEventListener("change",()=>{
    sh((input.files[0]), { getSheets: true }).then((sheets) => {
        sheets.forEach((obj)=>{
                  
             readXlsxFile((input.files[0]), { sheet: sheets[0].name }).then((rows) => {
                shdate=obj.name;
                if(shdate!=sheets[0].name){
                    Dates.push(obj.name)
                second((input.files[0]), { sheet: shdate }).then((cols)=>{
                    test=[]
               for(i=0;i<cols.length;i++){
                  test.push(cols[i][0])
                }
                test=[...new Set(test)]
                res=[];di=[]
                for(i=0;i<rows.length;i++){
                    if(test.includes(rows[i][1])) {res.push(rows[i][0])}
                    else{di.push(rows[i][0])}
                }
              res=res.sort();di=di.sort()
               result.push(res)
               difference.push(di)
             
                  })} 
                 })          
         })},[])  })})
    

     const click=()=> {
        setShowabs(difference); 
        setShowpre(result);
    console.log(Dates)}

     return (
        
        <div><br/>
             <h1 style={{color:"#073590",fontFamily:"cursive"}}>GET  ATTENDANCE BY UPLOADING  FILE</h1>
            <br/>
            
            <h5>UPLOAD FILE 👉🏻👉🏻👉🏻 <input id="input" type="file"/></h5><br/>
            
            <MDBBtn onClick={click} color="primary"><strong>CLICK FOR ATTENDANCE</strong></MDBBtn><br/><br/>
            <form className="form-inline justify-content-center">
            <div className="card border-primary mb-3" style={{width:"35%",padding:"1%",fontSize:"17px",color:"#0000ff",fontFamily:"cursive",textAlign:"left"}}>
            ► Make sure that the First sheet in your file contain all Students RollNumbers in the first column and Names in the Second column.
            <br/><br/>► Copy Names of Students from the Downloaded Sheet of Teams and Paste in new sheet of the same file which contains your First Sheet.
            <br/><br/> ► Save sheet as DATE in the Downloaded Sheet from Teams. 
           <br/><br/> ► You can have multiple sheets in File . Make sure Names of the Students in all the sheets are same . Upload the file and Click the button.
        </div>
            </form>
                <br/><br/>
          {showpre.map((item,i)=>(
                    <div className="card">
                    <table><br/>
                        <th>
                       <h4 style={{color:"blue",fontFamily:"cursive"}}> Present</h4>
                       <table className="table table-striped">
                    {item.map(it=>(
              <tr><strong>{it}</strong></tr>
                       ))} </table>
                       </th>
                      <th><h4 style={{fontFamily:"cursive"}}>DATE : {Dates[i]}</h4></th>
                       <th>
                       <h4 style={{color:"red",fontFamily:"cursive"}}>Absent</h4>
                       <table className="table table-striped">
                    {showabs[i].map(it=>(
              <tr><strong>{it}</strong></tr>
                       ))} </table>
                       </th>
                   <br/>
                   </table>
                   </div>
                 ))}
               </div>
     )
}
export default Check
