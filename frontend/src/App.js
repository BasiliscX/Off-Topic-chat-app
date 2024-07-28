import React, { useState, useEffect, Suspense } from 'react';
import Header from './components/Header';

const Chat = React.lazy(() => import('./features/chat/Chat'));

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header toggleTheme={toggleTheme} theme={theme} />
      <div className="flex-grow flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800">
        <Suspense fallback={<div>Loading...</div>}>
          <Chat />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
