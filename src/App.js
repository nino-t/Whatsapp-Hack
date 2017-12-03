import React, { Component } from 'react';
import './assets/styles/css/app.css';

import Welcome from './components/Welcome';
import Chat from './components/Chat';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          avatar: 'https://exaholics-fbq8rdhkrfnc2r976kb.stackpathdns.com/wp-content/themes/exaholics/avatars/guy3.jpg',
          username: 'Good Boy',
          selected: false,
          messages: []
        },
        {
          avatar: 'https://image.flaticon.com/icons/png/512/163/163834.png',
          username: 'Eyeglasses Man',
          selected: false,
          messages: []
        },
        {
          avatar: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
          username: 'Anonymox',
          selected: false,
          messages: []
        },
        {
          avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ginger-guy.png',
          username: 'Cool Man',
          selected: false,
          messages: []
        },
        {
          avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-knives-ninja.png',
          username: 'Ninja Master',
          selected: false,
          messages: []
        },        
      ],
      index_selected: ''
    }

    this.openPanelChater = this.openPanelChater.bind(this);
    this.filterUser = this.filterUser.bind(this);
    this.addMessageItem = this.addMessageItem.bind(this);    
  }

  openPanelChater(index){
    const users = this.state.users;
    users.map((user, i) => {
      users[i].selected = false;
      this.setState({
        users
      })
    })

    users[index].selected = true;
    this.setState({
      users,
      index_selected: index
    })
  }

  filterUser(event){
    const queryText = event.target.value;
    const users = JSON.parse(localStorage.getItem('users'));

    var queryResult = [];
    users.forEach((user) => {
      if(user.username.toLowerCase().indexOf(queryText) !== -1)
      queryResult.push(user);
    });

    this.setState({
      users: queryResult
    });
  }

  componentWillMount(){
    localStorage.setItem('users', JSON.stringify(this.state.users));
  }

  addMessageItem(messages){
    this.state.users[messages.user_id].messages.push(messages);    
  }

  render() {    
    const users = this.state.users;
    const open_user = this.state.index_selected;    
    var screen;

    if (open_user === '') {
      screen = <Welcome />;
    }else{
      screen = <Chat users={users[open_user]} newMessageItem={this.addMessageItem} index={open_user}  />;
    }


    return (
      <div className="App">
        <div className="frament-left">
          <div className="frament-header">  
            <center>
              <br />
              <b> Whatsapp - Hack </b>
            </center>
          </div>
          <div className="frament-content">
            <div className="field-search">
              <center>
                <input type="text" className="input-search" onChange={this.filterUser} />
              </center>
            </div>
            <div className="wrapper-list-group"> 
              <ul className="list-group">
                {
                  users.map((item, index) => (
                    <li className={'list-item ' + (item.selected ? 'bg-white':'')} onClick={() => this.openPanelChater(index)} key={index}>
                      <div className="profile-photo">
                        <img src={item.avatar} className="img-avatar" alt="img-profile" />
                      </div>
                      <div className="profile-desc">
                        { item.username }
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
        <div className="frament-right">
          <div className="wrapper-chat">            
            {screen}
          </div>                
        </div>        
      </div>
    );
  }
}

export default App;
