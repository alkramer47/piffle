import React from "react";
import { Button } from "react-bootstrap";

import { addFriend, getConversations, getFriendsList, getUsername, login, logout, removeFriend } from "../Backend";
import FriendsList from "../components/FriendsList";

class Testing extends React.Component {
	login = async () => {
		console.log(await login("bender", "test"));
	}

	logout = async () => {
		await logout();
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

	removeFriend = async () => {
		console.log(await removeFriend("bender1"));
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
				<br/>
				<FriendsList username={getUsername()} />
			</div>
		);
	}
}

export default Testing;