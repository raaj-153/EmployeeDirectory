import React, { ChangeEvent,FormEvent, Key, useEffect } from "react";
import { Employee } from "./Modal";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
interface Props {
  AllEmployeeCards: Employee[];
  setAllEmployeeCards: React.Dispatch<React.SetStateAction<Employee[]>>;
  clickedCard: Employee;
  selectedImage: string;
  setSelectedImage: React.Dispatch<React.SetStateAction<string>>;
  editDetailsModal: boolean;
  setEditDetailsModal: React.Dispatch<React.SetStateAction<boolean>>;
  intermediateState: Employee;
  setintermediateState: React.Dispatch<React.SetStateAction<Employee>>;
  
}

const EditModal = ({
  AllEmployeeCards,
  setAllEmployeeCards,
  clickedCard,
  selectedImage,
  setSelectedImage,
  editDetailsModal,
  setEditDetailsModal,
  intermediateState,
  setintermediateState,
}: Props) => {
  const emp = clickedCard;

  const handleImage = (event: FormEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const file = (event.target as HTMLInputElement).files!;
    reader.readAsDataURL(file[0]);
    reader.onload = () => {
      setSelectedImage(reader.result as string);
      alert(selectedImage);
     
    };
    setintermediateState({
      firstName: intermediateState.firstName,
      lastName: intermediateState.lastName,
      email: intermediateState.email,
      jobTitle: intermediateState.jobTitle,
      office: intermediateState.office,
      department: intermediateState.department,
      phoneNumber: intermediateState.phoneNumber,
      skypeId: intermediateState.skypeId,
      imageUrl: selectedImage,
    });
  };

  const handleClose = () => setEditDetailsModal(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let edited = intermediateState;
    // setClickedCard(edited);
    if (editDetailsModal){
    let temp_arr = AllEmployeeCards.filter((emp_checked) => emp_checked !== emp);
    temp_arr.push(edited);
    setAllEmployeeCards(temp_arr);
    setintermediateState({} as Employee);
    setEditDetailsModal(false);
    }
  };

  return (
    <>
      <Modal
        show={editDetailsModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Editing Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="form-edit">
            <input
              type="text"
              name="firstName"
              defaultValue={clickedCard.firstName}
              className="form-control"
              onChange={(e: FormEvent) => {
                setintermediateState({
                  firstName: (e.target as HTMLInputElement).value,
                  lastName: intermediateState.lastName,
                  email: intermediateState.email,
                  jobTitle: intermediateState.jobTitle,
                  office: intermediateState.office,
                  department: intermediateState.department,
                  phoneNumber: intermediateState.phoneNumber,
                  skypeId: intermediateState.skypeId,
                  imageUrl: intermediateState.imageUrl,
                });
              }}
            />

            <input
              type="text"
              name="lastName"
              defaultValue={clickedCard.lastName}
              onChange={(e: FormEvent) => {
                setintermediateState({
                  firstName: intermediateState.firstName,
                  lastName: (e.target as HTMLInputElement).value,
                  email: intermediateState.email,
                  jobTitle: intermediateState.jobTitle,
                  office: intermediateState.office,
                  department: intermediateState.department,
                  phoneNumber: intermediateState.phoneNumber,
                  skypeId: intermediateState.skypeId,
                  imageUrl: intermediateState.imageUrl,
                });
              }}
              className="form-control"
            />

            <input
              type="email"
              name="email"
              defaultValue={clickedCard.email}
              onChange={(e: FormEvent) => {
                setintermediateState({
                  firstName: intermediateState.firstName,
                  lastName: intermediateState.lastName,
                  email: (e.target as HTMLInputElement).value,
                  jobTitle: intermediateState.jobTitle,
                  office: intermediateState.office,
                  department: intermediateState.department,
                  phoneNumber: intermediateState.phoneNumber,
                  skypeId: intermediateState.skypeId,
                  imageUrl: intermediateState.imageUrl,
                });
              }}
              className="form-control"
            />

            <input
              type="text"
              name="jobTitle"
              defaultValue={clickedCard.jobTitle}
              onChange={(e: FormEvent) => {
                setintermediateState({
                  firstName: intermediateState.firstName,
                  lastName: intermediateState.lastName,
                  email: intermediateState.email,
                  jobTitle: (e.target as HTMLInputElement).value,
                  office: intermediateState.office,
                  department: intermediateState.department,
                  phoneNumber: intermediateState.phoneNumber,
                  skypeId: intermediateState.skypeId,
                  imageUrl: intermediateState.imageUrl,
                });
              }}
              className="form-control"
            />

            <input
              type="text"
              name="office"
              defaultValue={clickedCard.office}
              onChange={(e: FormEvent) => {
                setintermediateState({
                  firstName: intermediateState.firstName,
                  lastName: intermediateState.lastName,
                  email: intermediateState.email,
                  jobTitle: intermediateState.jobTitle,
                  office: (e.target as HTMLInputElement).value,
                  department: intermediateState.department,
                  phoneNumber: intermediateState.phoneNumber,
                  skypeId: intermediateState.skypeId,
                  imageUrl: intermediateState.imageUrl,
                });
              }}
              className="form-control"
            />

            <input
              type="text"
              name="department"
              defaultValue={clickedCard.department}
              onChange={(e: FormEvent) => {
                setintermediateState({
                  firstName: intermediateState.firstName,
                  lastName: intermediateState.lastName,
                  email: intermediateState.email,
                  jobTitle: intermediateState.jobTitle,
                  office: intermediateState.office,
                  department: (e.target as HTMLInputElement).value,
                  phoneNumber: intermediateState.phoneNumber,
                  skypeId: intermediateState.skypeId,
                  imageUrl: intermediateState.imageUrl,
                });
              }}
              className="form-control"
            />

            <input
              type="tel"
              name="phoneNumber"
              className="form-control"
              pattern="[1-9]{1}[0-9]{9}"
              required
              defaultValue={clickedCard.phoneNumber}
              onChange={(e: FormEvent) => {
                setintermediateState({
                  firstName: intermediateState.firstName,
                  lastName: intermediateState.lastName,
                  email: intermediateState.email,
                  jobTitle: intermediateState.jobTitle,
                  office: intermediateState.office,
                  department: intermediateState.department,
                  phoneNumber:(e.target as HTMLInputElement).value,
                  skypeId: intermediateState.skypeId,
                  imageUrl: intermediateState.imageUrl,
                });
              }}
            />

            <input
              type="text"
              name="skypeId"
              className="form-control"
              required
              defaultValue={clickedCard.skypeId}
              onChange={(e: FormEvent) => {
                setintermediateState({
                  firstName: intermediateState.firstName,
                  lastName: intermediateState.lastName,
                  email: intermediateState.email,
                  jobTitle: intermediateState.jobTitle,
                  office: intermediateState.office,
                  department: intermediateState.department,
                  phoneNumber: (e.target as HTMLInputElement).value,
                  skypeId: intermediateState.skypeId,
                  imageUrl: intermediateState.imageUrl,
                });
              }}
            />
            <input
              type="file"
              id="image_upload"
              name="image_url"
              accept="image/png, image/jpg, image/jpeg"
              className="form-control"
              onChange={handleImage}
            />

            <button
              className="btn btn-success"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditModal;
