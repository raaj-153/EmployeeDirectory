import React from "react";
import { Employee } from "./Modal";
import { ChangeEvent, FormEvent } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useRef } from "react";

interface Props {
  AllEmployeeCards: Employee[];
  setAllEmployeeCards: React.Dispatch<React.SetStateAction<Employee[]>>;
  selectedImage: string;
  setSelectedImage: React.Dispatch<React.SetStateAction<string>>;
  
}
const AddEmployee = ({
  AllEmployeeCards,
  setAllEmployeeCards,
  selectedImage,
  setSelectedImage,
  
}: Props) => {
  
  const handleImage = (event: React.FormEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const file = (event.target as HTMLInputElement).files!;
    reader.readAsDataURL(file[0]);
    reader.onload = () => {
      setSelectedImage(reader.result as string);
      alert(selectedImage);
     
    };
    
    setInterState({
      firstName: interState.firstName,
      lastName: interState.lastName,
      email: interState.email,
      jobTitle: interState.jobTitle,
      office: interState.office,
      department: interState.department,
      phoneNumber: interState.phoneNumber,
      skypeId: interState.skypeId,
      imageUrl: selectedImage,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    
    e.preventDefault();
    if (setShow){
    setAllEmployeeCards([...AllEmployeeCards, interState]);
    setShow(false);}
    
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [interState, setInterState] = useState<Employee>({} as Employee);
  // console.log(interState.firstName);

  return (
    <div id="addEmployee">
      <>
        <Button variant="rgba(21,178,248,255)" style={{ fontWeight:"bold",color:"white",backgroundColor:"rgba(21,178,248,255)",borderRadius:"0px"}} onClick={handleShow}>
          Add Employee
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form id="AddEmployeeForm" onSubmit={handleSubmit}>
              <input
                type="text"
                name="text"
                className="form-control"
                required
                placeholder="Enter First Name"
                onChange={(e: FormEvent) => {
                  setInterState({
                    firstName: (e.target as HTMLInputElement).value,
                    lastName: interState.lastName,
                    email: interState.email,
                    jobTitle: interState.jobTitle,
                    office: interState.office,
                    department: interState.department,
                    phoneNumber: interState.phoneNumber,
                    skypeId: interState.skypeId,
                    imageUrl: interState.imageUrl,
                  });
                }}
              />

              <input
                type="text"
                name="text"
                className="form-control"
                required
                placeholder="Enter Last Name"
                onChange={(e: FormEvent) => {
                  setInterState({
                    firstName: interState.firstName,
                    lastName: (e.target as HTMLInputElement).value,
                    email: interState.email,
                    jobTitle: interState.jobTitle,
                    office: interState.office,
                    department: interState.department,
                    phoneNumber: interState.phoneNumber,
                    skypeId: interState.skypeId,
                    imageUrl: interState.imageUrl,
                  });
                }}
              />

              <input
                type="email"
                name="text"
                className="form-control"
                required
                placeholder="Enter Email"
                onChange={(e: FormEvent) => {
                  setInterState({
                    firstName: interState.firstName,
                    lastName: interState.lastName,
                    email: (e.target as HTMLInputElement).value,
                    jobTitle: interState.jobTitle,
                    office: interState.office,
                    department: interState.department,
                    phoneNumber: interState.phoneNumber,
                    skypeId: interState.skypeId,
                    imageUrl: interState.imageUrl,
                  });
                }}
              />

              <input
                type="text"
                name="text"
                className="form-control"
                required
                placeholder="Job Title"
                onChange={(e: FormEvent) => {
                  setInterState({
                    firstName: interState.firstName,
                    lastName: interState.lastName,
                    email: interState.email,
                    jobTitle: (e.target as HTMLInputElement).value,
                    office: interState.office,
                    department: interState.department,
                    phoneNumber: interState.phoneNumber,
                    skypeId: interState.skypeId,
                    imageUrl: interState.imageUrl,
                  });
                }}
              />

              <input
                type="text"
                name="text"
                className="form-control"
                required
                placeholder="Enter Office"
                onChange={(e: FormEvent) => {
                  setInterState({
                    firstName: interState.firstName,
                    lastName: interState.lastName,
                    email: interState.email,
                    jobTitle: interState.jobTitle,
                    office: (e.target as HTMLInputElement).value,
                    department: interState.department,
                    phoneNumber: interState.phoneNumber,
                    skypeId: interState.skypeId,
                    imageUrl: interState.imageUrl,
                  });
                }}
              />

              <input
                type="text"
                name="text"
                className="form-control"
                required
                placeholder="Enter Department"
                onChange={(e: FormEvent) => {
                  setInterState({
                    firstName: interState.firstName,
                    lastName: interState.lastName,
                    email: interState.email,
                    jobTitle: interState.jobTitle,
                    office: interState.office,
                    department: (e.target as HTMLInputElement).value,
                    phoneNumber: interState.phoneNumber,
                    skypeId: interState.skypeId,
                    imageUrl: interState.imageUrl,
                  });
                }}
              />

              <input
                type="tel"
                name="text"
                className="form-control"
                pattern="[1-9]{1}[0-9]{9}"
                required
                placeholder="Enter Phone number"
                onChange={(e: FormEvent) => {
                  setInterState({
                    firstName: interState.firstName,
                    lastName: interState.lastName,
                    email: interState.email,
                    jobTitle: interState.jobTitle,
                    office: interState.office,
                    department: interState.department,
                    phoneNumber: (e.target as HTMLInputElement).value,
                    skypeId: interState.skypeId,
                    imageUrl: interState.imageUrl,
                  });
                }}
              />

              <input
                type="text"
                name="text"
                className="form-control"
                required
                placeholder="Enter Skype Id"
                onChange={(e: FormEvent) => {
                  setInterState({
                    firstName: interState.firstName,
                    lastName: interState.lastName,
                    email: interState.email,
                    jobTitle: interState.jobTitle,
                    office: interState.office,
                    department: interState.department,
                    phoneNumber: interState.phoneNumber,
                    skypeId: (e.target as HTMLInputElement).value,
                    imageUrl: interState.imageUrl,
                  });
                }}
              />

              <input type="file" name="myImage" accept="image/*" onChange={handleImage} />

              <button
                className="btn btn-success"
                type="submit"
                onChange={(e: FormEvent) => {
                  setInterState({
                    firstName: interState.firstName,
                    lastName: interState.lastName,
                    email: interState.email,
                    jobTitle: interState.jobTitle,
                    office: interState.office,
                    department: interState.department,
                    phoneNumber: interState.phoneNumber,
                    skypeId: interState.skypeId,
                    imageUrl: interState.imageUrl,
                  });
                }}
              >
                Submit
              </button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button variant="warning">Reset</Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default AddEmployee;
