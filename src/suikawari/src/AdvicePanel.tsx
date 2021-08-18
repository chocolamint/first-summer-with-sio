import 'AdvicePanel.css';

export default function AdvicePanel(props: { onMoreLeftClick: () => void, onMoreRightClick: () => void }) {
    return <div className="AdvicePanel">
        <button id="ToLeft" onClick={props.onMoreLeftClick}>もっと左</button>
        <button id="ToRight" onClick={props.onMoreRightClick}>もっと右</button>
    </div>
}