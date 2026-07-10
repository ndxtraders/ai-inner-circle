'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  XCircle,
  ChevronRight,
  Download,
  AlertTriangle,
} from 'lucide-react'

// ─── Data ────────────────────────────────────────────────────────────────────

const QUESTIONS = [
  // Pillar 1: Signature Offer (stand out and charge your worth) \u2014 Month 1 \u2014 3 questions
  {
    id: 1,
    category: 'Signature Offer',
    categoryIndex: 0,
    label: 'The Commodity Coach',
    symptom:
      "When a prospect compares you to other coaches, do you sound basically the same?",
    pain:
      "Nothing makes you the obvious choice, so you compete on price or get ghosted after the call.",
    solution:
      "Hire your Signature Method Builder and Sales Council. They name the method only you use and pressure-test the pitch until it's undeniable. Both start in Month 1.",
    fieldKey: 'commodity_coach',
  },
  {
    id: 2,
    category: 'Signature Offer',
    categoryIndex: 0,
    label: 'Priced to Please',
    symptom:
      "Do you keep your rates low because raising them feels risky, or discount the moment someone hesitates?",
    pain:
      "You undercharge for the transformation you deliver, so your income caps out no matter how hard you work.",
    solution:
      "Hire your Offer & Pricing Architect. It rebuilds your offer and price so the right clients stop flinching at the number. Starts in Month 1.",
    fieldKey: 'priced_to_please',
  },
  {
    id: 3,
    category: 'Signature Offer',
    categoryIndex: 0,
    label: 'Let Me Think About It',
    symptom:
      "Do enrollment conversations end in \u201clet me think about it\u201d and then silence?",
    pain:
      "Enrollments die at the finish line. You did all the work to earn the call, then lose it to objections you never got to answer.",
    solution:
      "Hire your Objection Tester. It surfaces the real objection and hands you language that resolves it before it kills the enrollment. Starts in Month 1.",
    fieldKey: 'think_about_it',
  },
  // Pillar 2: Warm Conversations (turn audience into booked calls) \u2014 Month 2 \u2014 3 questions
  {
    id: 4,
    category: 'Warm Conversations',
    categoryIndex: 1,
    label: 'The Silent Audience',
    symptom:
      "Do you have followers and likes but no reliable way to turn them into booked calls?",
    pain:
      "You built an audience, not a pipeline. Attention that never becomes a conversation is just applause.",
    solution:
      "Hire your Warm Signal Spotter. It finds the people already showing buying signals and hands you a warm list to reach out to every week. Starts in Month 2.",
    fieldKey: 'silent_audience',
  },
  {
    id: 5,
    category: 'Warm Conversations',
    categoryIndex: 1,
    label: 'Ignored DMs',
    symptom:
      "Do your DMs go unanswered because they feel salesy or like a copy-paste template?",
    pain:
      "Wasted outreach. Your message reads like every other coach sliding into the inbox, so it starts no conversations.",
    solution:
      "Hire your Conversation Starter. It writes one-to-one messages in your voice that open real conversations instead of pitching. Starts in Month 2.",
    fieldKey: 'ignored_dms',
  },
  {
    id: 6,
    category: 'Warm Conversations',
    categoryIndex: 1,
    label: 'The Free Coaching Trap',
    symptom:
      "Do your discovery calls turn into 45 minutes of free coaching that rarely converts?",
    pain:
      "You give the transformation away on the call, so there's nothing left to enroll in. Generous, and broke.",
    solution:
      "Hire your Discovery Call Closer and Follow-Up & Reactivation Engine. One gives the call an arc that leads to a decision; the other keeps the not-yet's warm. Both start in Month 2.",
    fieldKey: 'free_coaching_trap',
  },
  // Pillar 3: Content Engine (be visible, in your real voice) \u2014 Month 3 \u2014 3 questions
  {
    id: 7,
    category: 'Content Engine',
    categoryIndex: 2,
    label: 'The Content Grind',
    symptom:
      "Does creating content eat time you don't have, so you post sporadically or go quiet for weeks?",
    pain:
      "You disappear from the feed. Out of sight, you fall out of the buying conversation entirely.",
    solution:
      "Hire your Content Strategist and Content Repurposer. They turn one idea into a month of content mapped to your method. Both start in Month 3.",
    fieldKey: 'content_grind',
  },
  {
    id: 8,
    category: 'Content Engine',
    categoryIndex: 2,
    label: 'Sounds Like a Robot',
    symptom:
      "When you use AI to write, does it come out generic or \u201cnot you,\u201d so you rewrite the whole thing anyway?",
    pain:
      "You either post soulless AI content that quietly erodes trust, or you burn the time AI was supposed to save.",
    solution:
      "Hire your Voice-True Ghostwriter and AI Check. They write in your actual voice and catch anything that smells like AI before it posts. Both start in Month 3.",
    fieldKey: 'sounds_like_robot',
  },
  {
    id: 9,
    category: 'Content Engine',
    categoryIndex: 2,
    label: 'The Invisible Coach',
    symptom:
      "When someone looks you up \u2014 your profile, your posts, or asks AI to recommend a coach \u2014 are you basically invisible?",
    pain:
      "Prospects find other coaches instead of you. You're absent right where the decision starts.",
    solution:
      "Hire your LinkedIn Profile Architect and Carousel Builder. They turn your profile into a client magnet and your ideas into scroll-stopping visuals. Yours from Week 0 and Month 3.",
    fieldKey: 'invisible_coach',
  },
  // Pillar 4: Audience & Proof (own your list, turn wins into growth) \u2014 Months 4\u20135 \u2014 3 questions
  {
    id: 10,
    category: 'Audience & Proof',
    categoryIndex: 3,
    label: 'Renting Your Audience',
    symptom:
      "If your main platform shut your account down tomorrow, would you lose your whole audience overnight?",
    pain:
      "You're building on rented land. With no list of your own, one algorithm change can erase your reach.",
    solution:
      "Hire your Lead Magnet Builder and Audience-to-List Converter. They turn scrolling followers into an email list you actually own. Both start in Month 4.",
    fieldKey: 'renting_audience',
  },
  {
    id: 11,
    category: 'Audience & Proof',
    categoryIndex: 3,
    label: 'The Launch That Fizzles',
    symptom:
      "When you open enrollment or launch something, does it land with silence instead of sales?",
    pain:
      "You get one real shot at a launch and it fizzles, taking your revenue and your confidence with it.",
    solution:
      "Hire your Launch & Promo Planner and Email Nurture Writer. They build the runway and the sequence so your offer lands warm, not cold. Both start in Month 4.",
    fieldKey: 'launch_fizzles',
  },
  {
    id: 12,
    category: 'Audience & Proof',
    categoryIndex: 3,
    label: 'Wins That Vanish',
    symptom:
      "Do your clients get real results that never turn into testimonials, case studies, or referrals?",
    pain:
      "Your best marketing asset evaporates unrecorded \u2014 while coaches with weaker results out-market you.",
    solution:
      "Hire your Win Capture Engine, Referral Engine, and Client Health Monitor. They turn client results into proof and referrals, and flag anyone slipping away before they churn. All start in Month 5.",
    fieldKey: 'wins_vanish',
  },
]

