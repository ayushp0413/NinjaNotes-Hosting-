import React from 'react'
import "../../index.css"

const HighlightText = ({text, className}) => {
  return (
        <span className={`highlightText ${className} `}>{ text}</span>
  )
}


export default HighlightText;