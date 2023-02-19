import './App.css';
import About from './About/About';
import MainContent from './TextUtils/MainContent';
import Navbar from './TextUtils/Navbar';
import React, { useState } from 'react'
import Alert from './TextUtils/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const[mode , setMode] = useState('light')
  const[alert , setAlert] = useState(null)

  const showAlert = (type,message) => {
    setAlert({
      type: type,
      message: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#112f8f'
      showAlert('success' , 'Switched to dark Mode')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('success' , 'Switched to light Mode')
    }
  }

  return (
    <>
     <Router>
        <Navbar title = 'TextUtils' home = "Home" about='About' contact='Contact' mode = {mode} toggleMode = {toggleMode}/>
        <Alert msg={alert}/>

          <Routes>

            <Route exact path="/" element={<MainContent mode={mode} showAlert={showAlert}/>}>
            </Route>
            <Route exact path="/about" element={<About />}></Route>
              
          </Routes>

     </Router>
     </>
  )
}

export default App;