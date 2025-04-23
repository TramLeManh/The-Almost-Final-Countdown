import { useState,useRef } from "react";

export default function TimerComponents({ title = "Easy", time = 5 }) {
    const timeRef = useRef()
    const [timeStart,settimeStart] = useState(null);
    const [timeExpire,settimeExpire]= useState(false)
    function handleStart() {
        //Missing this
        timeRef.current = setTimeout(() => { handleExpire(); }, time * 1000);
        settimeStart(true)
        settimeExpire(false)
    }
    function handleStop(){
        clearTimeout(timeRef.current)
        settimeStart(false)
    }
    function handleExpire(){
        clearTimeout(timeRef.current)

        settimeExpire(true)
        settimeStart(false)
    }
    return (
        <section className="challenge">
            <h2>{title}</h2>
            <p>{timeExpire&&"You lose"}</p>
            <p className="challenge-time">{time}</p>
            <p>
            <button onClick={timeStart? handleStop:handleStart}>{timeStart ?  'Stop Challenge' :'Start Challenge'}</button>
                </p>
                <p className={timeStart? "active":null}>{timeStart==null?" ":timeStart? "Time is running":"Time is stop"}</p>
        </section>
    );
}
