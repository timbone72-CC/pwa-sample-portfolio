import { useEffect, useState } from 'react'
import './App.css'

// 1. Storage Constants
const STORAGE_KEY = 'pwaSampleJobTracker.jobs'

// 2. App Data
const initialFormState = {
  jobDate: '',
  customer: '',
  jobTitle: '',
  location: '',
  status: 'Open',
  amount: '',
  notes: '',
}

const sampleJobs = [
  {
    id: 'sample-job-001',
    title: 'Replace shop lights',
    customer: 'Hill Country Auto',
    location: 'San Antonio, TX',
    status: 'Open',
    date: '2026-05-25',
    amount: '1250',
    notes: 'Waiting on customer approval for fixture count.',
    createdAt: '2026-05-25T08:00:00.000Z',
    updatedAt: '2026-05-25T08:00:00.000Z',
  },
  {
    id: 'sample-job-002',
    title: 'Install gate keypad',
    customer: 'Lone Star Storage',
    location: 'Schertz, TX',
    status: 'In Progress',
    date: '2026-05-24',
    amount: '2100',
    notes: 'Parts are on site. Finish wiring on next visit.',
    createdAt: '2026-05-24T08:00:00.000Z',
    updatedAt: '2026-05-24T08:00:00.000Z',
  },
  {
    id: 'sample-job-003',
    title: 'Repair office outlets',
    customer: 'Cibolo Dental',
    location: 'Cibolo, TX',
    status: 'Completed',
    date: '2026-05-22',
    amount: '1500',
    notes: 'Customer signed off. Ready for report export.',
    createdAt: '2026-05-22T08:00:00.000Z',
    updatedAt: '2026-05-22T08:00:00.000Z',
  },
]

const futureAddOns = [
  {
    title: 'Google Sheets Handoff',
    status: 'Future Add-On',
    description: 'Send approved job records to an office review Sheet.',
  },
  {
    title: 'Photo Attachments',
    status: 'Optional Module',
    description: 'Attach jobsite photos or completion proof to each job.',
  },
  {
    title: 'Team Login',
    status: 'Planned',
    description: 'Add separate worker and office views in a later phase.',
  },
]

// 3. Validation Helpers
function isValidJob(job) {
  return (
    job &&
    typeof job === 'object' &&
    typeof job.id === 'string' &&
    typeof job.title === 'string' &&
    typeof job.customer === 'string' &&
    typeof job.status === 'string'
  )
}

function validateJobsBackup(backup) {
  if (!backup || typeof backup !== 'object') {
    return { isValid: false, message: 'Backup file is not a valid object.' }
  }

  if (backup.appId !== 'pwa-sample-job-tracker') {
    return { isValid: false, message: 'Backup file is for a different app.' }
  }

  if (backup.schemaVersion !== 1) {
    return { isValid: false, message: 'Backup file uses an unsupported schema version.' }
  }

  if (!Array.isArray(backup.jobs)) {
    return { isValid: false, message: 'Backup file does not include a valid jobs list.' }
  }

  if (!backup.jobs.every(isValidJob)) {
    return { isValid: false, message: 'Backup file includes invalid job records.' }
  }

  return { isValid: true, message: '' }
}

// 4. Storage Helpers
function loadSavedJobs() {
  const storedJobs = window.localStorage.getItem(STORAGE_KEY)

  if (!storedJobs) {
    return sampleJobs
  }

  try {
    const parsedJobs = JSON.parse(storedJobs)

    if (!Array.isArray(parsedJobs)) {
      return sampleJobs
    }

    return parsedJobs
  } catch {
    return sampleJobs
  }
}

function saveJobs(jobs) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs))
}

