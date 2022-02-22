//--------------imports------------
import './App.css';
import Box from "./components/Box"; //gets our Box component from the appropriate file
import Row from "./components/Row" // gets our Row component from the appropriate file

//-------------- React Component Example ---------------
function Greetings({name}) {
  return (
    <h1>
      Hello, {name}
    </h1>
  )
}


// ---------------- Main React Component ----------------
//everything you want to display, needs to appear in the App function, one way or the other
function App() {

  var name = "John"
  var headerVar = <h1>WORDLE</h1> //JSX example

  // ------ return -----------
  // the return statement holds what the user will see / what the web page will show
  return (
    <div className="App">

      <div>
        {headerVar}
      </div>

      {/*<div>*/}
      {/*  <Greetings name={"Aggie Coding Club"}/>*/}
      {/*  <Greetings name={name}/>*/}
      {/*</div>*/}

      {/*<div>*/}
      {/*  <Box letter={"a"}/>*/}
      {/*  <Box letter={"b"}/>*/}
      {/*  <Box letter={"b"}/>*/}
      {/*  <Box letter={"b"}/>*/}
      {/*  <Box letter={"a"}/>*/}
      {/*</div>*/}
      <div>
        <Row word={"shell"}/>
        <Row word={"hello"}/>
        <Row word={"heres"}/>
        <Row word={"shell"}/>
        <Row word={"shell"}/>
      </div>
    </div>
  );
}

export default App;
