'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function SideMenu () {
  const [menuIcon, setMenuIcon] = useState('fa-bars')
  const [navWidth, setNavWidth] = useState('navBar')
  const [showMenuText, setShowMenuText] = useState(false)
  const links = [{
    label: 'Home',
    route: '/',
    icon: 'fa-home'
  }, {
    label: 'Projects',
    route: '/projects',
    icon: 'fa-folder'
  }, {
    label: 'Credentials',
    route: '/credentials',
    icon: 'fa-address-card'
  }, {
    label: 'About',
    route: '/about',
    icon: 'fa-user-alt'
  }, {
    label: 'Skills',
    route: '/skills',
    icon: 'fa-brain'
  }, {
    label: 'Contact',
    route: '/contact',
    icon: 'fa-paper-plane'
  }]

  useEffect(() => {
    if (navWidth === 'navBarOpen') {
      setTimeout(() => {
        setShowMenuText(true)
      }, 300)
    } else {
      setShowMenuText(false)
    }
  }, [navWidth])

  const handleClick = () => {
    setMenuIcon(menuIcon === 'fa-bars' ? 'fa-times' : 'fa-bars')
    setNavWidth(navWidth === 'navBar' ? 'navBarOpen' : 'navBar')
    setShowMenuText(false)
  }

  return (
    <header className='navContainer'>
      <nav className={`${navWidth}`}>
        <ul>
          <li onClick={handleClick} className='liMenuIcon'>
            <i aria-hidden className={`fas ${menuIcon} menuIcon`} />
          </li>
          {links.map(({ label, route, icon }) => {
            return (
              <li key={label}>
                <i aria-hidden className={'fa ' + icon} />
                <Link className={`menuText ${showMenuText ? 'show' : ''}`} href={route}>
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
