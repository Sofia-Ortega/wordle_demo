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
export default function Row({word, masterWord}) {


  //checks what color each box should be
  // could techincally go inside the "Box.js" component
  const checkSuccess = (index, letter) => {
    if(word === "") return "";
    if(masterWord[index] === letter) return "green";
    if(masterWord.includes(letter)) return "yellow";
    else return "grey";
  }

  //returns a row of box
  //each box holds a letter of the word
  return(
    <div style={flexRow}>
      <Box letter={word[0]} success={checkSuccess(0, word[0])} />
      <Box letter={word[1]} success={checkSuccess(1, word[1])}/>
      <Box letter={word[2]} success={checkSuccess(2, word[2])}/>
      <Box letter={word[3]} success={checkSuccess(3, word[3])}/>
      <Box letter={word[4]} success={checkSuccess(4, word[4])}/>
    </div>

  )
}
