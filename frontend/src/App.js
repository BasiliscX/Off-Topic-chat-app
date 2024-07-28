// src/App.js
import React, { Suspense } from 'react';
import ThemeToggle from './components/ThemeToggle';

const Chat = React.lazy(() => import('./features/chat/Chat'));

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <ThemeToggle />
      <Suspense fallback={<div>Loading...</div>}>
        <Chat />
      </Suspense>
    </div>
  );
}

export default App;
