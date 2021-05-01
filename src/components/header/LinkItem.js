import React from 'react'

const LinkItem = (props) => {
  return (
    <a href={props.href}>
      <div>{props.text} </div>
    </a>
  )
}

export default LinkItem
