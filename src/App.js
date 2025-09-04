// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

// import Home from './pages/Home';
import Main from '../src/pages/Main'
import Contact from '../src/pages/Contacts'

// import { ToastContainer, toast } from 'react-toastify';
// import { ToastContainer, toast } from 'react-toastify';
import usePageTracking from './usePageTracking';
import { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import ThankYou from './pages/ThankYou';
import Contacts from './pages/Contacts';

function App() {
  usePageTracking();
  return (
    <div className="w-screen m-0 p-0 overflow-x-hidden ">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/thank-you' element={<ThankYou/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
      
      <Toaster
        position="top-center"
        reverseOrder={true}/>
    </div>
  );
}

export default App;