// 5. Export Helpers
function escapeCsvValue(value) {
  const stringValue = String(value ?? '')

  if (/[",\n]/.test(stringValue)) {
    return `"${stringValue.replaceAll('"', '""')}"`
  }

  return stringValue
}

function downloadTextFile({ contents, filename, mimeType }) {
  const blob = new Blob([contents], { type: mimeType })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')

  link.href = url
  link.download = filename
  link.click()

  URL.revokeObjectURL(url)
}

function buildJobsCsv(jobs) {
  const headers = [
    'Job Date',
    'Customer',
    'Job Title',
    'Location',
    'Status',
    'Amount',
    'Notes',
    'Created At',
    'Updated At',
  ]

  const rows = jobs.map((job) => [
    job.date,
    job.customer,
    job.title,
    job.location,
    job.status,
    job.amount,
    job.notes,
    job.createdAt,
    job.updatedAt,
  ])

  return [headers, ...rows]
    .map((row) => row.map(escapeCsvValue).join(','))
    .join('\n')
}

function buildJobsBackup(jobs) {
  return JSON.stringify(
    {
      appId: 'pwa-sample-job-tracker',
      appName: 'Job Tracker PWA Sample',
      schemaVersion: 1,
      exportedAt: new Date().toISOString(),
      jobs,
    },
    null,
    2,
  )
}

// 6. Formatting Helpers
function formatCurrency(value) {
  const amount = Number(value)

  if (!Number.isFinite(amount) || amount <= 0) {
    return 'Not set'
  }

  return new Intl.NumberFormat('en-US', {
    currency: 'USD',
    style: 'currency',
  }).format(amount)
}

// 7. Small UI Helpers
function StatusBadge({ status }) {
  return <span className="status-badge">{status}</span>
}

function DashboardCard({ label, value, detail }) {
  return (
    <article className="dashboard-card">
      <p>{label}</p>
      <strong>{value}</strong>
      <span>{detail}</span>
    </article>
  )
}

function JobCard({ job, onDelete }) {
  return (
    <article className="job-card">
      <div className="job-card__header">
        <div>
          <h3>{job.title}</h3>
          <p>{job.customer}</p>
        </div>
        <StatusBadge status={job.status} />
      </div>

      <dl className="job-card__details">
        <div>
          <dt>Date</dt>
          <dd>{job.date || 'Not set'}</dd>
        </div>
        <div>
          <dt>Location</dt>
          <dd>{job.location || 'Not set'}</dd>
        </div>
        <div>
          <dt>Amount</dt>
          <dd>{formatCurrency(job.amount)}</dd>
        </div>
        <div>
          <dt>Updated</dt>
          <dd>{new Date(job.updatedAt).toLocaleDateString()}</dd>
        </div>
      </dl>

      <p className="job-card__notes">{job.notes || 'No notes added.'}</p>

      <div className="job-card__actions">
        <button className="danger-button" type="button" onClick={() => onDelete(job.id)}>
          Delete Job
        </button>
      </div>
    </article>
  )
}

function FutureAddOnCard({ item }) {
  return (
    <article className="future-card">
      <div>
        <h3>{item.title}</h3>
        <span>{item.status}</span>
      </div>
      <p>{item.description}</p>
    </article>
  )
}

// 8. Main App
function App() {
  const [jobs, setJobs] = useState(() => loadSavedJobs())
  const [formData, setFormData] = useState(initialFormState)

  useEffect(() => {
    saveJobs(jobs)
  }, [jobs])

  const openJobs = jobs.filter((job) => job.status !== 'Completed').length
  const completedJobs = jobs.filter((job) => job.status === 'Completed').length
  const estimatedTotal = jobs.reduce((total, job) => {
    const amount = Number(job.amount)

    if (!Number.isFinite(amount)) {
      return total
    }

    return total + amount
  }, 0)

  const dashboardStats = [
    {
      label: 'Open Jobs',
      value: String(openJobs),
      detail: 'Not completed yet',
    },
    {
      label: 'Completed',
      value: String(completedJobs),
      detail: 'Saved locally',
    },
    {
      label: 'Estimated Total',
      value: formatCurrency(estimatedTotal),
      detail: 'From saved jobs',
    },
  ]

  function handleInputChange(event) {
    const { name, value } = event.target

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }))
  }

  function handleSaveJob() {
    if (!formData.jobTitle.trim() || !formData.customer.trim()) {
      window.alert('Job Title and Customer or Company are required.')
      return
    }

    const now = new Date().toISOString()

    const newJob = {
      id: crypto.randomUUID(),
      title: formData.jobTitle.trim(),
      customer: formData.customer.trim(),
      location: formData.location.trim(),
      status: formData.status,
      date: formData.jobDate,
      amount: formData.amount,
      notes: formData.notes.trim(),
      createdAt: now,
      updatedAt: now,
    }

    setJobs((currentJobs) => [newJob, ...currentJobs])
    setFormData(initialFormState)
  }

  function handleDeleteJob(jobId) {
    const shouldDelete = window.confirm('Delete this job record?')

    if (!shouldDelete) {
      return
    }

    setJobs((currentJobs) => currentJobs.filter((job) => job.id !== jobId))
  }

  function handleClearForm() {
    setFormData(initialFormState)
  }

  function handleExportCsv() {
    const csv = buildJobsCsv(jobs)

    downloadTextFile({
      contents: csv,
      filename: 'job-tracker-records.csv',
      mimeType: 'text/csv;charset=utf-8',
    })
  }

  function handleDownloadBackup() {
    const backup = buildJobsBackup(jobs)

    downloadTextFile({
      contents: backup,
      filename: 'job-tracker-backup.json',
      mimeType: 'application/json;charset=utf-8',
    })
  }

  function handleRestoreBackup(event) {
    const file = event.target.files?.[0]

    if (!file) {
      return
    }

    const reader = new FileReader()

    reader.onload = () => {
      try {
        const parsedBackup = JSON.parse(String(reader.result))
        const validation = validateJobsBackup(parsedBackup)

        if (!validation.isValid) {
          window.alert(validation.message)
          return
        }

        const shouldRestore = window.confirm(
          'Restore this backup? This will replace the jobs currently saved in this browser.',
        )

        if (!shouldRestore) {
          return
        }

        setJobs(parsedBackup.jobs)
        window.alert('Job Tracker backup restored.')
      } catch {
        window.alert('Backup file could not be read as valid JSON.')
      } finally {
        event.target.value = ''
      }
    }

    reader.readAsText(file)
  }

  function handlePrintReport() {
    window.print()
  }

  return (
    <main className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Small Business PWA Sample</p>
          <h1>Job Tracker</h1>
          <p>
            A lightweight sample app for tracking jobs, statuses, notes,
            reports, exports, and future workflow add-ons.
          </p>
        </div>

      </header>

      <section className="section-card">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Dashboard</p>
            <h2>Today&apos;s work snapshot</h2>
          </div>
          <a className="button-link" href="#add-job">
            Add Job
          </a>
        </div>

        <div className="dashboard-grid">
          {dashboardStats.map((stat) => (
            <DashboardCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              detail={stat.detail}
            />
          ))}
        </div>
      </section>

      <section id="add-job" className="section-card">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Add Job</p>
            <h2>New job details</h2>
          </div>
        </div>

        <form className="job-form">
          <label>
            Job Date
            <input
              type="date"
              name="jobDate"
              value={formData.jobDate}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Customer or Company
            <input
              type="text"
              name="customer"
              placeholder="Example: Hill Country Auto"
              value={formData.customer}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Job Title
            <input
              type="text"
              name="jobTitle"
              placeholder="Example: Replace shop lights"
              value={formData.jobTitle}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Job Location
            <input
              type="text"
              name="location"
              placeholder="Example: San Antonio, TX"
              value={formData.location}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Job Status
            <select name="status" value={formData.status} onChange={handleInputChange}>
              <option>Open</option>
              <option>In Progress</option>
              <option>Completed</option>
              <option>On Hold</option>
            </select>
          </label>

          <label>
            Optional Amount
            <input
              type="number"
              name="amount"
              min="0"
              step="0.01"
              placeholder="0.00"
              value={formData.amount}
              onChange={handleInputChange}
            />
          </label>

          <label className="job-form__wide">
            Job Notes
            <textarea
              name="notes"
              rows="4"
              placeholder="Add job details, next steps, or customer notes."
              value={formData.notes}
              onChange={handleInputChange}
            />
          </label>

          <div className="form-actions job-form__wide">
            <button type="button" onClick={handleSaveJob}>
              Save Job
            </button>
            <button className="secondary-button" type="button" onClick={handleClearForm}>
              Clear Form
            </button>
          </div>

          <p className="helper-text job-form__wide">
            Jobs save to this browser&apos;s local storage. No login or backend is used in this sample.
          </p>
        </form>
      </section>

      <section className="section-card">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Saved Jobs</p>
            <h2>Saved job records</h2>
          </div>
        </div>

        <div className="job-list">
          {jobs.length === 0 ? (
            <p className="helper-text">No jobs saved yet. Add the first job above.</p>
          ) : (
            jobs.map((job) => (
              <JobCard key={job.id} job={job} onDelete={handleDeleteJob} />
            ))
          )}
        </div>
      </section>

      <section className="section-card">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Exports</p>
            <h2>Report and backup actions</h2>
          </div>
        </div>

        <div className="action-grid">
          <button type="button" onClick={handlePrintReport}>Print Job Report</button>
          <button type="button" onClick={handleExportCsv}>Export CSV</button>
          <button type="button" onClick={handleDownloadBackup}>Download JSON Backup</button>
          <label className="file-button">
            Restore JSON Backup
            <input type="file" accept="application/json,.json" onChange={handleRestoreBackup} />
          </label>
        </div>

        <p className="helper-text">
          CSV export, JSON backup, JSON restore, and browser print report now work with saved job records from this browser.
        </p>
      </section>

      <section className="section-card">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Help</p>
            <h2>How this sample works</h2>
          </div>
        </div>

        <div className="help-list">
          <article>
            <h3>1. Add a job</h3>
            <p>Enter a customer, job title, status, notes, and optional amount.</p>
          </article>

          <article>
            <h3>2. Save locally</h3>
            <p>Jobs are saved in this browser only. No login, backend, or cloud database is used.</p>
          </article>

          <article>
            <h3>3. Export or back up</h3>
            <p>Download CSV records, download a JSON backup, restore a backup, or print a simple report.</p>
          </article>

          <article>
            <h3>4. Grow later</h3>
            <p>Future add-ons show what could be added without pretending those features are active now.</p>
          </article>
        </div>
      </section>

      <section className="section-card">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Future Options</p>
            <h2>Clear roadmap previews</h2>
          </div>
        </div>

        <div className="future-grid">
          {futureAddOns.map((item) => (
            <FutureAddOnCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section id="portfolio-links" className="section-card">
        <div className="section-heading">
          <div>
            <p className="eyebrow">About</p>
            <h2>Portfolio links</h2>
          </div>
        </div>

        <p className="helper-text">
          This sample is part of the PWA Sample Portfolio, focused on simple,
          mobile-friendly tools that can run without a backend or login.
        </p>

        <div className="link-grid">
          <a href="/pwa-sample-portfolio/">
            Portfolio home
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
