import { useState } from 'react'
import './styles/Header.css'
const Header = () => {
    const [showMenu, setShowMenu] = useState()

    const handleShowMenu = () => {
        if (showMenu == 'responsive') {
            setShowMenu()
        } else {
            setShowMenu('responsive')
            
        }
    }
  return (
    <div className="contenedor-header">
        <header>
            <div className="logo">
                <a href="#">Isael</a>
            </div>
            <nav id="nav" className={showMenu}>
                <ul>
                    <li><a href="#inicio">HOME</a></li>
                    <li><a href="#sobremi">ABOUT ME</a></li>
                    <li><a href="#skills">SKILLS</a></li>
                    <li><a href="#sobremi">RESUME</a></li>
                    <li><a href="#portfolio">PORTFOLIO</a></li>
                    <li><a href="#contacto">CONTACT</a></li>
                </ul>
            </nav>
            <div className="nav-responsive">
            <i onClick={handleShowMenu} className='bx bx-menu'></i>
            </div>
        </header>
    </div>
  )
}

export default Header
