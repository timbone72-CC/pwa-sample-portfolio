import { useEffect, useMemo, useState } from 'react'
import './App.css'

const CHECKS_STORAGE_KEY = 'equipment-check-log.checks'

const statusOptions = ['Ready', 'Needs Attention', 'Out of Service']

const checklistItems = [
  {
    id: 'fuelPowerChecked',
    label: 'Fuel / power checked',
  },
  {
    id: 'tiresTracksChecked',
    label: 'Tires / tracks checked',
  },
  {
    id: 'fluidsChecked',
    label: 'Fluids checked',
  },
  {
    id: 'lightsSignalsChecked',
    label: 'Lights / signals checked',
  },
  {
    id: 'safetyEquipmentChecked',
    label: 'Safety equipment checked',
  },
  {
    id: 'damageLeaksChecked',
    label: 'Damage or leaks checked',
  },
]

const today = new Date().toISOString().slice(0, 10)

function createEmptyForm() {
  return {
    date: today,
    equipmentName: '',
    checkedBy: '',
    readinessStatus: 'Ready',
    notes: '',
    fuelPowerChecked: false,
    tiresTracksChecked: false,
    fluidsChecked: false,
    lightsSignalsChecked: false,
    safetyEquipmentChecked: false,
    damageLeaksChecked: false,
  }
}

function loadSavedChecks() {
  try {
    const storedChecks = window.localStorage.getItem(CHECKS_STORAGE_KEY)

    if (!storedChecks) {
      return []
    }

    const parsedChecks = JSON.parse(storedChecks)

    if (!Array.isArray(parsedChecks)) {
      return []
    }

    return parsedChecks
  } catch {
    return []
  }
}

function App() {
  const [form, setForm] = useState(createEmptyForm)
  const [savedChecks, setSavedChecks] = useState(loadSavedChecks)

  useEffect(() => {
    window.localStorage.setItem(CHECKS_STORAGE_KEY, JSON.stringify(savedChecks))
  }, [savedChecks])

  const completedChecklistCount = useMemo(() => {
    return checklistItems.filter((item) => form[item.id]).length
  }, [form])

  function updateField(fieldName, value) {
    setForm((currentForm) => ({
      ...currentForm,
      [fieldName]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const trimmedEquipmentName = form.equipmentName.trim()
    const trimmedCheckedBy = form.checkedBy.trim()

    if (!trimmedEquipmentName || !trimmedCheckedBy) {
      return
    }

    const newCheck = {
      ...form,
      id: crypto.randomUUID(),
      equipmentName: trimmedEquipmentName,
      checkedBy: trimmedCheckedBy,
      notes: form.notes.trim(),
      createdAt: new Date().toISOString(),
    }

    setSavedChecks((currentChecks) => [newCheck, ...currentChecks])
    setForm(createEmptyForm())
  }

  function deleteCheck(checkId) {
    setSavedChecks((currentChecks) => currentChecks.filter((check) => check.id !== checkId))
  }

  function getUncheckedItems(check) {
    return checklistItems.filter((item) => !check[item.id])
  }

  return (
    <main className="app-shell">
      <section className="hero-card" aria-labelledby="app-title">
        <p className="eyebrow">PWA Sample Portfolio</p>
        <h1 id="app-title">Equipment Check Log</h1>
        <p>
          A lightweight equipment readiness log for operators, mechanics, inspectors, and
          crew leads.
        </p>
      </section>

      <section className="panel" aria-labelledby="check-form-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">New Check</p>
            <h2 id="check-form-title">Add equipment check</h2>
          </div>
          <span className="pill">{completedChecklistCount} / {checklistItems.length} checked</span>
        </div>

        <form className="task-form" onSubmit={handleSubmit}>
          <label>
            Date
            <input
              type="date"
              value={form.date}
              onChange={(event) => updateField('date', event.target.value)}
              required
            />
          </label>

          <label>
            Equipment name or unit number
            <input
              type="text"
              value={form.equipmentName}
              onChange={(event) => updateField('equipmentName', event.target.value)}
              placeholder="Example: Skid steer 12"
              required
            />
          </label>

          <label>
            Checked by
            <input
              type="text"
              value={form.checkedBy}
              onChange={(event) => updateField('checkedBy', event.target.value)}
              placeholder="Example: Tim"
              required
            />
          </label>

          <label>
            Readiness status
            <select
              value={form.readinessStatus}
              onChange={(event) => updateField('readinessStatus', event.target.value)}
            >
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </label>

          <fieldset className="checklist">
            <legend>Checklist</legend>

            {checklistItems.map((item) => (
              <label className="checkbox-row" key={item.id}>
                <input
                  type="checkbox"
                  checked={form[item.id]}
                  onChange={(event) => updateField(item.id, event.target.checked)}
                />
                <span>{item.label}</span>
              </label>
            ))}
          </fieldset>

          <label className="full-width">
            Notes
            <textarea
              value={form.notes}
              onChange={(event) => updateField('notes', event.target.value)}
              placeholder="Add issues, follow-up notes, or readiness details."
              rows="4"
            />
          </label>

          <button type="submit">Save equipment check</button>
        </form>
      </section>

      <section className="panel" aria-labelledby="saved-checks-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Saved Locally</p>
            <h2 id="saved-checks-title">Recent equipment checks</h2>
          </div>
          <span className="pill">{savedChecks.length} saved</span>
        </div>

        {savedChecks.length === 0 ? (
          <p className="empty-state">
            Saved equipment checks will appear here with status, checklist results, and notes.
          </p>
        ) : (
          <div className="task-list">
            {savedChecks.map((check) => {
              const uncheckedItems = getUncheckedItems(check)

              return (
                <article className="task-card" key={check.id}>
                  <div>
                    <p className="task-title">{check.equipmentName}</p>
                    <p className="task-meta">
                      {check.date} • Checked by {check.checkedBy}
                    </p>
                  </div>

                  <span className="status-pill">{check.readinessStatus}</span>

                  <p className="task-meta">
                    Checklist: {checklistItems.length - uncheckedItems.length} / {checklistItems.length} complete
                  </p>

                  {uncheckedItems.length > 0 && (
                    <p className="task-notes">
                      Needs review: {uncheckedItems.map((item) => item.label).join(', ')}
                    </p>
                  )}

                  {check.notes && <p className="task-notes">{check.notes}</p>}

                  <button
                    className="secondary-button"
                    type="button"
                    onClick={() => deleteCheck(check.id)}
                  >
                    Delete check
                  </button>
                </article>
              )
            })}
          </div>
        )}
      </section>

      <section className="panel" aria-labelledby="portfolio-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Portfolio Links</p>
            <h2 id="portfolio-title">Related sample apps</h2>
          </div>
        </div>

        <p>
          Equipment Check Log is a standalone sample. These links are navigation only, not
          fake app-to-app integration.
        </p>

        <div className="link-grid">
          <a href="/pwa-sample-portfolio/">Portfolio home</a>
          <a href="/pwa-sample-portfolio/job-tracker/">Job Tracker demo</a>
          <a href="/pwa-sample-portfolio/crew-task-board/">Crew Task Board demo</a>
        </div>
      </section>
    </main>
  )
}

export default App
