import React, {useState} from 'react'
import './Pronos.css'

import Lorient from './TeamsPic/Ligue1/lorient.svg';
import Monaco from './TeamsPic/Ligue1/monaco.png';
import Lille from './TeamsPic/Ligue1/lille.svg';
import Nice from './TeamsPic/Ligue1/nice.svg';
import PSG from './TeamsPic/Ligue1/psg.svg'
import Strasbourg from './TeamsPic/Ligue1/strasbourg.svg'
import Angers from './TeamsPic/Ligue1/angers.svg'
import Lyon from './TeamsPic/Ligue1/lyon.svg'
import Brest from './TeamsPic/Ligue1/brest.png'
import Rennes from './TeamsPic/Ligue1/rennes.svg'
import Clermont from './TeamsPic/Ligue1/clermont.svg'
import Troyes from './TeamsPic/Ligue1/troyes.svg'
import Nantes from './TeamsPic/Ligue1/nantes.svg'
import Metz from './TeamsPic/Ligue1/metz.svg'
import Reims from './TeamsPic/Ligue1/reims.png'
import Montpellier from './TeamsPic/Ligue1/montpellier.png'
import Lens from './TeamsPic/Ligue1/lens.svg'
import SaintEtienne from './TeamsPic/Ligue1/saint-etienne.svg'
import Marseille from './TeamsPic/Ligue1/marseille.svg'
import Bordeaux from './TeamsPic/Ligue1/bordeaux.svg'




import Loading from '../Loading/Loading'
import ResultFetch from '../Axios/ResultFetch'
import axios from 'axios';


