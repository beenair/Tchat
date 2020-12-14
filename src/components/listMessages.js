import React, {} from 'react'
// import Message from './message'
import {useSelector } from 'react-redux'


export default function ListeMessages(){


  const page = useSelector(state => state.pageReloaded)
  console.log(page);
  // const dispatch = useDispatch()

  
  
  // const chargerMessages = ()=>{
  //   dispatch({
  //     type : 'LOAD'
  //   })
  // }




  
    
  

  

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