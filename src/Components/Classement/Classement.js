import React from 'react';
import './Classement.css';
import '../Pronos/Pronos.css'

import Navbar from '../Navbar/Navbar';
import '../Navbar/Navbar.css';

export default function Classement() {
  return (

    <div>
        <div className="title-fr">
        </div>  

        <Navbar></Navbar>

    <div className="classement">
        <h2 className="title-ranking">Classement</h2>
        <ul className="name-games-points">
            <li className="nm">Prénom</li>
            <li className="nm">Matchs pronostiqués</li>
            <li className="nm">Points</li>
        </ul>
        <ul className="name-games-points">
            <li className="nm">Mehmet</li>
            <li className="nm">340</li>
            <li className="nm">175</li>
        </ul>
        <ul className="name-games-points">
            <li className="nm">Ismaël</li>
            <li className="nm">320</li>
            <li className="nm">154</li>
        </ul>
        <ul className="name-games-points">
            <li className="nm">Fateh</li>
            <li className="nm">289</li>
            <li className="nm">142</li>
        </ul>
        <ul className="name-games-points">
            <li className="nm">Stéphane</li>
            <li className="nm">289</li>
            <li className="nm">138</li>
        </ul>
        <ul className="name-games-points">
            <li className="nm">Abder</li>
            <li className="nm">250</li>
            <li className="nm">112</li>
        </ul>
        <ul className="name-games-points">
            <li className="nm">Nicolas</li>
            <li className="nm">240</li>
            <li className="nm">106</li>
        </ul>
        <ul className="name-games-points">
            <li className="nm">Anthony</li>
            <li className="nm">240</li>
            <li className="nm">105</li>
        </ul>
        <ul className="name-games-points">
            <li className="nm">Youssef</li>
            <li className="nm">209</li>
            <li className="nm">93</li>
        </ul>
        <ul className="name-games-points">
            <li className="nm">Hamed</li>
            <li className="nm">111</li>
            <li className="nm">56</li>
        </ul>
        <ul className="name-games-points">
            <li className="nm">Mamadou</li>
            <li className="nm">100</li>
            <li className="nm">52</li>
        </ul>
        <ul className="name-games-points">
            <li className="nm">Nabil</li>
            <li className="nm">10</li>
            <li className="nm">3</li>
        </ul>

        <div className="title-fr">
        </div>  

    </div>
    </div>
  )
}
