import familyMessages from 'FamilyMessages';
import 'TalkPanel.css';

type FamilyMessages = typeof familyMessages[number];

export default function TalkPanel(props: { isVisible: boolean, onTalk: (message: FamilyMessages) => void, onCanceled: () => void }) {

    const className = ['TalkPanel', props.isVisible ? 'show' : 'hide'].join(' ');

    return <div className={className}>
        <ul>
            {familyMessages.map(x => <li onClick={() => props.onTalk(x)}>{x}</li>)}
            <li onClick={props.onCanceled}>(やっぱり何でもない)</li>
        </ul>
    </div>;
}