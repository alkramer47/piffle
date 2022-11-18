import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { getUsername } from "../Backend";

export default class ConversationModals extends Component {
	state = {
		username: ""
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleAdd = (event) => {
		event.preventDefault();
		this.props.togglers.add();
		if(this.state.username !== "")
			this.props.functions.add(this.props.conversation._id["$oid"], this.state.username)
		this.setState({username: ""});
	}

	handleRemove = (event) => {
		event.preventDefault();
		this.props.togglers.remove();
		if(this.state.username !== "")
			this.props.functions.remove(this.props.conversation._id["$oid"], this.state.username)
		this.setState({username: ""});
	}

	render = () => {
		return (
			<React.Fragment>
				<Modal show={this.props.showers.add} onHide={() => {this.props.togglers.add(); this.setState({username: ""});}}>
					<Modal.Header closeButton>
						<Modal.Title>Add User to {this.props.conversation.title}</Modal.Title>
					</Modal.Header>
					<Form onSubmit={this.handleAdd}>
						<Modal.Body>
							<Form.Group>
								<Form.Label>Enter the username of the user you'd like to add to the conversation</Form.Label>
								<Form.Control onChange={this.handleChange} name="username" autoComplete="off" placeholder="Username" />
							</Form.Group>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="danger" onClick={() => {this.props.togglers.add(); this.setState({username: ""});}}>
								Cancel
							</Button>
							<Button variant="primary" onClick={this.handleAdd}>
								Add User
							</Button>
						</Modal.Footer>
					</Form>
				</Modal>
				<Modal show={this.props.showers.remove} onHide={() => {this.props.togglers.remove(); this.setState({username: ""});}}>
					<Modal.Header closeButton>
						<Modal.Title>Remove User from {this.props.conversation.title}</Modal.Title>
					</Modal.Header>
					<Form onSubmit={this.handleRemove}>
						<Modal.Body>
							<Form.Label>Select the user you'd like to remove from the conversation</Form.Label>
							<Form.Select name="username" onChange={this.handleChange}>
								<option value="">Select user</option>
								{this.props.conversation.users.map((user, index) => {
									if(user !== getUsername()) return <option key={index} value={user}>{user}</option>;
									else return "";
								})}
							</Form.Select>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="danger" onClick={() => {this.props.togglers.remove(); this.setState({username: ""});}}>
								Cancel
							</Button>
							<Button variant="primary" onClick={this.handleRemove}>
								Remove User
							</Button>
						</Modal.Footer>
					</Form>
				</Modal>
			</React.Fragment>
		)
	}
}