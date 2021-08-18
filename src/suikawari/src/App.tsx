import AdvicePanel from 'AdvicePanel';
import 'App.css';
import { randomInt, randomNumber } from 'Random';
import { useState, useEffect } from 'react';
import Shugarin from 'Shugarin';
import { setInterval, clearInterval } from 'timers';
import Watermelon from 'Watermelon';

type ShugarinDirection = 'Straight' | 'MoreLeft' | 'MoreRight';

function App() {

  const shugarinImageId = 'Shugarin';
  const watermelonImageId = 'Watermelon';
  const [watermelonX,] = useState(randomNumber(10, 90));
  const [shugarinX, setShugarinX] = useState(randomNumber(10, 90));
  const [shugarinY, setShugarinY] = useState(5);
  const [shugarinDirection, setShugarinDirection] = useState('Straight' as ShugarinDirection);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const moveDistances = [0.1, 0.2, 0.3, 0.5, 1.0, 2.0, 4.0] as const;
    const shugarinAnimation = setInterval(() => {
      // すいか位置まで到着したとき
      if (shugarinY > 50) {
        clearInterval(shugarinAnimation);
        alert(success ? '成功' : '失敗');
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

      const shugarinRect = document.getElementById('Shugarin')!.getBoundingClientRect();
      const shugarinLeft = shugarinRect.left;
      const shugarinWidth = shugarinRect.width;
      const shugarinCenter = shugarinLeft + shugarinWidth / 2;
      const watermelonRect = document.getElementById('Watermelon')!.getBoundingClientRect();
      const watermelonLeft = watermelonRect.left;
      const watermelonWidth = watermelonRect.width;
      const watermelonRight = watermelonLeft + watermelonWidth;
      setSuccess(watermelonLeft <= shugarinCenter && shugarinCenter <= watermelonRight);

    }, 100);
    return () => clearInterval(shugarinAnimation);
  }, [shugarinY, shugarinDirection]);

  return (
    <div className="App">
      <main>
        <Shugarin imageId={shugarinImageId} x={shugarinX} y={shugarinY} />
        <Watermelon imageId={watermelonImageId} x={watermelonX} y={57} />
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