import 'App.css';
import useSioDialogue from 'useSioDialogue';
import 'SioBalloon';
import SioBalloon from 'SioBalloon';
import Help from 'Help';

function App() {

  const sioDialogue = useSioDialogue();

  return (
    <div className="App">
      <header>
        <Help />
      </header>
      <canvas></canvas>
      <SioBalloon dialogue={sioDialogue} />
    </div>
  );
}


export default App;
