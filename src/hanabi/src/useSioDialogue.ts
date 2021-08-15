import { randomNumber, pickRandom } from "Random";
import { useEffect, useState } from "react";

export default function useSioDialogue() {
    const [dialogue, setDialogue] = useState('');

    const sioDialogues = [
        '綺麗なのな～(Ｕ///\'ᴗ\'///Ｕ)',
        'はわはわ₍₍ ◝(Ｕ^ᴗ^Ｕ)◞ ₎₎',
        'わたあめ食べたいなの～♡'
    ];

    const nextBalloonTimeout = randomNumber(6000, 15000);

    useEffect(() => {
        const start = setTimeout(() => {
            setDialogue(pickRandom(sioDialogues));
            const end = setTimeout(() => {
                setDialogue('');
                clearTimeout(end);
            }, 3000);
        }, nextBalloonTimeout);
        return () => clearTimeout(start);
    }, [dialogue]);

    return dialogue;
}