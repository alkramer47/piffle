import React, { Component } from 'react';
import NavBarDropDown from './NavBarDropDown';
import styles from '../component_styles/Sidebar.module.css';

export default class Sidebar extends Component {

    options = [
        {
            label: "Add User",
            onClick: () => { this.props.togglers.add() }
        },
        {
            label: "Remove User",
            onClick: () => { this.props.togglers.remove() }
        },
        {
            label: "Leave Conversation",
            onClick: () => { this.props.leaveConversation() }
        }
    ];

	handleConversationSelect = (index) => {
		this.props.setSelected(index)
	}

    render = () => {
        let conversations = this.props.getConversations()
		let selected = this.props.getSelected()

        return (
            <div className={styles.sidebar}>
                {conversations ? conversations.map((conv, index) => { 
                    return (
                        <div key={index}>
                            <div className={styles.sidebar_item} onClick={() => this.handleConversationSelect(index)} 
                                style={{
                                    backgroundColor: (index === selected ? "#a6a6a6" : (conversations[index].messages.length === 0) ? "#32bbb0" : "transparent")
                                }}>
                                <div style={{display: "inline-flex", width: "100%"}}>
                                    <h5 style={{marginBottom: "0px", marginTop: "5px", width: "100%"}} >{conv.title}</h5>
                                </div>
                                <NavBarDropDown options={this.options} onClick={() => this.handleConversationSelect(index)}/>
                            </div>
                            <br />
                        </div>
                    )
                }) : "" /*End categories*/}
            </div>
        )
    }
}