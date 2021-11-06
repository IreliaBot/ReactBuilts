  import React from 'react'
  import './App.css'
  import Header from'./components/header/Header.js'
  import Navbar from './components/navbar/Navbar.js'
  import Profile from './components/profile/Profile.js'
  import Dialogs from './components/dialogs/Dialogs.js'
  import {BrowserRouter, Route, Switch} from 'react-router-dom'


  function App() {
    return (
      
        <div className="wrapper">
          <BrowserRouter> 
            <Header/>
            <Navbar/>
            {/* Нужно поставить react-router-dom ^5.2.0 чтобы switch работал. Или ^6 что-бы вместо него рабоатл Routes. Но так, как в методичке сейчас рабоать не будет.*/}
            <Switch>
              <Route exact path='/' component={Profile} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/dialogs' component={Dialogs} />
            </Switch>
          </BrowserRouter> 
        </div>  
    )
  }
export default App