const CATEGORIES = [
  'Signature Offer',
  'Warm Conversations',
  'Content Engine',
  'Audience & Proof',
]

// Coach leads route to their OWN MailerLite group, kept separate from the
// B2B list. Rev: create the coach group in MailerLite and paste its ID here.
const COACH_MAILERLITE_GROUP_ID = 'REPLACE_WITH_COACH_GROUP_ID'

// ─── Constants ───────────────────────────────────────────────────────────────

const STATUS_HEX = {
  red: '#d9534f',
  yellow: '#f0ad4e',
  green: '#5cb85c',
}

const STATUS_LABEL = {
  red: 'Breaking Point',
  yellow: 'Caution',
  green: 'Under Control',
}

const POINTS = { red: 5, yellow: 2, green: 0 }
const MAX_TOTAL = QUESTIONS.length * 5 // 12 questions × 5 max each

// ─── Helpers ─────────────────────────────────────────────────────────────────

// Denominator is per-category so pillar friction stays correct if counts ever differ.
function getCategoryMax(categoryIndex) {
  return QUESTIONS.filter((q) => q.categoryIndex === categoryIndex).length * 5
}

function getCategoryFriction(answers, categoryIndex) {
  let sum = 0
  answers.forEach((a, i) => {
    if (QUESTIONS[i] && QUESTIONS[i].categoryIndex === categoryIndex && a) {
      sum += POINTS[a]
    }
  })
  const max = getCategoryMax(categoryIndex) || 1
  return Math.round((sum / max) * 100)
}

function getTotalFriction(answers) {
  let sum = 0
  answers.forEach((a) => {
    if (a) sum += POINTS[a]
  })
  return Math.round((sum / MAX_TOTAL) * 100)
}

