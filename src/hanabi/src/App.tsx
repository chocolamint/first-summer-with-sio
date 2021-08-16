import 'App.css';
import 'SioBalloon';
import SioBalloon from 'SioBalloon';
import TalkButton from 'TalkButton';
import TalkPanel from 'TalkPanel';
import { useState, useEffect } from 'react';
import familyMessages from 'FamilyMessages';
import sioMessages from 'SioMessages';
import sioResponses from 'SioResponse';
import { randomInt, randomNumber } from 'Random';
import HelpButton from 'HelpButton';
import HelpPanel from 'HelpPanel';

type FamilyMessage = typeof familyMessages[number];
type SioMessage = typeof sioMessages[number] | '';
type SioResponse = typeof sioResponses[FamilyMessage][number];

function App() {

  const [isTalkPanelVisible, setIsTalkPanelVisible] = useState(false);
  const [familyMessage, setFamilyMessage] = useState(null as FamilyMessage | null);
  const [siorinMessage, setSiorinMessage] = useState('' as SioMessage | SioResponse);
  const [isBalloonVisible, setIsBalloonVisible] = useState(false);
  const [lastMessageTimestamp, setLastMessageTimestamp] = useState(0);
  const [isHelpPanelVisible, setIsHelpPanelVisible] = useState(false);

  useEffect(() => {

    const nextBalloonTimeout = familyMessage ? 400 : randomNumber(6000, 15000);

    let message: SioMessage | SioResponse;
    if (familyMessage !== null) {
      const responses = sioResponses[familyMessage];
      const nextIndex = randomInt(responses.length);
      message = responses[nextIndex];
    } else {
      const nextIndex = randomInt(sioMessages.length);
      message = sioMessages[nextIndex];
    }

    const balloonDuration = 3000;

    // 吹き出しを出す
    const start = setTimeout(() => {
      if (lastMessageTimestamp > Date.now() - balloonDuration || isTalkPanelVisible) {
        return;
      }
      setSiorinMessage(message);
      setLastMessageTimestamp(Date.now());
      setIsBalloonVisible(true);
      // 吹き出しを消す
      setTimeout(() => {
        setFamilyMessage(null);
        setIsBalloonVisible(false);
      }, balloonDuration);
    }, nextBalloonTimeout);

    return () => clearTimeout(start);

  }, [familyMessage, siorinMessage, isBalloonVisible, isTalkPanelVisible, lastMessageTimestamp]);

  return (
    <>
      <div className="App">
        <header>
          <HelpButton onClick={() => setIsHelpPanelVisible(true)} />
        </header>
        <footer>
          <SioBalloon message={siorinMessage} isVisible={isBalloonVisible} />
          <TalkButton onClick={() => setIsTalkPanelVisible(true)} isEnabled={!isBalloonVisible && !isTalkPanelVisible} />
        </footer>
      </div>
      <HelpPanel isVisible={isHelpPanelVisible} onCloseButtonClick={() => setIsHelpPanelVisible(false)} />
      <TalkPanel isVisible={isTalkPanelVisible} onTalk={msg => { setFamilyMessage(msg); setIsTalkPanelVisible(false); }} onCanceled={() => setIsTalkPanelVisible(false)} />
    </>
  );
}


export default App;
