import 'App.css';
import useSioDialogue from 'useSioDialogue';
import 'SioBalloon';
import SioBalloon from 'SioBalloon';
import SpecialThanks from 'SpecialThanks';

function App() {

  const sioDialogue = useSioDialogue();

  return (
    <div className="App">
      <header>
        <SpecialThanks />
      </header>
      <canvas></canvas>
      <SioBalloon dialogue={sioDialogue} />
    </div>
  );
}


export default App;
