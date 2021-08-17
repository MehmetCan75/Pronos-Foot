import React, {useState, useEffect} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import FootImg from '../Header/football.svg'
import '../Header/Header.css'

export default function Navbar() {

    const [toggleMenu,setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
            setLargeur(window.innerWidth)
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])

    const closeMenu = ( ) => {
        setToggleMenu(!toggleMenu)
    }


  return (
      <div>
        <div className="header">
        <h1 className="titre">Pronos Foot</h1>
         <img src={FootImg} alt="foot-img" className="foot-img"/>
           </div>
    <nav>
        {(toggleMenu || largeur > 500)  && (
     <ul className="liste">
         <Link to="/Pronos-Foot" onClick={closeMenu}>
         <li className="items">Accueil</li>
         </Link>
         <Link to="/classement" onClick={closeMenu}>
         <li className="items">Classement</li>
         </Link>
     </ul>
        )}
     <button onClick={toggleNav} className="btn">Menu</button>
    </nav>

    </div>
  )
}
