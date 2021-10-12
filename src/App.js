import About from './Components/About';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  //Light-Dark Mode state
  const [mode, setmode] = useState('light');
  const toggle = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#181818'
      updateAlert('success', 'Dark Mode enabled!');
    }

    else {
      setmode('light');
      document.body.style.backgroundColor = 'white'
      updateAlert('success', 'Light Mode enabled!');
    }
  }

  //Alert state
  const [alert, setAlert] = useState(null);
  const updateAlert = (status, message) => {
    setAlert({
      status: status,
      message: message
    })
    setTimeout(() => { setAlert(null) }, 1500)
  }
  return (
    <Router>
      <Navbar title="ModifyIt" navElement2="About Us" mode={mode} toggle={toggle} />
      <Alert alert={alert} />
      <div>
        <Switch>
          <Route exact path="/">
            <TextArea heading="Enter the Text" task1="Convert to Uppercase" task2="Conver to Lowercase" task3="Remove Extra Whitespaces" mode={mode} update={updateAlert} />
          </Route>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
