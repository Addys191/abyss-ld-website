import { Calendar, CheckCircle, TrendingUp, Users, Target, Award, Lightbulb, BarChart3 } from 'lucide-react'
// Import assets from src/assets
import vid9 from '../assets/videos/vid9.mp4'
import achievementImg from '../assets/images/achievement.jpg'
import vid4 from '../assets/videos/vid4.mp4'

const AboutPage = () => {
  const achievements = [
    {
      title: "Hybrid Training Model Launch",
      description: "Designed and implemented a significantly lower time consuming and cost effective hybrid training model for Batch 13, improving efficiency and knowledge retention with 99% accuracy in initial assessments",
      icon: Target,
      color: "text-cyan-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
      title: "Data-Driven Performance Reviews",
      description: "Created Power BI-based reports analyzing Q&PT and MLQC data, enabling informed decisions like PIPs and performance-based recognition",
      icon: BarChart3,
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/30"
    },
    {
      title: "Vendor Enablement Under Constraints",
      description: "Trained a 30-member Softoo batch under tight timelines and limited resources, resulting in long-term workforce integration",
      icon: Users,
      color: "text-orange-600",
      bgColor: "bg-orange-100 dark:bg-orange-900/30"
    },
    {
      title: "Quarterly Task Readiness Evaluation (TRE) and Soft skills evaluation (SSE)",
      description: "Standardized team assessments through unbiased surveys and skill matrix integration to inform targeted training plans",
      icon: CheckCircle,
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/30"
    },
    {
      title: "Project-Specific Training Design",
      description: "Designed and executed project-specific trainings (e.g., MLQC, Tagging, Workpacks, Flarestacks)",
      icon: Target,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
      title: "Performance Reporting System",
      description: "Introduced monthly performance reports to track what we achieved, learned, and missed",
      icon: BarChart3,
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/30"
    },
    {
      title: "Comprehensive SOPs",
      description: "Developed Standard Operating Procedures (SOPs) and hosted them across visual and written formats",
      icon: CheckCircle,
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/30"
    },
    {
      title: "Support Systems Implementation",
      description: "Introduced POC Groups, Buddy-up systems, and internal soft skills evaluations",
      icon: Users,
      color: "text-orange-600",
      bgColor: "bg-orange-100 dark:bg-orange-900/30"
    },
    {
      title: "Custom Refresher Programs",
      description: "Provided custom refresher sessions based on quarterly analysis",
      icon: Lightbulb,
      color: "text-pink-600",
      bgColor: "bg-pink-100 dark:bg-pink-900/30"
    },
    {
      title: "Cost-Effective Training Plans",
      description: "Created training plans that helped cut costs, reduced rework, and improved team productivity",
      icon: TrendingUp,
      color: "text-indigo-600",
      bgColor: "bg-indigo-100 dark:bg-indigo-900/30"
    },
    {
      title: "Leadership Excellence",
      description: "Led the L&D direction using transformational, servant, and democratic leadership styles",
      icon: Award,
      color: "text-red-600",
      bgColor: "bg-red-100 dark:bg-red-900/30"
    },
    {
      title: "Vendor Model Upskilling – Scab Scaling",
      description: "Conducted hands-on training and trials for Cloud Factory and DVL to ensure smooth implementation of updated Scab Scaling models",
      icon: Lightbulb,
      color: "text-pink-600",
      bgColor: "bg-pink-100 dark:bg-pink-900/30"
    }
  ]

  const timeline = [
    { date: "June 3, 2024", event: "L&D Department Establishment", description: "Formal establishment under Ahmad Raza's leadership" },
    { date: "July 2024", event: "First Training Modules", description: "Launched initial MLQC and Labeling refresher programs" },
    { date: "August 2024", event: "Power BI Insights Delivered", description: "Delivered data-driven insights via comprehensive Power BI reports on Q&PT data" },
    { date: "September 2024", event: "SOP Development", description: "Successfully conducted on-site training for vendor Softoo," },
    { date: "November 2024", event: "Hybrid System Launched", description: "Designed and launched the Hybrid Training Model for Batch 13" },
    { date: "December 2024", event: "TRE System Rollout & Buddy System Implementation", description: "Rolled out the Task Readiness Evaluation (TRE), a first-of-its-kind system" },
    { date: "January 2025", event: "Batch 13 Hybrid-Model training completed", description: "First ever Hybrid Training model was successfully completed for Batch 13 members" },
    { date: "March 2025", event: "Batch 14 Hybrid-Model training completed", description: "Second and highly successful round of Hybrid trainings completed for Batch 14 members" },
    { date: "June 2025", event: "One Year Milestone", description: "Celebrating 12 months of excellence and growth" }
  ]

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ filter: 'brightness(0.75) blur(0px)' }} // Increased brightness for more visibility
        >
          <source src={vid9} type="video/mp4" />
        </video>
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/40 to-purple-700/40 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Journey Through the ABYSS: Discover, Learn & Grow.</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover the story of how we've transformed learning and development at Abyss 
              through structured, proactive, and innovative approaches.
            </p>
          </div>
        </div>
      </section>

      {/* Department Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <Calendar className="w-8 h-8 text-blue-600 mr-3" />
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                Established June 4, 2024
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Journey</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                The Learning & Development (L&D) Department at Abyss was formally established on June 3rd, 2024, 
                under the leadership of Ahmad Raza. Over the past year, it has evolved into a structured, 
                proactive force that shapes how training is designed, delivered, and evaluated.
              </p>
            </div>
          </div>
          <div>
            <img
              src={achievementImg}
              alt="Achievement and growth"
              className="rounded-xl shadow-lg w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sky-500 dark:text-white mb-4">Our Timeline</h2>
            <p className="text-gray-600 dark:text-gray-300">Key milestones in our journey from June 2024 to June 2025</p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300 dark:bg-gray-600"></div>
            <div className="space-y-6"> {/* Reduced from space-y-12 to space-y-6 */}
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800"></div>
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                      <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">{item.date}</div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.event}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-center max-w-2xl mx-auto mt-0 mb-12">
          {/* Bubble with background video */}
          <div
            className="relative w-full rounded-2xl shadow-2xl overflow-hidden"
            style={{ width: '140%', height: '120%' }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0"
              style={{ filter: 'brightness(1) blur(0px)' }}
            >
              <source src={vid4} type="video/mp4" />
            </video>
            <div className="relative z-10 rounded-2xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-xs p-10 flex flex-col items-center"
              style={{ minHeight: '120%' }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Key Achievements</h2>
              <p className="text-2xl font-bold text-teal-900/80 dark:text-gray-300 text-center">
                Accomplishments from June 2024 to June 2025 that have shaped our department's success
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className={`w-12 h-12 ${achievement.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${achievement.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Leadership Philosophy</h2>
            <p className="text-purple-100 text-lg">
              Our approach to leadership that drives success and fosters growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Transformational Leadership</h3>
              <p className="text-purple-100">
                Inspiring and motivating team members to exceed their own expectations and achieve extraordinary results.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Servant Leadership</h3>
              <p className="text-purple-100">
                Putting the needs of team members first and helping them perform as highly as possible.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Democratic Leadership</h3>
              <p className="text-purple-100">
                Encouraging participation in decision-making and valuing input from all team members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Looking Ahead</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              As we continue to grow and evolve, our commitment remains steadfast: to provide exceptional 
              learning experiences that empower every team member at Abyss. We're building a future where 
              continuous learning is not just encouraged but embedded in our organizational DNA.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
