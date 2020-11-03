import React, { Fragment } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./App.css";

const name = "React";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavMenu />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

function AppRouter() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/about/:name" component={About} />
      <Route path="/contact" component={Contact} />
      <Route render={() => <h1>404: page not found</h1>} />
    </Switch>
  );
}

const NavMenu = () => (
  <main>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={`/about/${name}`}>About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </main>
);

// React.createElement()
const Home = () => <h3>Home</h3>;
const About = ({ history, ...props }) => (
  <div>
    <h3>About</h3>
    <p>{props.match.params.name}</p>
    <button onClick={() => history.push("/")}>Home</button>
    <button onClick={() => history.push("/contact")}>Contact</button>
  </div>
);

const Contact = () => <h3>Contact</h3>;
export default App;
