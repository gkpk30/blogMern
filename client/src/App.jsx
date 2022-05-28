// import your route components too
import Footer from './components/Footer';
import TopBar from './components/TopBar'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Settings from './pages/Settings';
import Single from './pages/Single';
import Write from './pages/Write';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

const App = () => {
  const { user } = useContext(Context);
  return (

    
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route  path="/register">
          { user ? <Home/> :  <Register />}
        </Route>
        <Route  path="/login">
        { user ? <Home/> :  <Login />}
        </Route>
        <Route  path="/write">
        { user ? <Write/> :  <Home />}
        </Route>
        <Route  path="/settings">
        { user ? <Settings/> :  <Home />}
        </Route>
        <Route  path="/post/:postId">
          <Single />
        </Route>
      </Switch>
      <Footer/>
  </Router>
  );
};

export default App;
