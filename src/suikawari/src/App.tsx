import 'App.css';
import { useState } from 'react';
import Shugarin from 'Shugarin';

function App() {

  const [shugarinX, setShugarinX] = useState(document.body.clientWidth / 2);
  const [shugarinY, setShugarinY] = useState('5vh');

  return (
    <div className="App">
      <Shugarin x={shugarinX} y={shugarinY} />
    </div>
  );
}

export default App;
