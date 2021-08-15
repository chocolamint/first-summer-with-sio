import { useState } from "react";
import 'SpecialThanks.css';

export default function SpecialThanks() {

    const [visible, setVisible] = useState(false);

    return visible ?
        (<div className="SpecialThanks">
            <h1>しおとはじめてのはなびたいかい</h1>
            <button className="HideSpecialThanksButton" onClick={toggleVisible} />
            <ul>
                <li><a href="https://qiita.com/iNaoki04/items/5d420440cf3d89f54f82">JavaScriptで花火を作ってみよう！</a></li>
            </ul>
        </div>) :
        (<button className="ShowSpecialThanksButton" onClick={toggleVisible} />);

    function toggleVisible() {
        setVisible(!visible);
    }
}