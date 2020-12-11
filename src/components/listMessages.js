import React, { Component } from 'react'
import axios from 'axios'
import Message from './message'


export default class ListeMessages extends Component{


  state = {
    messages : [],
    reloaded: false
  }



  componentDidMount(){

    axios.get('http://localhost:3002/messages')
      .then((res)=>{
        this.setState({messages : res.data})
      })

    // setInterval(() => {
    //   axios.get('http://localhost:3002/messages')
    //   .then((res)=>{
    //     this.setState({messages : res.data})
    //   })
    // }, 10000);
    
  }


  componentDidUpdate(){

    const reloaded = this.state.reloaded

    reloaded ? 
      axios.get('http://localhost:3002/messages')
      .then((res)=>{
        this.setState({messages : res.data})
      })
      : console.log("La page est rechargée");
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