import React, { Component } from 'react'



export default class FrmNewMessage extends Component{


  constructor(props) {
    super(props)

    this.state = {
      newMessage: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }



  handleChange(e){
    this.setState({newMessage : e.target.value})
  }

  handleSubmit(e) {
    
    e.preventDefault();
  }


  render(){

    return(

        <div className="w-full flex flex-row items-center">
          {/* Input */}
          <div className="h-full flex-1">
            <input type='text' value={this.state.newMessage} onChange={this.handleChange}></input>
          </div>
          {/* Bouton envoyer */}
          <div className="w-24 h-full">
            <input type='submit' value='envoyer' onClick={this.handleSubmit}/>
          </div>
        </div>

    )
  }
}