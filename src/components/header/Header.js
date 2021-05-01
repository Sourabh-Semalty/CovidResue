import React from 'react'
import LinkItem from './LinkItem'

const Header = () => {
  const links = [
    {href:"#", text: 'Home', icon: "abc"},
    {href:"#", text: 'Home', icon: "abc"},
    {href:"#", text: 'Home', icon: "abc"},
    {href:"#", text: 'Home', icon: "abc"},
    {href:"#", text: 'Home', icon: "abc"},
    {href:"#", text: 'Home', icon: "abc"}
  ]
  return (
    <nav>
      <h1>Title</h1>
      <ul>
        {
          links.map(link => <LinkItem {...link} />)
        }
      </ul>
    </nav>
  )
}

export default Header
