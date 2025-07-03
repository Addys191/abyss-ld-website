import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, User, Send, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    subject: '',
    message: '',
    priority: 'medium'
  })
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleInputChange = (field: string, value: string) => {
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
          name: '',
          email: '',
          department: '',
          subject: '',
          message: '',
          priority: 'medium'
        })
      }, 3000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: User,
      title: "L&D Department Lead",
      details: ["Ahmad Raza", "Learning & Development Lead"],
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["a.raza@abysssolutions.com.au"],
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/30"
    },
    {
      icon: Phone,
      title: "Internal Extension",
      details: ["Call: 03159696799", "Direct Line Available"],
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/30"
    },
    {
      icon: MapPin,
      title: "Department Location",
      details: ["Abyss Pakistan Office", "6th Floor, PTET Telehouse, G-10/4 Islamabad, Pakistan"],
      color: "text-orange-600",
      bgColor: "bg-orange-100 dark:bg-orange-900/30"
    }
  ]

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 5:00 PM", available: true },
    { day: "Saturday", hours: "Closed", available: false },
    { day: "Sunday", hours: "Closed", available: false },
    { day: "Emergency Contact", hours: "24/7 for urgent training needs", available: true }
  ]

  const quickActions = [
    {
      title: "Schedule Training Session",
      description: "Book a personalized training session for your team",
      action: "Schedule Now",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      title: "Request Training Materials",
      description: "Access SOPs, videos, and other learning resources",
      action: "Request Materials",
      color: "bg-green-600 hover:bg-green-700"
    },
    {
      title: "Join POC Program",
      description: "Become a Point of Contact for your department",
      action: "Apply Now",
      color: "bg-purple-600 hover:bg-purple-700"
    },
    {
      title: "Emergency Support",
      description: "Get immediate help for critical training needs",
      action: "Contact Now",
      color: "bg-red-600 hover:bg-red-700"
    }
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20 overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/images/vid6.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-teal-900/60 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-7xl font-bold mb-" style={{ fontFamily: 'Tangerine, cursive' }}>Contact L&D Department</h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Need training support, have questions, or want to collaborate? We're here to help you 
              achieve your learning and development goals. Reach out to our dedicated team.
            </p>
          </div>
        </div>
      </section>

      {/* Ahmad Raza Profile */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-cyan-600 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Ahmad Raza</h2>
                  <p className="text-lg text-blue-600 dark:text-blue-400">Learning & Development Lead</p>
                </div>
              </div>
              
              <p className="text-cyan-600 dark:text-gray-300 mb-6 leading-relaxed">
                As the L&D Department Lead, Mr. Ahmad Raza is committed to fostering a culture of continuous 
                learning and professional growth. With expertise in transformational leadership and 
                a passion for education, Ahmad ensures that every team member has access to the 
                training and resources they need to excel.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-900 dark:text-white">a.raza@abysssolutions.com.au</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-600" />
                  <span className="text-gray-900 dark:text-white">+92-315-9696799</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-900 dark:text-white">Available Monday - Friday, 9 AM - 5 PM</span>
                </div>
              </div>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=a.raza@abysssolutions.com.au&su=Direct+Message+via+LND+website&body=Hi+Ahmad%2C%0D%0A%0D%0AI+wanted+to+reach+out+to+you+directly+through+the+website." // Replace with your direct messaging app
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-gradient-to-r from-cyan-600 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2 no-underline"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send Message</span>
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-8 flex items-center justify-center">
              <img
                src="/images/contact.jpg"
                alt="Ahmad Raza - L&D Department Lead"
                className="rounded-xl shadow-lg w-full max-w-sm h-90 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Multiple ways to reach our L&D team for all your training needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                <div className={`w-12 h-12 ${info.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-6 h-6 ${info.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 dark:text-gray-300 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Office Hours */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Office Hours</h2>
            <p className="text-gray-600 dark:text-gray-300">
              When you can reach us for training support and consultations
            </p>
          </div>

          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden">
            {officeHours.map((schedule, index) => (
              <div
                key={index}
                className={`flex justify-between items-center p-6 ${
                  index !== officeHours.length - 1 ? 'border-b border-gray-200 dark:border-gray-600' : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Clock className={`w-5 h-5 ${schedule.available ? 'text-green-600' : 'text-gray-400'}`} />
                  <span className="font-medium text-gray-900 dark:text-white">{schedule.day}</span>
                </div>
                <span className={`${schedule.available ? 'text-gray-600 dark:text-gray-300' : 'text-gray-400'}`}>
                  {schedule.hours}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Send Us a Message</h2>
          
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <div>
                  <h4 className="text-green-800 dark:text-green-300 font-semibold">Message Sent Successfully!</h4>
                  <p className="text-green-700 dark:text-green-400 text-sm">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Full name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your.email@abyss.com"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Department *
                </label>
                <input
                  type="text"
                  value={formData.department}
                  onChange={(e) => handleInputChange('department', e.target.value)}
                  placeholder="Your department"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Priority Level
                </label>
                <select
                  value={formData.priority}
                  onChange={(e) => handleInputChange('priority', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="low">Low - General inquiry</option>
                  <option value="medium">Medium - Standard request</option>
                  <option value="high">High - Urgent need</option>
                  <option value="urgent">Urgent - Immediate assistance</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Subject *
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => handleInputChange('subject', e.target.value)}
                placeholder="Brief description of your inquiry"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Please provide details about your inquiry, training needs, or how we can help..."
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="text-center">
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
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Need something specific? Use these shortcuts to get immediate assistance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => {
            // Define a subject for each action
            let subject = ''
            switch (action.title) {
              case 'Schedule Training Session':
                subject = 'Schedule Training Session Request';
                break;
              case 'Request Training Materials':
                subject = 'Request for Training Materials';
                break;
              case 'Join POC Program':
                subject = 'POC Program Application';
                break;
              case 'Emergency Support':
                subject = 'Emergency Training Support Needed';
                break;
              default:
                subject = 'L&D Inquiry';
            }
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=a.raza@abysssolutions.com.au&su=${encodeURIComponent(subject)}`
            return (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{action.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{action.description}</p>
                <a
                  href={gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-block text-center text-white px-4 py-2 rounded-lg font-semibold transition-colors no-underline ${action.color}`}
                >
                  {action.action}
                </a>
              </div>
            )
          })}
        </div>
      </section>

      {/* Quick Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Quick Links</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <a
            href="/training"
            className="block bg-white dark:bg-gray-800 p-5 rounded-xl shadow-lg text-center font-semibold text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
          >
            Training Programs
          </a>
          <a
            href="/resources"
            className="block bg-white dark:bg-gray-800 p-5 rounded-xl shadow-lg text-center font-semibold text-green-700 dark:text-green-300 hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors"
          >
            Resources
          </a>
          <a
            href="/reports"
            className="block bg-white dark:bg-gray-800 p-5 rounded-xl shadow-lg text-center font-semibold text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors"
          >
            Monthly Reports
          </a>
          <a
            href="/feedback"
            className="block bg-white dark:bg-gray-800 p-5 rounded-xl shadow-lg text-center font-semibold text-red-700 dark:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
          >
            Submit Feedback
          </a>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
