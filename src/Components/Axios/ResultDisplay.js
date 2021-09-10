import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <h3 className="playerName">Nom : {props.name}</h3>
        <ul className="displayResult">
            <li>Lorient - Lille : {props.afirstGame}</li>
            <li>PSG - Clermont Foot : {props.bsecondGame}</li>
            <li>Monaco - Marseille : {props.cthirdGame}</li>
            <li>Montpellier - Saint-Etienne : {props.dfourthGame}</li>
            <li>Bordeaux - Lens : {props.efifthGame}</li>
            <li>Brest - Angers : {props.fsixthGame}</li>
            <li>Metz - Troyes : {props.gseventhGame}</li>
            <li>Rennes - Reims : {props.heigthGame}</li>
            <li>Nantes - Nice : {props.ininethGame}</li>
            <li>Lyon - Strasbourg : {props.jtenthGame}</li>
            </ul>
    </div>
  )
}
