import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from 'react'; // imrs


function App() {
  
  const[mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#303443';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar title="Textedit" mode={mode} toggleMode={toggleMode}/>
      <TextForm title="Text Editor" mode={mode} />
      {/* <About /> */}
    </>
  );
}

export default App;
