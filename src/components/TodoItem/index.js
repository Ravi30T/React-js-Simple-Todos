// Write your code here

import {useState} from 'react'

import './index.css'

const TodoItem = props => {
  const {eachTodoItem, onDelete, onCheck, onEditTodo, onSaveTodo} = props
  const {id, title, todoCompleted} = eachTodoItem

  console.log(eachTodoItem)

  const [saveBtn, updateSaveBtn] = useState(false)

  const onDeleteItem = () => {
    onDelete(id)
  }

  const onClickCheck = () => {
    onCheck(id)
  }

  const onEditItem = () => {
    updateSaveBtn(prevState => !prevState)
    onEditTodo(id)
  }

  const onSaveItem = () => {
    updateSaveBtn(prevState => !prevState)
    onSaveTodo(id)
  }

  const verifyTodoCompletion = todoCompleted ? 'todoNameCompleted' : 'todoName'

  return (
    <li className="eachTodo">
      <div className="title-checkbox">
        <input type="checkbox" onChange={onClickCheck} className="check-box" />

        <p className={verifyTodoCompletion}> {title} </p>
      </div>

      <div className="btn-container">
        {saveBtn ? (
          <button type="button" className="save-edit-btn" onClick={onSaveItem}>
            Save
          </button>
        ) : (
          <button type="button" className="save-edit-btn" onClick={onEditItem}>
            Edit
          </button>
        )}

        <button onClick={onDeleteItem} type="button" className="delete-btn">
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
