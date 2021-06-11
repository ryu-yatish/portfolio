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
  return (
    <div>
      <h2>art</h2>
      <div className="instapics"><iframe class="frame" width="560" height="800" src="https://www.instagram.com/p/CMahyiXlki6/embed" title="insta post display" frameborder="30" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    </div>
  );
}
function Miscellaneous() {
  return <h2>miscellaneous</h2>;
}

export default App;
