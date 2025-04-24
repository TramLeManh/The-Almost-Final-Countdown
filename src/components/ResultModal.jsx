import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const ResultModal = forwardRef(({ time, timeAt }, ref) => {
    const dialogRef = useRef(null);

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
