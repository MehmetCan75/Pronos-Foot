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
            <li className="nm">120</li>
            <li className="nm">62</li>
        </ul>
        <ul className="name-games-points">
            <li className="nm">Fateh</li>
            <li className="nm">110</li>
            <li className="nm">54</li>
        </ul>
        <ul className="name-games-points">
            <li className="nm">Stéphane</li>
            <li className="nm">100</li>
            <li className="nm">49</li>
        </ul>
        <ul className="name-games-points">
            <li className="nm">Ismaël</li>
            <li className="nm">100</li>
            <li className="nm">48</li>
        </ul>
        <ul className="name-games-points">
            <li className="nm">Nicolas</li>
            <li className="nm">110</li>
            <li className="nm">45</li>
        </ul>
        <ul className="name-games-points">
            <li className="nm">Anthony</li>
            <li className="nm">100</li>
            <li className="nm">43</li>
        </ul>
        <ul className="name-games-points">
            <li className="nm">Youssef</li>
            <li className="nm">80</li>
            <li className="nm">39</li>
        </ul>
        <ul className="name-games-points">
            <li className="nm">Abder</li>
            <li className="nm">80</li>
            <li className="nm">30</li>
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
