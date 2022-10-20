import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './pages/users/Signup'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App