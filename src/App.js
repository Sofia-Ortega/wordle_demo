//--------------imports------------
import './App.css';
import {useState} from "react";
import Box from "./components/Box"; //gets our Box component from the appropriate file
import Row from "./components/Row" // gets our Row component from the appropriate file
import Rows from "./components/Rows"

//-------------- React Component Example ---------------
function Greetings({name}) {
  return (
    <h1>
      Hello, {name}
    </h1>
  )
}

// ---------------- Our constant variable (the answer) -----------------
const masterWord = "siren";

// ---------------- Main React Component ----------------
//everything you want to display, needs to appear in the App function, one way or the other
function App() {
  // ---------- React hooks ------------
  const [input, setInput] = useState(""); // variable for inside the text box
  const [wordList, setWordList] = useState(["", "", "", "", ""]) // keeps tracks of word displayed in the wordle
  const [index, setIndex] = useState(0); // keeps track of which 'Row' to update thru the wordList index

  // -------------- functions -------------
  //runs every time text box input changes
  const handleChange = (event) => {
    setInput(event.target.value);
  }

  //runs every time submit button clicked
  const handleSubmit = () => {
    if (input === masterWord) {
      console.log("Success");
    }

    var newList = wordList; // copies array wordList into newList
    newList[index] = input; // updates newList at index with the input inside the textbox
    setWordList(newList); //wordList = newList

    setInput(""); // rest text input
    setIndex(index + 1); // increment index + 1

  }

  // --------- variables ---------
  var headerVar = <h1>WORDLE</h1> //JSX example

  // ------ return -----------
  // the return statement holds what the user will see / what the web page will show
  return (
    <div className="App">

      <div>
        {headerVar}
      </div>

      <div>
        <Rows wordList={wordList} masterWord={masterWord}/>
      </div>

      <div>
        {/* each time input changes, calls handleChange;text displayed kept track of by hook **input** */}
        <input type="text" id="input" name="input" value={input}
               onChange={handleChange}/>
        {/* calls handleSubmit each time button clicked */}
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default App;
