import React, { useState, useContext, useEffect } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'

const TaskForm = () => {
  const { addTask, editTask, editItem } = useContext(TaskListContext)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!editItem) {
      addTask(title, description)
      setTitle('')
      setDescription('')
    } else {
      editTask(title, description, editItem.id)
    }
  }

  const handleChange = e => {
    setTitle(e.target.value)
  }

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title)
      setDescription(editItem.description)
      console.log(editItem)
    } else {
      setTitle('')
      setDescription('')
    }
  }, [editItem])

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Add Task..."
        value={title}
        onChange={handleChange}
        required
        className="task-input"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        required
        className="task-input"
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editItem ? 'Edit Task' : 'Add Task'}
        </button>
      </div>
    </form>
  )
}

export default TaskForm
