import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faExclamationCircle,
  faBalanceScaleLeft,
  faQuestionCircle,
  faHandsHelping,
  faFlag,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'

const Links = [
  {
    title: 'Home',
    href: '#',
    icon: { ...faHome },
  },
  {
    title: 'Guidelines',
    href: '#',
    icon: { ...faExclamationCircle },
  },

  {
    title: 'Measures',
    href: '#',
    icon: { ...faBalanceScaleLeft },
  },
  {
    title: 'FAQ',
    href: '#',
    icon: { ...faQuestionCircle },
  },
  {
    title: 'Helpful Resources',
    href: '#',
    icon: { ...faHandsHelping },
  },
  {
    title: 'State Wise Reports',
    href: '#',
    icon: { ...faFlag },
  },
  {
    title: 'Our Team',
    href: '#',
    icon: { ...faUsers },
  },
]

const LinkItems = () => {
  return (
    <div className='nav-links'>
      {Links.map((link, index) => (
        <CreateLinks key={index} {...link} />
      ))}
    </div>
  )
}

const CreateLinks = ({ title, href, icon }) => {
  return (
    <a href={href}>
      <FontAwesomeIcon className="header-icons" icon={icon} />
      {title}
    </a>
  )
}

export default LinkItems
