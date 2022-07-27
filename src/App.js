import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import MainLayout from './pages/homePage/mainLayout/MainLayout';
import Footer from './pages/shared/footer/Footer';
import Header from './pages/shared/header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
      <Route path='/' element={<MainLayout/>}/> 
      </Routes>
      <Footer></Footer>      
      </BrowserRouter>      
    </div>
  );
}

export default App;
