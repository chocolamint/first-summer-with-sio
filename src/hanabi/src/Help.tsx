import { useState } from "react";
import 'Help.css';

export default function Help() {

    const [visible, setVisible] = useState(false);
    const specialThanks = [
        ['https://ja.reactjs.org/', 'React'],
        ['https://qiita.com/iNaoki04/items/5d420440cf3d89f54f82', 'JavaScriptで花火を作ってみよう！'],
        ['https://hp.vector.co.jp/authors/VA039499/#hui', 'ふい字'],
        ['http://customtemplate.blog112.fc2.com/blog-entry-143.html', '日本語フリーフォントの「ふい字」をWEBフォントで活用しよう！'],
        ['https://illustrator-works.com/illust/fireworks/', 'イラストレーターで花火を描こう！'],
        ['https://ao-system.net/favicon/', 'ファビコン favicon.icoを作ろう!'],
    ] as [string, string][];

    return visible ?
        (<div className="SpecialThanks">
            <h1>♡しおとはじめてのはなびたいかい♡</h1>
            <p>
                V汐りんと一緒に花火大会に行った気分を味わうなの♡
            </p>
            <h2>Special Thanks (Ｕ´ ' ᴗ &lt;`Ｕ)ミ☆</h2>
            <ul>
                {specialThanks.map(x => <li><a href={x[0]} target="_blank">{x[1]}</a></li>)}
            </ul>
            <div className="CloseButton">
                <button className="HideSpecialThanksButton" onClick={toggleVisible}>とじる</button>
            </div>
        </div>) :
        (<button className="ShowSpecialThanksButton" onClick={toggleVisible} />);

    function toggleVisible() {
        setVisible(!visible);
    }
}