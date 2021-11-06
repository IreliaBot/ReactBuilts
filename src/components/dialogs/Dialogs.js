import React from 'react'
import './Dialogs.css'

import DialogsItem from './dialogsItem/DialogsItem'
import Message from './message/Message'

let dialogNames = [
  {name:'Ivan Ivanov', id: 1},
  {name:'Ilon Mask', id: 2},
  {name:'Bill Gates', id: 2}
]
let messageItems = [
  {message:'Hi!', id: 1},
  {message:'Go on the Mars', id: 1},
  {message:'Where is my chip?', id: 1}
]

function Dialogs() {
    return (
        <div className="dialogs">
              <div className="dialog">
                  {dialogNames.map((e)=> <DialogsItem name={e.name} id={e.id}/> )}
              </div>
              <div className="messages">
                  {messageItems.map((e)=> <Message message={e.message} id={e.id}/> )}                 
              </div>
              <div className="code">
                  <input type="text" placeholder="Enter your message"/>
                  <button>Отправить</button>
              </div>
            
        </div>
    )
  }
export default Dialogs