import React from 'react'
import Form from './Form'
import TodoList from './TodoList'

const getRandomDigits = (length = 1) => Array(length).fill().map(e => Math.floor(Math.random() * 10)).join('');

const todos = [
  {
    name: 'Clean Room',
    id: 1,
    completed: false
  },
  {
    name: 'Walk Dogs',
    id: 2,
    completed: false
  },
  {
    name: 'Practice React',
    id: 3,
    completed: false
  }
]

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todos
    }
  }

  toggleItem = (itemId) => {
    this.setState({
      todos: this.state.todos.map(item => {
        if(itemId === item.id){
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    })
  }

  addItem = (itemText) => {
    const newItem = {
      name: itemText,
      id: Date.now(),
      completed: false
    }

    const newArray = [...this.state.todos, newItem]

    this.setState({
      todos: newArray
    })
  }

  clearComplete = () => {
    this.setState({
      todos: this.state.todos.filter(item => !item.completed)
    })
  }

  


  render() {
    return (
      <div className='App'>
        <TodoList todos={this.state.todos} toggleItem={this.toggleItem}/>
        <Form addItem={this.addItem} clearComplete={this.clearComplete}/>
      </div>
      
    )
  }
}
