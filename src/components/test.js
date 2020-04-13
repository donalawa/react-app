import React from 'react'
import maskimg from '../images/covidmask.webp'

const Test = () => {
    return (
        <div>
            <img src={maskimg} alt="covid mask" style={{width: 200}} />
            <h1>Hello Test</h1>
        </div>
    )
}

export default Test;