import React from "react";
import { useState, useRef } from "react";
interface PlayerProps {
    name: string; // 👈 viết đúng kiểu string (lowercase 'string')
    age:number;
}  
export default function Player(play:PlayerProps) {
    const nameRef = useRef<HTMLInputElement>(null);
    const [enterName, setEnterName] = useState<string>();
    function handleInput() {
        if (nameRef.current) {
            setEnterName(nameRef.current.value);
            nameRef.current.value = '';
        }
    }

    return (
        <section id="player">
            <h2>Welcome {enterName ?? "unknown"}</h2>
            <p>
                <input type="text" ref={nameRef} />
                <button onClick={handleInput}>Set Name</button>
            </p>
        </section>
    );
}