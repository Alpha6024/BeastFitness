import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { SmoothScrollProvider } from './context/SmoothScrollContext';

function App() {
  return (
    <SmoothScrollProvider>
      <div className="relative overflow-x-hidden w-full">
        {/* Noise Overlay */}
        <div className="noise-overlay" />
        
        {/* Navbar */}
        <Navbar />
        
        {/* Main Content */}
        <main className="w-full overflow-x-hidden">
          <Outlet />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}

export default App;
