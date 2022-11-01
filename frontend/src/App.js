import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login'
import Register from './pages/register'
import Header from './components/Header';
import Home from './pages/home';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <div>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
