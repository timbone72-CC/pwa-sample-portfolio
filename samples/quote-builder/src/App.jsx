import { useEffect, useMemo, useState } from 'react'
import './App.css'

const QUOTES_STORAGE_KEY = 'quote-builder.quotes'

const statusOptions = ['Draft', 'Sent', 'Approved', 'Declined']

const today = new Date().toISOString().slice(0, 10)

function createEmptyForm() {
  return {
    quoteDate: today,
    customerName: '',
    jobTitle: '',
    laborAmount: '',
    materialsAmount: '',
    tripCharge: '',
    extraFees: '',
    quoteStatus: 'Draft',
    notes: '',
  }
}

function parseMoney(value) {
  const parsedValue = Number.parseFloat(value)

  if (Number.isNaN(parsedValue)) {
    return 0
  }

  return parsedValue
}

function formatMoney(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value)
}

function calculateQuoteTotal(quote) {
  return (
    parseMoney(quote.laborAmount) +
    parseMoney(quote.materialsAmount) +
    parseMoney(quote.tripCharge) +
    parseMoney(quote.extraFees)
  )
}

function loadSavedQuotes() {
  try {
    const storedQuotes = window.localStorage.getItem(QUOTES_STORAGE_KEY)

    if (!storedQuotes) {
      return []
    }

    const parsedQuotes = JSON.parse(storedQuotes)

    if (!Array.isArray(parsedQuotes)) {
      return []
    }

    return parsedQuotes
  } catch {
    return []
  }
}

function App() {
  const [form, setForm] = useState(createEmptyForm)
  const [savedQuotes, setSavedQuotes] = useState(loadSavedQuotes)

  useEffect(() => {
    window.localStorage.setItem(QUOTES_STORAGE_KEY, JSON.stringify(savedQuotes))
  }, [savedQuotes])

  const currentQuoteTotal = useMemo(() => calculateQuoteTotal(form), [form])

  function updateField(fieldName, value) {
    setForm((currentForm) => ({
      ...currentForm,
      [fieldName]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const trimmedCustomerName = form.customerName.trim()
    const trimmedJobTitle = form.jobTitle.trim()

    if (!trimmedCustomerName || !trimmedJobTitle) {
      return
    }

    const newQuote = {
      ...form,
      id: crypto.randomUUID(),
      customerName: trimmedCustomerName,
      jobTitle: trimmedJobTitle,
      notes: form.notes.trim(),
      total: currentQuoteTotal,
      createdAt: new Date().toISOString(),
    }

    setSavedQuotes((currentQuotes) => [newQuote, ...currentQuotes])
    setForm(createEmptyForm())
  }

  function deleteQuote(quoteId) {
    setSavedQuotes((currentQuotes) => currentQuotes.filter((quote) => quote.id !== quoteId))
  }

  return (
    <main className="app-shell">
      <section className="hero-card" aria-labelledby="app-title">
        <p className="eyebrow">PWA Sample Portfolio</p>
        <h1 id="app-title">Quote Builder</h1>
        <p>
          A lightweight quote builder for contractors, estimators, service providers, and
          small business owners.
        </p>
      </section>

      <section className="panel" aria-labelledby="quote-form-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">New Quote</p>
            <h2 id="quote-form-title">Build quote</h2>
          </div>
          <span className="pill">{formatMoney(currentQuoteTotal)}</span>
        </div>

        <form className="task-form" onSubmit={handleSubmit}>
          <label>
            Quote date
            <input
              type="date"
              value={form.quoteDate}
              onChange={(event) => updateField('quoteDate', event.target.value)}
              required
            />
          </label>

          <label>
            Customer name
            <input
              type="text"
              value={form.customerName}
              onChange={(event) => updateField('customerName', event.target.value)}
              placeholder="Example: Smith Welding"
              required
            />
          </label>

          <label>
            Job title or service
            <input
              type="text"
              value={form.jobTitle}
              onChange={(event) => updateField('jobTitle', event.target.value)}
              placeholder="Example: Gate repair"
              required
            />
          </label>

          <label>
            Quote status
            <select
              value={form.quoteStatus}
              onChange={(event) => updateField('quoteStatus', event.target.value)}
            >
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </label>

          <label>
            Labor amount
            <input
              type="number"
              min="0"
              step="0.01"
              value={form.laborAmount}
              onChange={(event) => updateField('laborAmount', event.target.value)}
              placeholder="0.00"
              required
            />
          </label>

          <label>
            Materials amount
            <input
              type="number"
              min="0"
              step="0.01"
              value={form.materialsAmount}
              onChange={(event) => updateField('materialsAmount', event.target.value)}
              placeholder="0.00"
              required
            />
          </label>

          <label>
            Trip charge
            <input
              type="number"
              min="0"
              step="0.01"
              value={form.tripCharge}
              onChange={(event) => updateField('tripCharge', event.target.value)}
              placeholder="0.00"
            />
          </label>

          <label>
            Extra fees
            <input
              type="number"
              min="0"
              step="0.01"
              value={form.extraFees}
              onChange={(event) => updateField('extraFees', event.target.value)}
              placeholder="0.00"
            />
          </label>

          <label className="full-width">
            Notes / scope
            <textarea
              value={form.notes}
              onChange={(event) => updateField('notes', event.target.value)}
              placeholder="Add scope, assumptions, exclusions, or follow-up notes."
              rows="4"
            />
          </label>

          <button type="submit">Save quote</button>
        </form>
      </section>

      <section className="panel" aria-labelledby="saved-quotes-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Saved Locally</p>
            <h2 id="saved-quotes-title">Recent quotes</h2>
          </div>
          <span className="pill">{savedQuotes.length} saved</span>
        </div>

        {savedQuotes.length === 0 ? (
          <p className="empty-state">
            Saved quotes will appear here with customer, status, total, and notes.
          </p>
        ) : (
          <div className="task-list">
            {savedQuotes.map((quote) => (
              <article className="task-card" key={quote.id}>
                <div>
                  <p className="task-title">{quote.customerName}</p>
                  <p className="task-meta">
                    {quote.quoteDate} • {quote.jobTitle}
                  </p>
                </div>

                <span className="status-pill">{quote.quoteStatus}</span>

                <p className="task-meta">Total: {formatMoney(quote.total)}</p>

                <p className="task-notes">
                  Labor {formatMoney(parseMoney(quote.laborAmount))} • Materials{' '}
                  {formatMoney(parseMoney(quote.materialsAmount))} • Trip{' '}
                  {formatMoney(parseMoney(quote.tripCharge))} • Fees{' '}
                  {formatMoney(parseMoney(quote.extraFees))}
                </p>

                {quote.notes && <p className="task-notes">{quote.notes}</p>}

                <button
                  className="secondary-button"
                  type="button"
                  onClick={() => deleteQuote(quote.id)}
                >
                  Delete quote
                </button>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="panel" aria-labelledby="portfolio-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Portfolio Links</p>
            <h2 id="portfolio-title">Portfolio home</h2>
          </div>
        </div>

        <p>
          Return to the portfolio home to choose another sample app.
        </p>

        <div className="link-grid">
          <a href="/pwa-sample-portfolio/">Portfolio home</a>
        </div>
      </section>
    </main>
  )
}

export default App
