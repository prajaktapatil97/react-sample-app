
import './App.css';
import Home from './Home';
function App() {
  let userDetails= {
    username : 'prajakta'
  }
  return (
    <div className="App">
      <Home prop= {userDetails}></Home>
    </div>
  );
}

export default App;

