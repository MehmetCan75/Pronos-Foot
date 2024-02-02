import React, { useState } from "react";
import "./Pronos.css";
import Navbar from "../Navbar/Navbar";
import "../Navbar/Navbar.css";

import Lorient from "./TeamsPic/Ligue1/lorient.svg";
import Monaco from "./TeamsPic/Ligue1/monaco.png";
import Lille from "./TeamsPic/Ligue1/lille.svg";
import Nice from "./TeamsPic/Ligue1/nice.svg";
import PSG from "./TeamsPic/Ligue1/psg.svg";
import Strasbourg from "./TeamsPic/Ligue1/strasbourg.svg";
import Angers from "./TeamsPic/Ligue1/angers.svg";
import Lyon from "./TeamsPic/Ligue1/lyon.svg";
import Brest from "./TeamsPic/Ligue1/brest.png";
import Rennes from "./TeamsPic/Ligue1/rennes.svg";
import Clermont from "./TeamsPic/Ligue1/clermont.svg";
import Troyes from "./TeamsPic/Ligue1/troyes.svg";
import Nantes from "./TeamsPic/Ligue1/nantes.svg";
import Metz from "./TeamsPic/Ligue1/metz.svg";
import Reims from "./TeamsPic/Ligue1/reims.png";
import Montpellier from "./TeamsPic/Ligue1/montpellier.png";
import Lens from "./TeamsPic/Ligue1/lens.svg";
import SaintEtienne from "./TeamsPic/Ligue1/saint-etienne.svg";
import Marseille from "./TeamsPic/Ligue1/marseille.svg";
import Bordeaux from "./TeamsPic/Ligue1/bordeaux.svg";

import Loading from "../Loading/Loading";
import ResultFetch from "../Axios/ResultFetch";
import axios from "axios";

