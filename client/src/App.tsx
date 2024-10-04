
// App.tsx
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

const App=()=> {
  return (
    <>
      <div className="m-0 p-0 pb-6 primary_color">
        <Navbar />
        <Outlet/>
        <Footer />
      </div>
    </>
  );
}

export default App;