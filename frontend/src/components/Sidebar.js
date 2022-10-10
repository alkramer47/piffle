import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import styles from '../component_styles/Sidebar.module.css';

export default class Sidebar extends Component {

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
                            <Button className={styles.sidebar_item} onClick={() => this.handleConversationSelect(index)} 
                                style={{
                                    backgroundColor: (index === selected ? "#a6a6a6" : "transparent")
                                }}>
                                <div style={{display: "inline-flex", width: "100%"}}>
                                    <h4 style={{marginBottom: "0px", marginTop: "5px", width: "100%"}} >{conv.recipient.username}</h4>
                                </div>
                            </Button>
                            <br />
                        </div>
                    )
                }) : "" /*End categories*/}
            </div>
        )
    }
}