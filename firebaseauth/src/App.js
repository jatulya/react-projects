import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage'; // Import the LandingPage component
import UploadPage from './Components/UploadPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<UploadPage />} />
      </Routes>
    </Router>
  );
}

export default App;
