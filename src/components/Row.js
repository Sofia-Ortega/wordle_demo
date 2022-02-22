//our imports
import react from "react";
import Box from "./Box.js" //gets our Box component from the appropriate file

// ----- styling --------
//flexbox is super useful to center divs!
const flexRow = {
  display: "flex"
}

//----------- React "Row" component -------------
//Parameter: "word" you want to display in a row
export default function Row({word}) {

  //returns a row of box
  //each box holds a letter of the word
  return(
    <div style={flexRow}>
      <Box letter={word[0]} />
      <Box letter={word[1]} />
      <Box letter={word[2]} />
      <Box letter={word[3]} />
      <Box letter={word[4]} />
    </div>

  )
}
