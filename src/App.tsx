import { useLocation, useOutlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { CustomCursor } from './components/CustomCursor';

function App() {
  const location = useLocation();
  const element = useOutlet();

  return (
    <>
      <CustomCursor />
      <SiteHeader />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {element}
          </motion.div>
        </AnimatePresence>
      </main>
      <SiteFooter />
    </>
  );
}

export default App;
