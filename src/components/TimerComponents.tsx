import { useState, useRef } from "react";
import ResultModal from "./ResultModal";
import React from "react";

export default function TimerComponents({ title = "Easy", time = 5 }: { title?: string; time?: number }) {
    const timeRef = useRef<number>();
    timeRef.current?.toString
    //Define một ref dialog có chức năng open
    const [timeExpire, setTimeExpire] = useState(false);
    const [remain, setRemain] = useState(time * 1000)
    const timeStart = remain > 0 && remain < time * 1000

    function handleStart() {
        timeRef.current = setInterval(() => {
            setRemain(prev => prev - 10)
        }, 10);
    }
    const dialog = useRef<{ open: () => void }>(null);
    function handleStop() {
        dialog.current?.open()
        clearInterval(timeRef.current);
    }
    function hanldeReset() {
        setRemain(time*1000);
    }
   //CLear current interval time
    if (remain <= 0) {
        clearInterval(timeRef.current);
        dialog.current?.open()
        
    }
    return (
        <>
            <ResultModal ref={dialog} time={time} timeRemain={remain} onReset={hanldeReset}/>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">{time}</p>
                <p>
                    <button onClick={timeStart ? handleStop : handleStart}>
                        {timeStart ? "Stop Challenge" : "Start Challenge"}
                    </button>
                </p>
                <p className={timeStart ? "active" : undefined}>
                    {timeStart ? "Time is running" : "Time is stopped"}                </p>
            </section>
        </>
    );
}