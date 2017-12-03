import React, { Component } from 'react';

class InputChat extends Component {
  	constructor(props) {
    	super(props);    	
    	this.state = {
    		input_message: ''
    	}

    	this.handleKeyPress = this.handleKeyPress.bind(this);
    	this.handleChange = this.handleChange.bind(this);
	}

	handleKeyPress(e){
		if(e.key === 'Enter'){
			const index = this.props.index;
			const users = this.props.users;
			const message = {'avatar': 'https://www.shareicon.net/data/2016/08/05/806962_user_512x512.png', 'username':'Nino', 'message':this.state.input_message, 'user_id': index};
			this.props.newMessage(message);
			this.setState({input_message: ''});	
		}
	}

	handleChange(event){
		this.setState({input_message: event.target.value});
	}

	render(){
		const input = this.state.input_message;
		return (
			<div>
				<div className="area-input">
					<div className="container-input-message">
						<input 
							type="text" 
							className="input-message" 
							placeholder="Message here..." 
							onKeyPress={this.handleKeyPress}
							onChange={this.handleChange}
							value={input} />
					</div>
				</div>			
			</div>
		);
	}
}

export default InputChat;