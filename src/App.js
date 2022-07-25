import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home';
import Editor from './Pages/Editor';
import About from './Pages/About';
import ErrorPage from './Pages/ErorrPage/ErorrPage';

function App() {
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
