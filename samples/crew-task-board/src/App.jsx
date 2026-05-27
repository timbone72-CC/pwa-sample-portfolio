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

        <button className="primary-button" type="button">
          Add Task
        </button>
      </section>

      <section className="empty-state">
        <h2>No tasks yet</h2>
        <p>
          Start by adding a crew task. Later this board will support assignees,
          status, priority, notes, and local browser saving.
        </p>
      </section>
    </main>
  )
}

export default App
