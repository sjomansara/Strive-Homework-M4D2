import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import MyJumbotron from './components/Welcome'

function App() {
  return (
    <div>
      <MyNav title="My Book Store" color="light" />
      <MyJumbotron />
      <MyFooter />
    </div>
  );
}

export default App;
