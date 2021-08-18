import AdvicePanel from 'AdvicePanel';
import 'App.css';
import { randomInt, randomNumber } from 'Random';
import { useState, useEffect } from 'react';
import Shugarin from 'Shugarin';
import { setInterval, clearInterval } from 'timers';
import Watermelon from 'Watermelon';

type ShugarinDirection = 'Straight' | 'MoreLeft' | 'MoreRight';

function App() {

  const [shugarinX, setShugarinX] = useState(50);
  const [shugarinY, setShugarinY] = useState(5);
  const [shugarinDirection, setShugarinDirection] = useState('Straight' as ShugarinDirection);
  const moveDistances = [0.1, 0.2, 0.3, 0.5, 1.0, 2.0, 4.0] as const;

  useEffect(() => {
    const shugarinAnimation = setInterval(() => {
      if (shugarinY > 50) {
        clearInterval(shugarinAnimation);
      } else {
        setShugarinY(prev => prev + 0.4);
        const moveDistance = moveDistances[randomInt(moveDistances.length)];
        switch (shugarinDirection) {
          case 'Straight':
            break;
          case 'MoreLeft':
            setShugarinX(prev => prev + moveDistance);
            break;
          case 'MoreRight':
            setShugarinX(prev => prev - moveDistance);
            break;
        }
      }

    }, 100);
    return () => clearInterval(shugarinAnimation);
  }, [shugarinY]);

  return (
    <div className="App">
      <main>
        <Shugarin x={shugarinX} y={shugarinY} />
        <Watermelon x={50} y={57} />
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