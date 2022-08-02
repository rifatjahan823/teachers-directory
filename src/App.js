import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import MainLayout from './pages/homePage/mainLayout/MainLayout';
import JobDetails from './pages/jobDetails/JobDetails';
import SearchLayout from './pages/searchTeachers/serachLayout/SearchLayout';
import Footer from './pages/shared/footer/Footer';
import Header from './pages/shared/header/Header';
import Support from './pages/shared/support/Support';
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
      <Route path='/job_details' element={<JobDetails/>}/> 
      </Routes>
      <Support></Support>
      <Footer></Footer>      
      </BrowserRouter>      
    </div>
  );
}

export default App;
