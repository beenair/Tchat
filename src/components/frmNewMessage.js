import React, {} from 'react'
import {useSelector, useDispatch} from 'react-redux'


const FrmNewMessage = ()=>{

  const pseudo = useSelector(state=>state.pseudo)
  const content = useSelector(state=>state.content)
  const dispatch = useDispatch()


  const insertNewMessage = ()=>{
    dispatch({
      type : 'INSERT'
    })
  }


  const handleMessage = e=>{
    content = e.target.value
  }

  const handlePseudo = e=>{
    pseudo = e.target.value
  }



  return(

      <div className="w-full  flex flex-row gap-2 items-center">
        {/* Input pseudo */}
        <div className=" px-2">
          <input className="w-24 bg-gray-200 border-2 border-gray-300" type='text' value={pseudo} onChange={handlePseudo}></input>
        </div>
        {/* Input message */}
        <div className=" px-2 flex-1">
          <input className="w-full bg-gray-200 border-2 border-gray-300" type='text' value={content} onChange={handleMessage}></input>
        </div>
        {/* Bouton envoyer */}
        <div className="w-24 h-full">
          <input className="text-white font-semibold bg-green-500 p-2 rounded-md cursor-pointer" type='submit' value='Envoyer' onClick={insertNewMessage}/>
        </div>
      </div>

  )


  }

  export default FrmNewMessage
