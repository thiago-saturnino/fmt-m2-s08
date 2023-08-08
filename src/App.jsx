import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'

// PAGES 
import { Home } from './pages/Home/Home'
import { Contact } from './pages/Contact/Contact'
import { NotFound } from './pages/NotFound/NotFound'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
