import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import Alert from "./components/Alert";
import React, { useState } from 'react'; // imrs


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
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#303443';
      showAlert('secondary','Dark mode has been enabled.')
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('secondary','Light mode has been enabled.')
    }
  }

  return (
    <>
      <Navbar title="Textedit" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <TextForm title="Text Editor" mode={mode} showAlert={showAlert}/>
      {/* <About /> */}
    </>
  );
}

export default App;
