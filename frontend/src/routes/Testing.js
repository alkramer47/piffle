import React from "react";
import { Button } from "react-bootstrap";

import { getConversations, getUsername, login, logout } from "../Backend";

class Testing extends React.Component {
	login = async () => {
		console.log(await login("bender", "test"));
	}

	logout = async () => {
		await logout();
	}

	getConversations = async () => {
		console.log(await getConversations());
	}

	render = () => {
		return (
			<div>
				{getUsername()}
				<Button variant="success" onClick={this.login}>Login</Button>
				<Button variant="danger" onClick={this.logout}>Logout</Button>
				<Button variant="primary" onClick={this.getConversations}>Get Conversations</Button>
			</div>
		);
	}
}

export default Testing;