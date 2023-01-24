import React from 'react'
import { ChangeEvent } from 'react'
interface Props{
  selectedProperty:string,
  setSelectedProperty:React.Dispatch<React.SetStateAction<string>>
}
const Filter = ({selectedProperty, setSelectedProperty}:Props) => {


  
  const handleChange = (e:ChangeEvent<HTMLSelectElement>) => {
    setSelectedProperty(e.target.value);
  };
  




  return (
    <div className="filter">
      <div style={{ padding: 10 }}>FILTER BY</div>
      <select id="options" value={selectedProperty} onChange={handleChange}>
        <option value="firstName" >First Name</option>
        <option value="jobTitle">Job Title</option>
        <option value="department" >Department</option>
        <option value="office" >Office</option>
        <option value="email" >Email</option>
        <option value="skypeId" >Skype Id</option>
        <option value="lastName">Last Name</option>
      </select>
    </div>
  );
};

export default Filter