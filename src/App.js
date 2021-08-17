import './App.css';
import Pronos from './Components/Pronos/Pronos';
import Navbar from './Components/Navbar/Navbar';
import Classement from './Components/Classement/Classement'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
      <Route path="/Pronos-Foot" exact component={Pronos} />
      <Route path="/classement" exact component={Classement} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
