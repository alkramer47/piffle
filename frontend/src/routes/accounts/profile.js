import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from "react-router-dom";
import "../../App.css"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Profile = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div class="float-end">
                <button class="button" style={{backgroundColor: "black"}} onClick={() => navigate('/Conversations')}>
                    Conversations</button>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                        Edit Profile
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                        <Dropdown.Item href="/UpdatePicture">Change profile picture</Dropdown.Item>
                        <Dropdown.Item href="/UpdateBackground">Change background</Dropdown.Item>
                        <Dropdown.Item href="/UpdatePassword">Change password</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

           <div class="item">
                <img class="circular_image" src={require('../../assets/puffle_purple.png')} alt="purple_puffle" />
                <span class = "caption"> Profile name </span>
           </div>

           <h1>Friends list: </h1>
           <p>
           <img class="small_circular_image"  style={{backgroundColor: "green"}}src={require('../../assets/puffle_purple.png')} alt="purple_puffle" />
             obama</p>
           <p>
             <img class="small_circular_image" src={require('../../assets/puffle_sleep.png')} alt="sleeping_puffle" />
             ghandi</p>
           <p>
           <img class="small_circular_image" src={require('../../assets/puffle_orange.png')} alt="orange_puffle" />
            turing</p> 
           <AddFriend />
        </div>

        


    );
}

function AddFriend() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Friend
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add friend</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <label>Enter the name of the friend you wish to add:
                    <input type="text" />
                 </label>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function ChangePicture() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add Friend
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Change Profile Picture</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }







  
export default Profile;