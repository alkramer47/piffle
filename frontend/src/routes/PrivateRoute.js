import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//This is used to hide private paths when user is not logged in
const PrivateRoute = (props) => {
	let nav = useNavigate()
	useEffect(() => {
		//if (!isLoggedIn()) 
		if(false) //TODO Build isLoggedIn
			nav("/login");
	});
	
	return props.component;
}

export default PrivateRoute;