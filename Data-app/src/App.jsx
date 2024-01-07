import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState('Genrate Custom QR code');
  const [size, setSize] = useState(100);
  const [qr, setQr] = useState('');

  useEffect(() => {
    setQr(`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${data}`);
  }, [data, size]);

  return (
    <div className="container">
      <div className="card">
        <h1 className='heading-1'>Qr Code Generator</h1>
        <input
          type="text"
          placeholder="Generate Your QR Code"
          className="input"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <br />
        <input
          type="range"
          className="range-input"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          min="50"
          max="300"
        />
        <div>
          <img src={qr} alt="QR Code" className="qr-image" />
        </div>
      </div>
    </div>
  );
}

export default App;