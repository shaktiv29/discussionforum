import React, { useState } from 'react';
import { Message } from './Message'
import { useTracker } from 'meteor/react-meteor-data'
import { MessageCollections } from '../api/Collections';
import { LoginPage } from './LoginPage'
import { Button, Input } from '@material-ui/core';


export const App = () => {
  const [isLoggedIn, changeLoginStatus] = useState(false)
  const [newMessage, updateMessage] = useState('')
  const [user, cuser] = useState('')
  const messages = useTracker(()=> MessageCollections.find({}, { sort: { createdAt: -1 } }).fetch());
  messages.reverse()
  function addmessage(){
      if(newMessage){
        MessageCollections.insert({email:user,message:newMessage,ts:new Date().getTime().toString()})
        updateMessage('')
      }
  }
  function logout(){
    changeLoginStatus(false)
    cuser('')
  }
  return (
    <div className="App">
    {
      isLoggedIn && (user!=='') ?
      <div>
        <div className="header">
          <span style={{fontSize:'200%',fontWeight:'700'}}> Discussion Forum </span>
          <span><span style={{marginRight:'20px'}}>{user}</span><Button variant="contained" color="primary" onClick={logout}>LogOut</Button></span>
        </div>
        
        <div className="inputing">
          <Input className="inputtask" type="text" style={{margin:'0% 2%'}} value={newMessage} placeholder="Type New Comment Here." onChange={(e)=>{updateMessage(e.target.value)}} />
          <Button variant="contained" color="secondary" onClick={addmessage}>Add Comment</Button>
        </div>
        <div className="messageList">
        {messages.map(message => <Message message={message} />)}
        </div>
      </div>
      :
      <LoginPage onChange={(email)=>{changeLoginStatus(true);cuser(email);}} />
    }
    </div>
);
  }