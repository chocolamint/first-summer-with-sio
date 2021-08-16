import 'App.css';
import useSioMessage from 'useSioMessage';
import 'SioBalloon';
import SioBalloon from 'SioBalloon';
import Help from 'Help';
import TalkButton from 'TalkButton';
import TalkPanel from 'TalkPanel';
import { useState } from 'react';

function App() {

  const [isTalkPanelVisible, setIsTalkPanelVisible] = useState(false);
  const sioMessage = useSioMessage(isTalkPanelVisible);

  return (
    <div className="App">
      <header>
        <Help />
      </header>
      <TalkButton onClick={() => setIsTalkPanelVisible(true)} />
      <TalkPanel isVisible={isTalkPanelVisible} onTalk={msg => { setIsTalkPanelVisible(false); }} onCanceled={() => setIsTalkPanelVisible(false)} />
      <SioBalloon dialogue={sioMessage.message} isVisible={sioMessage.isTalking} />
    </div>
  );
}


export default App;
