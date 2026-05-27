import './App.css'

function App() {
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

        <form className="task-form">
          <label>
            Task title
            <input type="text" name="title" placeholder="Load pipe trailer" />
          </label>

          <label>
            Assigned to
            <input type="text" name="assignee" placeholder="Crew member name" />
          </label>

          <label>
            Priority
            <select name="priority" defaultValue="Normal">
              <option>Low</option>
              <option>Normal</option>
              <option>High</option>
            </select>
          </label>

          <label>
            Status
            <select name="status" defaultValue="Not Started">
              <option>Not Started</option>
              <option>In Progress</option>
              <option>Done</option>
            </select>
          </label>

          <label>
            Notes
            <textarea name="notes" rows="4" placeholder="Add task details or safety notes" />
          </label>

          <button className="primary-button" type="button">
            Save Task
          </button>
        </form>
      </section>

      <section className="empty-state">
        <h2>No tasks yet</h2>
        <p>
          Saved crew tasks will appear here with assignee, priority, status, and notes.
        </p>
      </section>
    </main>
  )
}

export default App
