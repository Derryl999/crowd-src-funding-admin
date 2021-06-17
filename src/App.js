import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Success from './components/Success';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route component={Home} exact path="/"></Route>
        <Route component={Dashboard} exact path="/dashboard"></Route>
        <Route component={Success} exact path="/success"></Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
