export default function ResultPanel(props: { success: boolean, onContinue: () => void }) {
    const className = ['ResultPanel', props.success ? 'success' : 'fail'].join(' ');
    return <div className={className}>
        <div className="Result">
            {props.success ? '成功' : '失敗'}
        </div>
        <button className="ContinueButton" onClick={props.onContinue}>
            もう一度遊ぶ
        </button>
    </div>;
}