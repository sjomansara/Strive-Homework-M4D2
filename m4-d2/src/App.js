import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import MyJumbotron from './components/Welcome'
import LatestReleases from './components/LatestReleases'

function App() {
  return (
    <div>
      <MyNav title="My Book Store" color="light" />
      <MyJumbotron />
      <LatestReleases />
      <MyFooter />
    </div>
  );
}

export default App;
