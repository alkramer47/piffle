import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUserSettings } from '../../Backend';
import { UserUtil } from '../../util/ProfilePicture';

const UpdatePicture = () => {
    let nav = useNavigate();
    
    return (
        <div>
            Choose a picture to be your new profile picture
            <p></p>

            {[...Array(6).keys()].map((num, index) => {
                return (
                    <button onClick={changePicture} key={index} index={index}><img className="small_circular_image" src={UserUtil.getProfilePicture(index)} alt="" index={index}/></button>
                )
            })}
        </div>
    );

    async function changePicture(event){
        let settings = {
            "profile_image": parseInt(event.target.getAttribute("index"))
        }
        console.log(await setUserSettings(settings));
        nav("/profile");
    }
}



export default UpdatePicture;