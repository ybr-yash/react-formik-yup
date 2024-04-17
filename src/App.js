import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUpComponent from './signUpForm/SignUpComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='signup' element={<SignUpComponent/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
