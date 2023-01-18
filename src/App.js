import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
import React, { useState } from 'react'; // imrs

// import { Route, Routes} from "react-router-dom";


function App() {
  
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
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
      showAlert('secondary','Dark mode has been enabled.')
      // document.title = 'Textedit - Dark Mode';
    }
    else if(modeColor === 'light'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('secondary','Light mode has been enabled.')
      // document.title = 'Textedit - Light Mode';
    }
    else if(modeColor === 'pink'){
      setMode('pink');
      document.body.style.backgroundColor = '#ffdbe5';
      showAlert('secondary','Pink mode has been enabled.')
      // document.title = 'Textedit - Pink Mode';
    }
    else if(modeColor === 'navy'){
      setMode('navy');
      document.body.style.backgroundColor = '#20366b';
      showAlert('secondary','Navy mode has been enabled.')
      // document.title = 'Textedit - Navy Mode';
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
