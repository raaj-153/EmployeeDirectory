import React from "react";
import { Employee } from "./Modal";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";

interface Props {
  AllEmployeeCards: Employee[];
  clickedCard: Employee;
  setAllEmployeeCards: React.Dispatch<React.SetStateAction<Employee[]>>;
  empDetailsModal: boolean;
  setempDetailsModal: React.Dispatch<React.SetStateAction<boolean>>;
  setClickedCard: React.Dispatch<React.SetStateAction<Employee>>;
  setEditDetailsModal:React.Dispatch<React.SetStateAction<boolean>>;
}

const DetailsModal = ({
  AllEmployeeCards,
  clickedCard,
  setAllEmployeeCards,
  empDetailsModal,
  setempDetailsModal,
  setClickedCard,
  setEditDetailsModal,
}: Props) => {
  {

    const handleClose = () => {
      setempDetailsModal(false);
      setClickedCard({} as Employee);
    };

    useEffect(() => 
    {
      let c=0;
      for(let i in clickedCard){
        c+=1 
      }
      if (c!=0) 
      {
        setempDetailsModal(true);
        
      }
    });


    
    let emp = clickedCard;



        const handleEdit=()=>
        {
          // alert("Clicked"); 
                setEditDetailsModal(true);
         
        // setempDetailsModal(false);
    
    }

    const handleDelete=()=>{
      const temp_arr = AllEmployeeCards.filter((emp_checked) => emp_checked !== emp);
      setAllEmployeeCards(temp_arr);
      setempDetailsModal(false);

      setClickedCard({} as Employee);




    }



      return (
        <div>
          <Modal
            show={empDetailsModal}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Employee Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form id="details-form">
                <img src={emp.imageUrl} style={{ width: "200px" }} alt="" />
                <div className="form-div">{emp.firstName + " " + emp.lastName}</div>
       
                <div className="form-div">{emp.email}</div>

                <div className="form-div">{emp.jobTitle}</div>

                <div className="form-div">{emp.department}</div>

                <div className="form-div">{emp.office}</div>

                <div className="form-div">{emp.phoneNumber}</div>

                <div className="form-div">{emp.skypeId}</div>
              </form>

              <div className="modal-footer"></div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>

              <Button
                className="btn btn-danger"
                id="remove-button"
                data-bs-dismiss="modal"
                onClick={handleDelete}>
                Delete
              </Button>

              <Button
                className="btn btn-warning"
                data-bs-toggle="modal"
                data-bs-target="#edit-emp"
                id="edit-button"
                onClick={handleEdit}
              >
                Edit
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
  }
};

export default DetailsModal;
