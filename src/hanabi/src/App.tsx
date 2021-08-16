import 'App.css';
import useSioMessage from 'useSioMessage';
import 'SioBalloon';
import SioBalloon from 'SioBalloon';
import Help from 'Help';
import TalkButton from 'TalkButton';
import TalkPanel from 'TalkPanel';
import { useState } from 'react';
import familyMessages from 'FamilyMessages';

type FamilyMessage = typeof familyMessages[number];

function App() {

  const [isTalkPanelVisible, setIsTalkPanelVisible] = useState(false);
  const [familyMessage, setFamilyMessage] = useState(null as FamilyMessage | null);
  const sioMessage = useSioMessage({ supress: isTalkPanelVisible, request: familyMessage });

  return (
    <div className="App">
      <header>
        <Help />
      </header>
      <TalkButton onClick={() => setIsTalkPanelVisible(true)} />
      <TalkPanel isVisible={isTalkPanelVisible} onTalk={msg => { setFamilyMessage(msg); setIsTalkPanelVisible(false); }} onCanceled={() => setIsTalkPanelVisible(false)} />
      <SioBalloon dialogue={sioMessage.message} isVisible={sioMessage.isTalking} />
    </div>
  );
}


export default App;
