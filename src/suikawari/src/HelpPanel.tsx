import 'HelpPanel.css';

export default function HelpPanel(props: { isVisible: boolean, onCloseButtonClick: () => void }) {

    const specialThanks = [
        ['https://www.irasutoya.com/', 'かわいいフリー素材集 いらすとや'],
        ['https://hp.vector.co.jp/authors/VA039499/#hui', 'ふい字'],
        ['http://customtemplate.blog112.fc2.com/blog-entry-143.html', '日本語フリーフォントの「ふい字」をWEBフォントで活用しよう！'],
        ['https://nonty.net/font/freefont/handyheart-neo/', 'はんでぃはーとねお'],
    ] as [string, string][];

    return props.isVisible ?
        <div className="SpecialThanks">
            <h1><span className="emoticon">♡</span>しゅがりんとはじめてのすいかわり<span className="emoticon">♡</span></h1>
            <p>
                しゅがりんと初めてのすいか割りを楽しむなの<span className="emoticon">♡</span>
            </p>
            <p>
                あどばいすしすぎると、しゅがりんが混乱しちゃうなの<span className="emoticon">(U＞△＜U)</span>
            </p>
            <h2>Special Thanks <span className="emoticon">(Ｕ´ ' ᴗ &lt;`Ｕ)ミ☆</span></h2>
            <ul>
                {specialThanks.map(x => <li><a href={x[0]} target="_blank" rel="noreferrer">{x[1]}</a></li>)}
            </ul>
            <h2>このあぷりけーしょんについて</h2>
            <ul>
                <li>Copyright &copy; 2021 しゃるしぃ</li>
                <li>Released under the <a href="https://opensource.org/licenses/mit-license.php" target="_blank" rel="noreferrer">MIT License</a></li>
                <li><a href="https://github.com/chocolamint/first-summer-with-sio" target="_blank" rel="noreferrer">GitHub Repository</a></li>
            </ul>
            <div className="CloseButton">
                <button className="HideSpecialThanksButton" onClick={props.onCloseButtonClick}>とじる</button>
            </div>
        </div> :
        <></>;
}