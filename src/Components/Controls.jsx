import React from 'react'

export class Controls extends React.Component {
    render() {
        return(
            <div className='button-group' >
                <button>Start</button>
                <button>Pause</button>
                <button>Reset</button>
            </div>
        )
    }
}