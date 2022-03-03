import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import LoginRegister from './pages/LoginRegister';
import AdminPage from './pages/AdminPage'
import ForgetPassword from './pages/ForgetPassword';


const App = ()=> {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/reset-password" element={<ForgetPassword/>}/>
        <Route path="/login-register" element={<LoginRegister/>}/>
        <Route path="/admin-panel" element={<AdminPage/>}/>
        <Route path="*" />
      </Routes>
    </Router>
  );
}

export default App;
