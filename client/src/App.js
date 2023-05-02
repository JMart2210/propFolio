import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Landing';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Signup messages={""} />
    </div>
  );
}

export default App;
