import React from 'react'
import './Dialogs.css'


function Dialogs() {
    return (
        <div className="dialogs">
            <div className="message">
              <p>Иван Иванов</p>
              <p>Привет, как дела?</p>
            </div>
            <div className="message">
              <p>Илон Маск</p>
              <p>Го завтра на Марс?</p>
            </div>
            <div className="message">
              <p>Билл Гейтс</p>
              <p>Все еще жду новый чип</p>
            </div>
            <input type="text"/>
            <button>Отправить</button>
        </div>
    )
  }
export default Dialogs