//---- imports ----
import react from 'react';
// since we do not use any outside React components, do not need to import anything else


// --------------- React "Box" Component ------------
// our individual Wordle box, containing one letter
export default function Box({letter}) {
  var textColor = "black";

  // ------ styling ----------
  //notice how we can use outside variables inside our "boxStyle"
  var boxStyle = {
    border: "solid black 1px",
    width: "60px",
    height: "60px",
    backgroundColor: "white",
    fontSize: "40px",
    color: textColor,
    fontWeight: "bold"
  }


  // ------ returns -----------
  //returns a simple box with a singular letter inside
  return (
    <div style={boxStyle}>
      {letter}
    </div>
  )
}