export default function Pronos() {
  const [afirstGame, setAfirstGame] = useState({});
  const [bsecondGame, setBsecondGame] = useState({});
  const [cthirdGame, setCthirdGame] = useState({});
  const [dfourthGame, setDfourthGame] = useState({});
  const [efifthGame, setEfifthGame] = useState({});
  const [fsixthGame, setFsixthGame] = useState({});
  const [gseventhGame, setGseventhGame] = useState({});
  const [heigthGame, setHeightGame] = useState({});
  const [ininethGame, setIninethGame] = useState({});
  const [jtenthGame, setJtenthGame] = useState({});

  const [name, setName] = useState("");
  const [thanks, setThanks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://pronos-foot-2-default-rtdb.europe-west1.firebasedatabase.app/result.json",
        {
          afirstGame,
          bsecondGame,
          cthirdGame,
          dfourthGame,
          efifthGame,
          fsixthGame,
          gseventhGame,
          heigthGame,
          ininethGame,
          jtenthGame,
          name,
        }
      )
      .then((res) => {
        console.log(res);
        setThanks({
          thanks: "Merci",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="pronos">
      <div className="title-fr"></div>

      <div class="marquee-rtl">
        <div>Pronostics ouverts pour la première journée de Ligue 1 </div>
      </div>

      <Navbar></Navbar>

      {!thanks ? (
        <form onSubmit={handleSubmit} className="form">
          <div className="games">
            <div className="teamsName">
              <img src={Angers} alt="Angers" className="teams-pic" />
              Angers
            </div>

            <div className="disBalls">

            <input
              id="Angers"
              value="Angers"
              name="firstGame"
              type="radio"
              onChange={(e) => setAfirstGame(e.target.value)}
              required
            />

            <label class="drinkcard-cc balls" for="Angers"></label>

            <div className="nul">
            Nul
              <input
                id="nul"
                value="nul"
                name="firstGame"
                type="radio"
                onChange={(e) => setAfirstGame(e.target.value)}
              />
              <label class="drinkcard-cc balls" for="nul"></label>
            </div>

            <input
              id="ssGame"
              value="Montpellier"
              name="firstGame"
              type="radio"
              onChange={(e) => setAfirstGame(e.target.value)}
            />

            <label class="drinkcard-cc balls" for="ssGame"></label>

            </div>

            <div className="teamsName">
              <img src={Montpellier} alt="Montpellier" className="teams-pic" />
              Montpellier
            </div>
          </div>

          <br />

          <div className="games">
            <div className="teamsName">
              <img src={Brest} alt="Brest" className="teams-pic" />
              Brest
            </div>
            <input
              id="Brest"
              value="Brest"
              name="secondGame"
              type="radio"
              onChange={(e) => setBsecondGame(e.target.value)}
              required
            />

            <div className="disBalls">

            <label class="drinkcard-cc balls" for="Brest"></label>

            <div className="nul">
            Nul
              <input
                id="nul2"
                value="nul"
                name="secondGame"
                type="radio"
                onChange={(e) => setBsecondGame(e.target.value)}
              />
              <label class="drinkcard-cc balls" for="nul2"></label>
            </div>
            <input
              id="Bordeaux"
              value="Bordeaux"
              name="secondGame"
              type="radio"
              onChange={(e) => setBsecondGame(e.target.value)}
            />

            <label class="drinkcard-cc balls" for="Bordeaux"></label>

            </div>
            <div className="teamsName">
              <img src={Bordeaux} alt="Bordeaux" className="teams-pic" />
              Bordeaux
            </div>
          </div>
          <br />
          


          <div className="games">
            <div className="teamsName">
              <img src={Clermont} alt="Clermont Foot" className="teams-pic" />
              Clermont Foot
            </div>
            <input
              id="clermont"
              value="Clermont Foot"
              name="cthirdGame"
              type="radio"
              onChange={(e) => setCthirdGame(e.target.value)}
              required
            />

            <label class="drinkcard-cc balls" for="clermont"></label>

            <div className="nul">
            Nul
              <input
                id="nul3"
                value="nul"
                name="cthirdGame"
                type="radio"
                onChange={(e) => setCthirdGame(e.target.value)}
              />
              <label class="drinkcard-cc balls" for="nul3"></label>
            </div>
            <input
              id="lyon"
              value="Lyon"
              name="cthirdGame"
              type="radio"
              onChange={(e) => setCthirdGame(e.target.value)}
            />
            <label class="drinkcard-cc balls" for="lyon"></label>
            <div className="teamsName">
              <img src={Lyon} alt="Lyon" className="teams-pic" />
              Lyon
            </div>
          </div>

          <br />

          <div className="games">
            <div className="teamsName">
              <img src={Lens} alt="Lens" className="teams-pic" />
              Lens
            </div>
            <input
              id="lens"
              value="Lens"
              name="fourthGame"
              type="radio"
              onChange={(e) => setDfourthGame(e.target.value)}
              required
            />

            <label class="drinkcard-cc balls" for="lens"></label>

            <div className="nul">
            Nul
              <input
                id="nul4"
                value="nul"
                name="fourthGame"
                type="radio"
                onChange={(e) => setDfourthGame(e.target.value)}
              />
              <label class="drinkcard-cc balls" for="nul4"></label>
            </div>
            <input
              id="monaco"
              value="Monaco"
              name="fourthGame"
              type="radio"
              onChange={(e) => setDfourthGame(e.target.value)}
            />

            <label class="drinkcard-cc balls" for="monaco"></label>

            <div className="teamsName">
              <img src={Monaco} alt="Monaco" className="teams-pic" />
              Monaco
            </div>
          </div>

          <br />

          <div className="games">
            <div className="teamsName">
              <img src={Lille} alt="Lille" className="teams-pic" />
              Lille
            </div>
            <input
              id="lille"
              value="Lille"
              name="fifthGame"
              type="radio"
              onChange={(e) => setEfifthGame(e.target.value)}
              required
            />

            <label class="drinkcard-cc balls" for="lille"></label>

            <div className="nul">
            Nul
              <input
                id="nul5"
                value="nul"
                name="fifthGame"
                type="radio"
                onChange={(e) => setEfifthGame(e.target.value)}
              />
              <label class="drinkcard-cc balls" for="nul5"></label>
            </div>
            <input
              id="rennes"
              value="Rennes"
              name="fifthGame"
              type="radio"
              onChange={(e) => setEfifthGame(e.target.value)}
            />

            <label class="drinkcard-cc balls" for="rennes"></label>

            <div className="teamsName">
              <img src={Rennes} alt="Rennes" className="teams-pic" />
              Rennes
            </div>
          </div>

          <br />

          <div className="games">
            <div className="teamsName">
              <img src={Lorient} alt="Lorient" className="teams-pic" />
              Lorient
            </div>
            <input
              id="lorient"
              value="Lorient"
              name="sixthGame"
              type="radio"
              onChange={(e) => setFsixthGame(e.target.value)}
              required
            />

            <label class="drinkcard-cc balls" for="lorient"></label>

            <div className="nul">
            Nul
              <input
                id="nul6"
                value="nul"
                name="sixthGame"
                type="radio"
                onChange={(e) => setFsixthGame(e.target.value)}
              />
              <label class="drinkcard-cc balls" for="nul6"></label>
            </div>
            <input
              id="troyes"
              value="Troyes"
              name="sixthGame"
              type="radio"
              onChange={(e) => setFsixthGame(e.target.value)}
            />

            <label class="drinkcard-cc balls" for="troyes"></label>

            <div className="teamsName">
              <img src={Troyes} alt="Troyes" className="teams-pic" />
              Troyes
            </div>
          </div>

          <br />

          <div className="games">
            <div className="teamsName">
              <img src={Marseille} alt="Marseille" className="teams-pic" />
              Marseille
            </div>
            <input
              id="marseille"
              value="Marseille"
              name="seventhGame"
              type="radio"
              onChange={(e) => setGseventhGame(e.target.value)}
              required
            />

            <label class="drinkcard-cc balls" for="marseille"></label>

            <div className="nul">
            Nul
              <input
                id="nul7"
                value="nul"
                name="seventhGame"
                type="radio"
                onChange={(e) => setGseventhGame(e.target.value)}
              />
              <label class="drinkcard-cc balls" for="nul7"></label>
            </div>
            <input
              id="strasbourg"
              value="Strasbourg"
              name="seventhGame"
              type="radio"
              onChange={(e) => setGseventhGame(e.target.value)}
            />

            <label class="drinkcard-cc balls" for="strasbourg"></label>

            <div className="teamsName">
              <img src={Strasbourg} alt="Strasbourg" className="teams-pic" />
              Strasbourg
            </div>
          </div>

          <br />

          <div className="games">
            <div className="teamsName">
              <img src={Nantes} alt="Nantes" className="teams-pic" />
              Nantes
            </div>
            <input
              id="nantes"
              value="Nantes"
              name="eigthGame"
              type="radio"
              onChange={(e) => setHeightGame(e.target.value)}
              required
            />

            <label class="drinkcard-cc balls" for="nantes"></label>

            <div className="nul">
            Nul
              <input
                id="nul8"
                value="nul"
                name="eigthGame"
                type="radio"
                onChange={(e) => setHeightGame(e.target.value)}
              />
              <label class="drinkcard-cc balls" for="nul8"></label>
            </div>
            <input
              id="ste"
              value="Saint-Etienne"
              name="eigthGame"
              type="radio"
              onChange={(e) => setHeightGame(e.target.value)}
            />

            <label class="drinkcard-cc balls" for="ste"></label>

            <div className="teamsName">
              <img
                src={SaintEtienne}
                alt="Saint-Etienne"
                className="teams-pic"
              />
              Saint-Etienne
            </div>
          </div>

          <br />

          <div className="games">
            <div className="teamsName">
              <img src={PSG} alt="PSG" className="teams-pic" />
              PSG
            </div>
            <input
              id="psg"
              value="PSG"
              name="ninethGame"
              type="radio"
              onChange={(e) => setIninethGame(e.target.value)}
              required
            />

            <label class="drinkcard-cc balls" for="psg"></label>

            <div className="nul">
            Nul
              <input
                id="nul9"
                value="nul"
                name="ninethGame"
                type="radio"
                onChange={(e) => setIninethGame(e.target.value)}
              />
              <label class="drinkcard-cc balls" for="nul9"></label>
            </div>
            <input
              id="metz"
              value="Metz"
              name="ninethGame"
              type="radio"
              onChange={(e) => setIninethGame(e.target.value)}
            />

            <label class="drinkcard-cc balls" for="metz"></label>

            <div className="teamsName">
              <img src={Metz} alt="Metz" className="teams-pic" />
              Metz
            </div>
          </div>

          <br />

          <div className="games">
            <div className="teamsName">
              <img src={Reims} alt="Reims" className="teams-pic" />
              Reims
            </div>
            <input
              id="reims"
              value="Reims"
              name="tenthGame"
              type="radio"
              onChange={(e) => setJtenthGame(e.target.value)}
              required
            />

            <label class="drinkcard-cc balls" for="reims"></label>

            <div className="nul">
            Nul
              <input
                id="nul10"
                value="nul"
                name="tenthGame"
                type="radio"
                onChange={(e) => setJtenthGame(e.target.value)}
              />
              <label class="drinkcard-cc balls" for="nul10"></label>
            </div>
            <input
              id="nice"
              value="Nice"
              name="tenthGame"
              type="radio"
              onChange={(e) => setJtenthGame(e.target.value)}
            />

            <label class="drinkcard-cc balls" for="nice"></label>

            <div className="teamsName">
              <img src={Nice} alt="Nice" className="teams-pic" />
              Nice
            </div>
          </div>

          <br />

          <br />

          <div class="prenom">
            Votre prénom :
            <input
              id="name"
              value={name}
              name="platform"
              type="text"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <button class="sendButton">Envoyer</button>
          </div>
        </form>
      ) : (
        <div>
          <div>
            <Loading />
          </div>
          <h2 className="showMerci">Merci</h2>
          <ResultFetch />
        </div>
      )}

      <div className="title-fr">{/* <h1>2</h1> */}</div>
    </div>
  );
}
