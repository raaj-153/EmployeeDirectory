import React from 'react'
import EmployeeCard from './EmployeeCard'
import {Employee} from "./Modal"

interface Props{
  AllEmployeeCards:Employee[],
  FilteredCards:Employee[],
  notFound:number,
  selectedImage:string,
  setClickedCard:React.Dispatch<React.SetStateAction<Employee>>,
  setintermediateState:React.Dispatch<React.SetStateAction<Employee>>
}
const Cards = ({
  AllEmployeeCards,
  FilteredCards,
  notFound,
  selectedImage,
  setClickedCard,
  setintermediateState
  }:Props) =>  {

  if (FilteredCards.length!=0) 
    {
      return (
        <div className="output">
          {FilteredCards.map((emp)  => ( 
            <EmployeeCard emp={emp} setClickedCard={setClickedCard} selectedImage={selectedImage} setintermediateState={setintermediateState}/>
          ))}
        </div>
      );
    }
    else{
  
      if(notFound==1){
        // setFound(0);
        return <div>SEARCH NOT FOUND</div>
        
      }
      else{
      return (
        <div className="output">
          {AllEmployeeCards.map((emp) => (
            
              <EmployeeCard emp={emp} setClickedCard={setClickedCard} selectedImage={selectedImage} setintermediateState={setintermediateState}/>
            
          ))}
        </div>
      );}
    }
  }

export default Cards