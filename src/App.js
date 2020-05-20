import React from 'react';
import './App.css';
import { Layout }from './Layout'
import HideText from './Hidetest'


class  App extends React.Component {
        
     state={clicked:false,
            clickone:false, 
            movetop:false,
            movedown:false 

     } 
   
   render(){
            const { clicked,clickone,movetop,movedown } = this.state;


  return (
 <div className="Container">
 <Layout/>
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
  
  <a className="navbar-brand" href="link.html">Navbar</a>

  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="link1.html">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="link2.html">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="link3.html">Link</a>
      </li>
    </ul>
  </div>
</nav>


    <div className="jumbotron">
    <h1>Bootstrap Testing</h1>      
    <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.</p>
  </div>
  
  <div className="row">
    <div className="col-sm-4">
              <button  onClick= { () => this.setState({ clicked : !clicked })}>
        
         Toogle </button>
    
         <div id="Header"
                    
                    className= { clicked
                                         ?  "back"
                                         :   null}
                         
           


         ></div>
                 
          

    </div>
  <div className="col-sm-4">
  <div id="color1"

onMouseEnter={ () => this.setState({movetop: !movetop })}
 onMouseLeave={() => this.setState({ movedown: !movedown })}

 
             className={movetop
                                  ? "back"
                                  : null 
                          

                          ||
                      movedown
                                  ? "default"
                                  : null
                  }                           
  >Top Me </div>
            <div id="Car">

            </div>

  </div>
  <div className="col-sm-4">
              
            <div id="Form"></div>
  </div>

</div>
<div className="row">

<div className="col-sm-4">
            
        <div id="classtype3"></div>      

</div>
<div className="col-sm-4">
 
           
                          
          
                
                   
             
       
             <div id="ApiTable"

                  className= { clicked
                                         ?  "back"
                                         :   null}
              
         ></div>




</div>
             
            
             

            


<div className="col-sm-4" >

      <div id="ApiTable1" 
 

                className= { clickone
                                         ?  "font"
                                         :   null}
              



      >







      </div>
</div>

</div>
<div className="row">
<div className="col-sm-4">

            <div id="ApiTable2"></div>
</div>
<div className="col-sm-4">
                                    <HideText/>
</div>
<div className="col-sm-4" >

       <div 

                  
       onClick= { () => this.setState({ clicked : !clicked })}
        
         >0</div>
    <button  onClick= { () => this.setState({ clickone : !clickone })}>
        
         Toogle </button>
                              



</div>

</div>
<div className="row">

<div className="col-sm-12">
         
<hr></hr>
</div>

</div>
<div className="footer">

<p> Testing React Francesco </p>


</div>
</div>

  



  );
}
}

export default App;