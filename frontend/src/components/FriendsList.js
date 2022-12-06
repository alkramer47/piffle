import { Component } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getFriendsList, getUsername } from "../Backend";
import styles from "../component_styles/FriendsList.module.css"
import { UserUtil } from "../util/ProfilePicture";

export default function FriendsList(props) {
	let nav = useNavigate();
	return (
		<Table className={styles.friends_list_table}>
			<tbody>
				{props.friendsList.map((friend, index) => {
					return (
						<tr key={index}>
							<td width="50px"><img className="small_circular_image" src={UserUtil.getProfilePicture(friend.profile.profile_image)} alt=""/></td>
							<td style={{verticalAlign: "middle", width: "100%"}}>{friend.username}</td>
							{props.showStartConversation ? 
							<td><Button  variant="success" style={{inlineSize: "max-content"}} onClick={() => {props.startConversation(friend.username); nav("/conversations")}}>Start Conversation</Button></td>
							: ""}
							<td><Button variant="danger" style={{inlineSize: "max-content"}} onClick={() => props.removeFriend(friend.username)}>Remove Friend</Button></td>
						</tr>
					)
				})}
			</tbody>
		</Table>
	)
}