import React from 'react';
import './App.css'

class Background extends React.Component {
  
    
  state= {

           clicked:false

  }

  
  render() {
            const { clicked } = this.state;

    return (
      <div  
                 onClick= { () => this.setState({ clicked : !clicked })}
        
        >On
      </div>          
         
    );
  }
}
export default Background;