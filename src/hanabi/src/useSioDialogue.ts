import { randomNumber, randomInt } from "Random";
import { useEffect, useState } from "react";

export default function useSioDialogue() {
    const [dialogue, setDialogue] = useState(['', -1] as [string, number]);

    const sioDialogues = [
        '綺麗なのな～<code>(Ｕ///\'ᴗ\'///Ｕ)</code>',
        'はわはわ<code>₍₍ ◝(Ｕ^ᴗ^Ｕ)◞ ₎₎</code>',
        'しお、わたあめ食べたいなの～♡',
        'はわ～<code>(Ｕ \'ᴗ\' Ｕ)</code>',
        'また来年も来ようの♡',
        '花火は儚いなのな～<code>(Ｕ ˘ᴗ˘ Ｕ)</code>',
        '花火しゅきしゅき<code>(Ｕ ∩\'ᴗ\'///Ｕ)</code>♡',
        'きみと来られて嬉しまる<code>(Ｕ///\'ᴗ\'///Ｕ)</code>',
        '楽しいなの～<code>(Ｕ⌒▽⌒Ｕ三Ｕ⌒▽⌒Ｕ)</code>',
        'しおのこと…ずっとしゅきしゅきしてての？♡',
        '色んなお色がありまるね～<code>(Ｕ \'ᴗ\' Ｕ)</code>',
        '帰りたくないなのな～<code>(Ｕ´･_･`Ｕ)</code>',
        'しおね、打ち上げ花火観るの産まれて初めてなの～♡',
        '迫力がありまるね～<code>(((Ｕ\'o\'Ｕ)))</code>',
        '夜風が涼しまる<code>(Ｕ ˘ᴗ˘ Ｕ)</code>',
        'タコしんでまる～？<code>（ \'ᴗ\'ＵΞＵ\'ᴗ\'）</code>',
        'あとでたこ焼き食べようの♡',
        'しおと花火、どっちが綺麗？<code>(Ｕ∩ \'ᴗ\' ∩Ｕ)</code>',
        '人の記憶は儚いなのけど、今日のことは絶対に忘れないなの<code>(Ｕ>_<Ｕ)</code>',
        'なてゅ！来てまるね！<code>(Ｕ⌒▽⌒Ｕ)</code>',
        'かき氷冷たいなの～<code>(Ｕ>_<Ｕ)</code>',
        'しおの浴衣似合ってまる？<code>ε(Ｕ^ᴗ^Ｕ)з</code>',
        'あとでうーぱーるぱー釣りしたまるー！<code>(Ｕ>_<Ｕ)</code>',
        'しおはいま幸せってわけ<code>(Ｕ´ \' ᴗ <`Ｕ)ミ☆</code>',
        'お昼に行った水族館、あざらしが可愛かったなのな～<code>(Ｕ ˘ᴗ˘ Ｕ)</code>',
        'さっきから汐のことばかり見て、花火ちゃんと観てまる？<code>(Ｕ¬_¬Ｕ)</code>',
        'いぇいはわいぇい<code>₍₍ ◝(Ｕ^ᴗ^Ｕ)◞ ₎₎</code>',
        'た～まや～<code>(Ｕ⌒▽⌒Ｕ)</code>',
        '今日は連れてきてくれてありがとうの<code>(Ｕ ∩\'ᴗ\'///Ｕ)</code>♡',
        'いいなてゅの想い出になったなの～♡',
        'よく観える場所が取れてよかったなのな<code>(Ｕ ˘ᴗ˘ Ｕ)</code>',
        'いつまでもこんな時間が続きますように<code>(Ｕ \'人\' Ｕ)</code>',
        '...<code>(Ｕ ∩\'ᴗ\'///Ｕ)</code>♡',
        '今日はきみのために特別な浴衣で来たなの<code>(Ｕ ∩\'ᴗ\'///Ｕ)</code>♡',
        'もうすぐ終わっちゃうの寂しまるね<code>(Ｕ´･ω･`Ｕ)</code>',
        'お祭り楽しかったね<code>(Ｕ∩ \'ᴗ\' ∩Ｕ)</code>',
        'りんご飴は恋するりんご色♡',
        'ずぅっと観てても飽きないなのな～<code>(Ｕ \'ᴗ\' Ｕ)</code>',
        'はじめてのなてゅをきみと過ごせてよかったなの<code>(Ｕ ∩\'ᴗ\'///Ｕ)</code>♡',
        'しおもきみのこと......///',
        'きみの甚平似合ってまるよ<code>₍₍ ◝(Ｕ^ᴗ^Ｕ)◞ ₎₎</code>',
        'しおね、花火が散って儚く消えていくところがしゅきしゅき<code>(Ｕ ˘ᴗ˘ Ｕ)</code>',
        'いつかちゃいちぃな花火も一緒にしようの♡',
        'あ、向こうの方に赤がいまる！かわいまるねぇ<code>(Ｕ∩ \'ᴗ\' ∩Ｕ)</code>'
    ];

    const nextBalloonTimeout = randomNumber(6000, 15000);

    useEffect(() => {
        const start = setTimeout(() => {
            setDialogue(prev => {
                // 前回と同じ値は返さないようにする（連続で同じセリフが出るのを防ぐ）
                let nextIndex: number;
                do {
                    nextIndex = randomInt(sioDialogues.length);
                } while (nextIndex === prev[1]);
                return [sioDialogues[nextIndex], nextIndex];
            });
            const end = setTimeout(() => {
                setDialogue(prev => [prev[0], prev[1]]);
                clearTimeout(end);
            }, 3000);
        }, nextBalloonTimeout);
        return () => clearTimeout(start);
    }, [dialogue]);

    return dialogue[0];
}