import { useState } from "react";
import 'Help.css';

export default function Help() {

    const [visible, setVisible] = useState(false);

    return visible ?
        (<div className="SpecialThanks">
            <h1>♡しおとはじめてのはなびたいかい♡</h1>
            <p>
                V汐りんと一緒に花火大会に行った気分を味わうなの♡
            </p>
            <h2>Special Thanks (Ｕ´ ' ᴗ &lt;`Ｕ)ミ☆</h2>
            <ul>
                <li><a href="https://ja.reactjs.org/" target="_blank">React</a></li>
                <li><a href="https://qiita.com/iNaoki04/items/5d420440cf3d89f54f82" target="_blank">JavaScriptで花火を作ってみよう！</a></li>
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