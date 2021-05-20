import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CreateAccountPage from './Components/CreateAccountPage/CreateAccountPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <CreateAccountPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
