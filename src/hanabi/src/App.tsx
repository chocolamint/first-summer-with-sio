import 'App.css';
import useSioMessage from 'useSioMessage';
import 'SioBalloon';
import SioBalloon from 'SioBalloon';
import Help from 'Help';
import TalkButton from 'TalkButton';

function App() {

  const sioMessage = useSioMessage();

  return (
    <div className="App">
      <header>
        <Help />
      </header>
      <TalkButton />
      <SioBalloon dialogue={sioMessage.message} isVisible={sioMessage.isTalking} />
    </div>
  );
}


export default App;
