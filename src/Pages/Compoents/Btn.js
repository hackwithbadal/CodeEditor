import React from 'react'

function Btn({ onpress, ontextChange }) {
    return (
        <div>
            <input type="text" onChange={e => ontextChange(e.target.value)} />
            {/* <button onClick={onpress}>submit</button> */}
        </div>
    )
}

export default Btn;