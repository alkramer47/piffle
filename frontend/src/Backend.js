const backendURL = "http://127.0.0.1:5000"; //TODO update this with the actual backend URL
const expireTime = 10800000; //3 hours until user is automatically logged out

//Returns true if user is logged in, false otherwise
export const isLoggedIn = () => {
    try {
        if(getToken()===null) return false;
    }
    catch(error) {
        return false;
    }

    return true;
}

//Returns the access token if it is not expired, null otherwise
function getToken() {
	let token = JSON.parse(window.localStorage.getItem("token"));
	if(token===null || token.token===undefined)
		throw new Error("User is not logged in");
	return token.token;
}

function decodeToken() {
    try {
        let token = getToken();
        if(token) return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        console.error(e);
        throw new Error(e);
    }
    return null;
}

//Registers the user with the database using the given email and password
export const register = async (username, password) => {
    return fetch(backendURL + "/create_user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
		if(data.error !== undefined) 
			throw new Error(data.error);
		else {
			window.localStorage.setItem("token", JSON.stringify({token: data.token}));
            return {message: "User has registered"};
        }
    });
}

//Logs the user in with the provided email and password
export const login = async (username, password) => {
    return fetch(backendURL + "/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => response.text())
    .then(data => {
		if(data.error !== undefined) 
			throw new Error(data.error);
        else {
			window.localStorage.setItem("token", JSON.stringify({token: data}));
            return {message: "User logged in"};
		}
    });
}

//Updates the user's password
export const updatePassword = async (password, newPassword) => {
    let token = getToken();
    let decodedToken = decodeToken();
    if(!decodedToken) throw new Error("Error decoding token");

    return fetch(backendURL + "/updatepassword", {
        method: "POST",
        headers: {
            "token": token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "username": decodedToken.username,
            "password": password,
            "newpassword": newPassword
        })
    })
    .then((response) => response.json())
    .then((data) => {
        if(data.error !== undefined)
            throw new Error(data.error);
        else 
            return data;
    })
}

//Logs the user out
export const logout = async () => {
    return fetch(backendURL + "/logout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            token: getToken()
        })
    })
    .then(response => response.text())
    .then(data => {
		if(data.error !== undefined) 
			throw new Error(data.error);
        else {
            window.localStorage.removeItem("token");
            document.location.reload();
            return {message: "User logged out"};
		}
    });
}

//Gets the user's username
export const getUsername = () => {
    let decodedToken = decodeToken();
    if(!decodedToken) throw new Error("Error decoding token");

    return decodedToken.username;
}

//Gets the conversations of the user signed in
export const getConversations = async () => {
    let token = getToken();
    let decodedToken = decodeToken();
    if(!decodedToken) throw new Error("Error decoding token");

    return fetch(backendURL + "/get_conversations", {
        method: "GET",
        headers: {
            "token": token
        }
    })
    .then((response) => response.json())
    .then((data) => {
        if(data.error !== undefined)
            throw new Error(data.error);
        else {
            return data;
        }
    })
}
