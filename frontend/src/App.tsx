import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import { UserProvider } from './Context/useAuth';

function App() {

    
  return (
    <div className="App">
      <UserProvider>
        <Navbar />
        <Outlet />
        <ToastContainer />
      </UserProvider>
    </div>
  );
}

export default App;
