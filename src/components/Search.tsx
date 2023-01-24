import {useState} from 'react'
import React from 'react'
import {Employee} from "./Modal"
interface Props{
  AllEmployeeCards:Employee[],
  setFilteredCards:React.Dispatch<React.SetStateAction<Employee[]>>,
  setFound:React.Dispatch<React.SetStateAction<number>>,
  selectedProperty:String
}

const Search = (
  {AllEmployeeCards, setFilteredCards,
  setFound,
  selectedProperty,
}:Props) => {
  
  const handleKeyup = (e:React.KeyboardEvent<HTMLInputElement>) => {
    const searchString = (e.target as HTMLInputElement).value.toLowerCase();
    // FOR GETTING SELECTED FILTER
    
    let selected = selectedProperty;
    console.log(selected);
    const filtered = AllEmployeeCards.filter((emp_checked) =>
      eval("emp_checked." + selected + ".toLowerCase().includes(searchString)")
    );

    setFilteredCards(filtered);
  if (filtered.length==0){
    setFound(1);
  }

  };
  const handleClear=()=>{setFilteredCards(AllEmployeeCards)}
  // setDefault("")}
  
  const [defaultvalue,setDefault]=useState<string>("");
  return (
    <div className="search-bar">
      <div><b>Search</b></div>
      <div id="searchWrapper">
        <input type="text" name="searchBar"
          placeholder="Search a keyword"
          onKeyUp={handleKeyup}
          value={defaultvalue}
        />
        <div className="btn btn-success" onClick={handleClear} style={{borderRadius:"0px",backgroundColor:"rgba(104,186,3,255)"}}>
          Clear
        </div>
      </div>
      <ul id="characterList"></ul>
    </div>
  );
};

export default Search;