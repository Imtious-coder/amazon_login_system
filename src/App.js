import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PuzzleGame from './Components/PuzzleGame/PuzzleGame';
import Verification from './Components/Verification/Verification';
import Header from './Components/Header/Header';
import Signin from './Components/Signin/Signin';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/puzzle_game">
        <PuzzleGame />
        </Route>
        <Route path="/verification">
          <Verification />
        </Route>
        <Route path="/">
          <Signin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
