import React, { Component } from 'react'
import Message from './message'
import {connect} from 'react-redux'


class ListeMessages extends Component{


  componentDidMount(){
    this.props.chargerMessages()
    console.log(this.props.messages);
  }



  render(){

    const messages = this.props.messages.map(message=>{
      return <Message
        key = {message.id}
        pseudo = {message.pseudo}
        content = {message.content}
      />
    })

    console.log(this.props.reloader);

    return(
      
      <div className="flex flex-col gap-1">
        {messages}
      </div>

    )
  }
}


const mapStateToProps = state =>{
  return{
    reloader : state.pageReloaded,
    messages : state.messages
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    chargerMessages : ()=> dispatch({type:'LOAD'})
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ListeMessages)