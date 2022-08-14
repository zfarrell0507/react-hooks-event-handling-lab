import React from "react";

function Keypad() {
    function handleChange() {
        console.log('Entering password...');
    }
    return (
        <div>
            <input type="password" onChange={handleChange} placeholder="password" />
        </div>
    );
}

export default Keypad;