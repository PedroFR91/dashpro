import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BestSellers from './pages/BestSellers';
import Home from './pages/Home';
import InformeVentas from './pages/InformeVentas';
import InformeProductos from './pages/InformeProductos';
import Servicios from './pages/Servicios';
function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bestsellers' element={<BestSellers />} />
          <Route path='/informeventas' element={<InformeVentas />} />
          <Route path='/informeproductos' element={<InformeProductos />} />
          <Route path='/servicios' element={<Servicios />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
