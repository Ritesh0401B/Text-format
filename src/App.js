
import React, { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  const [mode, setMode] = useState("light");
  const [dark, setDark] = useState("Enable DarkMode");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleTitle = (msg) => {
    document.title = "TextUtils - " + msg;
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setDark('Enable LightMode');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      setDark('Enable DarkMode');
      document.body.style.backgroundColor = '#f8f9fa';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>

      {/* <Navbar/> */}
      
        <Router>
          <Navbar title="TextUtils" aboutText="About" mode={mode}
            toggleMode={toggleMode} dark={dark} toggleTitle={toggleTitle} />
          <Alert alert={alert} />
          <div className="">
          <Routes>

            {/* /user --> Component 1, agar ham exact ka use nhi karenge to wah baar baar component 1 ko hi priority dega 
            /user/home --> Component 2 */}

            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} />} />
          </Routes>
          </div>
        </Router>
    </>
  );
}

export default App;
