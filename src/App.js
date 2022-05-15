
import './assets/css/style.css';
import Header from './components/header'
import Footer from './components/footer'
import Index from './pages/index'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
