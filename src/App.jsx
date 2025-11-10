import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Homepage from './Homepage.jsx';
import About from './About.jsx';
import Header from './Header.jsx';
import Resgister from './Register.jsx';
import AddEvent from './AddEvent.jsx';
import AdminAunthentication from './AdminAunthentication.jsx';  
import FormConfirmation from './FormConfirmation.jsx';
import CreatedEventConfirmation from './CreatedEventConfirmation.jsx';
import Form from './Form.jsx';

function App() {
  const location = useLocation();
  const showHeader = location.pathname !== '/' && location.pathname !== '/formconfirmation' && location.pathname !== '/createdeventconfirmation';

  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/addEvent" element={<AddEvent />} />
        <Route path="/admin" element={<AdminAunthentication />} />
        <Route path="/register" element={<Resgister />} />
        <Route path="/form" element={<Form />} />
        <Route path="/formconfirmation" element={<FormConfirmation />} />
        <Route path="/createdeventconfirmation" element={<CreatedEventConfirmation />} />
      </Routes>
    </>
  );
}

export default App;