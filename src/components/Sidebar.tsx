import React from 'react'
import {Employee} from './Modal'
import { v4 as uuidv4 } from "uuid";
interface Props{
  AllEmployeeCards:Employee [];
  setFilteredCards:React.Dispatch<React.SetStateAction<Employee[]>>
}



const Sidebar = ({AllEmployeeCards,setFilteredCards}:Props) => {
  {
  
    let department=new Map<String,Employee[]>();
    let job=new Map<String,Employee[]>();
    let office=new Map<String,Employee[]>();
    //for updating the maps 
  
  
  
    for(let e of AllEmployeeCards){
      if (job.has(e.jobTitle)){
        job.get(e.jobTitle)!.push(e)
      }
      else{
        job.set(e.jobTitle,[e])
      }
   
      if (department.has(e.department)){
        department.get(e.department)!.push(e)
      }
      else{
        department.set(e.department,[e])
      }
      if (office.has(e.office)){
        office.get(e.office)!.push(e)
      }
      else{
        office.set(e.office,[e])
      }
  
  
    }
    
    
  
  
  
  
  
     
    //for getting the keys of maps which can be used for map function 
    
    let jobArr=[];
    for (let x of job.keys()){
      jobArr.push(x);
    }
    let officeArr=[]
    for(let x of office.keys()){
      officeArr.push(x)
    }
    let deptArr=[];
    for(let x of department.keys()){
      deptArr.push(x)
    }
    
    return (
      <div className="sidebar-search-filter-output">
        <div className="" id="sidebar" >
          <div className="departments">
            <h6 style={{fontWeight:"bold"}}>Departments</h6>
            
            {deptArr.map((c)=>(<div  className="user-select-all" onClick={()=>setFilteredCards(department.get(c)!)} key={uuidv4()} >{c+"("+department.get(c)!.length+")"}</div>))} 
          </div>
          <div className="offices" style={{marginTop:"25px" }}>
            <h6 style={{fontWeight:"bold"}}>Offices</h6>
            {officeArr.map((c)=>(<div  onClick={()=>setFilteredCards(office.get(c)!)} key={uuidv4()}  >{c+"("+office.get(c)!.length+")"}</div>))}
            
          </div>
  
          <div className="job-titles" style={{marginTop:"25px"}}>
            <h6 style={{fontWeight:"bold"}}>Job Titles</h6>
            {jobArr.map((c)=>(<div key={uuidv4()}  onClick={()=>setFilteredCards(job.get(c)!)} >{c+"("+job.get(c)!.length+")"}</div>))}
  
          </div>
          <div className="view-more">
            <a href=""></a>
          </div>
        </div>
      </div>
    );
  };
}

export default Sidebar;