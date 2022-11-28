const backendURL = "http://127.0.0.1:5000"; //TODO update this with the actual backend URL

function handleAPIErrors(response) {
    if (!response.ok) {
        if(response.status === 401) {
            try {
                window.localStorage.removeItem("token");
            }
            catch (error) {
                //No token to remove, user's already logged out
            }
            //document.location.reload(); //Reload page
        }
        
        throw Error(response.statusText);
    }
    return response;
}

function handleFetchErrors(error) {
    console.error(error);
    if(error.name !== "TypeError") alert(error);
    throw new Error(error);
}

//Returns true if user is logged in, false otherwise. Does not know whether token is expired. When token is expired, handleAPIErrors should automatically redirect
export const isLoggedIn = () => {
    try {
        //Failure to get token means not logged in
        getToken()
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
    .then(handleAPIErrors)
    .then(response => response.json())
    .then(data => {
		if(data.error !== undefined) 
			throw new Error(data.error);
		else {
			window.localStorage.setItem("token", JSON.stringify({token: data.token}));
            return {message: "User has registered"};
        }
    })
    .catch((error) => {
        handleFetchErrors(error);
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
    .then(handleAPIErrors)
    .then(response => response.text())
    .then(data => {
		if(data.error !== undefined) 
			throw new Error(data.error);
        else {
			window.localStorage.setItem("token", JSON.stringify({token: data}));
            return {message: "User logged in"};
		}
    })
    .catch((error) => {
        handleFetchErrors(error);
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
    .then(handleAPIErrors)
    .then((response) => response.json())
    .then((data) => {
        if(data.error !== undefined)
            throw new Error(data.error);
        else 
            return data;
    })
    .catch((error) => {
        // handleFetchErrors(error);
        throw new Error(error);
    });
}

//Logs the user out
export const logout = async () => {
    try {
        var token = getToken();
    }
    catch (error) {
        //User's not logged in so no need to log out
        return {message: "There is no user logged in"};
    }
    return await fetch(backendURL + "/logout", {
        method: "POST",
        headers: {
            "token": token
        }
    })
    .then(handleAPIErrors)
    .then(response => response.text())
    .then(data => {
		if(data.error !== undefined) 
			throw new Error(data.error);
        else {
            window.localStorage.removeItem("token");
            document.location.reload();
            return {message: "User logged out"};
		}
    })
    .catch((error) => {
        handleFetchErrors(error);
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

    return fetch(backendURL + "/get_conversations", {
        method: "GET",
        headers: {
            "token": token
        }
    })
    .then(handleAPIErrors)
    .then(response => response.json())
    .then((data) => {
        if(data.error !== undefined){
            throw new Error(data.error);
        }
        else {
            return data;
        }
    })
    .catch((error) => {
        handleFetchErrors(error);
    });
}

export const addConversationUser = async (username, conversation_id) => {
    return await fetch(backendURL + "/conversation_add_user", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"username": `${username}`, "conversation_id": `${conversation_id}`}),
    })
    .then(handleAPIErrors)
    .then(response => response.text())
    .then((data) => {
        if(data.error !== undefined){
            throw new Error(data.error);
        }
        else {
            return data;
        }
    })
    .catch((error) => {
        handleFetchErrors(error);
    });
}

export const removeConversationUser = async (username, conversation_id) => {
    return await fetch(backendURL + "/conversation_remove_user", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"username": `${username}`, "conversation_id": `${conversation_id}`}),
    })
    .then(handleAPIErrors)
    .then(response => response.text())
    .then((data) => {
        if(data.error !== undefined){
            throw new Error(data.error);
        }
        else {
            return data;
        }
    })
    .catch((error) => {
        handleFetchErrors(error);
    });
}

export const postConversationMessage = async (message, conversation_id) => {
    return await fetch(backendURL + "/post_message", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"message": message, "conversation_id": `${conversation_id}`}),
    })
    .then(handleAPIErrors)
    .then(response => response.text())
    .then((data) => {
        if(data.error !== undefined){
            throw new Error(data.error);
        }
        else {
            return data;
        }
    })
    .catch((error) => {
        handleFetchErrors(error);
    });
}

export const createConversation = async (users) => {
    return await fetch(backendURL + "/create_conversation", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"users": users}),
    })
    .then(handleAPIErrors)
    .then(response => response.text())
    .then((data) => {
        if(data.error !== undefined){
            throw new Error(data.error);
        }
        else {
            return data;
        }
    })
    .catch((error) => {
        handleFetchErrors(error);
    });
}

export const addFriend = async (username) => {
    let token = getToken();

    return await fetch(backendURL + "/friend_request/" + username, {
        method: "POST",
        headers: {
            "token": token
        }
    })
    .then(handleAPIErrors)
    .then(response => response.text())
    .then((data) => {
        if(data.error !== undefined){
            throw new Error(data.error);
        }
        else {
            return data;
        }
    })
    .catch((error) => {
        handleFetchErrors(error);
    });
}

export const removeFriend = async (username) => {
    let token = getToken();

    return await fetch(backendURL + "/remove_friend/" + username, {
        method: "POST",
        headers: {
            "token": token
        }
    })
    .then(handleAPIErrors)
    .then(response => response.text())
    .then((data) => {
        if(data.error !== undefined){
            throw new Error(data.error);
        }
        else {
            return data;
        }
    })
    .catch((error) => {
        handleFetchErrors(error);
    });
}

export const getFriendsList = async (username) => {
    return await fetch(backendURL + "/get_friends_list/" + username, {
        method: "GET"
    })
    .then(handleAPIErrors)
    .then(response => response.json())
    .then((data) => {
        if(data.error !== undefined){
            throw new Error(data.error);
        }
        else {
            return data.friends_list;
        }
    })
    .catch((error) => {
        handleFetchErrors(error);
    })
}

export const getUserSettings = async (username) => {
    return await fetch(backendURL + "/users/settings/get/" + username, {
        method: "GET"
    })
    .then(handleAPIErrors)
    .then(response => response.json())
    .then((data) => {
        if(data.error !== undefined){
            throw new Error(data.error);
        }
        else {
            return data.profile;
        }
    })
    .catch((error) => {
        handleFetchErrors(error);
    })
}

export const setUserSettings = async (settings) => {
    let token = getToken();

    return await fetch(backendURL + "/users/settings/set", {
        method: "POST",
        headers: {
            "token": token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "username": getUsername(),
            "profile": settings
        })
    })
    .then(handleAPIErrors)
    .then(response => response.text())
    .then((data) => {
        if(data.error !== undefined){
            throw new Error(data.error);
        }
        else {
            return data;
        }
    })
    .catch((error) => {
        handleFetchErrors(error);
    });
}
