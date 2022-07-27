import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import MainLayout from './pages/homePage/mainLayout/MainLayout';
import SearchLayout from './pages/searchTeachers/serachLayout/SearchLayout';
import Footer from './pages/shared/footer/Footer';
import Header from './pages/shared/header/Header';
import ProfileLayout from './pages/teachersProfile/profileLayout/ProfileLayout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
      <Route path='/' element={<MainLayout/>}/>
      <Route path='/search_teacher' element={<SearchLayout/>}/> 
      <Route path='/teacher_profile' element={<ProfileLayout/>}/> 
      </Routes>
      <Footer></Footer>      
      </BrowserRouter>      
    </div>
  );
}

export default App;
