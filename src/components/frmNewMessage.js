import React, { Component } from 'react'
import {connect} from 'react-redux'


class FrmNewMessage extends Component{

  state = {
    content : '',
    pseudo : ''
  }


  handleMessage = e=>{
    this.setState({content : e.target.value})
  }

  handlePseudo = e=>{
    this.setState({pseudo : e.target.value})
  }



  render(){

    return(

        <div className="w-full  flex flex-row gap-2 items-center">
          {/* Input pseudo */}
          <div className=" px-2">
            <input className="w-24 bg-gray-200 border-2 border-gray-300" type='text' value={this.state.pseudo} onChange={this.handlePseudo}></input>
          </div>
          {/* Input message */}
          <div className=" px-2 flex-1">
            <input className="w-full bg-gray-200 border-2 border-gray-300" type='text' value={this.state.content} onChange={this.handleMessage}></input>
          </div>
          {/* Bouton envoyer */}
          <div className="w-24 h-full">
            <input className="text-white font-semibold bg-green-500 p-2 rounded-md cursor-pointer" type='submit' value='Envoyer' onClick={this.props.insertMessage}/>
          </div>
        </div>

    )
  }
}


const mapStateToProps = state =>{
  return{
    reloader : state.pageReloaded,
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    insertMessage : ()=> dispatch({type : 'INSERT'})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FrmNewMessage)