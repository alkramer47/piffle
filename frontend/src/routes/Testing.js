import React from "react";
import { Button } from "react-bootstrap";
import { UserUtil } from "../util/ProfilePicture";
import { addFriend, getConversations, getFriendsList, getUsername, getUserSettings, isLoggedIn, login, logout, removeFriend, setUserSettings } from "../Backend";
import FriendsList from "../components/FriendsList";

class Testing extends React.Component {
	state = {
		"friendsList": [],
		"user": {
			"username": "",
			"profile": {
				"profile_image": -1
			}
		}
	}

	componentDidMount = async () => {
		if(isLoggedIn()) {
			await this.updateUserSettings();
			await this.updateFriendsList();
		}
	}

	login = async () => {
		console.log(await login("bender", "test"));
		document.location.reload();
	}

	logout = async () => {
		console.log(await logout());
	}

	getFriendsList = async () => {
		console.log(await getFriendsList(getUsername()))
	}

	getConversations = async () => {
		console.log(await getConversations());
	}

	addFriend = async () => {
		console.log(await addFriend("bender1"));
	}

	removeFriend = async (username) => {
		console.log(await removeFriend(username));
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

	updateUserSettings = async () => {
		this.setState({
			"user": {
				"profile": await getUserSettings(getUsername()),
				"username": getUsername()
			}});
	}

	updateFriendsList = async () => {
		this.setState({
			"friendsList": await getFriendsList(getUsername())
		})
	}


	test = async () => {
		console.log(await getUserSettings(getUsername()));
	}

	render = () => {
		return (
			<div>
				<Button variant="success" onClick={this.login}>Login</Button>
				<Button variant="danger" onClick={this.logout}>Logout</Button>
				<Button variant="primary" onClick={this.getConversations}>Get Conversations</Button>
				<Button variant="warning" onClick={this.getFriendsList}>Get Friends List</Button>
				<Button variant="primary" onClick={this.addFriend}>Add bender1</Button>
				<Button variant="secondary" onClick={this.removeFriend}>Remove bender1</Button>
				<Button variant="success" onClick={this.test}>Test</Button>
				<br />
				{isLoggedIn() ? <div>
					<h5>User: <img className="small_circular_image" src={UserUtil.getProfilePicture(this.state.user.profile.profile_image)} alt=""/>{getUsername()}</h5>
					<form onSubmit={this.setUserSettings}>
						Set profile picture
						<input type="number" name="profileIndex" min="1" max="6" placeholder="Enter a number" style={{minWidth: "200px", marginInline: "10px"}}/>
					</form>
					<br />
					<FriendsList username={getUsername()} removeFriend={this.removeFriend} friendsList={this.state.friendsList} />
				</div> : ""}
				
			</div>
		);
	}
}

export default Testing;