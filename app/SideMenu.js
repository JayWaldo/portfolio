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
    setMenuOpt(navWidth === 'navBar' ? ['Projects', 'Credentials', 'About', 'Skills', 'Contact'] : [])
    setShowMenuText(false)
  }

  return (
    <header className='navContainer'>
      <nav className={`${navWidth}`}>
        <ul>
          <li onClick={handleClick} className='liMenuIcon'>
            <i aria-hidden className={`fas ${menuIcon} menuIcon`} />
          </li>
          <li>
            <i aria-hidden className='fas fa-folder' />
            <span className={`menuText ${showMenuText ? 'show' : ''}`}>
              {menuOpt[0]}
            </span>
          </li>
          <li>
            <i aria-hidden className='fas fa-address-card' />
            <span className={`menuText ${showMenuText ? 'show' : ''}`}>
              {menuOpt[1]}
            </span>
          </li>
          <li>
            <i aria-hidden className='fas fa-user-alt' />
            <span className={`menuText ${showMenuText ? 'show' : ''}`}>
              {menuOpt[2]}
            </span>
          </li>
          <li>
            <i aria-hidden className='fas fa-brain' />
            <span className={`menuText ${showMenuText ? 'show' : ''}`}>
              {menuOpt[3]}
            </span>
          </li>
          <li>
            <i aria-hidden className='fas fa-paper-plane' />
            <span className={`menuText ${showMenuText ? 'show' : ''}`}>
              {menuOpt[4]}
            </span>
          </li>
        </ul>
      </nav>
    </header>
  )
}
