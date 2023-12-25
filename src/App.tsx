import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ViewPage from './pages/ViewPage';
import SettingPage from './pages/SettingPage';


function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ViewPage />} />
        <Route path="/view" element={<ViewPage />} />
        <Route path="/setting" element={<SettingPage />} />
        
      </Routes>
    </Router>
  )
}

export default App
