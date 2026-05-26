import './App.css'

// 1. App Data
const dashboardStats = [
  {
    label: 'Open Jobs',
    value: '3',
    detail: 'Ready for follow-up',
  },
  {
    label: 'Completed',
    value: '8',
    detail: 'This month',
  },
  {
    label: 'Estimated Total',
    value: '$4,850',
    detail: 'Sample job value',
  },
]

const sampleJobs = [
  {
    id: 'job-001',
    title: 'Replace shop lights',
    customer: 'Hill Country Auto',
    location: 'San Antonio, TX',
    status: 'Open',
    date: '2026-05-25',
    notes: 'Waiting on customer approval for fixture count.',
  },
  {
    id: 'job-002',
    title: 'Install gate keypad',
    customer: 'Lone Star Storage',
    location: 'Schertz, TX',
    status: 'In Progress',
    date: '2026-05-24',
    notes: 'Parts are on site. Finish wiring on next visit.',
  },
  {
    id: 'job-003',
    title: 'Repair office outlets',
    customer: 'Cibolo Dental',
    location: 'Cibolo, TX',
    status: 'Completed',
    date: '2026-05-22',
    notes: 'Customer signed off. Ready for report export.',
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

// 2. Small UI Helpers
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

function JobCard({ job }) {
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
          <dd>{job.date}</dd>
        </div>
        <div>
          <dt>Location</dt>
          <dd>{job.location}</dd>
        </div>
      </dl>

      <p className="job-card__notes">{job.notes}</p>
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

// 3. Main App
function App() {
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

        <a className="portfolio-link" href="#portfolio-links">
          Portfolio Links
        </a>
      </header>

      <section className="section-card">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Dashboard</p>
            <h2>Today&apos;s work snapshot</h2>
          </div>
          <button type="button">Add Job</button>
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

      <section className="section-card">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Saved Jobs</p>
            <h2>Sample job records</h2>
          </div>
        </div>

        <div className="job-list">
          {sampleJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
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
          <button type="button">Print Job Report</button>
          <button type="button">Export CSV</button>
          <button type="button">Download JSON Backup</button>
        </div>

        <p className="helper-text">
          These buttons are layout placeholders for the first shell. Working
          export, backup, and print logic will be added in later slices.
        </p>
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
          Placeholder area for the builder portfolio, FieldLedger case study,
          other sample apps, and contact link.
        </p>
      </section>
    </main>
  )
}

export default App
