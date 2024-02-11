import React from 'react'

const Button = ({children,...rest}) => {
  return (
    <button {...rest}>{children}</button>
  )
}

export const SelectButton=({children,...rest})=>{
  return(
    <select {...rest}>{children}</select>
  )
}


export default Button;
