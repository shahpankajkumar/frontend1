import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute  } from "./utils/ProtectedRoute";
import { PublicRoute } from "./utils/PublicRoute";
import Dashboard from './components/Dashboard/Dashboard';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route element={<PublicRoute />}>
              <Route path="/" element={<Dashboard />} />
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route path="/" exact element={<Dashboard />} />
            </Route>
            
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;