import AdvicePanel from 'AdvicePanel';
import 'App.css';
import { randomNumber } from 'Random';
import { useState, useEffect } from 'react';
import Shugarin from 'Shugarin';
import { setInterval, clearInterval } from 'timers';
import Watermelon from 'Watermelon';

type ShugarinDirection = 'Straight' | 'MoreLeft' | 'MoreRight';

function App() {

  const [shugarinX, setShugarinX] = useState(50);
  const [shugarinY, setShugarinY] = useState(5);
  const [shugarinDirection, setShugarinDirection] = useState('Straight' as ShugarinDirection);

  useEffect(() => {
    const shugarinAnimation = setInterval(() => {
      if (shugarinY > 50) {
        clearInterval(shugarinAnimation);
      } else {
        setShugarinY(prev => prev + 0.4);
        switch (shugarinDirection) {
          case 'Straight':
            break;
          case 'MoreLeft':
            setShugarinX(prev => prev + randomNumber(0.5, 4.0));
            break;
          case 'MoreRight':
            setShugarinX(prev => prev - randomNumber(0.5, 4.0));
            break;
        }
      }

    }, 100);
    return () => clearInterval(shugarinAnimation);
  }, [shugarinY]);

  return (
    <div className="App">
      <main>
        <Shugarin x={shugarinX + 'vw'} y={shugarinY + 'vh'} />
        <Watermelon />
      </main>
      <footer>
        <AdvicePanel
          onMoreLeftClick={() => setShugarinDirection('MoreLeft')}
          onMoreRightClick={() => setShugarinDirection('MoreRight')}
        />
      </footer>
    </div>
  );
}

export default App;