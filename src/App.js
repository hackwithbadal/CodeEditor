import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home';
import Editor from './Pages/Editor';
import { useState } from 'react'
import About from './Pages/About';
import ErrorPage from './Pages/ErorrPage/ErorrPage';

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    <>
      <div>
        <Toaster position='top-right'></Toaster>
      </div>
      <div className="App">
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/about' index element={<About />} />
          <Route path='/DevDooR/:ID' element={<Editor />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
