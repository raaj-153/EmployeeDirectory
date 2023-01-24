import React from 'react'
import {Employee} from "./Modal"
import { useEffect } from 'react'
import { v4 as uuidv4 } from "uuid";
import { useState } from 'react';
import Button from "react-bootstrap/Button";

interface Props{
  AllEmployeeCards:Employee[],
  setFilteredCards:React.Dispatch<React.SetStateAction<Employee[]>>,
  setFound:React.Dispatch<React.SetStateAction<number>>
}
const Alphabet = ({AllEmployeeCards,setFilteredCards,setFound}:Props) => {
  const [alphabet, setAlphabet] = useState("");
  
  useEffect(()=>{if (alphabet) {
    console.log(alphabet);
    const filtered = AllEmployeeCards.filter(
      (emp_checked) =>
      



        emp_checked.firstName.includes(alphabet.toLowerCase()) || emp_checked.lastName.includes(alphabet.toLowerCase())||emp_checked.firstName.includes(alphabet.toUpperCase()) || emp_checked.lastName.includes(alphabet.toUpperCase())
    );
  
    setFilteredCards(filtered);
    setAlphabet(""); 
    
    if (filtered.length==0){
      setFound(1);
    }
   
  
  }})

  

  const lettersArr = [];
  for (let i = 65; i <= 90; i++) {
    lettersArr.push(String.fromCharCode(i));
  }

  return (
    <div className="alphabet"><Button className="btn" style={{borderRadius:"0px",color:"white",backgroundColor:"rgba(21,178,248,255)"}} onClick={()=>setFilteredCards(AllEmployeeCards) }  >&#128100;</Button>
      {lettersArr.map((char) => (
        <Button
          className="btn"
          key={uuidv4()}
          onClick={() => setAlphabet(char)}
          style={{  
            borderRadius:"0px",color:"white",backgroundColor:"rgba(21,178,248,255)"}}
        >
          {char}
        </Button>
      ))}
    </div>
  );
};

export default Alphabet