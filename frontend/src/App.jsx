import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signin from './pages/users/Signin';
import Signup from './pages/users/Signup';
import AdminSignup from './pages/admin/Signup';
import AdminSignin from './pages/admin/Signin';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/admin/" element={<AdminSignup/>}></Route>
        <Route path="/admin/signin" element={<AdminSignin/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App