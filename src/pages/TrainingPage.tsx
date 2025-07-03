import { ExternalLink, FileText, Play, Package, FlaskConical, Tag, FolderOpen, Clock, Users, CheckCircle } from 'lucide-react'

const TrainingPage = () => {
  const trainingModules = [
    {
      id: 1,
      title: "Labeling",
      icon: Package,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      borderColor: "border-blue-200 dark:border-blue-800",
      description: "Comprehensive training on proper labeling procedures and standards for all products and materials.",
      status: "Active",
      materials: [
        {
          type: "SOP",
          title: "Labeling SOP",
          url: "https://tinyurl.com/3n94h3zy",
          available: true
        },
        {
          type: "Video",
          title: "Labeling Introduction",
          url: "https://drive.google.com/file/d/1nJuzVnezvasRKwM5xToK_2g-NZrrWQ4e/view?usp=drive_link",
          available: true,
          description: "Introduction to labeling fundamentals"
        },
        {
          type: "Video",
          title: "Extended Asset parts labeling (Intro)",
          url: "https://drive.google.com/file/d/1ro5vjQXnLxl647o1rIBJD3kqftZMKXJf/view?usp=drive_link",
          available: true,
          description: "Extended asset parts labeling introduction"
        },
        {
          type: "Video",
          title: "Extended Asset parts labeling (Training)",
          url: "https://drive.google.com/file/d/1c5qt8sY85-IEj5gdxQsoI7sA5dGIYi7b/view?usp=drive_link",
          available: true,
          description: "Comprehensive extended asset parts labeling training session"
        }
      ]
    },
    {
      id: 2,
      title: "Defect QC (MLQC)",
      icon: FlaskConical,
      color: "text-green-600",
      bgColor: "bg-fuchsia-100 dark:bg-indigo-900/30",
      borderColor: "border-green-200 dark:border-green-800",
      description: "Multi-Level Quality Control training focusing on defect identification and resolution procedures.",
      status: "Active",
      materials: [
        {
          type: "SOP",
          title: "Defect QC SOP",
          url: "https://docs.google.com/document/d/1keGV6c4QsM4uYBleTUHuozFshgKNee65rKZTjNgbB20/edit?tab=t.0",
          available: true
        },
        {
          type: "SOP",
          title: "MLQC Refresher Document",
          url: "https://docs.google.com/document/d/16HeCxuim8b0ELXrqawW6JrFl6dJ07R-chHOjNJKb-4o/edit?tab=t.0#heading=h.9pwbmauqh2f2",
          available: true
        },
        {
          type: "Video",
          title: "Defect QC Introduction",
          url: "https://tinyurl.com/2asa6aab",
          available: true,
          description: "Introduction to defect quality control"
        },
        {
          type: "Video",
          title: "Defect QC Training",
          url: "https://tinyurl.com/2p9p3hk6",
          available: true,
          description: "Advanced defect QC training methods"
        }
      ]
    },
    {
      id: 3,
      title: "Tagging",
      icon: Tag,
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
      borderColor: "border-purple-200 dark:border-purple-800",
      description: "Training on effective tagging systems and methodologies for project organization and tracking.",
      status: "Active",
      materials: [
        {
          type: "SOP",
          title: "Tagging SOP",
          url: "https://docs.google.com/document/d/1Fuxm8AuhYSHXMNvUSe17WHiBqk8RJRpc/edit?usp=drive_link&ouid=108710446304904853234&rtpof=true&sd=true",
          available: true,
          placeholder: "sop file available"
        },
        {
          type: "Video",
          title: "Tagging Overview",
          url: "https://drive.google.com/file/d/1PDt_Nicfr3RxJ-Z-V8dDotDDGG-nkZeC/view?usp=drive_link",
          available: true
        },
        {
          type: "Video",
          title: "Tagging Introduction",
          url: "https://drive.google.com/file/d/1G6_IO6IflVDgDCPhen0Ffi5PlL_gbhiG/view?usp=drive_link",
          available: true,
          placeholder: "Video production in progress"
        },
        {
          type: "Video",
          title: "Tagging Training",
          url: "https://drive.google.com/file/d/17AAlqTu5Fdd6UqEX1vTPtQqzpYSIC9Dh/view?usp=drive_link",
          available: true,
          placeholder: "Video production in progress"
        }
      ]
    },
    {
      id: 4,
      title: "Workpacks",
      icon: FolderOpen,
      color: "text-orange-600",
      bgColor: "bg-orange-100 dark:bg-orange-900/30",
      borderColor: "border-orange-200 dark:border-orange-800",
      description: "Comprehensive training on workpack creation, management, and execution procedures.",
      status: "Coming Soon",
      materials: [
        {
          type: "SOP",
          title: "Workpacks SOP",
          url: null,
          available: false,
          placeholder: "Upload pending"
        },
        {
          type: "Video",
          title: "Workpacks Introduction",
          url: null,
          available: false,
          placeholder: "Video production scheduled"
        },
        {
          type: "Video",
          title: "Workpacks Training",
          url: null,
          available: false,
          placeholder: "Video production scheduled"
        }
      ]
    }
  ]

  const stats = [
    { label: "Active Modules", value: "5", icon: CheckCircle },
    { label: "Hours of Content", value: "8+", icon: Clock },
    { label: "Participants Trained", value: "100+", icon: Users },
    { label: "Success Rate", value: "95%", icon: CheckCircle }
  ]

  const getStatusBadge = (status: string) => {
    if (status === "Active") {
      return <span className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">Active</span>
    }
    return <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 px-3 py-1 rounded-full text-sm font-medium">Coming Soon</span>
  }

  const renderMaterial = (material: any, moduleColor: string) => {
    const isVideo = material.type === "Video"
    const Icon = isVideo ? Play : FileText

    if (!material.available) {
      return (
        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg opacity-75">
          <div className="flex items-center space-x-3">
            <Icon className="w-5 h-5 text-gray-400" />
            <div>
              <h4 className="font-medium text-gray-500 dark:text-gray-400">{material.title}</h4>
              <p className="text-sm text-gray-400 dark:text-gray-500">{material.placeholder}</p>
            </div>
          </div>
          <span className="text-sm text-gray-400 bg-gray-200 dark:bg-gray-600 px-3 py-1 rounded-full">
            Pending
          </span>
        </div>
      )
    }

    return (
      <a
        href={material.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow group"
      >
        <div className="flex items-center space-x-3">
          <Icon className={`w-5 h-5 ${moduleColor} group-hover:scale-110 transition-transform`} />
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white">{material.title}</h4>
            {material.description && (
              <p className="text-sm text-gray-600 dark:text-gray-300">{material.description}</p>
            )}
          </div>
        </div>
        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
      </a>
    )
  }

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/images/vid3.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeInUp opacity-0" id="hero-animated-training">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Training Programs</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Comprehensive learning modules designed to enhance your skills and boost productivity. 
              From SOPs to hands-on video training, we've got you covered.
            </p>
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

      {/* Statistics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="bg-white/40 dark:bg-gray-800/40 p-6 rounded-xl shadow-lg text-center border border-white/30 dark:border-gray-700 backdrop-blur-md">
                <Icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Training Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Training Overview</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Our training programs are meticulously designed to provide both theoretical knowledge and practical skills. 
            Each module includes comprehensive Standard Operating Procedures (SOPs), introductory videos, and detailed 
            training sessions. Whether you're new to a process or looking to refresh your knowledge, our structured 
            approach ensures effective learning and skill development.
          </p>
        </div>
      </section>

      {/* Training Modules */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Available Training Modules</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Explore our comprehensive training library with SOPs, videos, and hands-on materials
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {trainingModules.map((module) => {
            const Icon = module.icon
            return (
              <div
                key={module.id}
                className={`bg-white/40 dark:bg-gray-800/40 rounded-xl shadow-lg border-2 ${module.borderColor} overflow-hidden border-white/30 dark:border-gray-700 backdrop-blur-md`}
              >
                {/* Module Header */}
                <div className={`${module.bgColor} p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Icon className={`w-8 h-8 ${module.color}`} />
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{module.title}</h3>
                    </div>
                    {getStatusBadge(module.status)}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{module.description}</p>
                </div>

                {/* Module Materials */}
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Training Materials</h4>
                  <div className="space-y-3">
                    {module.materials.map((material, index) => (
                      <div key={index}>
                        {renderMaterial(material, module.color)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Training Features */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16 relative overflow-hidden">
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What Makes Our Training Special</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Discover the unique features that set our training programs apart
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Comprehensive SOPs</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Detailed Standard Operating Procedures that provide step-by-step guidance for every process.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Video Learning</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Engaging video content that makes complex topics easy to understand and retain.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Expert Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Access to POC groups and buddy systems for personalized learning support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Have questions about our training programs or need to request a new training module? 
            We're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/feedback"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Request Training
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact L&D Team
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TrainingPage
