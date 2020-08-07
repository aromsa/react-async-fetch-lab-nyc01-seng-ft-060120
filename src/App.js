// create your App component here
import React from 'react'

class App extends React.Component {

  state = {
    astronauts: []
  }

  componentDidMount(){
    fetch ("http://api.open-notify.org/astros.json")
    .then (resp => resp.json())
    .then (data => this.setState({
      astronauts: data.people
    }))
  }

  render(){
    console.log(this.state.astronauts)

    return(
      <ul>
        {this.state.astronauts.map((astro, id) => <li key={id}>{astro.name}</li>)}
      </ul>
    )
  }

}

export default App