import 'TalkButton.css';

export default function TalkButton(props: { onClick: () => void, isEnabled: boolean }) {
    const className = ['TalkButton', props.isEnabled ? 'enabled' : 'disabled'].join(' ');
    return <button className={className} onClick={() => props.isEnabled ? props.onClick() : void 0}>
        <i className="far fa-comment-dots"></i>
    </button>;
}