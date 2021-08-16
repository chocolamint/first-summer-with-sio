import FamilyMessages from 'FamilyMessages';

// すべての話しかけに対して回答が定義されるように SioResponses 型を定義する
type SioResponses = { [K in typeof FamilyMessages[number]]: readonly string[] };

const sioResponses: SioResponses = {
    'こんばんはわ～': [
        'こんばんはわの～ <span class="emoticon">(Ｕ⌒▽⌒Ｕ三Ｕ⌒▽⌒Ｕ)(Ｕ⌒▽⌒Ｕ)</span>',
        'はわの <span class="emoticon">(Ｕ \'ᴗ\' Ｕ)</span>',
        'こんばんはわ～ <span class="emoticon">(Ｕ∩ \'ᴗ\' ∩Ｕ)</span>',
    ] as const,
    '今日もかわいいね': [
        '本当に～？嬉しまるな <span class="emoticon">(Ｕ ∩\'ᴗ\'///Ｕ)♡</span>',
        'えへへ…かわいかろう？ <span class="emoticon">(Ｕ⌒▽⌒Ｕ)</span>',
        'しおは～絶対アイドルなのからかわいいに決まってるってわけ <span class="emoticon">(Ｕ´ \' ᴗ <`Ｕ)ミ☆</span>',
    ] as const,
    '浴衣似合ってるよ': [
        'わーい、嬉しまる～ <span class="emoticon">₍₍ ◝(Ｕ^ᴗ^Ｕ)◞ ₎₎</span>',
        '浴衣姿のしおと夜空の花火、どっちがかわいまる？ <span class="emoticon">(Ｕ ˘ᴗ˘ Ｕ)</span>',
        '今日はね、きみのために特別な浴衣を着てきたなの～ <span class="emoticon">(Ｕ ∩\'ᴗ\'///Ｕ)♡</span>',
    ] as const,
    '花火綺麗だね': [
        '本当に綺麗なのな～ <span class="emoticon">(Ｕ∩ \'ᴗ\' ∩Ｕ)</span>',
        'しおね、打ち上げ花火観るの生まれて初めてなの<span class="emoticon">♡</span>',
        '花火にばかり見惚れてないで、しおのこともちゃんと見ての？ <span class="emoticon">（ \'ᴗ\'ＵΞＵ\'ᴗ\'）</span>'
    ] as const,
    '夏祭り楽しかったね': [
        '楽しかったなの～ <span class="emoticon">(Ｕ⌒▽⌒Ｕ三Ｕ⌒▽⌒Ｕ)',
        '花火大会が終わったあとも、もう少し見て回りたいなの <span class="emoticon">(Ｕ＞△＜Ｕ)</span>',
        'きみと一緒だったから、なおさら楽しかったなのな <span class="emoticon">(Ｕ ∩\'ᴗ\'///Ｕ)</span>'
    ] as const,
    '一緒にいられて幸せ': [
        'しおもそう思ってまるよ <span class="emoticon">(Ｕ ∩\'ᴗ\'///Ｕ)♡</span>',
        '今日は一緒に来られてよかったなのな <span class="emoticon">₍₍ ◝(Ｕ^ᴗ^Ｕ)◞ ₎₎</span>',
        '最高の気分なのから、この時間が終わってほしくないなのな～ <span class="emoticon">(Ｕ＞△＜Ｕ)</span>',
    ] as const,
    '来年もまた来ようね': [
        'もちろん！約束なの <span class="emoticon">(Ｕ \'ᴗ\'  )⊃━━*.☆ﾟ</span>',
        '来年も来られるとよいなのな～ <span class="emoticon">(Ｕ ˘ᴗ˘ Ｕ)</span>',
        '楽しみにしてまる♡♡♡ <span class="emoticon">(Ｕ⌒▽⌒Ｕ)</span>',
    ] as const,
    '楽しいね': [
        'きみと一緒だから、なおさら楽しいなのな <span class="emoticon">(Ｕ ∩\'ᴗ\'///Ｕ)</span>',
        '楽しまる～はわはわ <span class="emoticon">₍₍ ◝(Ｕ^ᴗ^Ｕ)◞ ₎₎</span>',
        '楽しくて時間が経つのを忘れまるな <span class="emoticon">(Ｕ∩ \'ᴗ\' ∩Ｕ)♡</span>',
    ] as const,
};

export default sioResponses;