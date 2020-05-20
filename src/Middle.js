import React from 'react'

function Middle() {
    const styles = {


        'text-align': 'center',
        'padding': '30px',
    }
    function myName() {
        styles.color = "green"

    }
    function noName() {

    }

    return (
        <div className="middle">

            <div id="cspace" style={styles} onMouseEnter={myName} onMouseLeave={noName}>
                <h1>Hello World</h1>
            </div>

        </div>
    )
}

export default Middle