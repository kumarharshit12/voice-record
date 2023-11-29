import React, { useState, useEffect } from 'react';

const VoiceButton = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');

  useEffect(() => {
    if (isSpeaking) {
      startListening();
    } else {
      stopListening();
    }

    return () => {
      stopListening(); // Cleanup when component unmounts
    };
  }, [isSpeaking]);

  const startListening = () => {
    const recognition = new window.webkitSpeechRecognition(); // Using Webkit Speech Recognition API

    // Set language to Hindi
    recognition.lang = 'hi-IN';

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setRecognizedText(transcript);
      speakText(transcript);
    };

    recognition.start();
  };

  const stopListening = () => {
    window.speechSynthesis.cancel(); // Stop any ongoing speech synthesis
  };

  const speakText = (text) => {
    const utterance = new window.SpeechSynthesisUtterance(text);
    // Set language to Hindi
    utterance.lang = 'hi-IN';
    window.speechSynthesis.speak(utterance);
  };

  const handleVoiceButtonClick = () => {
    setIsSpeaking(!isSpeaking);
  };

  return (
    <div>
      <button onClick={handleVoiceButtonClick} className={`voice-button ${isSpeaking ? 'active' : ''}`}>
        {isSpeaking ? 'Stop Speaking' : 'Start Speaking'}
      </button>
      {recognizedText && (
        <div className="recognized-text">
          <strong>Recognized Text:</strong> {recognizedText}
        </div>
      )}
    </div>
  );
};

export default VoiceButton;