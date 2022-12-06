import Dropdown from 'react-bootstrap/Dropdown';
import "../../App.css"
import React, { Component, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FriendsList from '../../components/FriendsList';
import { addFriend, createConversation, getFriendsList, getUsername, getUserSettings, removeFriend, setUserSettings } from '../../Backend';
import { UserUtil } from '../../util/ProfilePicture';

class Profile extends Component {
    state = {
      friendsList: [],
      "user": {
        "username": "",
        "profile": {
          "profile_image": -1
        }
      }
    }

    componentDidMount = async () => {
      await this.updateFriendsList();
      await this.updateUserSettings();
    }

    updateFriendsList = async () => {
      this.setState({friendsList: await getFriendsList(getUsername())})
    }

    updateUserSettings = async () => {
      this.setState({
        "user": {
          "profile": await getUserSettings(getUsername()),
          "username": getUsername()
        }});
    }

    setUserSettings = async (event) => {
      event.preventDefault();
      let settings = {
        "profile_image": event.target.profileIndex.value
      }
      event.target.reset();
      console.log(await setUserSettings(settings));
      await this.updateUserSettings()
    }

    startConversation = async (username) => {
      console.log(await createConversation([getUsername(), username]));
    }

    removeFriend = async (username) => {
      console.log(await removeFriend(username));
      await this.updateFriendsList();
    }
    
    render = () => {
    return (
        <div>
            <div className="float-end" style={{display: "inline-flex"}}>
                <AddFriend />
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                        Edit Profile
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                        <Dropdown.Item href="/UpdatePicture">Change profile picture</Dropdown.Item>
                        {/*<Dropdown.Item href="/UpdateBackground">Change background</Dropdown.Item>
                        <Dropdown.Item href="/UpdatePassword">Change password</Dropdown.Item>*/}
                    </Dropdown.Menu>
                </Dropdown>
            </div>

           <div className="item">
                <img className="circular_image" src={UserUtil.getProfilePicture(this.state.user.profile.profile_image)} alt=""/>
                <span className = "caption"> {getUsername()} </span>
           </div>
           {/*
           <form onSubmit={this.setUserSettings}>
              Set profile picture
              <input type="number" name="profileIndex" min="1" max="6" placeholder="Enter a number" style={{minWidth: "200px", marginInline: "10px"}}/>
					  </form>
            */}
           <h1>Friends list: </h1>
           <FriendsList username={getUsername()} removeFriend={this.removeFriend} friendsList={this.state.friendsList} showStartConversation={true} startConversation={this.startConversation}/>
        </div>

        


    );
    }
}

function AddFriend() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAdd = async (e) => {
    e.preventDefault();
    console.log(await addFriend(e.target.username.value));
    window.location.reload();
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Friend
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add friend</Modal.Title>
        </Modal.Header>
          <form onSubmit={(e) => {handleAdd(e); handleClose()}}>
            <Modal.Body>
              <label>Enter the name of the friend you wish to add:
                <input type="text" name="username"/>
              </label>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Add
            </Button>
          </Modal.Footer>
        </form>
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