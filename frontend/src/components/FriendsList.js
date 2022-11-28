import { Component } from "react";
import { Button, Table } from "react-bootstrap";
import { getFriendsList, getUsername } from "../Backend";
import styles from "../component_styles/FriendsList.module.css"
import { UserUtil } from "../util/ProfilePicture";

export default class FriendsList extends Component {
	render = () => {
		return (
			<Table className={styles.friends_list_table}>
				<tbody>
					{this.props.friendsList.map((friend, index) => {
						return (
							<tr key={index}>
								<td width="50px"><img className="small_circular_image" src={UserUtil.getProfilePicture(friend.profile.profile_image)} alt=""/></td>
								<td style={{verticalAlign: "middle", width: "50%"}}>{friend.username}</td>
								<td width="150px"><Button variant="danger" onClick={() => this.props.removeFriend(friend.username)}>Remove friend</Button></td>
							</tr>
						)
					})}
				</tbody>
			</Table>
		)
	}
}