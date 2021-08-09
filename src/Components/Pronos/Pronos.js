import React, {useState} from 'react'
import './Pronos.css'
import SpartakMoscou from './TeamsPic/spartakMoscou.svg'
import Benfica from './TeamsPic/benfica.svg'
import SpartaPrague from './TeamsPic/spartaPrague.svg'
import Monaco from './TeamsPic/monaco.png'
import axios from 'axios';


export default function Pronos() {

    const [afirstGame, setAfirstGame] = useState({})
    const [bsecondGame, setBsecondGame] = useState({})
    const [name, setName] = useState("")
    const [thanks, setThanks] = useState("")
    

    

    const handleSubmit = e => {
        e.preventDefault();

    axios
        .post('https://test42452-66759-default-rtdb.europe-west1.firebasedatabase.app/result.json',{afirstGame,bsecondGame, name})
        .then((res) => {
            console.log(res);
            setThanks({
              thanks: "Merci"
            })
            
        })
        .catch((err) => {
            console.log(err)
        })

        
    }
    
  return (
    <div className="pronos">
        <div className="title-fr">
        <h1>Pronostics du 10 Août 2021</h1>
        </div>


      {!thanks ?
      <form onSubmit={handleSubmit} className="form">

        <div className="games">

      <div className="teamsName">
      <img src={Monaco} alt="monaco" className="teams-pic"/>
        AS Monaco
        </div>
        <input
          id="firstGame"
          value="monaco"
          name="firstGame"
          type="radio"
          onChange={e => setAfirstGame(e.target.value)}
          required
        />

        <div className="nul">
        Nul
        <input
          id="nul"
          value="nul"
          name="firstGame"
          type="radio"
          onChange={e => setAfirstGame(e.target.value)}
        />
        </div>
       
        <input
          id="firstGame"
          value="spartaPrague"
          name="firstGame"
          type="radio"
          onChange={e => setAfirstGame(e.target.value)}
          />
          <div className="teamsName">
         Sparta Prague
        <img src={SpartaPrague} alt="barcelona" className="teams-pic"/>
        </div>

        </div>

        <br />

        <div className="games">

<div className="teamsName">
<img src={Benfica} alt="monaco" className="teams-pic"/>
  Benfica
  </div>
  <input
    id="secondGame"
    value="monaco"
    name="firstGame"
    type="radio"
    onChange={e => setBsecondGame(e.target.value)}
    required
  />

  <div className="nul">
  Nul
  <input
    id="nul"
    value="nul"
    name="firstGame"
    type="radio"
    onChange={e => setBsecondGame(e.target.value)}
  />
  </div>
 
  <input
    id="secondGame"
    value="spartaPrague"
    name="firstGame"
    type="radio"
    onChange={e => setBsecondGame(e.target.value)}
    />
    <div className="teamsName">
   Spartak Moscou
  <img src={SpartakMoscou} alt="barcelona" className="teams-pic"/>
  </div>

  </div>

        <br />


<br />


Votre nom :
<input
  id="name"
  value={name}
  name="platform"
  type="text"
  onChange={e => setName(e.target.value)}
  required
/>

        <button>Envoyer</button>
      </form>
: "Merci"}


    </div>


  )
}
