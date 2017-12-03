import React, { Component } from 'react';

import HeaderChat from './HeaderChat';
import InputChat from './InputChat';

class Chat extends Component {
  	constructor(props) {
    	super(props);

    	this.addMessage = this.addMessage.bind(this);
	}

	addMessage(message){
		this.props.newMessageItem(message);
		this.forceUpdate();
	}

	render(){	
		const index_user = this.props.index;
		const users = this.props.users;		
		return (
			<div>
				<HeaderChat users={users} />
				<ul className="chat">
	                {
	                  users.messages.map((message, index) => (
						<li className="message-to message message-me" key={index}>
	                      <div className="meesage-profile-photo">
	                        <img src={message.avatar} className="img-avatar" alt="img-profile" />
	                      </div>
	                      <div className="message-content">
		                      <div className="message-profile-desc">
		                        {message.username}
		                      </div>       
		                      <div className="message-message">
		                      	{message.message}
		                      </div>
	                      </div>
						</li>	                  	
	                  ))
	                }	                
					<div className="clearfix"></div>
				</ul>
				<InputChat newMessage={this.addMessage} users={users} index={index_user} />
			</div>
		);
	}
}

export default Chat;