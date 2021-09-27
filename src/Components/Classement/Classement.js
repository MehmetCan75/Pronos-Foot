import React from 'react';
import './Classement.css';

export default function Classement() {
  return (
    <div className="classement">
        <h2 className="title-ranking">Classement</h2>
        <ul className="name-games-points">
            <li className="nm">Nom</li>
            <li className="nm">Matchs pronostiqués</li>
            <li className="nm">Points</li>
        </ul>
        <ul className="name-games-points">
            <li className="nm">Mehmet</li>
            <li className="nm">70</li>
            <li className="nm">32</li>
        </ul>
        <ul className="name-games-points">
            <li className="nm">Nicolas</li>
            <li className="nm">60</li>
            <li className="nm">30</li>
        </ul>
        <ul className="name-games-points">
            <li className="nm">Fateh</li>
            <li className="nm">60</li>
            <li className="nm">29</li>
        </ul>
        <ul className="name-games-points">
            <li className="nm">Stéphane</li>
            <li className="nm">50</li>
            <li className="nm">25</li>
        </ul>
        <ul className="name-games-points">
            <li className="nm">Ismaël</li>
            <li className="nm">50</li>
            <li className="nm">25</li>
        </ul>
        <ul className="name-games-points">
            <li className="nm">Anthony</li>
            <li className="nm">50</li>
            <li className="nm">20</li>
        </ul>
        <ul className="name-games-points">
            <li className="nm">Youssef</li>
            <li className="nm">30</li>
            <li className="nm">16</li>
        </ul>
        <ul className="name-games-points">
            <li className="nm">Abder</li>
            <li className="nm">50</li>
            <li className="nm">16</li>
        </ul>


        {/* <ul className="name-games-points">
            <li className="nm">Juliana</li>
            <li className="nm">10</li>
            <li className="nm">5</li>
        </ul> */}

        {/* <ul className="name-games-points">
            <li className="nm">mp</li>
            <li className="nm">10</li>
            <li className="nm">3</li>
        </ul> */}




    </div>
  )
}
