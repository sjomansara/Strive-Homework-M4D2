import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './components/Home';
import Registration from './components/Registration';

function App() {
  return (
    <Router>
    <div>
      <MyNav title="My Book Store" color="light" />
      <Switch>
      <Route path="/" exact component={Home} />
        <Route path="/register" exact component={Registration} />
      </Switch>
      <MyFooter />
    </div>
    </Router>
  );
}

export default App;
