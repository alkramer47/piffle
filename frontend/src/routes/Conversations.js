import React from "react";
import Sidebar from "../components/Sidebar";
import ConversationModals from "../components/ConversationModals";
import styles from "../component_styles/Conversations.module.css"
import { getConversations, getUsername, addConversationUser, removeConversationUser, postConversationMessage, logout } from "../Backend.js"

class Conversations extends React.Component {
    constructor() {
        super()
        this.state = {
            showAdd: false,
            showRemove: false,
            message: "",
            conversations: null,
            selectedConversation: 0
        }
    }
    
    componentDidMount = async () => {
        this.interval = setInterval(() => this.updateConversations(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    scrollToBottom = () => {
        this.el.scrollIntoView({behavior: "smooth"});
    }

    //Updates the state with what is currently stored in backend's conversations
    updateConversations = async () => {
        let conversations;
        try {
            //Calling the backend for the user's conversations
            conversations = await getConversations();
            this.setState ({
                conversations: conversations
            }, () => {if(this.state.conversations.length > 0) this.scrollToBottom()});
            return conversations;
        } catch(error) {
            console.log(error.message);
            if(error.message !== 'TypeError: Failed to fetch') {
                alert(error);
            }
            if(error.message === "Error: UNAUTHORIZED") logout();
        }
        return -1;
    }

    getConversations = () => {
        return this.state.conversations;
    }

    getSelected = () => {
        return this.state.selectedConversation
    }

    setSelected = (index) => {
        this.setState({selectedConversation: index, message: ""})
    }

    //Handles changes to form fields by setting state to new values
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //Submitting new message
    handleSubmit = (e) => {
        e.preventDefault() //Prevents refresh
        let message = {
            "sender": `${getUsername()}`,
            "text": `${this.state.message}`,
            "timestamp": `${Date.now()}`
        };
        //TODO call backend to post new message
        postConversationMessage(message, this.state.conversations[this.state.selectedConversation]._id.$oid);

        //Updating the react component with the sent message
        let conversations = this.state.conversations
        // conversations[this.getSelected()].messages.push({
        //     sender: getUsername(),
        //     timestamp: Date.now(),
        //     text: this.state.message,
        //     attachment: null
        // })

        //Emptying the message field and updating conversation state
        this.setState({
            message: "",
            //conversations: conversations
        })
    }

    toggleAddModal = () => {this.setState((prevState) => {return {showAdd: !prevState.showAdd}})}
    toggleRemoveModal = () => {this.setState((prevState) => {return {showRemove: !prevState.showRemove}})}

    addUser = (conversationID, username) => {
        //TODO Implement this
        console.log("Add user", conversationID, username);
        console.log(addConversationUser(username, conversationID));
    }
    removeUser = (conversationID, username) => {
        console.log("Remove user", conversationID, username);
        console.log(removeConversationUser(username, conversationID));
    }
    leaveConversation = (conversationID=this.state.conversations[this.state.selectedConversation]._id["$oid"]) => {
        console.log("Leave conversation", conversationID, getUsername());
        console.log(removeConversationUser(getUsername(), conversationID));
    }

    render = () => {
        if (this.state.conversations !== null) {
            let selectedConversation = this.state.conversations[this.state.selectedConversation];
            if(this.state.conversations.length === 0) return <div>No conversations available</div>
        return (
            <React.Fragment>
                <ConversationModals conversation={this.state.conversations[this.state.selectedConversation]} functions={{add: this.addUser, remove: this.removeUser}} showers={{add: this.state.showAdd, remove: this.state.showRemove}} togglers={{add: this.toggleAddModal, remove: this.toggleRemoveModal}} />
                <div style={{height: '100%', display: 'flex', overflow: "hidden"}}>
                    <Sidebar getConversations={this.getConversations} getSelected={this.getSelected} setSelected={this.setSelected} togglers={{add: this.toggleAddModal, remove: this.toggleRemoveModal}} leaveConversation={this.leaveConversation}/>
                    <div className={styles.convo_window}>
                        <div className={styles.convo_header} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            {selectedConversation.title}
                        </div>
                        <div id="conversationsWindow" style={{overflowY: "auto", height: "100%"}}>
                            {selectedConversation.messages.map((message, index) => {
                                return (
                                    message.sender === getUsername() ? 
                                    <div className={styles.message + ' ' + styles.sender} key={index}>
                                        {message.text}
                                    </div>
                                    : 
                                    <div className={styles.message + ' ' + styles.receiver} key={index}>
                                        {message.text}
                                    </div>
                                )
                            })}
                            <div ref={el => { this.el = el; }} />
                        </div>
                        <div style={{width: "100%", padding: "5px"}}>
                            <form onSubmit={this.handleSubmit}>
                                <input className={styles.message_entry} placeholder="Enter a message" name="message" autoComplete="off" onChange={this.handleChange} value={this.state.message}/>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
        } else {
            return <div style={{alignSelf: "center"}}>Loading...</div>
        }
    }
}

export default Conversations;