export default function Pronos() {

    const [afirstGame, setAfirstGame] = useState({});
    const [bsecondGame, setBsecondGame] = useState({});
    const [cthirdGame, setCthirdGame] = useState({});
    const [dfourthGame, setDfourthGame] = useState({})
    const [efifthGame, setEfifthGame] = useState({})
    const [fsixthGame, setFsixthGame] = useState({})
    const [gseventhGame, setGseventhGame] = useState({})
    const [heigthGame, setHeightGame] = useState({})
    const [ininethGame, setIninethGame] = useState({})
    const [jtenthGame, setJtenthGame] = useState({})

    const [name, setName] = useState("");
    const [thanks, setThanks] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

    axios
        .post('https://pronos-foot-default-rtdb.europe-west1.firebasedatabase.app/result.json',{afirstGame,bsecondGame,cthirdGame,dfourthGame,efifthGame,fsixthGame,gseventhGame,heigthGame,ininethGame,jtenthGame, name})
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
        {/* <h1>2</h1> */}
        </div>      


      {!thanks ?
      <form onSubmit={handleSubmit} className="form">

        <div className="games">

      <div className="teamsName">
      <img src={Lorient} alt="Lorient" className="teams-pic"/>
        Lorient
        </div>
        <input
          id="firstGame"
          value="Lorient"
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
          value="Lille"
          name="firstGame"
          type="radio"
          onChange={e => setAfirstGame(e.target.value)}
          />
          <div className="teamsName">
       <img src={Lille} alt="Lille" className="teams-pic"/>
        Lille
        </div>

        </div>

        <br />

        <div className="games">

        <div className="teamsName">
        <img src={PSG} alt="PSG" className="teams-pic"/>
        PSG
        </div>
        <input
        id="secondGame"
        value="PSG"
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
        value="Clermont Foot"
        name="secondGame"
        type="radio"
        onChange={e => setBsecondGame(e.target.value)}
        />
        <div className="teamsName">
        <img src={Clermont} alt="Clermont Foot" className="teams-pic"/>
        Clermont Foot
        </div>

        </div>

        <br />

        <div className="games">

        <div className="teamsName">
        <img src={Monaco} alt="Monaco" className="teams-pic"/>
        Monaco
        </div>
        <input
        id="cthirdGame"
        value="Monaco"
        name="cthirdGame"
        type="radio"
        onChange={e => setCthirdGame(e.target.value)}
        required
        />

        <div className="nul">
        Nul
        <input
        id="nul"
        value="nul"
        name="cthirdGame"
        type="radio"
        onChange={e => setCthirdGame(e.target.value)}
        />
        </div>
        <input
        id="cthirdGame"
        value="Marseille"
        name="cthirdGame"
        type="radio"
        onChange={e => setCthirdGame(e.target.value)}
        />
        <div className="teamsName">
        <img src={Marseille} alt="Marseille" className="teams-pic"/>
        Marseille
        </div>

        </div>

        <br />

        <div className="games">

        <div className="teamsName">
        <img src={Montpellier} alt="Montpellier" className="teams-pic"/>
        Montpellier
        </div>
        <input
        id="fourthGame"
        value="Montpellier"
        name="fourthGame"
        type="radio"
        onChange={e => setDfourthGame(e.target.value)}
        required
        />

        <div className="nul">
        Nul
        <input
        id="nul"
        value="nul"
        name="fourthGame"
        type="radio"
        onChange={e => setDfourthGame(e.target.value)}
        />
        </div>
        <input
        id="fourthGame"
        value="Saint-Etienne"
        name="fourthGame"
        type="radio"
        onChange={e => setDfourthGame(e.target.value)}
        />
        <div className="teamsName">
        <img src={SaintEtienne} alt="Saint-Etienne" className="teams-pic"/>
        Saint-Etienne
        </div>

        </div>

        <br />

        <div className="games">

        <div className="teamsName">
        <img src={Bordeaux} alt="Bordeaux" className="teams-pic"/>
        Bordeaux
        </div>
        <input
        id="fifthGame"
        value="Bordeaux"
        name="fifthGame"
        type="radio"
        onChange={e => setEfifthGame(e.target.value)}
        required
        />

        <div className="nul">
        Nul
        <input
        id="nul"
        value="nul"
        name="fifthGame"
        type="radio"
        onChange={e => setEfifthGame(e.target.value)}
        />
        </div>
        <input
        id="fifthGame"
        value="Lens"
        name="fifthGame"
        type="radio"
        onChange={e => setEfifthGame(e.target.value)}
        />
        <div className="teamsName">
        <img src={Lens} alt="Lens" className="teams-pic"/>
        Lens
        </div>

        </div>

        <br />

        <div className="games">

        <div className="teamsName">
        <img src={Brest} alt="Brest" className="teams-pic"/>
        Brest
        </div>
        <input
        id="sixthGame"
        value="Brest"
        name="sixthGame"
        type="radio"
        onChange={e => setFsixthGame(e.target.value)}
        required
        />

        <div className="nul">
        Nul
        <input
        id="nul"
        value="nul"
        name="sixthGame"
        type="radio"
        onChange={e => setFsixthGame(e.target.value)}
        />
        </div>
        <input
        id="sixthGame"
        value="Angers"
        name="sixthGame"
        type="radio"
        onChange={e => setFsixthGame(e.target.value)}
        />
        <div className="teamsName">
        <img src={Angers} alt="Angers" className="teams-pic"/>
        Angers
        </div>

        </div>

        <br />

        <div className="games">

        <div className="teamsName">
        <img src={Metz} alt="Metz" className="teams-pic"/>
        Metz
        </div>
        <input
        id="seventhGame"
        value="Metz"
        name="seventhGame"
        type="radio"
        onChange={e => setGseventhGame(e.target.value)}
        required
        />

        <div className="nul">
        Nul
        <input
        id="nul"
        value="nul"
        name="seventhGame"
        type="radio"
        onChange={e => setGseventhGame(e.target.value)}
        />
        </div>
        <input
        id="seventhGame"
        value="Troyes"
        name="seventhGame"
        type="radio"
        onChange={e => setGseventhGame(e.target.value)}
        />
        <div className="teamsName">
        <img src={Troyes} alt="Troyes" className="teams-pic"/>
        Troyes
        </div>

        </div>

        <br />

        <div className="games">

        <div className="teamsName">
        <img src={Rennes} alt="Rennes" className="teams-pic"/>
        Rennes
        </div>
        <input
        id="eigthGame"
        value="Rennes"
        name="eigthGame"
        type="radio"
        onChange={e => setHeightGame(e.target.value)}
        required
        />

        <div className="nul">
        Nul
        <input
        id="nul"
        value="nul"
        name="eigthGame"
        type="radio"
        onChange={e => setHeightGame(e.target.value)}
        />
        </div>
        <input
        id="eigthGame"
        value="Reims"
        name="eigthGame"
        type="radio"
        onChange={e =>setHeightGame(e.target.value)}
        />
        <div className="teamsName">
        <img src={Reims} alt="Reims" className="teams-pic"/>
        Reims
        </div>

        </div>

        <br />

        <div className="games">

        <div className="teamsName">
        <img src={Nantes} alt="Nantes" className="teams-pic"/>
        Nantes
        </div>
        <input
        id="ninethGame"
        value="Nantes"
        name="ninethGame"
        type="radio"
        onChange={e => setIninethGame(e.target.value)}
        required
        />

        <div className="nul">
        Nul
        <input
        id="nul"
        value="nul"
        name="ninethGame"
        type="radio"
        onChange={e => setIninethGame(e.target.value)}
        />
        </div>
        <input
        id="ninethGame"
        value="Nice"
        name="ninethGame"
        type="radio"
        onChange={e => setIninethGame(e.target.value)}
        />
        <div className="teamsName">
        <img src={Nice} alt="Nice" className="teams-pic"/>
        Nice
        </div>

        </div>

        <br />

        <div className="games">

        <div className="teamsName">
        <img src={Lyon} alt="Lyon" className="teams-pic"/>
        Lyon
        </div>
        <input
        id="tenthGame"
        value="Lyon"
        name="tenthGame"
        type="radio"
        onChange={e => setJtenthGame(e.target.value)}
        required
        />

        <div className="nul">
        Nul
        <input
        id="nul"
        value="nul"
        name="tenthGame"
        type="radio"
        onChange={e => setJtenthGame(e.target.value)}
        />
        </div>
        <input
        id="tenthGame"
        value="Strasbourg"
        name="tenthGame"
        type="radio"
        onChange={e => setJtenthGame(e.target.value)}
        />
        <div className="teamsName">
        <img src={Strasbourg} alt="Strasbourg" className="teams-pic"/>
        Strasbourg
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

                    <button disabled>Envoyer</button>
                  </form>
                  : <div>
                    <div><Loading /></div>
                    <h2 className="showMerci">Merci</h2>
                    <ResultFetch />
                  </div>}

      <div className="title-fr">
        {/* <h1>2</h1> */}
        </div>  


    </div>



  )
}
