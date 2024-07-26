// src/App.js
import React, { Suspense } from 'react';
// import Header from './features/header/header.js';

const Chat = React.lazy(() => import('./features/chat/Chat'));

function App() {
  return (
    <>
      {/* <Header /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Chat />
      </Suspense>
    </>
  );
}

export default App;
