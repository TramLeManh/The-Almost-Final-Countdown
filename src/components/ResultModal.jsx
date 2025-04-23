import React, { useRef, useEffect } from 'react';

export default function ResultModal({ time, timeLeft, shouldOpen=true }) {
    const dialogRef = useRef(null);

    const openDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    };

    useEffect(() => {
        if (shouldOpen) {
            openDialog();
        }
    }, [shouldOpen]);
    return (
        <>
            <dialog ref={dialogRef} className="result-modal">
                <h2>You lost</h2>
                <p>
                    The target time was <strong>{time} seconds</strong>
                </p>
                <p>
                    You stopped the timer with <strong>{timeLeft} seconds left</strong>
                </p>
                <form method="dialog">
                    <button>Close</button>
                </form>
            </dialog>
        </>
    );
}
