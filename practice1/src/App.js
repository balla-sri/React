import './App.css';
import {useState} from "react";
// useState is one of the hook
function App() {
  // age is the variable which is later changed using function 'setAge' having a default value '0' passed in state
  const [age, setAge] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [showText, setShowHideText] = useState(true);
  
let showHide = () => {
  setShowHideText(showText ? false : true)
  console.log(showText ? false : true);
}

  let handleInput = (event) => {
    setInputValue(event.target.value)
    // console.log(event.target.value);
  }

  let increaseAge = () => {
    setAge(age + 1)
  }

  const [changeValue, setButtonValue] = useState(0);
  const clickIncrease = () => {
    setButtonValue(changeValue + 1)
  }

  const clickDecrease = () => {
    setButtonValue(changeValue - 1)
  }

  const clickZero = () => {
    setButtonValue(0)
  }

  return (
    <div className="App">  
    {/* <div>
      {age} <button onClick={increaseAge}>Increase age</button>
    </div>
    <div>
      <input type="text" onChange={handleInput}/>
      {inputValue}
    </div>
    <div>
      <button onClick={showHide}>Show/Hide</button>
      {showText && <h1>This is a H1 text with Show/Hide</h1>}
    </div> */}
    <button onClick={clickIncrease}>Increase</button>
    <button onClick={clickDecrease}>Decrease</button>
    <button onClick={clickZero}>Set to Zero</button>
    {changeValue}
    </div>
  );
}


export default App;
