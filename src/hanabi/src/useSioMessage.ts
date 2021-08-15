import { randomNumber, randomInt } from "Random";
import { useEffect, useState } from "react";

export default function useSioMessage() {
    const [message, setMessage] = useState(['', -1, false] as [string, number, boolean]);

    useEffect(() => {

        const sioMessages = [
            '綺麗なのな～<span class="emoticon">(Ｕ///\'ᴗ\'///Ｕ)</span>',
            'はわはわ<span class="emoticon">₍₍ ◝(Ｕ^ᴗ^Ｕ)◞ ₎₎</span>',
            'しお、わたあめ食べたいなの～♡',
            'はわ～<span class="emoticon">(Ｕ \'ᴗ\' Ｕ)</span>',
            'また来年も来ようの♡',
            '花火は儚いなのな～<span class="emoticon">(Ｕ ˘ᴗ˘ Ｕ)</span>',
            '花火しゅきしゅき<span class="emoticon">(Ｕ ∩\'ᴗ\'///Ｕ)</span>♡',
            'きみと来られて嬉しまる<span class="emoticon">(Ｕ///\'ᴗ\'///Ｕ)</span>',
            '楽しいなの～<span class="emoticon">(Ｕ⌒▽⌒Ｕ三Ｕ⌒▽⌒Ｕ)</span>',
            'しおのこと…ずっとしゅきしゅきしてての？♡',
            '色んなお色がありまるね～<span class="emoticon">(Ｕ \'ᴗ\' Ｕ)</span>',
            '帰りたくないなのな～<span class="emoticon">(Ｕ´･_･`Ｕ)</span>',
            'しおね、打ち上げ花火観るの産まれて初めてなの～♡',
            '迫力がありまるね～<span class="emoticon">(((Ｕ\'o\'Ｕ)))</span>',
            '夜風が涼しまる<span class="emoticon">(Ｕ ˘ᴗ˘ Ｕ)</span>',
            'タコしんでまる～？<span class="emoticon">（ \'ᴗ\'ＵΞＵ\'ᴗ\'）</span>',
            'あとでたこ焼き食べようの♡',
            'しおと花火、どっちが綺麗？<span class="emoticon">(Ｕ∩ \'ᴗ\' ∩Ｕ)</span>',
            '人の記憶は儚いなのけど、今日のことは絶対に忘れないなの<span class="emoticon">(Ｕ>_<Ｕ)</span>',
            'なてゅ！来てまるね！<span class="emoticon">(Ｕ⌒▽⌒Ｕ)</span>',
            'かき氷冷たいなの～<span class="emoticon">(Ｕ>_<Ｕ)</span>',
            'しおの浴衣似合ってまる？<span class="emoticon">ε(Ｕ^ᴗ^Ｕ)з</span>',
            'あとでうーぱーるぱー釣りしたまるー！<span class="emoticon">(Ｕ>_<Ｕ)</span>',
            'しおはいま幸せってわけ<span class="emoticon">(Ｕ´ \' ᴗ <`Ｕ)ミ☆</span>',
            'お昼に行った水族館、あざらしが可愛かったなのな～<span class="emoticon">(Ｕ ˘ᴗ˘ Ｕ)</span>',
            'さっきから汐のことばかり見て、花火ちゃんと観てまる？<span class="emoticon">(Ｕ¬_¬Ｕ)</span>',
            'いぇいはわいぇい<span class="emoticon">₍₍ ◝(Ｕ^ᴗ^Ｕ)◞ ₎₎</span>',
            'た～まや～<span class="emoticon">(Ｕ⌒▽⌒Ｕ)</span>',
            '今日は連れてきてくれてありがとうの<span class="emoticon">(Ｕ ∩\'ᴗ\'///Ｕ)</span>♡',
            'いいなてゅの想い出になったなの～♡',
            'よく観える場所が取れてよかったなのな<span class="emoticon">(Ｕ ˘ᴗ˘ Ｕ)</span>',
            'いつまでもこんな時間が続きますように<span class="emoticon">(Ｕ \'人\' Ｕ)</span>',
            '...<span class="emoticon">(Ｕ ∩\'ᴗ\'///Ｕ)</span>♡',
            '今日はきみのために特別な浴衣で来たなの<span class="emoticon">(Ｕ ∩\'ᴗ\'///Ｕ)</span>♡',
            'もうすぐ終わっちゃうの寂しまるね<span class="emoticon">(Ｕ´･ω･`Ｕ)</span>',
            'お祭り楽しかったね<span class="emoticon">(Ｕ∩ \'ᴗ\' ∩Ｕ)</span>',
            'りんご飴は恋するりんご色♡',
            'ずぅっと観てても飽きないなのな～<span class="emoticon">(Ｕ \'ᴗ\' Ｕ)</span>',
            'はじめてのなてゅをきみと過ごせてよかったなの<span class="emoticon">(Ｕ ∩\'ᴗ\'///Ｕ)</span>♡',
            'しおもきみのこと......///',
            'きみの甚平似合ってまるよ<span class="emoticon">₍₍ ◝(Ｕ^ᴗ^Ｕ)◞ ₎₎</span>',
            'しおね、花火が散って儚く消えていくところがしゅきしゅき<span class="emoticon">(Ｕ ˘ᴗ˘ Ｕ)</span>',
            'いつかちゃいちぃな花火も一緒にしようの♡',
            'あ、向こうの方に赤がいまる！かわいまるねぇ<span class="emoticon">(Ｕ∩ \'ᴗ\' ∩Ｕ)</span>'
        ];

        const nextBalloonTimeout = randomNumber(6000, 15000);

        const start = setTimeout(() => {
            setMessage(prev => {
                // 前回と同じ値は返さないようにする（連続で同じセリフが出るのを防ぐ）
                let nextIndex: number;
                do {
                    nextIndex = randomInt(sioMessages.length);
                } while (nextIndex === prev[1]);
                return [sioMessages[nextIndex], nextIndex, true];
            });
            const end = setTimeout(() => {
                setMessage(prev => [prev[0], prev[1], false]);
                clearTimeout(end);
            }, 3000);
        }, nextBalloonTimeout);
        return () => clearTimeout(start);
    }, [message]);

    return { message: message[0], isTalking: message[2] };
}