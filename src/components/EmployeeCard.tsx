import React from 'react'
import { v4 as uuidv4 } from "uuid";
import phone_icon from "../components/images/phone-icon.png";
import email_icon from "../components/images/email-icon.png";
import chat_icon from "../components/images/chat-icon.png";
import star_icon from "../components/images/star icon.png";
import heart_icon from "../components/images/heart-icon.png";

import { Employee } from './Modal'
interface Props{
  emp:Employee,
  setClickedCard:React.Dispatch<React.SetStateAction<Employee>>,
  selectedImage:string,
  setintermediateState:React.Dispatch<React.SetStateAction<Employee>>
}
const EmployeeCard = ({emp,setClickedCard,selectedImage,setintermediateState}:Props) =>  {

  return (

    <div
      className="EmployeeCard"
      key={uuidv4()}
      data-bs-toggle="modal"
      data-bs-target="#form-details-demo"
      onClick={() => {setClickedCard(emp)
      setintermediateState(emp)}}
    >

      <img src={emp.imageUrl} alt="" />
     

      <div className="content">

        <div className="name" style={{color:"black"}}>{emp.firstName + " " + emp.lastName}</div>
        <div className="role">{emp.jobTitle}</div>
        <div className="department">{emp.department}</div>
        <div className="contact">
          <img src={phone_icon} alt="" />
          <img src={email_icon} alt="" />
          <img src={chat_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={heart_icon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default EmployeeCard