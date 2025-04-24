import React, { useRef, useImperativeHandle, forwardRef } from 'react';
//Define variable props
interface ResultModalProps {
    time: number;
    timeAt?: number;
}
//Define function   để bên component cha có thể gọi các phương thức nội bộ của component, ví dụ như mở hoặc đóng modal. 
//Define functions for parent components to use which child functinos
interface ResultModalHandle {
    open: () => void;
}

const ResultModal = forwardRef<ResultModalHandle,ResultModalProps>(({ time, timeAt }, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => ({
        open() {
            dialogRef.current?.showModal();
        }
    }));

    return (
        <dialog ref={dialogRef} className="result-modal">
            <h2>You lost</h2>
            <p>
                The target time was <strong>{time} seconds</strong>
            </p>
            <p>
                You stopped the timer with <strong>{timeAt} seconds left</strong>
            </p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
});

export default ResultModal;