import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Routes from './Rautes';

function App() {
  return (
    <>
      <Routes />
      <ToastContainer />
    </>

  );
}

export default App;
