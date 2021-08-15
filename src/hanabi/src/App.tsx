import 'App.css';
import { useEffect, useState } from 'react';
import 'SioBalloon';
import SioBalloon from 'SioBalloon';

function App() {

  const [dialogue, setDialogue] = useState('');

  const sioDialogues = [
    '綺麗なのな～(Ｕ///\'ᴗ\'///Ｕ)',
    'はわはわ₍₍ ◝(Ｕ^ᴗ^Ｕ)◞ ₎₎',
    'わたあめ食べたいなの～♡'
  ];

  const nextBalloonTimeout = randomNumber(5000, 15000);

  useEffect(() => {
    const start = setTimeout(() => {
      setDialogue(pickRandom(sioDialogues));
      const end = setTimeout(() => {
        setDialogue('');
        clearTimeout(end);
      }, 2000);
    }, nextBalloonTimeout);
    return () => clearTimeout(start);
  });

  return (
    <div className="App">
      <canvas></canvas>
      {dialogue === '' ? <></> : <SioBalloon dialogue={dialogue} />}
    </div>
  );
}

function pickRandom<T>(arr: T[]) {
  const min = 0;
  const max = Math.floor(arr.length);
  const index = Math.floor(Math.random() * (max - min) + min);
  return arr[index];
}

function randomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min;
}


export default App;
