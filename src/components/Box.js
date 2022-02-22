import react from 'react';


export default function Box({letter}) {

  var boxStyle = {
    border: "solid black 1px",
    width: "60px",
    height: "60px",
    backgroundColor: "white",
    fontSize: "40px",
    color: "black",
    fontWeight: "bold"
  }


  return (
    <div style={boxStyle}>
      {letter}
    </div>
  )
}
