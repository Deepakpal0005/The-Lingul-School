import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Main from '../src/pages/Main'

// import { ToastContainer, toast } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="w-screen m-0 p-0 overflow-x-hidden">
      <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes>
      
      <Toaster
        position="top-center"
        reverseOrder={true}/>
    </div>
  );
}

export default App;
