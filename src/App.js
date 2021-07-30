import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
              <Cards/>
            </Route>
            <Route exact path="/about">
              <Cards/>
            </Route>
            <Route exact path="/contact">
              
            </Route>
            <Route exact path="/services">
              <Cards/>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>  
  );
}

export default App;