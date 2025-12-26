import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
