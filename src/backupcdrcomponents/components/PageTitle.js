import React from 'react'

const PageTitle = ({children,...rest}) => {
  return (
    <p {...rest}>{children}</p>
  )
}

export default PageTitle