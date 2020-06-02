import React, { Component } from 'react'
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      guest_input: "",
      venue_size_input: "",
      list: ""
    }
  }
  getList = (number) => {
  const{ guest_input }= this.state
   if (number > 0){
     this.setState({ list: `${Math.ceil(guest_input/3)} soda, ${Math.ceil(guest_input/4)} pizzas, ${guest_input} hamburgers, ${guest_input*5} weeny hottie dogs, ${Math.ceil(guest_input/12)} cake, ${Math.ceil(guest_input/4)} chips, ${Math.ceil(guest_input/4)} veggies, ${guest_input} plates, ${guest_input} forks, ${guest_input} spoons, ${guest_input} knives, ${guest_input} cups, ${guest_input} napkins, ${Math.ceil(guest_input/6+2)} tables, ${guest_input} chairs, ${Math.ceil(guest_input/2)} llamas and donkeys (rideable), ${guest_input*3} balloons, ${Math.ceil(guest_input/2)} packs of streamers.  Your supply budget is approximately ${guest_input*30} dollars!  You venue budget is ${guest_input*100}`})
   }else{
     this.setState({ list: "Please Put In a Number!"})
   }
  
  }

  handleChange = (e) => {
    this.setState({ guest_input: e.target.value })
  }
  handleSubmit = () =>{
    const { guest_input } = this.state
    const list = this.getList(guest_input)
  }
  render(){
    return (
      <div>
        <h1>Party Planning? Sure! We Got You!</h1>
        <h2>Enter Number Of Guests Below</h2>
        <input
          id="inputBox"
          type='text'
          onChange={ this.handleChange }
        />
        <br />
        <h2>Enter Square Footage</h2>
        <p>Living Room = 300 sq feet, Club House = 1000 sq feet, Ballroom = 3000 sq feet</p>
        <input
          id="inputBox"
          type='text'
        />
        <br />
        <button onClick={ this.handleSubmit }>
          Enter
        </button>
        <p> { this.state.list } </p>
      </div>
    )
  }
}
    
  

export default App
