
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';

function App() {
  // Determine if the user is authenticated
  const isAuthenticated = Boolean(localStorage.getItem('token'));

  return (
    <div className="h-screen">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard"  /> : <Login />} />
          <Route path="/signin" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
