import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';
import RepoDetails from './pages/RepoDetails';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:username" element={<UserDetails />} />
          <Route path="/repo/:owner/:reponame" element={<RepoDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;