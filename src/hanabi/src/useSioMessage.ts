import familyMessages from "FamilyMessages";
import { randomNumber, randomInt } from "Random";
import { useEffect, useState } from "react";
import sioMessages from "SioMessages";
import sioResponses from "SioResponse";

type SioMessage = typeof sioMessages[number] | '';
type FamilyMessage = typeof familyMessages[number];
type SioResponse = typeof sioResponses[FamilyMessage][number];

export default function useSioMessage(option: { supress: boolean, request: FamilyMessage | null }) {

    const [message, setMessage] = useState({ message: '' as SioMessage | SioResponse, isTarking: false });

    useEffect(() => {

        const nextBalloonTimeout = option.request ? 400 : randomNumber(6000, 15000);

        if (option.supress) return;

        const start = setTimeout(() => {
            setMessage(() => {
                const messages = option.request ? sioResponses[option.request] : sioMessages;
                const nextIndex = randomInt(messages.length);
                return { message: messages[nextIndex], isTarking: true && !option.supress };
            });
            const end = setTimeout(() => {
                setMessage(prev => ({ message: prev.message, isTarking: false }));
                clearTimeout(end);
            }, 3000);
        }, nextBalloonTimeout);
        return () => clearTimeout(start);
    }, [message]);

    return { message: message.message, isTalking: message.isTarking && !option.supress };
}