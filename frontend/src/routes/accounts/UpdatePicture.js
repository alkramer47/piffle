import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdatePicture = () => {
    
    return (
        <div>
            Choose a picture to be your new profile picture
            <p></p>
           <button onClick={changePicture}><img class="small_circular_image"  style={{}}src={require('../../assets/puffle_blue.png')} alt="purple_puffle" /></button>

           <button onClick={changePicture}><img class="small_circular_image"  style={{}}src={require('../../assets/puffle_brown.png')} alt="purple_puffle" /></button>

           <button onClick={changePicture}><img class="small_circular_image"  style={{}}src={require('../../assets/puffle_orange.png')} alt="purple_puffle" /></button>

           <button onClick={changePicture}><img class="small_circular_image"  style={{}}src={require('../../assets/puffle_pink.png')} alt="purple_puffle" /></button>

           <button onClick={changePicture}><img class="small_circular_image"  style={{}}src={require('../../assets/puffle_purple.png')} alt="purple_puffle" /></button>

           <button onClick={changePicture}><img class="small_circular_image"  style={{}}src={require('../../assets/puffle_sleep.png')} alt="purple_puffle" /></button>

        </div>
    );
}

function changePicture(){
    return (
        console.log("clicked")
    );
}



export default UpdatePicture;