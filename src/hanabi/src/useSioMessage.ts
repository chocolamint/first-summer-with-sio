import { randomNumber, randomInt } from "Random";
import { useEffect, useState } from "react";
import sioMessages from "SIoMessages";

type SioMessages = typeof sioMessages[number] | '';

export default function useSioMessage(supress: boolean) {

    const [message, setMessage] = useState({ message: '' as SioMessages, index: -1, isTarking: false });

    useEffect(() => {

        const nextBalloonTimeout = randomNumber(6000, 15000);

        const start = setTimeout(() => {
            setMessage(prev => {
                // 前回と同じ値は返さないようにする（連続で同じセリフが出るのを防ぐ）
                let nextIndex: number;
                do {
                    nextIndex = randomInt(sioMessages.length);
                } while (nextIndex === prev.index);
                return { message: sioMessages[nextIndex], index: nextIndex, isTarking: true && !supress };
            });
            const end = setTimeout(() => {
                setMessage(prev => ({ message: prev.message, index: prev.index, isTarking: false }));
                clearTimeout(end);
            }, 3000);
        }, nextBalloonTimeout);
        return () => clearTimeout(start);
    }, [message]);

    return { message: message.message, isTalking: message.isTarking && !supress };
}