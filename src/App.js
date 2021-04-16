import React from "react"
import './App.css';
import Img from "./img/Marilyn.jpg"

class App extends React.Component{
  constructor(){
    super()
    this.state={
      isvisible:false,
      timer: 0 ,
      interval:0

    }
  }
  toggle=()=>{ 
    this.setState( {isvisible: !this.state.isvisible} )
  }
   componentDidMount(){
     this.setState ({ 
       interval:setInterval(()=>(this.setState({timer: this.state.timer+1})),1000)
     })
   }
  
  render(){
    console.log(this.state.isvisible)
    return( 
    <div className ="card">
   
  <p> <button onClick ={this.toggle}> {this.state.isvisible ?'Hide':"Show"}  </button> </p>

  {this.state.isvisible && 
  <>
  <img className ="img" src= {Img} alt="Marilyn" />
  <h1>Marilyn Monroe  </h1>
  <p className="title"> Actrice, chanteuse; mannequin</p>
  <p>Américaine </p>
  
  <p><button onClick={this.toggle} >contact </button></p>
  </>
  }
   <span>{this.state.timer}</span>
  </div>
  );}

  }
  
 
  


export default App;
