// src/App.js
import React, { Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';

const Chat = React.lazy(() => import('./features/chat/Chat'));

function App() {
  return (
    <div className="min-h-screen mt-10 flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center">
        <Suspense fallback={<Loader />}>
          <Chat />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
