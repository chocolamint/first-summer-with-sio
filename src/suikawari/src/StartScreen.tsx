import 'StartScreen.css';

export default function StartScreen(props: { onStart: () => void} ) {
    return <div className="StartScreen">
        <button onClick={props.onStart}>はじめる</button>
    </div>;
}