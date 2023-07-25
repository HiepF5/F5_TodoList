import React, { useCallback, useMemo, useRef, useState } from 'react'
import Todo from './Todo'
import EditTodoForm from './EditTodoForm'

let nextId = 3
const initialTodos = [
  {
    id: 1,
    task: 'todo1',
    completed: false,
    isEditing: false
  },
  {
    id: 2,
    task: 'todo2',
    completed: true,
    isEditing: false
  },
  {
    id: 3,
    task: 'todo3',
    completed: false,
    isEditing: false
  }
]

function TodoForm() {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState(initialTodos)
  const todoRef = useRef()
  console.log('render tong')
  const handleChange = (e) => {
    e.preventDefault()
    setValue(e.target.value)
    console.log(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(typeof value)
    if (value === '') {
      todoRef.current.focus()
      console.log('todoref')
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: nextId++,
          task: value,
          completed: false,
          isEditing: false
        }
      ])
      setValue('')
      todoRef.current.focus()
    }
  }
  const toggleComplete = (checkId) => {
    const newTodoComplete = todos.map((todo) => {
      return todo.id === checkId
        ? {
            ...todo,
            completed: !todo.completed
          }
        : todo
    })
    console.log(newTodoComplete)
    setTodos(newTodoComplete)
  }
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  const editTodo = (checkId) => {
    const newTodoComplete = todos.map((todo) => {
      return todo.id === checkId
        ? {
            ...todo,
            isEditing: !todo.isEditing
          }
        : todo
    })
    console.log('render edit')
    setTodos(newTodoComplete)
    console.log(newTodoComplete)
  }
  const handleEdit = (newvalue, id) => {
    console.log('kkkkkkkkk')
    console.log(newvalue)
    const newTodoEdit = todos.map((todo) => {
      return todo.id === id
        ? {
            ...todo,
            id: id,
            task: newvalue,
            completed: false,
            isEditing: false
          }
        : todo
    })
    setTodos(newTodoEdit)
    console.log(newTodoEdit)
  }

  return (
    <>
      <form className='TodoForm' onSubmit={handleSubmit}>
        <input
          ref={todoRef}
          value={value}
          className='todo-input'
          type='text'
          placeholder='What is the task today? '
          onChange={handleChange}
        />
        <button type='submit' className='todo-btn'>
          Add Task
        </button>
      </form>
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm key={index} handleEdit={handleEdit} prevTask={todo.task} id={todo.id} />
        ) : (
          <Todo todo={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
        )
      )}
    </>
  )
}

export default TodoForm
