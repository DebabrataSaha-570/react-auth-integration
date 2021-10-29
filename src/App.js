import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="App">


      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home> </Home>
          </Route>
          <Route path="/home">
            <Home> </Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
