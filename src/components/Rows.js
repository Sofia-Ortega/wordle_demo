import react from 'react'
import Row from "./Row"

//returns one Row per word found in wordList
// eg) wordList = ["train", "track"]; masterWord="trail";
//    Rows returns(
//       <Row word={"train"} key={0} masterWord={"trail"} />
//       <Row word={"track"} key={1} masterWord={"trail"} />
//    )
export default function Rows({wordList, masterWord}) {
  return (
    <div>
      {
        wordList.map((word, index) => (
          <Row word={word} key={index} masterWord={masterWord}/>
        ))
      }
    </div>
  )
}