function getCategoryStatus(answers, categoryIndex) {
  const catAnswers = answers.filter(
    (_, i) => QUESTIONS[i] && QUESTIONS[i].categoryIndex === categoryIndex
  )
  if (catAnswers.some((s) => s === 'red')) return 'red'
  if (catAnswers.some((s) => s === 'yellow')) return 'yellow'
  if (catAnswers.every((s) => s === 'green')) return 'green'
  return null
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function HeatmapCell({ status, questionNumber, isActive, justSet }) {
  return (
    <div
      className={[
        'relative flex items-center justify-center transition-all duration-500',
        isActive && !status ? 'ring-1 ring-ink' : '',
        justSet ? 'animate-bloom' : '',
      ].join(' ')}
      style={{
        backgroundColor: status ? STATUS_HEX[status] : '#F5F5F5',
        aspectRatio: '1',
        opacity: status ? 1 : isActive ? 1 : 0.45,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: isActive && !status ? '#000' : status ? 'transparent' : '#E5E5E5',
      }}
    >
      <span
        className={[
          'text-eyebrow font-semibold',
          status ? 'text-white' : isActive ? 'text-ink' : 'text-ink-faint',
        ].join(' ')}
      >
        {questionNumber}
      </span>
      {isActive && !status && (
        <span className="absolute bottom-1 left-1/2 -translate-x-1/2">
          <span className="block w-1 h-1 rounded-full bg-ink animate-pulse" />
        </span>
      )}
    </div>
  )
}

function StatusButton({ label, icon, selected, onClick, color }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 px-5 py-3 text-small font-medium transition-all duration-200 text-left border-2"
      style={{
        borderColor: color,
        backgroundColor: selected ? color : '#FFFFFF',
        color: selected ? '#FFFFFF' : color,
      }}
    >
      {icon}
      <span>{label}</span>
    </button>
  )
}

function FrictionBar({ percentage, status }) {
  const color = status ? STATUS_HEX[status] : '#E5E5E5'
  return (
    <div className="w-full">
      <div className="w-full h-2 bg-paper-greyDark overflow-hidden">
        <div
          className="h-full transition-all duration-700 ease-out"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        />
      </div>
      <div className="flex items-center justify-between mt-1">
        <span
          className="text-eyebrow font-bold tracking-widest uppercase"
          style={{ color }}
        >
          {status ? STATUS_LABEL[status] : '\u2014'}
        </span>
        <span className="text-eyebrow font-semibold tracking-widest text-ink-faint">
          {percentage}% friction
        </span>
      </div>
    </div>
  )
}

// ─── Page Component ──────────────────────────────────────────────────────────

