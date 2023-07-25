import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

function Todo({ todo, toggleComplete, deleteTodo, editTodo }) {
  return (
    <>
      <div className='Todo'>
        <p
          onClick={() => {
            toggleComplete(todo.id)
          }}
          className={`${todo.completed ? 'completed' : ''}`}
        >
          {todo.task}
        </p>
        <div>
          <FontAwesomeIcon
            icon={faPenToSquare}
            onClick={() => {
              editTodo(todo.id)
            }}
          />
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => {
              deleteTodo(todo.id)
            }}
          />
        </div>
      </div>
    </>
  )
}

export default Todo
