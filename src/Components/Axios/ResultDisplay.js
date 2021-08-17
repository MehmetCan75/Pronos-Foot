import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <h3 className="playerName">Nom :{props.name}</h3>
        <ul className="displayResult">
            <li>Brest - PSG : {props.afirstGame}</li>
            <li>AS Monaco - Lens : {props.bsecondGame}</li>
            <li>Saint-Etienne - Lille : {props.cthirdGame}</li>
            <li>Lyon - Clermont Foot : {props.dfourthGame}</li>
            <li>Bordeaux - Angers : {props.efifthGame}</li>
            <li>Metz - Reims : {props.fsixthGame}</li>
            <li>Montpellier - Lorient : {props.gseventhGame}</li>
            <li>Strasbourg - Troyes : {props.heigthGame}</li>
            <li>Rennes - Nantes : {props.ininethGame}</li>
            <li>Nice - Marseille : {props.jtenthGame}</li>
            </ul>
    </div>
  )
}
