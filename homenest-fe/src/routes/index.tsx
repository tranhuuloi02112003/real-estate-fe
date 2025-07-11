import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ClipLoader } from 'react-spinners';

// Lazy loading for pages with artificial delay to see loading spinner
const Home = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('../pages/Home'));
    }, 2000);
  });
});

const NotFound = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('../pages/NotFound'));
    }, 2000);
  });
});

// Loader component with clean, simple, full-page styling
const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    background: '#f9f9f9',
    zIndex: 9999
  }}>
    <ClipLoader color="#ff6b6b" size={60} speedMultiplier={1} />
    <p style={{
      marginTop: '20px',
      fontSize: '16px',
      fontWeight: '500',
      color: '#333'
    }}>
      Đang tải <span style={{ color: '#ff6b6b' }}>HomeNest</span>...
    </p>
    <div style={{
      marginTop: '10px',
      display: 'flex',
      justifyContent: 'center',
      gap: '5px'
    }}>
      {[0, 1, 2].map((i) => (
        <div key={i} style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: '#ff6b6b',
          opacity: 0.7,
          animation: `fade 1.5s ease-in-out ${i * 0.3}s infinite`
        }} />
      ))}
    </div>
    <style>{`
      @keyframes fade {
        0%, 100% { opacity: 0.3; transform: scale(0.8); }
        50% { opacity: 1; transform: scale(1); }
      }
    `}</style>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <NotFound />
      </Suspense>
    ),
  },
]);

export default router;
