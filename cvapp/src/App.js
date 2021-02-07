import './App.css';
import React, { useState } from "react";
import Button from "./components/Button";
import Textarea from "./components/Textarea";
import Div from "./components/Div";


  function App() {
    const [state, setState] = useState("");
  
  
  return (
    <div className="App">
     <Textarea setContState={setState}/>
     <Div text={state}/>
     <Button/>
    </div>
  );
}

export default App;
