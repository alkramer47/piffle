import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from "react-router-dom";
import "../../App.css"

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
                        <Dropdown.Item href="#/action-2">Change background</Dropdown.Item>
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
           <button class="button" onClick={onButtonClick}>Add Friend</button>
           
        </div>

        


    );
}

function onButtonClick(){
    document.getElementById('textInput').className="show";
  }

  
export default Profile;