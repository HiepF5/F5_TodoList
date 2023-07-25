import React, { useState } from 'react'
function EditTodoForm({ handleEdit, prevTask, id }) {
  const [value, setValue] = useState(prevTask)

  const handleChange = (e) => {
    e.preventDefault()
    setValue(e.target.value)
    console.log(id)
  }
  return (
    <>
      <form className='TodoForm'>
        <input value={value} className='todo-input' type='text' placeholder='Update Task  ' onChange={handleChange} />
        <button type='submit' className='todo-btn' onClick={() => handleEdit(value, id)}>
          Update Task
        </button>
      </form>
    </>
  )
}

export default EditTodoForm
