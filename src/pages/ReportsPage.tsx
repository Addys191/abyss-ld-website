import { Calendar, TrendingUp, Target, AlertCircle, Download, Eye, Archive, BarChart3 } from 'lucide-react'
import { useRef, useState } from 'react'

const ReportsPage = () => {
  const [printReportId, setPrintReportId] = useState<number | null>(null)
  const printRef = useRef<HTMLDivElement>(null)

  const reports = [
    {
      id: 1,
      title: "Q4 2024-2025 Quarterly Report",
      period: "July 2025",
      date: "2025-07-01",
      status: "Published",
      highlights: {
        achieved: [
          "Completed MLQC training module updates with enhanced video content",
          "Successfully onboarded 12 new team members across different departments",
          "Achieved 98% completion rate for mandatory training sessions",
          "Launched refresher training program based on Q2 performance analysis"
        ],
        learned: [
          "Interactive video content increases retention by 35% compared to text-only materials",
          "Buddy system effectiveness improves when paired with structured check-ins",
          "Early morning training sessions show higher engagement rates",
          "Cross-departmental training creates better collaboration opportunities"
        ],
        missed: [
          "Workpacks SOP finalization delayed due to stakeholder feedback cycles",
          "Tagging module video production behind schedule by 2 weeks",
          "Lower than expected participation in optional soft skills workshops",
          "Documentation of POC group activities needs improvement"
        ]
      },
      metrics: {
        trainingHours: 320,
        participantsTotal: 78,
        completionRate: 92,
        satisfactionScore: 4.7
      }
    },
    {
      id: 2,
      title: "Q3 2024-2025 Quarterly Report",
      period: "May 2025",
      date: "2025-04-01",
      status: "Published",
      highlights: {
        achieved: [
          "Finalized Labeling SOP version 2.1 with comprehensive updates",
          "Conducted Scab Scaling Model training for Cloud Factory and DVL vendors, ensuring error-free project implementation.",
          "Created the L&D Scorecard, providing a visual snapshot of AIT member proficiencies and training status to management",
          "Established POC groups for all active training modules"
        ],
        learned: [
          "Visual SOPs reduce training time by 25% compared to text-based versions",
          "Regular feedback sessions improve training content quality significantly",
          "Peer-to-peer learning sessions complement formal training effectively",
          "Module-specific POC groups provide better specialized support"
        ],
        missed: [
          "Delayed implementation of advanced evaluation metrics",
          "Incomplete stakeholder feedback collection for Workpacks module",
          "Training calendar conflicts affected attendance in 3 sessions",
          "Resource allocation for video production needs optimization"
        ]
      },
      metrics: {
        trainingHours: 700,
        participantsTotal: 88,
        completionRate: 94,
        satisfactionScore: 4.5
      }
    },
    {
      id: 3,
      title: "Q2 2024-2025 Quarterly Report",
      period: "January 2025",
      date: "2025-01-03",
      status: "Published",
      highlights: {
        achieved: [
          "Designed and launched the Hybrid Training Model for Batch 13, reducing training time by 33% while achieving 99% accuracy in initial assessments.",
          "Successfully conducted on-site training for vendor Softoo, enabling 30 trainees to integrate into long-term operations despite resource constraints",
          "Delivered data-driven insights via comprehensive Power BI reports on Q&PT and MLQC data, directly informing performance reviews and improvement plans",
          "Rolled out the Task Readiness Evaluation (TRE), standardizing quarterly pulse checks across AIT to guide skill development initiatives."
        ],
        learned: [
          "Hands-on integration during training (Hybrid Model) significantly enhances knowledge retention and accelerates readiness.",
          "Video-based training reduces the learning curve for complex procedures",
          "On-ground training under pressure (Softoo) showcased our ability to pivot quickly and still deliver strong outcomes.",
          "Data visualization tools like Power BI are essential in communicating performance metrics effectively to leadership."
        ],
        missed: [
          "Early involvement in Batch 12 was limited due to the late formalization of the L&D role, resulting in missed opportunities for early process improvements",
          "Knowledge gaps from Batch 12 training highlighted the cost of longer training programs with delayed project exposure.",
          "Despite improvements, resource constraints remained a recurring challenge, especially during concurrent training initiatives",
          "Live project accuracy monitoring post-vendor training still needs a more formal follow-up mechanism to ensure sustained performance."
        ]
      },
      metrics: {
        trainingHours: 650,
        participantsTotal: 44,
        completionRate: 92,
        satisfactionScore: 4.4
      }
    }
  ]

  const yearlyMetrics = {
    totalTrainingHours: 1248,
    totalParticipants: 95,
    averageCompletionRate: 91,
    averageSatisfactionScore: 4.6,
    trainingModules: 4,
    sopDocuments: 12
  }

  const getStatusBadge = (status: string) => {
    if (status === 'Published') {
      return <span className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">Published</span>
    }
    return <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 px-3 py-1 rounded-full text-sm font-medium">Draft</span>
  }

  const getMetricColor = (value: number, type: string) => {
    if (type === 'completion' && value >= 95) return 'text-green-600'
    if (type === 'completion' && value >= 90) return 'text-yellow-600'
    if (type === 'satisfaction' && value >= 4.5) return 'text-green-600'
    if (type === 'satisfaction' && value >= 4.0) return 'text-yellow-600'
    return 'text-red-600'
  }

  const handlePrint = (reportId: number) => {
    setPrintReportId(reportId)
    setTimeout(() => {
      window.print()
      setTimeout(() => setPrintReportId(null), 500)
    }, 100)
  }

  return (
    <div className="space-y-12">
      {/* Hero Section with Background Video */}
      <section className="relative min-h-[380px] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/images/vid5.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ filter: 'brightness(0.85) contrast(1.1)' }}
        />
        {/* Overlay for readability - reduced opacity for more visible video */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-800/40 to-sky-900/40 z-10" />
        <div className="relative z-20 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="text-center animate-fadeInUp opacity-0"
              id="hero-animated"
            >
              <h1 className="text-4xl lg:text-6xl font mb-6 text-white drop-shadow-lg">Reports & Newsletters</h1>
              <p className="text- font-bold text-yellow-400/90 max-w-3xl mx-auto drop-shadow">
                Monthly and quarterly insights into our training achievements, learnings, and areas for improvement. 
                Track our progress and celebrate our successes together.
              </p>
            </div>
          </div>
        </div>
        <style>{`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(60px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) 0.2s both;
          }
        `}</style>
      </section>

      {/* Yearly Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">2025 Year-to-Date Overview</h2>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{yearlyMetrics.totalTrainingHours}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Training Hours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{yearlyMetrics.totalParticipants}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Participants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">{yearlyMetrics.averageCompletionRate}%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Avg Completion</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">{yearlyMetrics.averageSatisfactionScore}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">{yearlyMetrics.trainingModules}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Active Modules</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">{yearlyMetrics.sopDocuments}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">SOP Documents</div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Reports */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-cyan-900 dark:text-white">Quarterly Reports</h2>
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Archive className="w-4 h-4" />
            <span>View Archive</span>
          </button>
        </div>

        <div className="space-y-8">
          {reports.slice().reverse().map((report) => (
            <div key={report.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              {/* Report Header */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{report.title}</h3>
                    <div className="flex items-center space-x-4 text-blue-100">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(report.date).toLocaleDateString()}</span>
                      </div>
                      {getStatusBadge(report.status)}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                      onClick={() => handlePrint(report.id)}
                      title={`Print or Save ${report.title} as PDF`}
                    >
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Report Metrics */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Monthly Metrics</h4>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{report.metrics.trainingHours}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Training Hours</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">{report.metrics.participantsTotal}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Participants</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className={`text-2xl font-bold mb-1 ${getMetricColor(report.metrics.completionRate, 'completion')}`}>
                      {report.metrics.completionRate}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Completion Rate</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className={`text-2xl font-bold mb-1 ${getMetricColor(report.metrics.satisfactionScore, 'satisfaction')}`}>
                      {report.metrics.satisfactionScore}/5
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Report Content */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* What We Achieved */}
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">What We Achieved</h4>
                    </div>
                    <ul className="space-y-2">
                      {report.highlights.achieved.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What We Learned */}
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <Target className="w-5 h-5 text-blue-600" />
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">What We Learned</h4>
                    </div>
                    <ul className="space-y-2">
                      {report.highlights.learned.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What We Missed */}
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <AlertCircle className="w-5 h-5 text-orange-600" />
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">What We Missed</h4>
                    </div>
                    <ul className="space-y-2">
                      {report.highlights.missed.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Features */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Newsletter Features</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Comprehensive monthly insights to track our department's progress and achievements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Achievement Tracking</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Detailed documentation of all monthly accomplishments and milestones reached.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Learning Insights</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Key learnings and insights gained from training activities and participant feedback.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Performance Metrics</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Comprehensive analytics on training effectiveness, completion rates, and satisfaction scores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 pb-12">
        <div className="bg-gradient-to-r from-green-600 to-yellow-600 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Stay Updated with Our Progress</h2>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Want to receive our monthly reports directly? Subscribe to our newsletter or 
            provide feedback on our current reporting format.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe to Newsletter
            </button>
            <a
              href="/feedback"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Provide Feedback
            </a>
          </div>
        </div>
      </section>

      {/* Print Section (hidden except when printing) */}
      {printReportId !== null && (
        <div
          ref={printRef}
          style={{ position: 'fixed', top: 0, left: 0, width: '100vw', background: 'white', zIndex: 9999 }}
          className="print-only"
        >
          {reports.filter(r => r.id === printReportId).map((report) => (
            <div key={report.id} className="p-8">
              <h1 className="text-3xl font-bold mb-2">{report.title}</h1>
              <div className="mb-4 text-gray-700">{new Date(report.date).toLocaleDateString()}</div>
              <h2 className="text-xl font-semibold mb-2">What We Achieved</h2>
              <ul className="mb-4 list-disc list-inside">
                {report.highlights.achieved.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
              <h2 className="text-xl font-semibold mb-2">What We Learned</h2>
              <ul className="mb-4 list-disc list-inside">
                {report.highlights.learned.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
              <h2 className="text-xl font-semibold mb-2">What We Missed</h2>
              <ul className="mb-4 list-disc list-inside">
                {report.highlights.missed.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
              <h2 className="text-xl font-semibold mb-2">Monthly Metrics</h2>
              <ul className="mb-4 list-inside">
                <li>Training Hours: {report.metrics.trainingHours}</li>
                <li>Participants: {report.metrics.participantsTotal}</li>
                <li>Completion Rate: {report.metrics.completionRate}%</li>
                <li>Satisfaction Score: {report.metrics.satisfactionScore}/5</li>
              </ul>
            </div>
          ))}
        </div>
      )}
      <style>{`
      @media print {
        body * {
          visibility: hidden !important;
        }
        .print-only, .print-only * {
          visibility: visible !important;
        }
        .print-only {
          position: absolute !important;
          left: 0; top: 0; width: 100vw; background: white; z-index: 99999;
        }
      }
      .print-only { display: none; }
      @media print { .print-only { display: block !important; } }
    `}</style>
    </div>
  )
}

export default ReportsPage
