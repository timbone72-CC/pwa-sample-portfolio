import { useEffect, useState } from 'react'
import './App.css'

const TASKS_STORAGE_KEY = 'crew-task-board.tasks'

const initialForm = {
  title: '',
  assignee: '',
  priority: 'Normal',
  status: 'Not Started',
  notes: '',
}

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem(TASKS_STORAGE_KEY)

    if (!savedTasks) {
      return []
    }

    try {
      const parsedTasks = JSON.parse(savedTasks)

      return Array.isArray(parsedTasks) ? parsedTasks : []
    } catch {
      return []
    }
  })
  const [form, setForm] = useState(initialForm)
  const doneTaskCount = tasks.filter((task) => task.status === 'Done').length
  const openTaskCount = tasks.length - doneTaskCount

  useEffect(() => {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  function handleFieldChange(event) {
    const { name, value } = event.target

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }))
  }

  function handleSaveTask(event) {
    event.preventDefault()

    const title = form.title.trim()

    if (!title) {
      return
    }

    const nextTask = {
      id: crypto.randomUUID(),
      title,
      assignee: form.assignee.trim(),
      priority: form.priority,
      status: form.status,
      notes: form.notes.trim(),
    }

    setTasks((currentTasks) => [nextTask, ...currentTasks])
    setForm(initialForm)
  }

  function handleTaskStatusChange(taskId, nextStatus) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, status: nextStatus } : task,
      ),
    )
  }

  function handleDeleteTask(taskId) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId))
  }

  return (
    <main className="app-shell">
      <section className="hero-card">
        <p className="eyebrow">PWA Sample #2</p>
        <h1>Crew Task Board</h1>
        <p className="hero-text">
          A lightweight task board for crew leads, foremen, and small team managers.
        </p>
      </section>

      <section className="form-card" aria-labelledby="task-form-title">
        <h2 id="task-form-title">Add crew task</h2>

        <form className="task-form" onSubmit={handleSaveTask}>
          <label>
            Task title
            <input
              type="text"
              name="title"
              placeholder="Load pipe trailer"
              value={form.title}
              onChange={handleFieldChange}
            />
          </label>

          <label>
            Assigned to
            <input
              type="text"
              name="assignee"
              placeholder="Crew member name"
              value={form.assignee}
              onChange={handleFieldChange}
            />
          </label>

          <label>
            Priority
            <select name="priority" value={form.priority} onChange={handleFieldChange}>
              <option>Low</option>
              <option>Normal</option>
              <option>High</option>
            </select>
          </label>

          <label>
            Status
            <select name="status" value={form.status} onChange={handleFieldChange}>
              <option>Not Started</option>
              <option>In Progress</option>
              <option>Done</option>
            </select>
          </label>

          <label>
            Notes
            <textarea
              name="notes"
              rows="4"
              placeholder="Add task details or safety notes"
              value={form.notes}
              onChange={handleFieldChange}
            />
          </label>

          <button className="primary-button" type="submit">
            Save Task
          </button>
        </form>
      </section>

      <section className="summary-card" aria-label="Task summary">
        <div>
          <span>{tasks.length}</span>
          <p>Total tasks</p>
        </div>
        <div>
          <span>{openTaskCount}</span>
          <p>Open tasks</p>
        </div>
        <div>
          <span>{doneTaskCount}</span>
          <p>Done tasks</p>
        </div>
      </section>

      <section className="empty-state">
        <h2>{tasks.length === 0 ? 'No tasks yet' : 'Saved tasks'}</h2>

        {tasks.length === 0 ? (
          <p>
            Saved crew tasks will appear here with assignee, priority, status, and notes.
          </p>
        ) : (
          <div className="task-list">
            {tasks.map((task) => (
              <article className="task-card" key={task.id}>
                <div>
                  <h3>{task.title}</h3>
                  <p>
                    {task.assignee ? `Assigned to ${task.assignee}` : 'Unassigned'}
                  </p>
                </div>

                <dl>
                  <div>
                    <dt>Priority</dt>
                    <dd>{task.priority}</dd>
                  </div>
                  <div>
                    <dt>Status</dt>
                    <dd>
                      <select
                        aria-label={`Status for ${task.title}`}
                        className="task-status-select"
                        value={task.status}
                        onChange={(event) => handleTaskStatusChange(task.id, event.target.value)}
                      >
                        <option>Not Started</option>
                        <option>In Progress</option>
                        <option>Done</option>
                      </select>
                    </dd>
                  </div>
                </dl>

                {task.notes ? <p className="task-notes">{task.notes}</p> : null}

                <button
                  className="delete-button"
                  type="button"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  Delete Task
                </button>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default App
