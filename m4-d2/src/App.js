import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'

function App() {
  return (
    <div>
      <MyNav title="My Book Store" color="light" />
      <MyFooter />
    </div>
  );
}

export default App;
