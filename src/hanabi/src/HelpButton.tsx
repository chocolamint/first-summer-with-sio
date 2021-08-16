import 'HelpButton.css';

export default function HelpButton(props: { onClick: () => void }) {
    return <button className="HelpButton" onClick={props.onClick}>
        <i className="far fa-question-circle"></i>
    </button>;
}