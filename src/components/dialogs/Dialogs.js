import React from 'react'
import './Dialogs.css'

import DialogsItem from './dialogsItem/DialogsItem'
import Message from './message/Message'

function Dialogs() {
    return (
        <div className="dialogs">
                <div className="dialog">
                  <DialogsItem name={'Иван Иванов'} id={'1'}/>
                  <DialogsItem  name={'Илон Маск'} id={'2'}  />
                  <DialogsItem name={'Билл Гейтс'} id={'3'}/>
                </div>
                <div className="messages">
                  <Message message={'Привет'}/>
                  <Message message={'Го на Марс'}/>
                  <Message message={'Где мой чип?'}/>
                </div>
              <div className="code">
                <input type="text"/>
                <button>Отправить</button>
              </div>
            
        </div>
    )
  }
export default Dialogs