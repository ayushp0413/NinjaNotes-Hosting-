import React from 'react'
import "../../index.css"

const HighlightText = ({text, className}) => {
  return (
        <span className={`highlightText ${className} max-w-[100px] `}>{ text}</span>
  )
}


export default HighlightText;