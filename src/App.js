import React, { useState } from "react";
import "./App.css";
import Modal from "./Modal";

class App extends Component {
  const [show, setShow] = React.useState(1);
  render() {
    return (
      <div className="App">
        <button onClick={()=>setShow(true)}>show modal</button>
        <Modal show={show} />
      </div>
    );
  }
}

export default App;
