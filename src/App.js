import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import MainLayout from './pages/homePage/mainLayout/MainLayout';
import JobDetails from './pages/jobDetails/JobDetails';
import JobSearchLayout from './pages/jobSearch/JobSearchLayout';
import SearchLayout from './pages/searchTeachers/serachLayout/SearchLayout';
import Footer from './pages/shared/footer/Footer';
import Header from './pages/shared/header/Header';
import Support from './pages/shared/support/Support';
import TeacherDashboardLayout from './pages/teacherDashboard/TeacherDashboardLayout';
import SchoolDashboardLayout from './pages/schoolDashboard/SchoolDashboardLayout';
import ProfileLayout from './pages/teachersProfile/profileLayout/ProfileLayout';
import SignUp from './pages/signUp/SignUp';
import SignUpSchool from './pages/signUp/signUpSchool/SignUpSchool';
import SignUpTeacher from './pages/signUp/signUpTeacher/SignUpTeacher';

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
      <Route path='/job_details' element={<JobDetails/>}/> 
      <Route path='/teacher_dashboard' element={<TeacherDashboardLayout/>}/> 
      <Route path='/school_dashboard' element={<SchoolDashboardLayout/>}/> 
      <Route path='/signup' element={<SignUp/>}/> 
      <Route path='/signupschool' element={<SignUpSchool/>}/> 
      <Route path='/signupteacher' element={<SignUpTeacher/>}/> 
      </Routes>
      <Support></Support>
      <Footer></Footer>      
      </BrowserRouter>      
    </div>
  );
}

export default App;
