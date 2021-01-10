import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const AppContext = React.createContext();

const SpeechContext = ({children}) => {
  const [transcript, setTranscript] = useState({});
  const [audioFile, setAudioFile] = useState({});
  const [path, setPath] = useState('');
  const [stats, setStats] = useState({})

  // if user inputs audio file, store to cloud and get path
  // useEffect(() => {
  //   const storeToCloud = async () => {
  //   }
  //   if (audioFile) storeToCloud();
  // }, [audioFile])

  // if path is loaded, make api call to be to get audio statistics
  // useEffect(() => {
  //   const getStats = async () => setStats(await axios.post('/api', { transcript, path }));
  //   if (transcript && audioFile && path) getStats();
  // }, [audioFile, path, transcript])

  const value = [
    transcript, 
    setTranscript,
    audioFile,
    setAudioFile,
    path,
    setPath,
    stats,
    setStats,
  ];

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default SpeechContext;