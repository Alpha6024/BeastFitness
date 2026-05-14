import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Trainers from './pages/Trainers.jsx';
import Membership from './pages/Membership.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contact.jsx';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Wrapper component with ScrollToTop
function AppWrapper() {
  return (
    <>
      <ScrollToTop />
      <App />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppWrapper />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'trainers', element: <Trainers /> },
      { path: 'membership', element: <Membership /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
