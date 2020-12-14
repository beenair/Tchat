import React, {useState} from 'react'
// import Message from './message'
import {useSelector} from 'react-redux'
import Axios from 'axios'


const ListeMessages = ()=>{

  
  const pageReloaded = useSelector(state => state.reloaded)

  let [messages, setMessages] = useState();

  console.log(pageReloaded);


  
  
  
  function chargerMessages(){

    Axios.get('http://localhost:3002/messages')
      .then((res)=>{
      setMessages(messages = res.data)
      })
    }
  

    // chargerMessages()
  

    
    // const messages = listeMessages.map(message=>{
    //   return <Message
    //     key = {message.id}
    //     pseudo = {message.pseudo}
    //     content = {message.content}
    //   />
    // })

  

    return(
      
      <div className="flex flex-col gap-1">
        {/* {messages} */}
      </div>

    )
  }


  export default ListeMessages