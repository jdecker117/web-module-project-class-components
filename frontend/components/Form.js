import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      itemText: ''
    }
  }

  handleChange = evt => {
    this.setState({
      itemText: evt.target.value
    })
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.addItem(this.state.itemText)
    this.setState({
      itemText: ''
    })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text'
          name='item'
          value={this.state.itemText}
          onChange={this.handleChange}></input>
          <button>Add Item</button>
        </form>
        <button onClick={this.props.clearComplete}>Clear Completed</button>
      </div>
    )
  }
}
