import 'App.css';
import 'SioBalloon';
import SioBalloon from 'SioBalloon';

function App() {

  const sioDialogues = [
    '綺麗なのな～(Ｕ///\'ᴗ\'///Ｕ)',
    'はわはわ₍₍ ◝(Ｕ^ᴗ^Ｕ)◞ ₎₎',
    'わたあめ食べたいなの～♡'
  ];

  const dialogue = pickRandom(sioDialogues);

  return (
    <div className="App">
      <canvas></canvas>
      <SioBalloon dialogue={dialogue} />
    </div>
  );
}

function pickRandom<T>(arr: T[]) {
  const min = 0;
  const max = Math.floor(arr.length);
  const index = Math.floor(Math.random() * (max - min) + min);
  return arr[index];
}

export default App;
