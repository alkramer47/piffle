import React from "react";

const UpdateBackground = () => {
    return (
        <div>
            Choose a color to be your new profile background
            <p></p>
           <button onClick={changeBackground}><img className="small_circular_image"  style={{}}src={require('../../assets/black.png')} alt="black" /></button>

           <button onClick={changeBackground}><img className="small_circular_image"  style={{}}src={require('../../assets/blue.png')} alt="blue" /></button>

           <button onClick={changeBackground}><img className="small_circular_image"  style={{}}src={require('../../assets/red.png')} alt="red" /></button>

           <button onClick={changeBackground}><img className="small_circular_image"  style={{}}src={require('../../assets/orange.png')} alt="orange" /></button>

           <button onClick={changeBackground}><img className="small_circular_image"  style={{}}src={require('../../assets/yellow.png')} alt="yellow" /></button>

           <button onClick={changeBackground}><img className="small_circular_image"  style={{}}src={require('../../assets/purple.png')} alt="purple" /></button>

           <button onClick={changeBackground}><img className="small_circular_image"  style={{}}src={require('../../assets/green.png')} alt="green" /></button>

        </div>
    );
}

function changeBackground() {
    return (
        console.log("clicked")
    );
}

export default UpdateBackground;