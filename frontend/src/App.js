// src/App.js
import React, { Suspense } from 'react';
import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/Footer';

const Chat = React.lazy(() => import('./features/chat/Chat'));

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center">
        <ThemeToggle />
        <Suspense fallback={<div>Loading...</div>}>
          <Chat />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
