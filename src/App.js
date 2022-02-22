import logo from './logo.svg';
import './App.css';
import Box from "./components/Box";
import Row from "./components/Row"

function Greetings({name}) {
  return (
    <h1>
      Hello, {name}
    </h1>
  )
}


function App() {

  var name = "Steven"

  return (
    <div className="App">
      {/*<Box letter={"a"} />*/}
      {/*<Box letter={"b"} />*/}
      {/*<Box letter={"b"} />*/}
      {/*<Box letter={"b"} />*/}
      {/*<Box letter={"a"} />*/}

      <div>
        <Row word={"shell"} />
        <Row word={"hello"} />
        <Row word={"heres"} />
        <Row word={"shell"} />
        <Row word={"shell"} />
      </div>
    </div>
  );
}

export default App;
