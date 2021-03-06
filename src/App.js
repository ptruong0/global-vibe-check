import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar.jsx'
import Landing from './screens/Landing.jsx';
import AboutUs from './screens/AboutUs.jsx';
import CovidColorGuide from './screens/CovidColorGuide.jsx';
import CovidStats from './screens/CovidStats.jsx';
import Globe from './screens/Globe.jsx';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/globe' component={Globe} />
          <Route path='/about' component={AboutUs} />
          <Route path='/guidelines' component={CovidColorGuide} />
          <Route path='/stats' component={CovidStats} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
