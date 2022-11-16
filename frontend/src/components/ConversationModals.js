import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export default class ConversationModals extends Component {

	handleAdd = () => {
		//TODO implement this once the form is done
		this.props.functions.add(this.props.conversation._id["$oid"], "bender1")
	}

	handleRemove = () => {
		//TODO implement this once the form is done
		this.props.functions.remove(this.props.conversation._id["$oid"], "bender1")
	}

	render = () => {
		return (
			<React.Fragment>
				<Modal show={this.props.showers.add} onHide={this.props.togglers.add}>
					<Modal.Header closeButton>
						<Modal.Title>Add User to {this.props.conversation.title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						TODO Fill with add user form
					</Modal.Body>
					<Modal.Footer>
						<Button variant="danger" onClick={this.props.togglers.add}>
							Cancel
						</Button>
						<Button variant="primary" onClick={this.handleAdd}>
							Add User
						</Button>
					</Modal.Footer>
				</Modal>
				<Modal show={this.props.showers.remove} onHide={this.props.togglers.remove}>
					<Modal.Header closeButton>
						<Modal.Title>Remove User from {this.props.conversation.title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						TODO Fill with remove user form
					</Modal.Body>
					<Modal.Footer>
						<Button variant="danger" onClick={this.props.togglers.remove}>
							Cancel
						</Button>
						<Button variant="primary" onClick={this.handleRemove}>
							Remove User
						</Button>
					</Modal.Footer>
				</Modal>
			</React.Fragment>
		)
	}
}