import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import React, { useState } from 'react'; // imrs

function App() {
  
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert({
      msg: message
    })
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  }

  const toggleMode = (modeColor) => {
    if(modeColor === 'dark'){
      setMode('dark');
      document.body.style.backgroundColor = '#303443';
      showAlert('Dark mode has been enabled.')
    }
    else if(modeColor === 'light'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled.')
    }
    else if(modeColor === 'pink'){
      setMode('pink');
      document.body.style.backgroundColor = '#ffdbe5';
      showAlert('Pink mode has been enabled.')
    }
    else if(modeColor === 'navy'){
      setMode('navy');
      document.body.style.backgroundColor = '#20366b';
      showAlert('Navy mode has been enabled.')
    }
  }

  return (
    <>
      <Navbar title="Textedit" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <TextForm title="Text Editor" mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;
