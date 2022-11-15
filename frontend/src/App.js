import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Layout from './components/Layout';
import GetAllTrips from './pages/GetAllTrips';
import Booking from './pages/Booking';

function App() {

  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/trips' element={<GetAllTrips />} />
            <Route path='/booking' element={<Booking />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
