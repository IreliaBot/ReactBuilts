
import state from './data/Data.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, onMessageChange, subscribe} from './data/Data.js'
import {sendMessage} from './data/Data.js';
import {onPostChange } from './data/Data.js';

export let rerenderTree = (state) => {
ReactDOM.render(
      <React.StrictMode>
        <App 
          state = {state}
          addPost={addPost} 
          sendMessage={sendMessage}
          onPostChange={onPostChange}
          onMessageChange={onMessageChange}
        />
      </React.StrictMode>,
      document.getElementById('root')
      );      
    }
    rerenderTree(state)
    subscribe(rerenderTree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();















