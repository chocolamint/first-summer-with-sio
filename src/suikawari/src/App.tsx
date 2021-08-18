import 'App.css';
import { useState, useEffect } from 'react';
import Shugarin from 'Shugarin';
import { setInterval, clearInterval } from 'timers';
import Watermelon from 'Watermelon';

function App() {

  const [shugarinX, setShugarinX] = useState(document.body.clientWidth / 2);
  const [shugarinY, setShugarinY] = useState(5);

  useEffect(() => {
    const shugarinAnimation = setInterval(() => {
      if (shugarinY > 50) {
        clearInterval(shugarinAnimation);
      } else {
        setShugarinY(prev => prev + 0.4);
      }

    }, 100);
    return () => clearInterval(shugarinAnimation);
  }, [shugarinY]);

  return (
    <div className="App">
      <Shugarin x={shugarinX} y={shugarinY + 'vh'} />
      <Watermelon />
    </div>
  );
}

export default App;