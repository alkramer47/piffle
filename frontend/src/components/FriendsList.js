import { Component } from "react";
import { Table } from "react-bootstrap";
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
								<td style={{verticalAlign: "middle"}}>{friend.username}</td>
							</tr>
						)
					})}
				</tbody>
			</Table>
		)
	}
}