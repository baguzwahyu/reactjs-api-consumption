import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items:[],
      isLoading: true
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {  this.setState({items:data, isLoading: false}) }) 
  }

  render() {
    const {items,isLoading} = this.state  

    if(isLoading){
      return<p>Loading......</p>
    }
    return (
      <div>
        <ul>
          {items.map((item, index) => <li key={index}> {item.name} </li>  )}
        </ul>
      </div>
    )
  }
}
