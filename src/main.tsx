import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import './index.css';
import App from './App.tsx';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Resume } from './pages/Resume';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const router = (
  <HashRouter>
    <Routes>
      <Route element={<App />}>
        <Route index element={<Home />} />
        <Route path="projetos" element={<Projects />} />
        <Route path="curriculo" element={<Resume />} />
      </Route>
    </Routes>
  </HashRouter>
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {prefersReducedMotion ? (
      router
    ) : (
      <ReactLenis root options={{ lerp: 0.1, duration: 1.1, smoothWheel: true }}>
        {router}
      </ReactLenis>
    )}
  </StrictMode>,
);
