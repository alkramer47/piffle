import React from "react";
import Sidebar from "../components/Sidebar";
import styles from "../component_styles/Conversations.module.css"
import { getConversations, getUsername } from "../Backend.js"

class Conversations extends React.Component {
    constructor() {
        super()
        this.state = {
            conversations: [],
            selectedConversation: -1
        }   
    }
    
    componentDidMount = async () => {
        this.updateConversations();
    }

    updateConversations = async () => {
        let conversations = await getConversations();
        this.setState ({
            conversations: conversations,
            selectedConversation: 0
        });
        console.log(conversations)
        return conversations;
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

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        let conversations = this.state.conversations
        conversations[this.getSelected()].messages.push({
            sender: "Frank",
            receiver: conversations[this.getSelected()].receiver,
            timestamp: 300,
            text: this.state.message,
            attachment: null
        })
        console.log(this.state.conversations[this.getSelected()].messages)


        this.setState({
            message: "",
            conversations: conversations
        })
    }

    render = () => {
        if (this.state.selectedConversation != -1) {
        return (
                <div style={{height: '100%', display: 'flex', overflow: "hidden"}}>
                    <Sidebar getConversations={this.getConversations} getSelected={this.getSelected} setSelected={this.setSelected}/>
                    <div className={styles.convo_window}>
                        <div className={styles.convo_header} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            {"TEMP CONVO NAME"}
                        </div>
                        <div style={{overflowY: "auto", height: "100%"}}>
                            {this.state.conversations[this.state.selectedConversation].messages.map((message, index) => {
                                return (
                                    message.sender === getUsername() ? 
                                    <div className={styles.message + ' ' + styles.receiver} key={index}>
                                        {message.text}
                                    </div>
                                    : 
                                    <div className={styles.message + ' ' + styles.sender} key={index}>
                                        {message.text}
                                    </div>
                                )
                            })}
                        </div>
                        <div style={{width: "100%", padding: "5px"}}>
                            <form onSubmit={this.handleSubmit}>
                                <input className={styles.message_entry} placeholder="Enter a message" name="message" autoComplete="off" onChange={this.handleChange} value={this.state.message}/>
                            </form>
                        </div>
                    </div>
                </div>
            );
        } else {
            return <div style={{alignContent: "center"}}>No Conversations</div>
        }
    }
}

export default Conversations;