import React from 'react'
import './ResultDisplay.css'

export default function ResultDisplay(props) {
  return (
    <div>
        <p className="playerName">Nom : {props.name}</p>
        <ul className="displayResult">
            <li>Monaco - Sparta Prague : {props.afirstGame}</li>
            <li>Benfica - Spartak Moscou : {props.bsecondGame}</li>
            </ul>
    </div>
  )
}
