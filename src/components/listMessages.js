import React, { Component } from 'react'
import axios from 'axios'
import Message from './message'


export default class ListeMessages extends Component{


  state = {
    messages : []
  }


  componentDidMount(){
    axios.get('http://localhost:3002/messages')
      .then((res)=>{
        this.setState({messages : res.data})
      }
    )
  }

  render(){

    const messages = this.state.messages.map(message=>{
      return <Message
        key = {message.id}
        pseudo = {message.pseudo}
        content = {message.content}
      />
    })

    return(
      
      <div className="flex flex-col gap-1">
        {messages}
      </div>

    )
  }
}