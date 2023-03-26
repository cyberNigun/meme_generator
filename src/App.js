import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import './style.css'

function App() {
  function myImage(){
    console.log('yipeeeee')
  }
  return(
    <div>
      <Header />
      <Form />
      <img src="./images/troll-face.png" style={{scale:'0.1'}} onMouseOver={myImage} />
    </div>
  )
}
export default App;