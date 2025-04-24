import { useState, useRef } from "react";
import ResultModal from "./ResultModal";
import React from "react";

export default function TimerComponents({ title = "Easy", time = 5 }: { title?: string; time?: number }) {
    const timeRef = useRef<number | null>(null);
    const dialogRef = useRef<{ open: () => void }>(null);
    const [timeStart, setTimeStart] = useState<boolean | null>(null);
    const [timeExpire, setTimeExpire] = useState(false);

    function handleStart() {
        timeRef.current = setTimeout(() => {
            handleExpire();
            dialogRef.current?.open();
        }, time * 1000);
        setTimeStart(true);
        setTimeExpire(false);
    }

    function handleStop() {
        if (timeRef.current) clearTimeout(timeRef.current);
        setTimeStart(false);
    }

    function handleExpire() {
        if (timeRef.current) clearTimeout(timeRef.current);
        setTimeExpire(true);
        setTimeStart(false);
    }

    return (
        <>
            <ResultModal ref={dialogRef} time={time} />
            <section className="challenge">
                <h2>{title}</h2>
                <p>{timeExpire && "You lose"}</p>
                <p className="challenge-time">{time}</p>
                <p>
                    <button onClick={timeStart ? handleStop : handleStart}>
                        {timeStart ? "Stop Challenge" : "Start Challenge"}
                    </button>
                </p>
                <p className={timeStart ? "active" : undefined}>
                    {timeStart === null ? " " : timeStart ? "Time is running" : "Time is stopped"}
                </p>
            </section>
        </>
    );
}