import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
class Header extends React.Component {
  render() {
    return (
      <h1>This is the content of the 1 cell component</h1>
    );
  }
}

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
    this.state1 = {
      brand: "Volvo",
      model: "Must",
      color: "Black",
      year: 1970
    };
  }
  render() {
    return (
      <table>
      <tbody>
      <tr>
      <th>Brand</th>
      <th>Color</th>
      <th>Model</th>
      <th>Year</th>
      </tr>
      <tr>
         <td>{this.state.brand}</td>
         <td>{this.state.color}</td>
         <td>{this.state.model}</td>
         <td>{this.state.year}</td>
      </tr>
        <tr>
         <td>{this.state1.brand}</td>
         <td>{this.state1.color}</td>
         <td>{this.state1.model}</td>
         <td>{this.state1.year}</td>
       </tr>
       </tbody>
      </table>
    );
  }
}
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form>
      <h1>Hello {this.state.username} {this.state.age}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Enter your age:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      </form>
    );
  }
}
class Table extends React.Component{
     

    /**
     * constructor
     *
     * @object  @props  parent props
     * @object  @state  component state
     */
    constructor(props) {

        super(props);

        this.state = {
            items: [],
            steps: [],
            isLoaded: false
        }

    }

    /**
     * componentDidMount
     *
     * Fetch json array of objects from given url and update state.
     */
    componentDidMount() {

        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    steps: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }

    /**
     * render
     *
     * Render UI
     */
    render() {

         const { isLoaded, items,steps } = this.state;

         if (!isLoaded)
             return <div>Loading...</div>;

        return (
            <div>
                <ul>
                    {items.abilities.map(item=>( 
                        <li key={item.ability.name}>
                            {item.ability.name} 
                        </li>
                  ))}  
                </ul>
              <ul>
                    {steps.game_indices.map(step=>( 
                        <li key={step.version.name}>
                            {step.version.name} 
                        </li>
                  ))}  
                </ul>
            </div>
           
             
                
                  
              
            
            );
        

    }

}
class Table1 extends React.Component{
     

    /**
     * constructor
     *
     * @object  @props  parent props
     * @object  @state  component state
     */
    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false,
            
        }

    }

    /**
     * componentDidMount
     *
     * Fetch json array of objects from given url and update state.
     */
    componentDidMount() {

        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    products: json,
                    isLoaded:true
                     
                })
            }).catch((err) => {
                console.log(err);
            });

    }

    
    /**
     * render
     *
     * Render UI
     */
    render() {

         const { isLoaded,products } = this.state;
      if (!isLoaded)
             return <div>Loading...</div>;

         
        return (
            <div>
            
              <ul>
                        {products.forms.map(product=>(

                           <li key={product.name}>

                               {product.name}

                           </li>
                 ))}
                 <li>{products.base_experience}</li>
                 <li>{products.height}</li>
                    
                 {products.stats.map(product=>(                                 
                     <li key={product.stat.name}>{product.stat.name}</li>                    
                  ))}                                                       
                   {products.stats.slice(0,1).map(product=>(                                                 
                         <li key={product.base_stat}>{product.base_stat}</li>                 
                        ))}                  
                </ul>
            </div>                
            );                 
    }

}
class Table2 extends React.Component{
    
    constructor(props) {
    super(props);
    this.state = {
            products: [],
            isLoaded:false,
            
        }

    }

    
    componentDidMount() {

        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    products: json,
                    isLoaded:true

                     
                })
            }).catch((err) => {
                console.log(err);
            });

    }

    
    
    render() {
        

         const {isLoaded, products } = this.state;
      if (!isLoaded)
         return <div>Starting Loading...</div>
         
        return (
            <div>
            
              <ul>
                        {products.forms.map(product=>(

                           <li key={product.name}>

                               {product.name}

                           </li>
                 ))}
                 <li>{products.base_experience}</li>
                 <li>{products.height}</li>
                    
                 {products.stats.map(product =>(                                 
                     <li key={product.stat.name}>{product.stat.name}</li>                    
                  ))}                                                       
                   {products.stats.slice(0,1).map(product=>(                                                 
                         <li key={product.base_stat}>{product.base_stat}</li>                 
                        ))}                  
                </ul>
            </div>                
            );                 
    }

}
class  Type3 extends React.Component{
  constructor(props){
  super(props);

this.state= {
       elements :[],
       istart  :false,

}
}
    componentDidMount(){
       fetch('https://pokeapi.co/api/v2/type/3/')
            .then(res=>res.json())
            .then(json => {
                   this.setState({
                        elements:json,
                        istart:true
                   })
            }).catch((err)=>{
                 console.log(err);
            }); 

            }
       
     

      render(){
                 
         const {istart,elements}=this.state;
         if (!istart)
               return <div>Starting...</div>;
            return(
               <div>

                    <ul>
                        {elements.pokemon.slice(0,10).map(element =>(


                           <li key={element.pokemon.name}>
                                 {element.pokemon.name}
                           </li>
                          ))}
                    </ul>
               </div>
      );       
      }
    }


ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Header />, document.getElementById('Header'));
ReactDOM.render(<Car />, document.getElementById('Car'));
ReactDOM.render(<MyForm />, document.getElementById('Form'));
ReactDOM.render(<Type3 />,document.getElementById('classtype3'));
ReactDOM.render(<Table />, document.getElementById('ApiTable'));
ReactDOM.render( <Table1 />, document.getElementById('ApiTable1'));
ReactDOM.render( <Table2 />, document.getElementById('ApiTable2'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
