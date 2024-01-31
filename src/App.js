import './App.css';
import Pronos from './Components/Pronos/Pronos';
import Classement from './Components/Classement/Classement'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NewHomePage from './Components/NewHomePage/NewHomePage';



function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route path="/NewHomePage" exact component={NewHomePage} />
      <Route path="/Pronos-Foot" exact component={Pronos} />
      <Route path="/classement" exact component={Classement} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
