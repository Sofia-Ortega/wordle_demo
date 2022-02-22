import react from "react";
import Box from "./Box.js"

const flexRow = {
  display: "flex"
}

export default function Row({word}) {
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
