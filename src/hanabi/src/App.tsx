import 'App.css';
import useSioMessage from 'useSioMessage';
import 'SioBalloon';
import SioBalloon from 'SioBalloon';
import Help from 'Help';
import TalkButton from 'TalkButton';
import TalkPanel from 'TalkPanel';
import { useState } from 'react';

function App() {

  const sioMessage = useSioMessage();
  const [isTalkPanelVisible, setIsTalkPanelVisible] = useState(false);

  return (
    <div className="App">
      <header>
        <Help />
      </header>
      <TalkButton onClick={() => setIsTalkPanelVisible(true)} />
      <TalkPanel isVisible={isTalkPanelVisible} onCanceled={() => setIsTalkPanelVisible(false)} />
      <SioBalloon dialogue={sioMessage.message} isVisible={sioMessage.isTalking} />
    </div>
  );
}


export default App;
