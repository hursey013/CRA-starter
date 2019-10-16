import React from 'react';
import tw from 'tailwind.macro';
import 'styled-components/macro';

function App() {
  return (
    <div css={tw`flex min-h-screen items-center justify-center`}>
      <header css={tw`text-center`}>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
