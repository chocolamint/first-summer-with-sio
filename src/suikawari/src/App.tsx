import AdvicePanel from 'AdvicePanel';
import 'App.css';
import { randomInt, randomNumber } from 'Random';
import { useState, useEffect } from 'react';
import ResultPanel from 'ResultPanel';
import Shugarin from 'Shugarin';
import StartScreen from 'StartScreen';
import { setInterval, clearInterval } from 'timers';
import Watermelon, { WatermelonState } from 'Watermelon';

type ShugarinDirection = 'Straight' | 'MoreLeft' | 'MoreRight';
type GameState = { state: 'Start' } | { state: 'Game'} | { state: 'Result', success: boolean };

function App() {

  const shugarinImageId = 'Shugarin';
  const watermelonImageId = 'Watermelon';
  const [gameState, setGameState] = useState({ state: 'Start' } as GameState);
  const [watermelonX, setWatermelonX] = useState(randomNumber(10, 90));
  const [shugarinX, setShugarinX] = useState(randomNumber(10, 90));
  const [shugarinY, setShugarinY] = useState(5);
  const [shugarinDirection, setShugarinDirection] = useState('Straight' as ShugarinDirection);
  const [watermelonState, setWatermelonState] = useState('Normal' as WatermelonState);

  const resetGame = () => {
    setGameState({ state: 'Game' });
    setShugarinDirection('Straight');
    setWatermelonState('Normal');
    setWatermelonX(randomNumber(10, 90));
    setShugarinX(randomNumber(10, 90));
    setShugarinY(5);
  };

  useEffect(() => {
    
    const shugarinAnimation = setInterval(() => {
      
      if (gameState.state !== 'Game') return;
      
      const moveDistances = [0.1, 0.2, 0.3, 0.5, 1.0, 2.0, 4.0] as const;
   
      const shugarinRect = document.getElementById('Shugarin')!.getBoundingClientRect();
      const shugarinLeft = shugarinRect.left;
      const shugarinWidth = shugarinRect.width;
      const shugarinCenter = shugarinLeft + shugarinWidth / 2;
      const watermelonRect = document.getElementById('Watermelon')!.getBoundingClientRect();
      const watermelonLeft = watermelonRect.left;
      const watermelonWidth = watermelonRect.width;
      const watermelonRight = watermelonLeft + watermelonWidth;
  
      // すいか位置まで到着したとき
      if (shugarinY > 50) {
        const success = (watermelonLeft <= shugarinCenter && shugarinCenter <= watermelonRight);
        setGameState({ state: 'Result', success });
        if (success) {
          setWatermelonState('Crashed');
        }
      }
      // 移動中
      else {
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
  }, [shugarinY, shugarinDirection, gameState]);

  return (
    <div className="App">
      {
        gameState.state === 'Start' ? 
          <StartScreen onStart={() => setGameState({ state: 'Game' })} /> :
          (
            <>
              <main>
                <Shugarin imageId={shugarinImageId} x={shugarinX} y={shugarinY} />
                <Watermelon imageId={watermelonImageId} x={watermelonX} y={57} state={watermelonState} />
              </main>
              <footer>
                <AdvicePanel
                  onMoreLeftClick={() => setShugarinDirection('MoreLeft')}
                  onMoreRightClick={() => setShugarinDirection('MoreRight')}
                />
              </footer>
              { gameState.state === 'Result' ? <ResultPanel success={gameState.success} onContinue={resetGame} /> : <></>}
            </>
          )
      }
    </div>
  );
}

export default App;