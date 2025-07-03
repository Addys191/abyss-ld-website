import { Link } from 'react-router-dom'
import { ChevronRight, TrendingUp, Users, BookOpen, Calendar, Award, Target } from 'lucide-react'
import { useState, useEffect } from 'react'

const HomePage = () => {
  const announcements = [
    {
      id: 1,
      title: "New Wall-E  Training Materials update",
      date: "June 25, 2025",
      category: "Training Update",
      description: "Updation of WALL-E (MI-Workpacks) SOPs and video materials currently in progress."
    },
    {
      id: 2,
      title: "QuarterlyL&D Report - June 2025",
      date: "June 20, 2025",
      category: "Report",
      description: "Review our achievements, learnings, and areas for improvement this month."
    },
    {
      id: 3,
      title: "POC Group Nominations Open",
      date: "June 30th, 2025",
      category: "Program",
      description: "Submit nominations for Point of Contact group members for Q1 2025-2026."
    },
    {
      id: 4,
      title: "Flare Stacks Training Schedule Updated",
      date: "June 10, 2025",
      category: "Schedule",
      description: "New training sessions scheduled for Flarestacks module with upcoming hands-on practice."
    }
  ]

  const stats = [
    { label: "Training Modules", value: "4+", icon: BookOpen, color: "text-blue-600" },
    { label: "Team Members Trained", value: "50+", icon: Users, color: "text-green-600" },
    { label: "Months of Operation", value: "12+", icon: Calendar, color: "text-purple-600" },
    { label: "Success Rate", value: "95%", icon: Award, color: "text-orange-600" }
  ]

  // Carousel state for hero images
  const heroImages = [
    '/images/hero1.jpg',
    '/images/hero2.jpg',
    '/images/hero3.jpg',
    '/images/hero4.jpg',
    '/images/hero5.jpg',
    '/images/hero6.jpg',
  ]
  const [currentHero, setCurrentHero] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isPaused, heroImages.length])

  const goToPrev = () => setCurrentHero((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  const goToNext = () => setCurrentHero((prev) => (prev + 1) % heroImages.length)
  const togglePause = () => setIsPaused((prev) => !prev)

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/images/vid1.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Empowering Growth Through
                <span className="text-yellow-300"> Structured Learning</span>
              </h1>
              <p className="text-xl mb-9 text-gray-100">
                Welcome to the Abyss Learning & Development Department - your central hub for 
                training excellence, professional growth, and continuous improvement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/training"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Explore Training Programs
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImages[currentHero]}
                alt={`Learning and Development ${currentHero + 1}`}
                className={`rounded-xl shadow-2xl w-full h-96 object-cover transition-all duration-700 fade-carousel ${isPaused ? '' : 'carousel-anim'}`}
                key={heroImages[currentHero]}
                style={{ opacity: 1 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              {/* Carousel controls */}
              <button
                onClick={goToPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 z-20 transition-colors"
                aria-label="Previous image"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 z-20 transition-colors"
                aria-label="Next image"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
              {/* Pause/Play button */}
              <button
                onClick={togglePause}
                className="absolute right-2 bottom-4 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 z-20 transition-colors"
                aria-label={isPaused ? 'Play carousel' : 'Pause carousel'}
              >
                {isPaused ? (
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                ) : (
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>
                )}
              </button>
              {/* Carousel indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {heroImages.map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-3 h-3 rounded-full border border-white transition-all duration-300 ${
                      idx === currentHero ? 'bg-white' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
              <style>{`
                .fade-carousel {
                  opacity: 1;
                  transition: opacity 0.7s cubic-bezier(0.4,0,0.2,1);
                }
                .fade-carousel.carousel-anim {
                  animation: fadeInOut 4s linear;
                }
                @keyframes fadeInOut {
                  0% { opacity: 0; }
                  10% { opacity: 1; }
                  90% { opacity: 1; }
                  100% { opacity: 0; }
                }
              `}</style>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Motto Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Vision & Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Our Vision with vid7.mp4 background */}
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden min-h-[546px] flex flex-col justify-center" style={{height: '546px'}}>
              <video
                src="/images/vid7.mp4"
                className="absolute inset-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
                playsInline
                style={{height: '100%'}}
              />
              <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/60 z-10" />
              <div className="relative z-20 flex flex-col items-center justify-center h-full p-8">
                <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white" style={{fontSize: '2.08rem'}}>
                  Our Vision
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To be the driving force behind professional excellence at Abyss, creating a culture of 
                  continuous learning and development that empowers every team member to reach their full potential.
                </p>
              </div>
            </div>
            {/* Our Mission with vid8.mp4 background */}
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden min-h-[546px] flex flex-col justify-center" style={{height: '546px'}}>
              <video
                src="/images/vid8.mp4"
                className="absolute inset-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
                playsInline
                style={{height: '100%'}}
              />
              <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/60 z-10" />
              <div className="relative z-20 flex flex-col items-center justify-center h-full p-8">
                <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white" style={{fontSize: '2.08rem'}}>
                  Our Mission
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To design, deliver, and evaluate comprehensive training programs that enhance skills, 
                  reduce rework, cut costs, and improve team productivity through structured learning initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ahmad Raza Introduction */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <video
                src="/images/vid2.mp4"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Meet Our L&D Lead
              </h2>
              <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Ahmad Raza</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                As the Learning & Development Lead, Ahmad Raza has been instrumental in establishing 
                and growing the L&D department since June 2024. With a passion for transformational 
                leadership and a commitment to excellence, Ahmad leads our team using servant and 
                democratic leadership styles that foster collaboration and innovation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Award className="w-5 h-5 text-blue-600 mr-3" />
                  <span>Transformational Leadership Approach</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Users className="w-5 h-5 text-green-600 mr-3" />
                  <span>Servant Leadership Philosophy</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Target className="w-5 h-5 text-purple-600 mr-3" />
                  <span>Democratic Decision-Making Style</span>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center mt-6 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
              >
                Get in Touch
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Impact in Numbers</h2>
          <p className="text-gray-600 dark:text-gray-300">Key metrics showcasing our department's growth and success</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                <Icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Latest Updates */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Latest Updates</h2>
          <Link
            to="/reports"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold flex items-center"
          >
            View All Reports
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                  {announcement.category}
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">{announcement.date}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {announcement.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {announcement.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Grow Your Skills?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Explore our comprehensive training programs and resources designed to enhance your professional development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/training"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Browse Training Programs
            </Link>
            <Link
              to="/feedback"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Request New Training
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
