import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';
// import About from './Components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light'); //gives whether the mode is dark or light
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode Has Been Activated", "success");
      document.title = 'TextUtils - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Been Activated", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  // function to toggle between dark and light mode for the page
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" aboutapp="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        {/* <Switch> */}
          {/* exact is written here because react does not differentitate for links on its on and and can relocate to the same link if you are accessing a link inside that link so to be accurate exact is used for the reference of location */}
          {/* <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
            <TextForm showAlert={showAlert} heading="Enter The Text To Analyze Below" mode={mode} />
          {/* </Route> */}
        {/* </Switch> */}
      </div>
    {/* </Router > */}
    </>
  );
}
export default App;
