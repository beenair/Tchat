import React from 'react'


export default function Message(props){

  return(
    
    <div className="w-full h-8 flex flex-row items-center gap-4">

      <div className="w-32 text-right font-semibold">
        {props.pseudo} :
      </div>

      <div className="flex-1">
        {props.content}
      </div>

    </div>

  )
}