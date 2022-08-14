import React from "react";

function EyesOnMe() {
    const focusHandler = () => {
        console.log("Good!")
    }
    const blurHandler = () => {
        console.log("Hey! Eyes on me!")
    }

    return (
        <div>
            <button onFocus={focusHandler} onBlur={blurHandler}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe;