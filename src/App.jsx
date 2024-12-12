import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/Home.jsx'
import Signup from './Components/Signup.jsx'
import EventRegistration from './Components/EventRegistration.jsx';
import ViewRegistration from './Components/ViewRegistration.jsx';
function App() {
  console.log('App rendered');
  return (
    <Router basename='/EMS'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/eventRegistration" element={<EventRegistration/>} />
        <Route path="/viewRegistration" element={<ViewRegistration/>} />
      </Routes>
    </Router>
  );
}


export default App
