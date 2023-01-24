import logo from "./logo.svg";
import "./App.css";
import { Employee } from "./components/Modal";
import { Heading } from "./components/Heading";
import  Sidebar  from "./components/Sidebar";
import  Cards  from "./components/Cards";
import { useState } from "react";
import  AddEmployee  from "./components/AddEmployee";
import DetailsModal from "./components/DetailsModal";
import  Search  from "./components/Search";
import  Filter  from "./components/Filter";
import  Alphabet  from "./components/Alphabet";
import  EditModal  from "./components/EditModal";
import image1 from"./components/images/image1.jpg"
import image2 from"./components/images/image9.jpg"
import image3 from"./components/images/image3.jpg"
import image4 from"./components/images/image4.jpg"
import image5 from"./components/images/image6.jpg"
import image6 from"./components/images/image2.jpg"
import image7 from"./components/images/image7.jpg"
import image8 from"./components/images/image11.jpeg"
// import BootStrapModal from "./components/BootStrapModal";


function App() {
  let array=
  [
    {
      firstName: "Anthony",
      lastName: "Morris",
      email: "abc@123gmail.com",
      jobTitle: "SharePoint Practice Head",
      office: "Kondapur",
      department: "IT Department",
      phoneNumber: "6302266573",
      skypeId: "skid_123",
      imageUrl: image6
    },
    {
      firstName: "Halen",
      lastName: "Zimmerman",
      email: "abc@123gmail.com",
      jobTitle: "Operations Manager",
      office: "Madhapur",
      department: "IT Department",
      phoneNumber: "6302266573",
      skypeId: "skid_123",
      imageUrl: image2
    },
    {
      firstName: "Jonnathan",
      lastName: "Smith",
      email: "abc@123gmail.com",
      jobTitle: "Product Manager",
      office: "Gachibowli",
      department: "IT Department",
      phoneNumber: "6302266573",
      skypeId: "skid_123",
      imageUrl: image3
    },
    {
      firstName: "Tami",
      lastName: "Hopkins",
      email: "abc@123gmail.com",
      jobTitle: "Lead Engineer .Dot Net",
      office: "Kondapur",
      department: "IT Department",
      phoneNumber: "6302266573",
      skypeId: "skid_123",
      imageUrl: image4
    },
    {
      firstName: "Franklin",
      lastName: "Humark",
      email: "abc@123gmail.com",
      jobTitle: ".Net Developer",
      office: "Madhapur",
      department: "IT Department",
      phoneNumber: "6302266573",
      skypeId: "skid_123",
      imageUrl: image5
    },
    {
      firstName: "Angela",
      lastName: "Bailey",
      email: "abc@123gmail.com",
      jobTitle: "Talent Manager Jr.",
      office: "Gachibowli",
      department: "HR Department",
      phoneNumber: "6302266573",
      skypeId: "skid_123",
      imageUrl: image1
    },
    {
      firstName: "Robert",
      lastName: "Mitchell",
      email: "abc@123gmail.com",
      jobTitle: "Software Engineer",
      office: "Madhapur",
      department: "IT Department",
      phoneNumber: "6302266573",
      skypeId: "skid_123",
      imageUrl: image7
    },
    {
      firstName: "Oliva",
      lastName: "Watson",
      email: "abc@123gmail.com",
      jobTitle: "UI Designer",
      office: "Kondapur",
      department: "UX Department",
      phoneNumber: "6302266573",
      skypeId: "skid_123",
      imageUrl: image8
    }
  ]
  const [AllEmployeeCards, setAllEmployeeCards] = useState<Employee[]>(array);
  const [FilteredCards, setFilteredCards] = useState<Employee[]>([]);
  const [empDetailsModal, setempDetailsModal] = useState<boolean>(false);
  const [editDetailsModal, setEditDetailsModal] = useState<boolean>(false);

  const [clickedCard, setClickedCard] = useState<Employee>({} as Employee)
  const [notFound, setFound] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [intermediateState, setintermediateState] = useState<Employee>({} as Employee);
  // const [change,setChange]=useState<number>(0);

  
  const [selectedProperty, setSelectedProperty] = useState("firstName");
  return (
    <div className="p-4" style={{fontFamily:"Helvetica"}}>
      <Heading />
      <div className="sidebar-search-filter-output">
        <Sidebar AllEmployeeCards={AllEmployeeCards} setFilteredCards={setFilteredCards} />
        <div className="search-and-output">
          <Alphabet
            AllEmployeeCards={AllEmployeeCards} setFilteredCards={setFilteredCards} setFound={setFound}
          />
          <div className="search-filter">
            <Search

            
              AllEmployeeCards={AllEmployeeCards} 
              setFilteredCards={setFilteredCards}
            
              setFound={setFound}
              selectedProperty={selectedProperty}
            />
            <Filter selectedProperty={selectedProperty} setSelectedProperty={setSelectedProperty} />
            <AddEmployee
              AllEmployeeCards={AllEmployeeCards}
              setAllEmployeeCards={setAllEmployeeCards}
              
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
              
            />
            
              </div> 
              <div style={{display:"flex",fontSize:"small"}} ><b>Note:</b> <p>Please use advance filter options to refine your results</p> </div>
          
          <Cards
            AllEmployeeCards={AllEmployeeCards}            
            FilteredCards={FilteredCards}
            notFound={notFound}            
            selectedImage={selectedImage}
            setClickedCard={setClickedCard}
            setintermediateState={setintermediateState}
          />
        </div>
      </div>
      
      <DetailsModal AllEmployeeCards={AllEmployeeCards} clickedCard={clickedCard} setAllEmployeeCards={setAllEmployeeCards} empDetailsModal={empDetailsModal} setempDetailsModal={setempDetailsModal} setClickedCard={setClickedCard} setEditDetailsModal= {setEditDetailsModal}/>
      <EditModal
        AllEmployeeCards={AllEmployeeCards}
        setAllEmployeeCards={setAllEmployeeCards}
        clickedCard={clickedCard}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        editDetailsModal={editDetailsModal}
        setEditDetailsModal={setEditDetailsModal}
        intermediateState={intermediateState}
        setintermediateState={setintermediateState}
        
      />


    </div>
  );
}

export default App;
