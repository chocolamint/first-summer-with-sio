import 'App.css';
import useSioDialogue from 'useSioDialogue';
import 'SioBalloon';
import SioBalloon from 'SioBalloon';

function App() {

  const sioDialogue = useSioDialogue();

  return (
    <div className="App">
      <canvas></canvas>
      <SioBalloon dialogue={sioDialogue} isVisible={sioDialogue !== ''} />
    </div>
  );
}


export default App;
