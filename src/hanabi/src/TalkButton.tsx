import 'TalkButton.css';

export default function TalkButton(props: { onClick: () => void }) {
    return <button className="TalkButton" onClick={props.onClick}>
        <i className="far fa-comment-dots"></i>
    </button>;
}