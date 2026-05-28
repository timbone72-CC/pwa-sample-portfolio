import { useEffect, useState } from 'react'
import './App.css'

const SERVICE_CALLS_STORAGE_KEY = 'service-call-log.calls'

const statusOptions = ['New', 'Scheduled', 'In Progress', 'Waiting', 'Complete']
const priorityOptions = ['Low', 'Normal', 'High', 'Urgent']

const today = new Date().toISOString().slice(0, 10)

function createEmptyForm() {
  return {
    callDate: today,
    customerName: '',
    serviceLocation: '',
    issueSummary: '',
    callStatus: 'New',
    priority: 'Normal',
    followUpNeeded: 'No',
    notes: '',
  }
}

function loadSavedCalls() {
  try {
    const storedCalls = window.localStorage.getItem(SERVICE_CALLS_STORAGE_KEY)

    if (!storedCalls) {
      return []
    }

    const parsedCalls = JSON.parse(storedCalls)

    if (!Array.isArray(parsedCalls)) {
      return []
    }

    return parsedCalls
  } catch {
    return []
  }
}

function App() {
  const [form, setForm] = useState(createEmptyForm)
  const [savedCalls, setSavedCalls] = useState(loadSavedCalls)

  useEffect(() => {
    window.localStorage.setItem(SERVICE_CALLS_STORAGE_KEY, JSON.stringify(savedCalls))
  }, [savedCalls])

  function updateField(fieldName, value) {
    setForm((currentForm) => ({
      ...currentForm,
      [fieldName]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const trimmedCustomerName = form.customerName.trim()
    const trimmedIssueSummary = form.issueSummary.trim()

    if (!trimmedCustomerName || !trimmedIssueSummary) {
      return
    }

    const newCall = {
      ...form,
      id: crypto.randomUUID(),
      customerName: trimmedCustomerName,
      serviceLocation: form.serviceLocation.trim(),
      issueSummary: trimmedIssueSummary,
      notes: form.notes.trim(),
      createdAt: new Date().toISOString(),
    }

    setSavedCalls((currentCalls) => [newCall, ...currentCalls])
    setForm(createEmptyForm())
  }

  function deleteCall(callId) {
    setSavedCalls((currentCalls) => currentCalls.filter((call) => call.id !== callId))
  }

  return (
    <main className="app-shell">
      <section className="hero-card" aria-labelledby="app-title">
        <p className="eyebrow">PWA Sample Portfolio</p>
        <h1 id="app-title">Service Call Log</h1>
        <p>
          A lightweight service call tracker for technicians, dispatchers, and small
          service businesses.
        </p>
      </section>

      <section className="form-card" aria-labelledby="service-call-form-title">
        <p className="eyebrow">New Service Call</p>
        <h2 id="service-call-form-title">Log service call</h2>

        <form className="task-form" onSubmit={handleSubmit}>
          <label>
            Call date
            <input
              type="date"
              value={form.callDate}
              onChange={(event) => updateField('callDate', event.target.value)}
              required
            />
          </label>

          <label>
            Customer name
            <input
              type="text"
              value={form.customerName}
              onChange={(event) => updateField('customerName', event.target.value)}
              placeholder="Example: Johnson Farm"
              required
            />
          </label>

          <label>
            Service location
            <input
              type="text"
              value={form.serviceLocation}
              onChange={(event) => updateField('serviceLocation', event.target.value)}
              placeholder="Example: North shop"
            />
          </label>

          <label>
            Status
            <select
              value={form.callStatus}
              onChange={(event) => updateField('callStatus', event.target.value)}
            >
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </label>

          <label>
            Priority
            <select
              value={form.priority}
              onChange={(event) => updateField('priority', event.target.value)}
            >
              {priorityOptions.map((priority) => (
                <option key={priority} value={priority}>
                  {priority}
                </option>
              ))}
            </select>
          </label>

          <label>
            Follow-up needed
            <select
              value={form.followUpNeeded}
              onChange={(event) => updateField('followUpNeeded', event.target.value)}
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </label>

          <label className="full-width">
            Issue summary
            <textarea
              value={form.issueSummary}
              onChange={(event) => updateField('issueSummary', event.target.value)}
              placeholder="Describe the service issue or customer request."
              rows="3"
              required
            />
          </label>

          <label className="full-width">
            Notes
            <textarea
              value={form.notes}
              onChange={(event) => updateField('notes', event.target.value)}
              placeholder="Add parts, access notes, follow-up details, or next steps."
              rows="4"
            />
          </label>

          <button className="primary-button" type="submit">Save service call</button>
        </form>
      </section>

      <section className="summary-card" aria-label="Service call summary">
        <div>
          <span>{savedCalls.length}</span>
          <p>Total calls</p>
        </div>
        <div>
          <span>{savedCalls.filter((call) => call.callStatus !== 'Complete').length}</span>
          <p>Open calls</p>
        </div>
        <div>
          <span>{savedCalls.filter((call) => call.followUpNeeded === 'Yes').length}</span>
          <p>Follow-ups</p>
        </div>
      </section>

      <section className="form-card" aria-labelledby="saved-calls-title">
        <p className="eyebrow">Saved Locally</p>
        <h2 id="saved-calls-title">Recent service calls</h2>

        {savedCalls.length === 0 ? (
          <p className="empty-state">
            Saved service calls will appear here with customer, status, priority, and notes.
          </p>
        ) : (
          <div className="task-list">
            {savedCalls.map((call) => (
              <article className="task-card" key={call.id}>
                <div>
                  <h3>{call.customerName}</h3>
                  <p>{call.issueSummary}</p>
                </div>

                <dl>
                  <div>
                    <dt>Date</dt>
                    <dd>{call.callDate}</dd>
                  </div>
                  <div>
                    <dt>Status</dt>
                    <dd>{call.callStatus}</dd>
                  </div>
                  <div>
                    <dt>Priority</dt>
                    <dd>{call.priority}</dd>
                  </div>
                  <div>
                    <dt>Follow-up</dt>
                    <dd>{call.followUpNeeded}</dd>
                  </div>
                </dl>

                {call.serviceLocation ? (
                  <p>
                    <strong>Location:</strong> {call.serviceLocation}
                  </p>
                ) : null}

                {call.notes ? <p className="task-notes">{call.notes}</p> : null}

                <button className="delete-button" type="button" onClick={() => deleteCall(call.id)}>
                  Delete call
                </button>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="portfolio-card" aria-labelledby="portfolio-links-title">
        <p className="eyebrow">Related Samples</p>
        <h2 id="portfolio-links-title">Explore the portfolio</h2>
        <p>
          Service Call Log is a standalone sample. These links are navigation only unless
          real app-to-app communication is intentionally built later.
        </p>
        <div className="portfolio-links">
          <a href="/pwa-sample-portfolio/">Portfolio home</a>
          <a href="/pwa-sample-portfolio/job-tracker/">Job Tracker</a>
          <a href="/pwa-sample-portfolio/crew-task-board/">Crew Task Board</a>
          <a href="/pwa-sample-portfolio/equipment-check-log/">Equipment Check Log</a>
          <a href="/pwa-sample-portfolio/quote-builder/">Quote Builder</a>
        </div>
      </section>
    </main>
  )
}

export default App
