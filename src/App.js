import React from 'react';
import VoiceButton from './VoiceButton';
import ChatBox from './ChatBox';

function App() {
  return (
    <div className='container'>
    <div className="App">
      <h1>Voice Chat App</h1>
      <ChatBox />
      <VoiceButton />
    </div>
    </div>
  );
}

export default App;