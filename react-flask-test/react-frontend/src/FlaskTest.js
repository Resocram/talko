import React, { useState } from 'react';
import axios from 'axios';

const FlaskTest = () => {
  const [result, setResult] = useState('Hello World');
  
  const handleClick = async e => {
    const res = await axios.get('/api');
    console.log(res);
    setResult(res.data);
  }

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <h3>{result}</h3>
    </>
  )
}

export default FlaskTest;