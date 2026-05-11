import { useEffect } from 'react';
import './App.css'

function App() {
  useEffect(() => {
    const load = async () => {
      const payload = await fetch('/api/hello').then(resp => resp.json());
      console.log(payload.message);
    };

    load();
  }, []);
  return <h1>Hello, world</h1>;
}

export default App
