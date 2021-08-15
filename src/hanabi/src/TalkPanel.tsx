import 'TalkPanel.css';

export default function TalkPanel(props: { isVisible: boolean, onCanceled: () => void }) {

    const messages = [
        'こんばんはわ～',
        '今日もかわいいね',
        '浴衣似合ってるよ',
        '花火綺麗だね',
        '夏祭り楽しかったね',
        '一緒にいられて幸せ',
        '来年もまた来ようね',
        '楽しいね'
    ];
    const className = ['TalkPanel', props.isVisible ? 'show' : 'hide'].join(' ');

    return <div className={className}>
        <ul>
            {messages.map(x => <li>{x}</li>)}
            <li onClick={props.onCanceled}>(やっぱり何でもない)</li>
        </ul>
    </div>;
}