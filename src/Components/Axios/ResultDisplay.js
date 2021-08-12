import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <h3 className="playerName">Nom :{props.name}</h3>
        <ul className="displayResult">
            <li>Lorient - As Monaco : {props.afirstGame}</li>
            <li>Lille - Nice : {props.bsecondGame}</li>
            <li>PSG - Strasbourg : {props.cthirdGame}</li>
            <li>Angers - Lyon : {props.dfourthGame}</li>
            <li>Brest - Rennes : {props.efifthGame}</li>
            <li>Clermont Foot - Troyes : {props.fsixthGame}</li>
            <li>Nantes - Metz : {props.gseventhGame}</li>
            <li>Reims - Montpellier : {props.heigthGame}</li>
            <li>Lens - Saint-Etienne : {props.ininethGame}</li>
            <li>Marseille - Bordeaux : {props.jtenthGame}</li>
            </ul>
    </div>
  )
}
