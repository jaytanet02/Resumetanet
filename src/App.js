import React from 'react';
import { HashRouter as Router, Route, Routes ,Navigate } from 'react-router-dom';

import Skill from './skill';
import Experience from './experience';
import Profile from './profile';
import Indexmain from './indexmain';
import Education from './education';


function App() {
  return (
    <Router>
      <Indexmain/>
      <Routes>
        <Route path="/" element={<Navigate to="/profile" />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/profile" element={<Profile />} />
        {/* หน้าอื่น ๆ ที่คุณต้องการกำหนดเส้นทาง */}
      </Routes>
    </Router>
  );
}

export default App;
