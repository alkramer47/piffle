import { Component } from "react";
import { Table } from "react-bootstrap";
import { getFriendsList, getUsername } from "../Backend";
import styles from "../component_styles/FriendsList.module.css"

export default class FriendsList extends Component {
	state = {
		friendsList: []
	}

	componentDidMount = () => {
		this.updateFriendsList();
	}

	updateFriendsList = async () => {
		this.setState({
			friendsList: await getFriendsList(this.props.username)
		})
	}

	getFriendsList = () => this.state.friendsList;

	render = () => {
		return (
			<Table className={styles.friends_list_table}>
				<tbody>
					{this.state.friendsList.map((friend, index) => {
						return (
							<tr key={index}><td>{friend}</td></tr>
						)
					})}
				</tbody>
			</Table>
		)
	}
}