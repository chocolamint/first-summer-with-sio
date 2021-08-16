import 'HelpPanel.css';

export default function HelpPanel(props: { isVisible: boolean, onCloseButtonClick: () => void }) {

    const specialThanks = [
        ['https://ja.reactjs.org/', 'React'],
        ['https://qiita.com/iNaoki04/items/5d420440cf3d89f54f82', 'JavaScriptで花火を作ってみよう！'],
        ['https://hp.vector.co.jp/authors/VA039499/#hui', 'ふい字'],
        ['http://customtemplate.blog112.fc2.com/blog-entry-143.html', '日本語フリーフォントの「ふい字」をWEBフォントで活用しよう！'],
        ['https://illustrator-works.com/illust/fireworks/', 'イラストレーターで花火を描こう！'],
        ['https://ao-system.net/favicon/', 'ファビコン favicon.icoを作ろう!'],
        ['https://fontawesome.com/', 'Font Awesome'],
        ['https://www.tutorialmaniacs.net/archives/819', '【Illustrator】だれでも簡単に打ち上げ花火を描くチュートリアル'],
        ['https://remaster4.com/illustrator_practice_starry_sky/', '【Illustratorチュートリアル】星空が印象的なチラシを作る【実践編】'],
        ['https://nonty.net/font/freefont/handyheart-neo/', 'はんでぃはーとねお'],
        ['http://ogimage.tsmallfield.com/', 'OGP画像シミュレータ']
    ] as [string, string][];

    return props.isVisible ?
        <div className="SpecialThanks">
            <h1><span className="emoticon">♡</span>しおとはじめてのはなびたいかい<span className="emoticon">♡</span></h1>
            <p>
                V汐りんと一緒に花火大会に行った気分を味わうなの<span className="emoticon">♡</span>
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