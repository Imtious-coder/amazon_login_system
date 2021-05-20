import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CreateAccountPage from './Components/CreateAccountPage/CreateAccountPage';
import Puzzle from './Components/Puzzle/Puzzle';
import PuzzleGame from './Components/PuzzleGame/PuzzleGame';
import Verification from './Components/Verification/Verification';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/create_account_page">
          <CreateAccountPage />
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
        <Route path="/">
          <CreateAccountPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
