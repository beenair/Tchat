import Axios from 'axios'

const initialState = {

  pageReloaded : false,
  messages : [],
  pseudo : '',
  content : '',

}


const reducer = (state=initialState,action) =>{

  if (action.type === 'INSERT') {
    
    Axios.post('http://localhost:3002/postMessage', {
      pseudo : state.pseudo,
      content : state.content
      })
      .then(res => console.log(res))
  
      state.content = ''
  }

  if (action.type === 'LOAD') {
    
    Axios.get('http://localhost:3002/messages')
      .then((res)=>{
        state.messages = res.data
      })
  }


  return state
}


export default reducer