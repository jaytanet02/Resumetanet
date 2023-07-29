import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Tableuser from './table_user';
import Dashboard from './dashboard';
import Indexmain from './indexmain';
// นำเข้าคอมโพเนนต์ต่าง ๆ ที่ใช้เป็นหน้า

function App() {

  return (
    <Router>
     
        <Indexmain />

      <Routes>
       
          <>
            {/* กำหนดเส้นทางไปยังหน้าอื่น ๆ ที่ผู้ใช้ที่เข้าสู่ระบบจะเห็น */}
            {<Route path="/dashboard" element={<Dashboard />} />}
          </>
    
          <>
            {/* กำหนดเส้นทางไปยังหน้าอื่น ๆ ที่ผู้ใช้ที่ยังไม่ได้เข้าสู่ระบบจะเห็น */}
            {<Route path="/table_user" element={<Tableuser />} />}
          </>
       
      </Routes>
    </Router>
  );
}

export default App;
