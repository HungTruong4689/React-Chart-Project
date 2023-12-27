import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import ViewPage from './pages/ViewPage'
import SettingPage from './pages/SettingPage'

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path='/' element={<Navigate to='/view' replace />} />

                <Route path='/view' element={<ViewPage />} />
                <Route path='/setting' element={<SettingPage />} />
            </Routes>
        </Router>
    )
}

export default App
