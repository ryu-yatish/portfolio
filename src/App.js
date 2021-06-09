import './App.css';
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Sidebar from "./components/Sidebar"


function App() {
  return (
    <Router>
    <div className="App">
      <Sidebar/>
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/youtube">
            <Youtube />
          </Route>
          <Route path="/art">
            <Art />
          </Route>
          <Route path="/miscellaneous">
            <Miscellaneous />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}
function Home() {
  
  return (
    <h2>Home</h2>
  );
}

function About() {
  return <h2>About</h2>;
}

function Youtube() {
  return <h2>youtube</h2>;
}

function Art() {
  return <h2>art</h2>;
}
function Miscellaneous() {
  return <h2>miscellaneous</h2>;
}

export default App;
