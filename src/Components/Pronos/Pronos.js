import React, {useState} from 'react'
import './Pronos.css'
// import SpartakMoscou from './TeamsPic/spartakMoscou.svg'
// import Benfica from './TeamsPic/benfica.svg'
// import SpartaPrague from './TeamsPic/spartaPrague.svg'
// import Monaco from './TeamsPic/monaco.png'
import Chelsea from './TeamsPic/chelsea.png'
import Villareal from './TeamsPic/villarreal.svg'
import Loading from '../Loading/Loading'
import ResultFetch from '../Axios/ResultFetch'
import axios from 'axios';


export default function Pronos() {

    const [afirstGame, setAfirstGame] = useState({})
    // const [bsecondGame, setBsecondGame] = useState({})
    const [name, setName] = useState("")
    const [thanks, setThanks] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

    axios
        .post('https://test42452-66759-default-rtdb.europe-west1.firebasedatabase.app/result.json',{afirstGame, name})
        .then((res) => {
            console.log(res);
            setThanks({
              thanks: "Merci"
            })
            
        })
        .catch((err) => {
            console.log(err)
        })
  
    };
    
  return (
    <div className="pronos">
        <div className="title-fr">
        <h1>Pronostics du 11 Août 2021</h1>
        </div>      


      {!thanks ?
      <form onSubmit={handleSubmit} className="form">

        <div className="games">

      <div className="teamsName">
      <img src={Chelsea} alt="Chelsea" className="teams-pic"/>
        Chelsea
        </div>
        <input
          id="firstGame"
          value="Chelsea"
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
          value="Villareal"
          name="firstGame"
          type="radio"
          onChange={e => setAfirstGame(e.target.value)}
          />
          <div className="teamsName">
       <img src={Villareal} alt="Villareal" className="teams-pic"/>
        Villareal
        </div>

        </div>

        <br />

        {/* <div className="games">

<div className="teamsName">
<img src={Benfica} alt="Benfica" className="teams-pic"/>
  Benfica
  </div>
  <input
    id="secondGame"
    value="Benfica"
    name="secondGame"
    type="radio"
    onChange={e => setBsecondGame(e.target.value)}
    required
  />

  <div className="nul">
  Nul
  <input
    id="nul"
    value="nul"
    name="secondGame"
    type="radio"
    onChange={e => setBsecondGame(e.target.value)}
  />
  </div>
 
  <input
    id="secondGame"
    value="Sparta Prague"
    name="secondGame"
    type="radio"
    onChange={e => setBsecondGame(e.target.value)}
    />
    <div className="teamsName">
   Spartak Moscou
  <img src={SpartakMoscou} alt="Spartak Moscou" className="teams-pic"/>
  </div>

  </div> */}

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
      : <div><div><Loading /></div>
        <h2 className="showMerci">Merci</h2>
        <ResultFetch />
      </div>}



    </div>


  )
}
