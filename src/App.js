import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import MainLayout from './pages/homePage/mainLayout/MainLayout';
import JobSearchLayout from './pages/jobSearch/JobSearchLayout';
import SchoolDasboardLayout from './pages/schoolDashboard/SchoolDasboardLayout';
import SearchLayout from './pages/searchTeachers/serachLayout/SearchLayout';
import Footer from './pages/shared/footer/Footer';
import Header from './pages/shared/header/Header';
import Support from './pages/shared/support/Support';
import SignUp from './pages/signUp/SignUp';
import SignupSchool from './pages/signUp/signupSchool/SignupSchool';
import TeacherDashboardLayout from './pages/teacherDashboard/TeacherDashboardLayout';
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
      <Route path='/job_search' element={<JobSearchLayout/>}/> 
      <Route path='/teacher_dashboard' element={<TeacherDashboardLayout/>}/> 
      <Route path='/school_dashboard' element={<SchoolDasboardLayout/>}/> 
      <Route path='/signup' element={<SignUp/>}/> 
      <Route path='/signupschool' element={<SignupSchool/>}/> 
      </Routes>
      <Support></Support>
      <Footer></Footer>      
      </BrowserRouter>      
    </div>
  );
}

export default App;
