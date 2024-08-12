import React from 'react'
import "../../index.css"

const HighlightText = ({text, className}) => {

  console.log("Classname : ", className);
  return (
        <span className={`highlightText ${className}  `}>{ text}</span>
  )
}


export default HighlightText;