import React from "react";

export class Display extends React.Component {

    render() {
        return (
            <div className='clock-card' >
                <p>Nisi nisi minim velit irure est consectetur consequat exercitation sunt adipisicing.</p>
                <h1>00:00</h1>
                <button>Start</button>
                <button>Stop</button>
                <button>Reset</button>
            </div>
        )
    }
}