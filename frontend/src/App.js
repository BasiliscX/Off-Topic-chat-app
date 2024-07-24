import React, { Suspense } from 'react';

const Chat = React.lazy(() => import('./features/chat/Chat'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Chat />
    </Suspense>
  );
}

export default App;
