import 'App.css';
import HelpButton from 'HelpButton';
import HelpPanel from 'HelpPanel';
import { randomNumber, randomPick } from 'Random';
import { useState, useEffect } from 'react';
import Shugarin from 'Shugarin';
import { setInterval, clearInterval } from 'timers';
import Watermelon, { WatermelonState } from 'Watermelon';
import startLogo from 'start-logo.png';

type ShugarinDirection = 'Straight' | 'MoreLeft' | 'MoreRight';
type GameState = { state: 'Start' } | { state: 'Game'} | { state: 'Result', success: boolean };

const moveDirectionsSource = {
  straight: [
    [-0.4, -0.3, -0.2, -0.1, 0, 0.1, 0.2, 0.3, 0.4],
    [-0.4, -0.3, -0.2, -0.1, 0, 0.2],
    [-0.2, 0, 0.1, 0.2, 0.3, 0.4],
    [-0.2, -0.1, 0, 0.1, 0.2, 0.2, 0.3, 0.3, 0.4, 0.5],
    [-0.4, -0.3, -0.2, -0.1, 0, 0.2],
    [-0.2, 0, 0.1, 0.2, 0.3, 0.4],
    [-0.5, -0.4, -0.3, -0.3, -0.2, -0.1, 0, 0.1, 0.2],
  ],
  x: [
    [-0.2, -0.1, 0, 0.1, 0.2, 0.3, 0.5, 1.0, 2.0, 4.0],
    [-0.2, -0.1, 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1.0],
    [-0.3, -0.2, -0.1, 0, 0.2, 0.3, 0.4, 0.5, 1.0, 2.0],
  ],
  y: [
    [-0.1, 0, 0.1, 0.1, 0.2, 0.2, 0.2, 0.3, 0.3, 0.3, 0.3, 0.4, 0.4],
    [-0.2, -0.1, -0.1, 0.1, 0.2, 0.2, 0.2, 0.3, 0.3, 0.3, 0.3, 0.4, 0.4, 0.5, 0.5],
  ]
};

function App() {

  const getMoveDirections = () => ({
    straight: randomPick(moveDirectionsSource.straight),
    x: randomPick(moveDirectionsSource.x),
    y: randomPick(moveDirectionsSource.y)
  });

  const shugarinImageId = 'Shugarin';
  const watermelonImageId = 'Watermelon';
  const [gameState, setGameState] = useState({ state: 'Start' } as GameState);
  const [isHelpPanelVisible, setIsHelpPanelVisible] = useState(false);
  const [moveDirections, setMoveDirections] = useState(getMoveDirections());
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
    setMoveDirections(getMoveDirections());
  };

  useEffect(() => {
    
    const shugarinAnimation = setInterval(() => {
      
      if (gameState.state !== 'Game') return;
   
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
        console.log(`y: [${moveDirections.y.join(',')}]`);
        setShugarinY(prev => prev + randomPick(moveDirections.y));
        switch (shugarinDirection) {
          case 'Straight':
            console.log(`straight: [${moveDirections.straight.join(',')}]`);
            setShugarinX(prev => prev + randomPick(moveDirections.straight));
            break;
          case 'MoreLeft':
          case 'MoreRight':
            console.log(`x: [${moveDirections.x.join(',')}]`);
            const direction = (shugarinDirection === 'MoreLeft' ? 1 : -1);
            setShugarinX(prev => prev + direction * randomPick(moveDirections.x));
            break;
        }
        setMoveDirections(prev => ({ ...getMoveDirections(), straight: prev.straight }));
      }
    }, 100);
    return () => clearInterval(shugarinAnimation);
  }, [shugarinY, shugarinDirection, gameState, moveDirections]);

  let content: JSX.Element;
  switch (gameState.state) {
    case 'Start':
      content = <>
          <header>
            <HelpButton onClick={() => setIsHelpPanelVisible(true)} />
          </header>
          <main>
            <HelpPanel isVisible={isHelpPanelVisible} onCloseButtonClick={() => setIsHelpPanelVisible(false)} />
            <img className="StartLogo" src={startLogo} alt="しゅがりんとはじめてのすいかわり♡" />
          </main>
          <footer>
            <button className="StartButton" onClick={() => setGameState({ state: 'Game' })}>はじめる</button>
          </footer>
        </>;
      break;
    default:
      content = <>
          <header>
            <HelpButton onClick={() => setIsHelpPanelVisible(true)} />
          </header>
          <main>
            <Shugarin imageId={shugarinImageId} x={shugarinX} y={shugarinY} />
            <Watermelon imageId={watermelonImageId} x={watermelonX} y={57} state={watermelonState} />
            <HelpPanel isVisible={isHelpPanelVisible} onCloseButtonClick={() => setIsHelpPanelVisible(false)} />
            {
              gameState.state === 'Result' ?
                <div className="Result">
                  {gameState.success ? 'せいこう♡' : 'しっぱい💦'}
                </div> :
                <></>
            }
          </main>
          <footer>
            {
              gameState.state === 'Game' ?
                <>
                  <button id="ToLeft" onClick={() => setShugarinDirection('MoreLeft')}>もっと左</button>
                  <button id="ToRight" onClick={() => setShugarinDirection('MoreRight')}>もっと右</button>
                </> :
                <button onClick={() => resetGame()}>もう一度遊ぶ</button>
            }
          </footer>
        </>;
      break;
  }

  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;