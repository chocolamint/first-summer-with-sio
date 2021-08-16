import 'App.css';
import 'SioBalloon';
import SioBalloon from 'SioBalloon';
import Help from 'Help';
import TalkButton from 'TalkButton';
import TalkPanel from 'TalkPanel';
import { useState, useEffect } from 'react';
import familyMessages from 'FamilyMessages';
import sioMessages from 'SioMessages';
import sioResponses from 'SioResponse';
import { randomInt, randomNumber } from 'Random';

type FamilyMessage = typeof familyMessages[number];
type SioMessage = typeof sioMessages[number] | '';
type SioResponse = typeof sioResponses[FamilyMessage][number];

function App() {

  const [isTalkPanelVisible, setIsTalkPanelVisible] = useState(false);
  const [familyMessage, setFamilyMessage] = useState(null as FamilyMessage | null);
  const [message, setMessage] = useState({ message: '' as SioMessage | SioResponse, isTalking: false });

  useEffect(() => {

    const nextBalloonTimeout = familyMessage ? 400 : randomNumber(6000, 15000);

    const start = setTimeout(() => {
      setMessage(() => {
        const messages = familyMessage ? sioResponses[familyMessage] : sioMessages;
        const nextIndex = randomInt(messages.length);
        return { message: messages[nextIndex], isTalking: true };
      });
      const end = setTimeout(() => {
        setMessage(prev => ({ message: prev.message, isTalking: false }));
        clearTimeout(end);
      }, 3000);
    }, nextBalloonTimeout);
    return () => clearTimeout(start);
  }, [message]);

  return (
    <div className="App">
      <header>
        <Help />
      </header>
      <TalkButton onClick={() => setIsTalkPanelVisible(true)} />
      <TalkPanel isVisible={isTalkPanelVisible} onTalk={msg => { setFamilyMessage(msg); setIsTalkPanelVisible(false); }} onCanceled={() => setIsTalkPanelVisible(false)} />
      <SioBalloon dialogue={message.message} isVisible={message.isTalking} />
    </div>
  );
}


export default App;
