import 'TalkPanel.css';

export default function TalkPanel() {

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

    return <div className="TalkPanel">
        <ul>
            {messages.map(x => <li>{x}</li>)}
        </ul>
    </div>;
}