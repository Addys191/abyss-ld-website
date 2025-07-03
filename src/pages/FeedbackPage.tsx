import { useState } from 'react'
import { MessageSquare, Plus, Users, Star, Send, CheckCircle, AlertCircle } from 'lucide-react'

const FeedbackPage = () => {
  const [activeForm, setActiveForm] = useState('feedback')
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    // Feedback form
    feedbackType: 'session',
    sessionName: '',
    rating: 5,
    feedbackText: '',
    suggestions: '',
    // Request form
    requestType: 'new-training',
    trainingTopic: '',
    priority: 'medium',
    description: '',
    justification: '',
    // Nomination form
    nominationType: 'poc',
    nomineeName: '',
    nomineeEmail: '',
    nomineeRole: '',
    nominationReason: '',
    // Contact info
    submitterName: '',
    submitterEmail: '',
    submitterDepartment: ''
  })

  const forms = [
    { id: 'feedback', label: 'Training Feedback', icon: MessageSquare },
    { id: 'request', label: 'Training Request', icon: Plus },
    { id: 'nomination', label: 'Peer Nomination', icon: Users }
  ]

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus('submitting')
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success')
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
        setFormData({
          feedbackType: 'session',
          sessionName: '',
          rating: 5,
          feedbackText: '',
          suggestions: '',
          requestType: 'new-training',
          trainingTopic: '',
          priority: 'medium',
          description: '',
          justification: '',
          nominationType: 'poc',
          nomineeName: '',
          nomineeEmail: '',
          nomineeRole: '',
          nominationReason: '',
          submitterName: '',
          submitterEmail: '',
          submitterDepartment: ''
        })
      }, 3000)
    }, 2000)
  }

  const StarRating = ({ rating, onRatingChange }: { rating: number, onRatingChange: (rating: number) => void }) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onRatingChange(star)}
            className={`p-1 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'} hover:text-yellow-400 transition-colors`}
          >
            <Star className={`w-6 h-6 ${star <= rating ? 'fill-current' : ''}`} />
          </button>
        ))}
      </div>
    )
  }

  const renderFeedbackForm = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Feedback Type *
        </label>
        <select
          value={formData.feedbackType}
          onChange={(e) => handleInputChange('feedbackType', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        >
          <option value="session">Training Session</option>
          <option value="material">Training Material</option>
          <option value="instructor">Instructor Performance</option>
          <option value="system">Training System</option>
          <option value="general">General Feedback</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Session/Material Name *
        </label>
        <input
          type="text"
          value={formData.sessionName}
          onChange={(e) => handleInputChange('sessionName', e.target.value)}
          placeholder="e.g., MLQC Introduction, Labeling SOP v2.1"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Overall Rating *
        </label>
        <div className="flex items-center space-x-4">
          <StarRating 
            rating={formData.rating} 
            onRatingChange={(rating) => handleInputChange('rating', rating)} 
          />
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {formData.rating}/5 stars
          </span>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Detailed Feedback *
        </label>
        <textarea
          value={formData.feedbackText}
          onChange={(e) => handleInputChange('feedbackText', e.target.value)}
          placeholder="Please share your experience, what worked well, and what could be improved..."
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Suggestions for Improvement
        </label>
        <textarea
          value={formData.suggestions}
          onChange={(e) => handleInputChange('suggestions', e.target.value)}
          placeholder="Any specific suggestions to make this training better?"
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </div>
  )

  const renderRequestForm = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Request Type *
        </label>
        <select
          value={formData.requestType}
          onChange={(e) => handleInputChange('requestType', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        >
          <option value="new-training">New Training Session</option>
          <option value="refresher">Refresher Training</option>
          <option value="advanced">Advanced Training</option>
          <option value="custom">Custom Training Module</option>
          <option value="update">Update Existing Material</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Training Topic/Title *
        </label>
        <input
          type="text"
          value={formData.trainingTopic}
          onChange={(e) => handleInputChange('trainingTopic', e.target.value)}
          placeholder="e.g., Advanced Quality Control Techniques, Safety Protocols"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Priority Level *
        </label>
        <select
          value={formData.priority}
          onChange={(e) => handleInputChange('priority', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        >
          <option value="low">Low - Can wait 3+ months</option>
          <option value="medium">Medium - Needed within 1-3 months</option>
          <option value="high">High - Needed within 1 month</option>
          <option value="urgent">Urgent - Needed immediately</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Detailed Description *
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          placeholder="Describe what training is needed, target audience, expected outcomes..."
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Business Justification *
        </label>
        <textarea
          value={formData.justification}
          onChange={(e) => handleInputChange('justification', e.target.value)}
          placeholder="Explain why this training is needed and how it will benefit the team/organization..."
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
    </div>
  )

  const renderNominationForm = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Nomination Type *
        </label>
        <select
          value={formData.nominationType}
          onChange={(e) => handleInputChange('nominationType', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        >
          <option value="poc">Point of Contact (POC) Group</option>
          <option value="buddy">Buddy System Mentor</option>
          <option value="trainer">Subject Matter Expert/Trainer</option>
          <option value="champion">Training Champion</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Nominee Name *
          </label>
          <input
            type="text"
            value={formData.nomineeName}
            onChange={(e) => handleInputChange('nomineeName', e.target.value)}
            placeholder="Full name of the person you're nominating"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Nominee Email *
          </label>
          <input
            type="email"
            value={formData.nomineeEmail}
            onChange={(e) => handleInputChange('nomineeEmail', e.target.value)}
            placeholder="nominee@abyss.com"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Nominee Role/Department *
        </label>
        <input
          type="text"
          value={formData.nomineeRole}
          onChange={(e) => handleInputChange('nomineeRole', e.target.value)}
          placeholder="e.g., Senior Quality Analyst, Operations Team"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Reason for Nomination *
        </label>
        <textarea
          value={formData.nominationReason}
          onChange={(e) => handleInputChange('nominationReason', e.target.value)}
          placeholder="Explain why this person would be excellent for this role. Include specific examples of their expertise, leadership, or mentoring abilities..."
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
    </div>
  )

  const renderContactInfo = () => (
    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Your Information</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Your Name *
          </label>
          <input
            type="text"
            value={formData.submitterName}
            onChange={(e) => handleInputChange('submitterName', e.target.value)}
            placeholder="Your full name"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Your Email *
          </label>
          <input
            type="email"
            value={formData.submitterEmail}
            onChange={(e) => handleInputChange('submitterEmail', e.target.value)}
            placeholder="your.email@abyss.com"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Department *
          </label>
          <input
            type="text"
            value={formData.submitterDepartment}
            onChange={(e) => handleInputChange('submitterDepartment', e.target.value)}
            placeholder="Your department"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
      </div>
    </div>
  )

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-white-600 text-white py-[14vh] overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ filter: 'brightness(0.95) blur(0px)' }}
        >
          <source src="/images/vid10.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better text visibility - now greenish and less prominent */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Feedback & Requests</h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Your voice matters! Share feedback on training sessions, request new training modules, 
              or nominate colleagues for special programs. Help us continuously improve our L&D offerings.
            </p>
          </div>
        </div>
      </section>

      {/* Form Navigation */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex">
              {forms.map((form) => {
                const Icon = form.icon
                return (
                  <button
                    key={form.id}
                    onClick={() => setActiveForm(form.id)}
                    className={`flex-1 flex items-center justify-center space-x-2 px-6 py-4 text-sm font-medium transition-colors ${
                      activeForm === form.id
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border-b-2 border-blue-600'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{form.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-8">
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <div>
                    <h4 className="text-green-800 dark:text-green-300 font-semibold">Submission Successful!</h4>
                    <p className="text-green-700 dark:text-green-400 text-sm">
                      Thank you for your submission. We'll review it and get back to you soon.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <div className="flex items-center space-x-3">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                  <div>
                    <h4 className="text-red-800 dark:text-red-300 font-semibold">Submission Failed</h4>
                    <p className="text-red-700 dark:text-red-400 text-sm">
                      There was an error submitting your form. Please try again.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Form Content Based on Active Tab */}
            {activeForm === 'feedback' && renderFeedbackForm()}
            {activeForm === 'request' && renderRequestForm()}
            {activeForm === 'nomination' && renderNominationForm()}

            {/* Contact Information (always shown) */}
            <div className="mt-8">
              {renderContactInfo()}
            </div>

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <button
                type="submit"
                disabled={submitStatus === 'submitting'}
                className={`inline-flex items-center space-x-2 px-8 py-3 rounded-lg font-semibold transition-colors ${
                  submitStatus === 'submitting'
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {submitStatus === 'submitting' ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit {forms.find(f => f.id === activeForm)?.label}</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">How We Use Your Feedback</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Your input drives continuous improvement in our L&D programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Training Improvement</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your feedback directly influences updates to training materials and delivery methods.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">New Program Development</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Training requests help us prioritize and develop new modules that address real needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Community Building</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nominations help identify and leverage expertise within our organization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeedbackPage
