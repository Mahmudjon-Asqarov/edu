import { Route } from 'react-router-dom';
import './App.css';
import Home from './Routes/Home/Home';
function App() {
  return (
    <div className="app">
      <Route path={"/"} component={Home} />
    </div>
  );
}

export default App;
