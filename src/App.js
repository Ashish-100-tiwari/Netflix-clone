import './App.scss';
import {BrowserRouter as Router , Routes ,Route}from "react-router-dom" 
import Home from './Compenents/Home/Home';
import Header from './Compenents/Header/Header';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
