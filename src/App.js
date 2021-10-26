
//import Signup from './components/signup';
import Login from './components/login';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from './components/signup';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
const App = () => {
  return (
    <div >
      {/* <Signup/> */}
      {/* <Login /> */}
      <BrowserRouter>
        <Switch>
            <PrivateRoute exact path="/" component={Home}></PrivateRoute>
            <Route exact path="/signup" component={Signup}></Route>
            <Route path="/login" component={Login}></Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
