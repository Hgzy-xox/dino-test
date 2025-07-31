import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import Result from './pages/Result';

function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="mobile-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;