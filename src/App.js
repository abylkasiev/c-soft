import './App.css';
import { Route, Switch } from 'react-router';
import Header from './components/Main/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Main/Footer/Footer';
import Events from './components/Events/Events'
import Users from './components/Users/Users'
import Createevents from './components/Events/Createevents/Createevents'

function App() {
  return (
    <div className="App">
        <Header/>
          <Switch>
            <Route  path="/Events" component={Events} />
            <Route  path="/Createevents" component={Createevents} />
            <Route  path="/Users" component={Users} />
          </Switch>
        <Footer/>
    </div>
  );
}

export default App;
