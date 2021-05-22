import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Puzzle from './Components/Puzzle/Puzzle';
import PuzzleGame from './Components/PuzzleGame/PuzzleGame';
import Verification from './Components/Verification/Verification';
import Header from './Components/Header/Header';
import Signin from './Components/Signin/Signin';
import MobileVerification from './Components/MobileVerification/MobileVerification';
import MobileOTP from './Components/MobileOTP/MobileOTP';
import Complete from './Components/Complete/Complete';
import Loginmail from './Components/Loginmail/Loginmail';
import LoginPassword from './Components/LoginPassword/LoginPassword';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/puzzle">
          <Puzzle />
        </Route>
        <Route path="/puzzle_game">
          <PuzzleGame />
        </Route>
        <Route path="/verification">
          <Verification />
        </Route>
        <Route path="/mobileVerification">
          <MobileVerification />
        </Route>
        <Route path="/mobileOTP">
          <MobileOTP />
        </Route>
        <Route path="/loginMail">
          <Loginmail />
        </Route>
        <Route path="/loginPassword">
          <LoginPassword />
        </Route>
        <Route path="/complete">
          <Complete />
        </Route>
        <Route path="/">
          <Loginmail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
