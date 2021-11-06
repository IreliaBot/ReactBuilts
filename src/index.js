import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsItems = [
  {message: 'Hi, world', likes: 0},
  {message: 'I`m Elon Mask, really', likes: 3},
  {message: 'Give me some bitcoins', likes: 10}
]

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

ReactDOM.render(
  <React.StrictMode>
    <App 
      postsItems={postsItems} 
      messageItems={messageItems} 
      dialogNames={dialogNames} 
    />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
