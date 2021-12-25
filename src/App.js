import './App.css'
import Navbar from './components/Navbar'
import HeadingSection from './components/HeadingSection';
import Home from './Home';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() { 
  const [mode, setMode] = useState('light');
  const [text, setText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type) =>{
   setAlert({
    msg : message,
    type : type
   })
   setTimeout(() => {
     setAlert(null)
   }, 3000);
  }
  const toggleMode  = () => {
    if (mode === 'light') {
      setMode('dark')
      setText('Enable Light Mode')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
      setInterval(() => {
        document.title = 'Do you need Money'
      }, 2000);
      setInterval(() => {
        document.title = 'Text Utils Dark Mode'
      }, 1500);
    }
    else{
      setMode('light')
      setText('Enable Dark Mode')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "warning")
      document.title = 'Text Utils Light Mode'
    }
  }
  return (
      <Router>
        <div>
        <Navbar title="Bibhu" data="About" mode={mode} toggleMode={toggleMode} text={text} />
        <Alert alert={alert}/>
          <Switch>
            <Route path="/about">
              <About mode={mode} />
            </Route>
            
            <Route path="/HeadingSection">
              <HeadingSection heading="React form" mode={mode} showAlert={showAlert}  toggleMode={toggleMode}/>
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );


}
export default App;