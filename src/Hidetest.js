import React from 'react';
 class HideText extends React.Component{
    state = { showing: false };

    render() {
        const { showing } = this.state;
        return (
            <div>
                <button onClick={() => this.setState({ showing: !showing })}>toggle</button>
                { showing 
                    ? <div>This is visible</div>
                    : null
                }
            </div>  
        )
    }
}
export default HideText;