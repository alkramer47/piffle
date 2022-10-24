import React, { useState } from "react";
import profile_images from "../assets/profile_images";

let temp_url = "http://10.39.30.43:5000/"

export default class Testing extends React.Component {
	state = {
		profile: {
			profile_image: -1
		}
	}

	componentDidMount = async () => {
		let temp = await (await fetch(temp_url + "get_user/adamkramer1")).json();
		console.log(temp)
		this.setState({
			profile: temp
		}, (state) => console.log(state))
	}

	render = () => {
		let index = this.state.profile.profile_image;
		console.log(index);
		return (
			<div>
				{index != -1 ? <img src={profile_images[index]} className="small_circular_image"/> : ""}
			</div>
		);
	}
}