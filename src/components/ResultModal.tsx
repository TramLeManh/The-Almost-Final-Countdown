import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import { createPortal } from 'react-dom';
//Define variable props
interface ResultModalProps {
    time: number;
    timeRemain: number;
    onReset: () => void
}
//Define function   để bên component cha có thể gọi các phương thức nội bộ của component, ví dụ như mở hoặc đóng modal. 
//Define functions for parent components to use which child functinos
interface ResultModalHandle {
    open: () => void;
}
//forwardRef
const ResultModal = forwardRef<ResultModalHandle, ResultModalProps>(({ time, timeRemain, onReset }, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const lose = timeRemain <= 0
    const res = (timeRemain / 1000).toFixed(2)
    const score = (parseFloat(res)) * 10
    useImperativeHandle(ref, () => ({
        open() {
            dialogRef.current?.showModal();
        }
    }));

    return createPortal(
        <dialog ref={dialogRef} className="result-modal" onClose={onReset}>
            {lose ? <h2>You lost</h2> : <h2>Your score is {score}</h2>}


            <p>
                The target time was <strong>{time} seconds</strong>
            </p>
            <p>
                You stopped the timer with <strong>{time - parseFloat(res)} seconds left</strong>
            </p>
            <form method="dialog">
                <button onClick={onReset}>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')!
    );
});

export default ResultModal;