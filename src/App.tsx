import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import ViewPage from './pages/ViewPage'
import SettingPage from './pages/SettingPage'

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                {/* Redirect from "/" to "/view" */}
                <Route path='/' element={<Navigate to='/view' replace />} />

                <Route path='/view' element={<ViewPage />} />
                <Route path='/setting' element={<SettingPage />} />
            </Routes>
        </Router>
    )
}

export default App
