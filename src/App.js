import React from 'react'
import FrmNewMessage from './components/frmNewMessage'
import ListeMessages from './components/listMessages'
import './tailwind.css'

function App() {
  return (

    <div className="flex flex-col h-screen w-5/6 m-auto">
      <div className="flex items-center place-content-center h-24 text-center text-3xl font-semibold text-gray-200 bg-indigo-500">
        Bienvenue sur Tchat
      </div>

      <div className="flex flex-1 my-4  border-2 border-gray-600 items-end py-3">
        <ListeMessages/>
      </div>

      <div className="h-14 mb-8 flex items-center border-2 border-gray-400">
        <FrmNewMessage/>
      </div>

    </div>
  );
}

export default App;
