import React, { Component } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import "../../App.css"

const Profile = () => {
    return (
        <div>
            <div class="float-end">
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Edit Profile
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Change profile picture</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Change background</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Change password</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
           
           </div>
           <div class="item">
            <img class="circular_image" src={require('../../assets/puffle_purple.png')} />
            <span class = "caption"> Profile name </span>
           </div>

           

           <h1>Friends list: </h1>

           
           <button class="button">Add Friend</button>
        </div>

        


    );
}

export default Profile;