export default function CoachAssessmentPage() {
  const [answers, setAnswers] = useState(Array(12).fill(null))
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [tempSelection, setTempSelection] = useState(null)
  const [justSetCell, setJustSetCell] = useState(null)
  const [fadeKey, setFadeKey] = useState(0)

  const progress = answers.filter((a) => a !== null).length
  const question = QUESTIONS[currentQuestion]
  const categoryStatuses = CATEGORIES.map((_, i) => getCategoryStatus(answers, i))
  const categoryFrictions = CATEGORIES.map((_, i) => getCategoryFriction(answers, i))
  const totalFriction = getTotalFriction(answers)
  const redCount = answers.filter((a) => a === 'red').length
  const hasRed = redCount > 0
  const redQuestions = QUESTIONS.filter((_, i) => answers[i] === 'red')
  // Worst pillar = highest friction (ties resolve to the earliest / earliest-month pillar)
  const worstPillarIndex = categoryFrictions.reduce(
    (best, f, i, arr) => (f > arr[best] ? i : best),
    0
  )
  const worstPillar = CATEGORIES[worstPillarIndex]

  // Build the results PDF from an answers array. Derives every value from the
  // array, so it works at reveal time (before React state settles) and on download.
  const buildPdf = useCallback(async (answersArr) => {
      const { default: jsPDF } = await import('jspdf')
      const pdf = new jsPDF('p', 'mm', 'a4')
      const totalFriction = getTotalFriction(answersArr)
      const categoryStatuses = CATEGORIES.map((_, i) => getCategoryStatus(answersArr, i))
      const categoryFrictions = CATEGORIES.map((_, i) => getCategoryFriction(answersArr, i))
      const hasRed = answersArr.some((a) => a === 'red')
      const redQuestions = QUESTIONS.filter((_, i) => answersArr[i] === 'red')
      const pageWidth = 210
      const pageHeight = 297
      const margin = 20
      const contentWidth = pageWidth - margin * 2
      let y = margin

      const checkPage = (needed) => {
        if (y + needed > pageHeight - margin) {
          pdf.addPage()
          y = margin
        }
      }

      const ink = [26, 26, 26]
      const muted = [120, 120, 120]
      const faint = [170, 170, 170]
      const red = [217, 83, 79]
      const yellow = [240, 173, 78]
      const green = [92, 184, 92]
      const statusColors = { red, yellow, green }

      // Header
      pdf.setFont('helvetica', 'bold')
      pdf.setFontSize(10)
      pdf.setTextColor(...faint)
      pdf.text('AI PRIORITY MAP RESULTS', margin, y)
      y += 6
      pdf.setTextColor(...muted)
      pdf.setFontSize(8)
      pdf.text('aiinnercircle.com/coaches/assessment', margin, y)
      y += 4
      pdf.setDrawColor(...faint)
      pdf.line(margin, y, pageWidth - margin, y)
      y += 12

      // Total Friction
      pdf.setFont('helvetica', 'bold')
      pdf.setFontSize(28)
      pdf.setTextColor(...ink)
      pdf.text(`${totalFriction}%`, margin, y)
      pdf.setFont('helvetica', 'normal')
      pdf.setFontSize(11)
      pdf.setTextColor(...muted)
      pdf.text('Total Business Friction', margin + 30, y)
      y += 6

      const barColor = totalFriction >= 50 ? red : totalFriction >= 25 ? yellow : green
      pdf.setFillColor(230, 230, 230)
      pdf.rect(margin, y, contentWidth, 3, 'F')
      pdf.setFillColor(...barColor)
      pdf.rect(margin, y, contentWidth * (totalFriction / 100), 3, 'F')
      y += 12

      // Warning
      if (hasRed) {
        pdf.setFillColor(255, 245, 245)
        pdf.rect(margin, y, contentWidth, 10, 'F')
        pdf.setFillColor(...red)
        pdf.rect(margin, y, 1, 10, 'F')
        pdf.setFont('helvetica', 'normal')
        pdf.setFontSize(9)
        pdf.setTextColor(...red)
        pdf.text(
          'Your business is at a breaking point that might be improved with AI.',
          margin + 5,
          y + 6.5
        )
        y += 16
      }

      // Pillar Breakdown
      pdf.setFont('helvetica', 'bold')
      pdf.setFontSize(8)
      pdf.setTextColor(...faint)
      pdf.text('PILLAR BREAKDOWN', margin, y)
      y += 8

      CATEGORIES.forEach((cat, catIdx) => {
        checkPage(18)
        const catStatus = categoryStatuses[catIdx]
        const friction = categoryFrictions[catIdx]
        const color = catStatus ? statusColors[catStatus] : faint

        pdf.setFont('helvetica', 'bold')
        pdf.setFontSize(9)
        pdf.setTextColor(...ink)
        pdf.text(cat, margin, y)
        pdf.setFont('helvetica', 'normal')
        pdf.setFontSize(8)
        pdf.setTextColor(...color)
        pdf.text(
          catStatus ? `${STATUS_LABEL[catStatus]} \u00B7 ${friction}%` : `${friction}%`,
          pageWidth - margin, y, { align: 'right' }
        )
        y += 4
        pdf.setFillColor(230, 230, 230)
        pdf.rect(margin, y, contentWidth, 2, 'F')
        pdf.setFillColor(...color)
        pdf.rect(margin, y, contentWidth * (friction / 100), 2, 'F')
        y += 8
      })

      y += 4

      // Heatmap
      checkPage(60)
      pdf.setFont('helvetica', 'bold')
      pdf.setFontSize(8)
      pdf.setTextColor(...faint)
      pdf.text('PRIORITY MAP', margin, y)
      y += 6

      CATEGORIES.forEach((cat, catIdx) => {
        checkPage(18)
        pdf.setFont('helvetica', 'normal')
        pdf.setFontSize(7)
        pdf.setTextColor(...faint)
        pdf.text(cat.toUpperCase(), margin, y)
        y += 4
        const catQuestions = QUESTIONS.filter((q) => q.categoryIndex === catIdx)
        const cellSize = 12
        const cellGap = 3
        catQuestions.forEach((q, qi) => {
          const qIndex = q.id - 1
          const status = answersArr[qIndex]
          const x = margin + qi * (cellSize + cellGap)
          const color = status ? statusColors[status] : [240, 240, 240]
          pdf.setFillColor(...color)
          pdf.rect(x, y, cellSize, cellSize, 'F')
          pdf.setFont('helvetica', 'bold')
          pdf.setFontSize(7)
          pdf.setTextColor(status ? 255 : 180, status ? 255 : 180, status ? 255 : 180)
          pdf.text(String(q.id), x + cellSize / 2, y + cellSize / 2 + 1.5, { align: 'center' })
        })
        y += cellSize + 5
      })

      y += 6

      // Red Zone Results
      if (hasRed) {
        checkPage(12)
        pdf.setFont('helvetica', 'bold')
        pdf.setFontSize(8)
        pdf.setTextColor(...faint)
        pdf.text('BREAKING POINTS \u2014 IMMEDIATE ATTENTION REQUIRED', margin, y)
        y += 8

        redQuestions.forEach((q) => {
          const painLines = pdf.splitTextToSize(q.pain, contentWidth - 10)
          const solLines = pdf.splitTextToSize(q.solution, contentWidth - 10)
          const cardHeight = 30 + painLines.length * 4 + solLines.length * 4
          checkPage(cardHeight)

          pdf.setFillColor(...red)
          pdf.rect(margin, y, 1.5, cardHeight - 4, 'F')

          const xContent = margin + 5
          pdf.setFont('helvetica', 'normal')
          pdf.setFontSize(7)
          pdf.setTextColor(...faint)
          pdf.text(q.category.toUpperCase(), xContent, y + 4)
          pdf.setTextColor(...red)
          pdf.text('BREAKING POINT', pageWidth - margin, y + 4, { align: 'right' })

          pdf.setFont('helvetica', 'bold')
          pdf.setFontSize(11)
          pdf.setTextColor(...ink)
          pdf.text(q.label, xContent, y + 11)

          let innerY = y + 17
          pdf.setFont('helvetica', 'bold')
          pdf.setFontSize(7)
          pdf.setTextColor(...faint)
          pdf.text('THE PAIN', xContent, innerY)
          innerY += 4
          pdf.setFont('helvetica', 'normal')
          pdf.setFontSize(9)
          pdf.setTextColor(...muted)
          painLines.forEach((line) => {
            pdf.text(line, xContent, innerY)
            innerY += 4
          })

          innerY += 2
          pdf.setFont('helvetica', 'bold')
          pdf.setFontSize(7)
          pdf.setTextColor(...faint)
          pdf.text('YOUR AI HIRE', xContent, innerY)
          innerY += 4
          pdf.setFont('helvetica', 'normal')
          pdf.setFontSize(9)
          pdf.setTextColor(...ink)
          solLines.forEach((line) => {
            pdf.text(line, xContent, innerY)
            innerY += 4
          })

          y = innerY + 6
        })
      }

      // Footer
      checkPage(16)
      y += 4
      pdf.setDrawColor(...faint)
      pdf.line(margin, y, pageWidth - margin, y)
      y += 6
      pdf.setFont('helvetica', 'normal')
      pdf.setFontSize(8)
      pdf.setTextColor(...muted)
      pdf.text('Next step: Hire your first Assistant. Start at aiinnercircle.com/coaches', margin, y)

      return pdf
  }, [])

  // Download results as PDF (manual button)
  const handleDownload = useCallback(async () => {
    try {
      const pdf = await buildPdf(answers)
      pdf.save('coach-ai-priority-map-results.pdf')
    } catch (err) {
      console.error('Download failed:', err)
    }
  }, [answers, buildPdf])

  // Animations
  useEffect(() => {
    setFadeKey((k) => k + 1)
  }, [currentQuestion])

  useEffect(() => {
    if (justSetCell !== null) {
      const t = setTimeout(() => setJustSetCell(null), 600)
      return () => clearTimeout(t)
    }
  }, [justSetCell])

  const handleSelect = (status) => {
    setTempSelection(status)
  }

  const commitAnswer = () => {
    if (tempSelection === null) return
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = tempSelection
    setAnswers(newAnswers)
    setJustSetCell(currentQuestion)
    setTempSelection(null)
    return newAnswers
  }

  const handleNext = () => {
    commitAnswer()
    if (currentQuestion < 11) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handleReveal = () => {
    const final = commitAnswer()
    if (final && final.every((a) => a !== null)) {
      setRevealed(true)

      let email = null
      try {
        // Coach-specific key so coach leads never mix with the B2B /map flow.
        // The coach email-gate (front-end funnel entry) should set this.
        email = sessionStorage.getItem('coach_map_email')
      } catch (e) {
        // sessionStorage might not be available
      }

      if (email) {
        const friction = getTotalFriction(final)

        // Send structured results to MailerLite (existing behavior)
        fetch('/api/save-results', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            answers: final,
            totalFriction: friction,
            source: 'coaches',
            groupId: COACH_MAILERLITE_GROUP_ID,
          }),
        }).catch(() => {})

        // Archive the generated PDF to Supabase Storage so results are never lost
        // if the visitor leaves without downloading.
        buildPdf(final)
          .then((pdf) => {
            const fd = new FormData()
            fd.append('email', email)
            fd.append('answers', JSON.stringify(final))
            fd.append('totalFriction', String(friction))
            fd.append('source', 'coaches')
            fd.append('groupId', COACH_MAILERLITE_GROUP_ID)
            fd.append('pdf', pdf.output('blob'), 'results.pdf')
            return fetch('/api/save-pdf', { method: 'POST', body: fd })
          })
          .catch(() => {})
      }
    }
  }

  const handleBack = () => {
    setCurrentQuestion(currentQuestion - 1)
    setTempSelection(answers[currentQuestion - 1])
  }

  const handleReset = () => {
    setAnswers(Array(12).fill(null))
    setCurrentQuestion(0)
    setRevealed(false)
    setTempSelection(null)
    setJustSetCell(null)
  }

  return (
    <>
      <style jsx global>{`
        @keyframes bloom {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0,0,0,0.15); }
          40% { transform: scale(1.12); box-shadow: 0 0 12px 4px rgba(0,0,0,0.08); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0,0,0,0); }
        }
        .animate-bloom { animation: bloom 0.5s ease-out; }
      `}</style>

      {/* Header */}
      <header className="border-b border-rule bg-paper">
        <div className="max-w-wide mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="font-semibold text-lg tracking-tight hover:text-accent transition-colors">
            AI Inner Circle
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-small">
            <Link href="/resources" className="text-ink-muted hover:text-ink transition-colors">Resources</Link>
            <Link href="/contact" className="text-ink hover:text-accent transition-colors font-medium">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="bg-paper">
        {/* Hero */}
        {currentQuestion === 0 && progress === 0 && !revealed && (
          <section className="bg-paper py-section">
            <div className="max-w-content mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-10 items-start">
                <div className="md:col-span-2">
                  <p className="eyebrow mb-6">5-Minute Assessment · For Coaches</p>
                  <h1 className="font-sans font-semibold text-display text-ink mb-6">
                    The Coach&rsquo;s AI Assessment
                  </h1>
                  <p className="text-lead text-ink-muted">
                    Find what&rsquo;s really costing you clients. See exactly where your coaching
                    business leaks time, attention, and enrollments, and the exact AI Assistant
                    that fixes each one.
                  </p>
                </div>
                <div className="hidden md:flex items-start justify-center pt-4">
                  <Image src="/ai-inner-circle-logo.jpg" alt="AI Inner Circle" width={200} height={200} className="opacity-80" />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Assessment */}
        {!revealed && (
          <section className="bg-paper-grey py-section">
            <div className="max-w-content mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
                <div className="md:col-span-3">
                  {/* Progress */}
                  <div className="mb-10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-eyebrow uppercase font-semibold tracking-widest text-ink-faint">
                        Question {currentQuestion + 1} of 12
                      </span>
                      <span className="text-eyebrow uppercase font-semibold tracking-widest text-ink-faint">
                        {progress} answered
                      </span>
                    </div>
                    <div className="w-full h-px bg-rule overflow-hidden">
                      <div className="h-full bg-ink transition-all duration-500" style={{ width: `${(progress / 12) * 100}%` }} />
                    </div>
                  </div>

                  {/* Question */}
                  <div key={fadeKey} className="fade-up">
                    <p className="eyebrow mb-3">{question.category}</p>
                    <h2 className="font-sans font-semibold text-h1 text-ink mb-3">{question.label}</h2>
                    <p className="text-body text-ink-muted mb-10">{question.symptom}</p>

                    <div className="flex flex-col gap-3 mb-10">
                      <StatusButton label="Yes, often" icon={<XCircle className="w-4 h-4 shrink-0" />} selected={tempSelection === 'red'} onClick={() => handleSelect('red')} color="#d9534f" />
                      <StatusButton label="Sometimes" icon={<AlertCircle className="w-4 h-4 shrink-0" />} selected={tempSelection === 'yellow'} onClick={() => handleSelect('yellow')} color="#f0ad4e" />
                      <StatusButton label="No, never" icon={<CheckCircle2 className="w-4 h-4 shrink-0" />} selected={tempSelection === 'green'} onClick={() => handleSelect('green')} color="#5cb85c" />
                    </div>
                  </div>

                  {/* Nav */}
                  <div className="flex gap-3">
                    {currentQuestion > 0 && (
                      <button onClick={handleBack} className="inline-flex items-center justify-center px-6 py-3 text-small font-medium tracking-wide transition-all duration-200 bg-paper text-ink border border-ink hover:bg-ink hover:text-paper">
                        &larr; Back
                      </button>
                    )}
                    {currentQuestion < 11 ? (
                      <button onClick={handleNext} disabled={tempSelection === null} className={['inline-flex items-center gap-2 px-6 py-3 text-small font-medium tracking-wide transition-all duration-200 border', tempSelection !== null ? 'bg-ink text-paper border-ink hover:bg-accent hover:border-accent' : 'bg-paper-greyDark text-ink-faint border-rule cursor-not-allowed'].join(' ')}>
                        Next <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button onClick={handleReveal} disabled={tempSelection === null} className={['inline-flex items-center gap-2 px-6 py-3 text-small font-medium tracking-wide transition-all duration-200 border', tempSelection !== null ? 'bg-ink text-paper border-ink hover:bg-accent hover:border-accent' : 'bg-paper-greyDark text-ink-faint border-rule cursor-not-allowed'].join(' ')}>
                        Reveal My Map <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Heatmap */}
                <div className="md:col-span-2">
                  <p className="eyebrow mb-6">Live Priority Map</p>
                  <div className="flex flex-col gap-5">
                    {CATEGORIES.map((cat, catIdx) => (
                      <div key={cat}>
                        <p className="text-eyebrow uppercase font-semibold tracking-widest text-ink-faint mb-2">{cat}</p>
                        <div className="grid grid-cols-3 gap-2">
                          {QUESTIONS.filter((q) => q.categoryIndex === catIdx).map((q) => {
                            const qIndex = q.id - 1
                            return (
                              <HeatmapCell key={q.id} status={answers[qIndex]} questionNumber={q.id} isActive={currentQuestion === qIndex} justSet={justSetCell === qIndex} />
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-5">
                    {['red', 'yellow', 'green'].map((s) => (
                      <div key={s} className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: STATUS_HEX[s] }} />
                        <span className="text-eyebrow uppercase font-semibold tracking-widest text-ink-faint">{STATUS_LABEL[s]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Results */}
        {revealed && (
          <>
            {/* Score */}
            <section className="bg-paper py-section">
              <div className="max-w-content mx-auto px-6">
                <div className="max-w-prose fade-up">
                  <p className="eyebrow mb-6">Your Assessment</p>
                  <h2 className="font-sans font-semibold text-display text-ink mb-6">Your AI Priority Map</h2>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="font-sans font-semibold text-display text-ink">{totalFriction}%</span>
                      <span className="text-body text-ink-muted">Total Business Friction</span>
                    </div>
                    <div className="w-full h-3 bg-paper-greyDark overflow-hidden">
                      <div className="h-full transition-all duration-1000 ease-out" style={{ width: `${totalFriction}%`, backgroundColor: totalFriction >= 50 ? STATUS_HEX.red : totalFriction >= 25 ? STATUS_HEX.yellow : STATUS_HEX.green }} />
                    </div>
                  </div>
                  {hasRed && (
                    <div className="flex items-start gap-3 p-4 border-l-[3px] bg-paper fade-up" style={{ borderLeftColor: STATUS_HEX.red }}>
                      <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: STATUS_HEX.red }} />
                      <p className="text-body text-ink">Your business is at a breaking point that might be improved with AI.</p>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Breakdown + Red Results */}
            <section className="bg-paper-grey py-section">
              <div className="max-w-content mx-auto px-6">
                <div className="pb-8">
                  {/* Pillar Cards */}
                  <p className="eyebrow mb-6">Pillar Breakdown</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
                    {CATEGORIES.map((cat, catIdx) => {
                      const catStatus = categoryStatuses[catIdx]
                      const friction = categoryFrictions[catIdx]
                      return (
                        <div key={cat} className="p-6 bg-paper border border-rule fade-up" style={{ animationDelay: `${catIdx * 0.1}s` }}>
                          <div className="flex items-start justify-between mb-4">
                            <p className="text-eyebrow uppercase font-semibold tracking-widest text-ink-faint">{cat}</p>
                            <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: catStatus ? STATUS_HEX[catStatus] : '#E5E5E5' }} />
                          </div>
                          <FrictionBar percentage={friction} status={catStatus} />
                        </div>
                      )
                    })}
                  </div>

                  {/* Heatmap */}
                  <p className="eyebrow mb-6">Priority Map</p>
                  <div className="flex flex-col gap-5 max-w-sm mb-14">
                    {CATEGORIES.map((cat, catIdx) => (
                      <div key={cat}>
                        <p className="text-eyebrow uppercase font-semibold tracking-widest text-ink-faint mb-2">{cat}</p>
                        <div className="grid grid-cols-3 gap-2">
                          {QUESTIONS.filter((q) => q.categoryIndex === catIdx).map((q) => {
                            const qIndex = q.id - 1
                            return <HeatmapCell key={q.id} status={answers[qIndex]} questionNumber={q.id} isActive={false} justSet={false} />
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Red-Only */}
                  {hasRed && (
                    <>
                      <p className="eyebrow mb-6">Breaking Points &mdash; Immediate Attention Required</p>
                      <div className="flex flex-col gap-4">
                        {redQuestions.map((q, idx) => (
                          <div key={q.id} className="p-6 bg-paper border border-rule fade-up" style={{ animationDelay: `${idx * 0.08}s`, borderLeftWidth: '3px', borderLeftColor: STATUS_HEX.red }}>
                            <div className="flex items-start justify-between mb-1">
                              <p className="text-eyebrow uppercase font-semibold tracking-widest text-ink-faint">{q.category}</p>
                              <span className="text-eyebrow uppercase font-bold tracking-widest" style={{ color: STATUS_HEX.red }}>Breaking Point</span>
                            </div>
                            <h3 className="font-sans font-semibold text-h3 text-ink mb-3">{q.label}</h3>
                            <div className="mb-3">
                              <p className="text-eyebrow uppercase font-semibold tracking-widest text-ink-faint mb-1">The Pain</p>
                              <p className="text-body text-ink-muted">{q.pain}</p>
                            </div>
                            <div>
                              <p className="text-eyebrow uppercase font-semibold tracking-widest text-ink-faint mb-1">Your AI Hire</p>
                              <p className="text-body text-ink">{q.solution}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Download */}
                <div className="mt-8">
                  <p className="text-body text-ink-muted mb-4">
                    Get every breaking point and the AI Assistant that fixes it, plus your full AI Priority Map in one shareable PDF.
                  </p>
                  <button onClick={handleDownload} className="inline-flex items-center gap-3 px-8 py-4 text-body font-semibold tracking-wide transition-all duration-200 text-white border border-transparent hover:opacity-90" style={{ backgroundColor: '#83B14E' }}>
                    <Download className="w-5 h-5" />
                    Download My Results as PDF
                  </button>
                </div>
              </div>
            </section>

            {/* Dynamic CTA */}
            <section className="py-section" style={{ backgroundColor: '#83B14E' }}>
              <div className="max-w-content mx-auto px-6">
                <p className="text-eyebrow uppercase font-semibold tracking-widest text-paper opacity-70 mb-6">Next Step</p>
                {hasRed ? (
                  <>
                    <h3 className="font-sans font-semibold text-h1 text-paper mb-4">
                      Your biggest breaking point is your {worstPillar}.
                    </h3>
                    <p className="text-lead text-paper opacity-80 mb-12">
                      Good news: the membership starts you exactly here. Hire the AI Assistants that fix it, a new desk each month.
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="font-sans font-semibold text-h1 text-paper mb-4">
                      You&rsquo;ve avoided the critical breaking points.
                    </h3>
                    <p className="text-lead text-paper opacity-80 mb-12">
                      You have scale risks, not fires. Two ways to stay ahead — pick the one that fits where you are.
                    </p>
                  </>
                )}
                <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
                  {/* Option 1 — Membership */}
                  <div className="bg-paper p-8 flex flex-col">
                    <p className="text-eyebrow uppercase font-semibold tracking-widest text-ink-faint mb-3">Your First Hire</p>
                    <h4 className="font-sans font-semibold text-h3 text-ink mb-3">Join AI Inner Circle for Coaches</h4>
                    <p className="text-body text-ink-muted mb-8 flex-1">
                      Set up your Command Center, then hire one AI Assistant a week. A full team in five months, starting with the desk this map flagged reddest.
                    </p>
                    <Link href="/coaches" className="inline-flex items-center gap-2 px-5 py-3 text-small font-medium tracking-wide transition-all duration-200 bg-ink text-paper border border-ink hover:bg-accent hover:border-accent">
                      See the Membership <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  {/* Option 2 — $97 Writing Twin tripwire */}
                  <div className="bg-paper p-8 flex flex-col">
                    <p className="text-eyebrow uppercase font-semibold tracking-widest text-ink-faint mb-3">Start Smaller</p>
                    <h4 className="font-sans font-semibold text-h3 text-ink mb-3">Build Your AI Writing Twin</h4>
                    <p className="text-body text-ink-muted mb-8 flex-1">
                      Not ready for the full team? Start with the $97 workshop and build the voice file at the heart of the membership. Your $97 is credited when you join.
                    </p>
                    <Link href="/writing-twin" className="inline-flex items-center gap-2 px-5 py-3 text-small font-medium tracking-wide transition-all duration-200 bg-ink text-paper border border-ink hover:bg-accent hover:border-accent">
                      Start the $97 Workshop <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Restart */}
            <section className="bg-paper py-10">
              <div className="max-w-content mx-auto px-6 text-center">
                <button onClick={handleReset} className="text-small text-ink-muted hover:text-ink transition-colors underline underline-offset-4">Start over</button>
              </div>
            </section>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-rule bg-paper-grey">
        <div className="max-w-wide mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-small text-ink-muted">
          <div>&copy; {new Date().getFullYear()} Rev Vaughn. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <Link href="/resources" className="hover:text-ink transition-colors">Resources</Link>
            <Link href="/contact" className="hover:text-ink transition-colors">Contact</Link>
            <Link href="/privacy-terms" className="hover:text-ink transition-colors">Privacy &amp; Terms</Link>
          </div>
        </div>
      </footer>
    </>
  )
}
