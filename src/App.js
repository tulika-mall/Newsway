
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import NewsDetail from './pages/NewsDetail';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path="/news/:encodedUrl" element={<NewsDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
