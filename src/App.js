import logo from './logo.svg';
import './App.css';
import Loginnav from "./Components/Loginnav.js"
import Login from "./Components/Login.js"
import Signup from "./Components/Signup.js"
import Forgotpassword from './Components/Forgotpassword';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Profile from './Components/Profile';
import Final from './Components/Final';
import {BrowserRouter as Router,Route}  from "react-router-dom";

function App() {
  return (
    <div >
    <Router>
      <Route path="/" component={Login} exact/>
      <Route path="/Signup" component={Signup} exact/>
      <Route path="/Home" component={Home} exact/>
      <Route path="/About" component={About} exact/>
      <Route path="/Contact" component={Contact} exact/>
      <Route path="/Profile" component={Profile} exact/>
      <Route path="/Final" component={Final} exact/>
      <Route path="/Login" component={Login} exact/>
      <Route path="/Forgotpassword" component={Forgotpassword} exact/>

    </Router>
    </div>
  );
}

export default App;
