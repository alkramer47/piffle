import React from "react";
import Sidebar from "../components/Sidebar";
import styles from "../component_styles/Conversations.module.css"

class Conversations extends React.Component {
    constructor() {
        super()
        this.state = {
            conversations: this.getConversations(),
            selectedConversation: 0
        }
    }
    
    getConversations = () => {
        //TODO Call backend to get actual conversations

        //TEMP CONVERSATIONS
        let conversations = [
            {
                recipient: {
                    username: "Gabe"
                },
                messages: [
                    {
                        sender: "Frank",
                        receiver: "Gabe",
                        timestamp: 0,
                        text: "hello world",
                        attachment: null
                    },
                    {
                        sender: "Gabe",
                        receiver: "Frank",
                        timestamp: 200,
                        text: "Weird way to open up a conversation but okay",
                        attachment: null
                    },
                    {
                        sender: "Frank",
                        receiver: "Gabe",
                        timestamp: 300,
                        text: "You're clearly not a programmer",
                        attachment: null
                    },
                    {
                        sender: "Gabe",
                        receiver: "Frank",
                        timestamp: 400,
                        text: "Whatever",
                        attachment: null
                    },
                    {
                        sender: "Frank",
                        receiver: "Gabe",
                        timestamp: 500,
                        text: "hello world",
                        attachment: null
                    }
                ]
            },
            {
                recipient: {
                    username: "Jacob"
                },
                messages: [
                    {
                        sender: "Frank",
                        receiver: "Jacob",
                        timestamp: 0,
                        text: "hi there",
                        attachment: null
                    },
                    {
                        sender: "Jacob",
                        receiver: "Frank",
                        timestamp: 200,
                        text: "What's up",
                        attachment: null
                    },
                    {
                        sender: "Frank",
                        receiver: "Jacob",
                        timestamp: 300,
                        text: "Nothing much",
                        attachment: null
                    }
                ]
            },
            {
                recipient: {
                    username: "Adam"
                },
                messages: [
                    {
                        sender: "Frank",
                        receiver: "Adam",
                        timestamp: 0,
                        text: "blah",
                        attachment: null
                    },
                    {
                        sender: "Adam",
                        receiver: "Frank",
                        timestamp: 200,
                        text: "blah blah",
                        attachment: null
                    },
                    {
                        sender: "Frank",
                        receiver: "Adam",
                        timestamp: 300,
                        text: "blah blah blah",
                        attachment: null
                    },
                    {
                        sender: "Adam",
                        receiver: "Frank",
                        timestamp: 200,
                        text: "blah.",
                        attachment: null
                    }
                ]
            },
            {
                recipient: {
                    username: "Nathan"
                },
                messages: [
                    {
                        sender: "Frank",
                        receiver: "Nathan",
                        timestamp: 0,
                        text: "You're the best",
                        attachment: null
                    },
                    {
                        sender: "Nathan",
                        receiver: "Frank",
                        timestamp: 200,
                        text: "Oh I know",
                        attachment: null
                    },
                    {
                        sender: "Frank",
                        receiver: "Nathan",
                        timestamp: 300,
                        text: "Yeah you do",
                        attachment: null
                    }
                ]
            }
        ]

        return conversations
    }

    getSelected = () => {
        return this.state.selectedConversation
    }

    setSelected = (index) => {
        this.setState({selectedConversation: index})
    }

    render = () => {
        return (
            <div style={{height: '100%', display: 'flex', overflow: "hidden"}}>
                <Sidebar getConversations={this.getConversations} getSelected={this.getSelected} setSelected={this.setSelected}/>
                <div className={styles.convo_window}>
                    <div className={styles.convo_header} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        {this.state.conversations[this.state.selectedConversation].recipient.username}
                    </div>
                    <div style={{overflowY: "auto", height: "100%"}}>
                        {this.state.conversations[this.state.selectedConversation].messages.map((message, index) => {
                            return (
                                message.sender === this.state.conversations[this.state.selectedConversation].recipient.username ? 
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
                        <form>
                            <input className={styles.message_entry} placeholder="Enter a message" onSubmit={(res) => {console.log(res)}} />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Conversations;