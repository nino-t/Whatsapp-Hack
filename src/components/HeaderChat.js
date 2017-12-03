import React, { Component } from 'react';

class HeaderChat extends Component {
	render(){				
		const users = this.props.users;
		return (
			<div>
			    <div className="header-chat">
			    	<div className="header-left">
			    		<img src={users.avatar} className="img-avatar" alt="img-profile" />
			    	</div>
			    	<div className="header-right">
			    		<br />
			    		<b>{users.username}</b>
			    		<br />
			    		<small>10/10/2017</small>
			    	</div>	    	
			    </div>	
			</div>			
		);
	}
}

export default HeaderChat;