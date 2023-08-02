'use client'
import { useEffect, useState } from 'react'

export default function SideMenu () {
  // Definir el estado inicial del icono
  const [menuIcon, setMenuIcon] = useState('fa-bars')
  const [navWidth, setNavWidth] = useState('navBar')
  const [menuOpt, setMenuOpt] = useState([''])
  const [showMenuText, setShowMenuText] = useState(false)

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
    setMenuOpt(navWidth === 'navBar' ? ['Projects', 'Contact'] : [])
    setShowMenuText(false)
  }

  return (
    <header className='navContainer'>
      <nav className={`${navWidth}`}>
        <ul>
          <li>
            <i className={`fas ${menuIcon} menuIcon`} onClick={handleClick} />
          </li>
          <li>
            <i className='fas fa-folder' />
            <span className={`menuText ${showMenuText ? 'show' : ''}`}>
              {menuOpt[0]}
            </span>
          </li>
          <li>
            <i className='fas fa-paper-plane' />
            <span className={`menuText ${showMenuText ? 'show' : ''}`}>
              {menuOpt[1]}
            </span>
          </li>
        </ul>
      </nav>
    </header>
  )
}
