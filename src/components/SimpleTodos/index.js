import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    todoCompleted: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    todoCompleted: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    todoCompleted: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    todoCompleted: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    todoCompleted: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    todoCompleted: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    todoCompleted: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    todoCompleted: false,
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {todoList: initialTodosList, inputText: '', inputNum: ''}

  onEnterInputText = event => {
    console.log('in')
    console.log(event.target.value)
    if (event.target.value !== undefined) {
      this.setState({inputText: event.target.value})
    }
  }

  onEnterInputNumber = event => {
    if (event.target.value !== '') {
      this.setState({inputNum: event.target.value})
    }
  }

  onAddNewTodo = () => {
    const {inputText} = this.state

    const newData = {
      id: uuidv4(),
      title: inputText,
      todoCompleted: false,
    }

    if (inputText !== '') {
      this.setState(prevState => ({
        todoList: [...prevState.todoList, newData],
        inputText: '',
      }))
    }
  }

  onToggleTodo = id => {
    const {todoList} = this.state
    const updatedTodo = todoList.map(each =>
      each.id === id ? {...each, todoCompleted: !each.todoCompleted} : each,
    )

    this.setState({todoList: updatedTodo})
  }

  onDeleteTodo = id => {
    const {todoList} = this.state
    const updatedTodo = todoList.filter(each => each.id !== id)
    this.setState({todoList: updatedTodo, inputText: ''})
  }

  onEditTodo = id => {
    const {todoList} = this.state
    const getTodoItem = todoList.filter(each => each.id === id)
    const text = getTodoItem[0].title
    this.setState({inputText: text})
  }

  onSaveTodo = id => {
    const {todoList, inputText} = this.state
    const updatedTodo = todoList.map(each =>
      each.id === id ? {...each, title: inputText} : each,
    )

    this.setState({todoList: updatedTodo, inputText: ''})
  }

  render() {
    const {todoList, inputText} = this.state

    return (
      <div className='bgContainer'>
        <div className='todoCardContainer'>
          <h1 className='mainHeading'> Simple Todos </h1>
          <div className='input-box-container'>
            <input
              type='text'
              placeholder='Enter the text'
              className='input-box'
              value={inputText}
              onChange={this.onEnterInputText}
            />

            <button
              type='button'
              className='add-btn'
              onClick={this.onAddNewTodo}
            >
              {' '}
              Add{' '}
            </button>
          </div>
          <ul className='list-container'>
            {todoList.map(each => (
              <TodoItem
                key={each.id}
                eachTodoItem={each}
                onDelete={this.onDeleteTodo}
                onCheck={this.onToggleTodo}
                onEditTodo={this.onEditTodo}
                onSaveTodo={this.onSaveTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
