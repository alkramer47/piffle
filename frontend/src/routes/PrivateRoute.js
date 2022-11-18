import React, { useEffect } from 'react';
import { Navbar } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { isLoggedIn, logout } from '../Backend';

//This is used to hide private paths when user is not logged in
const PrivateRoute = (props) => {
	let nav = useNavigate()	
	useEffect(() => {
		if (!isLoggedIn()) {
			nav("/");
		}
	});
	
	return props.component;
}

export default PrivateRoute;