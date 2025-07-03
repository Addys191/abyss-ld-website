import { useState } from 'react'
import { Search, Filter, Download, FileText, Video, Image, Archive, Upload, Eye, Clock, User } from 'lucide-react'

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedModule, setSelectedModule] = useState('All')

  const categories = ['All', 'SOPs', 'Templates', 'Evaluation Sheets', 'Reports', 'Videos', 'Presentations']
  const modules = ['All', 'Labeling', 'MLQC', 'Tagging', 'Workpacks', 'General']

  const resources = [
    {
      id: 1,
      name: "Labeling SOP v2.1",
      category: "SOPs",
      module: "Labeling",
      type: "PDF",
      size: "2.4 MB",
      uploadDate: "2024-12-15",
      uploadedBy: "Ahmad Raza",
      downloads: 145,
      description: "Comprehensive labeling procedures and standards",
      permissions: ["View", "Download"],
      status: "Current"
    },
    {
      id: 2,
      name: "MLQC Training Template",
      category: "Templates",
      module: "MLQC",
      type: "DOCX",
      size: "890 KB",
      uploadDate: "2024-12-10",
      uploadedBy: "L&D Team",
      downloads: 67,
      description: "Training template for Multi-Level Quality Control",
      permissions: ["View", "Download", "Edit"],
      status: "Current"
    },
    {
      id: 3,
      name: "Performance Evaluation Sheet",
      category: "Evaluation Sheets",
      module: "General",
      type: "XLSX",
      size: "1.2 MB",
      uploadDate: "2024-12-08",
      uploadedBy: "Ahmad Raza",
      downloads: 89,
      description: "Monthly performance evaluation criteria and scoring",
      permissions: ["View", "Download"],
      status: "Current"
    },
    {
      id: 4,
      name: "Q4 2024 Training Report",
      category: "Reports",
      module: "General",
      type: "PDF",
      size: "3.7 MB",
      uploadDate: "2024-12-01",
      uploadedBy: "L&D Team",
      downloads: 234,
      description: "Quarterly training achievements and metrics",
      permissions: ["View", "Download"],
      status: "Current"
    },
    {
      id: 5,
      name: "Workpacks SOP Draft",
      category: "SOPs",
      module: "Workpacks",
      type: "PDF",
      size: "1.8 MB",
      uploadDate: "2024-11-28",
      uploadedBy: "Ahmad Raza",
      downloads: 23,
      description: "Draft version of workpacks standard operating procedures",
      permissions: ["View"],
      status: "Draft"
    },
    {
      id: 6,
      name: "Tagging Best Practices",
      category: "Presentations",
      module: "Tagging",
      type: "PPTX",
      size: "5.2 MB",
      uploadDate: "2024-11-25",
      uploadedBy: "L&D Team",
      downloads: 45,
      description: "Presentation on effective tagging methodologies",
      permissions: ["View", "Download"],
      status: "Current"
    }
  ]

  const getFileIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return <FileText className="w-8 h-8 text-red-500" />
      case 'docx':
        return <FileText className="w-8 h-8 text-blue-500" />
      case 'xlsx':
        return <Archive className="w-8 h-8 text-green-500" />
      case 'pptx':
        return <Image className="w-8 h-8 text-orange-500" />
      case 'mp4':
        return <Video className="w-8 h-8 text-purple-500" />
      default:
        return <FileText className="w-8 h-8 text-gray-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    if (status === 'Current') {
      return <span className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 px-2 py-1 rounded-full text-xs font-medium">Current</span>
    }
    return <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 px-2 py-1 rounded-full text-xs font-medium">Draft</span>
  }

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory
    const matchesModule = selectedModule === 'All' || resource.module === selectedModule
    
    return matchesSearch && matchesCategory && matchesModule
  })

  const stats = [
    { label: "Total Resources", value: resources.length.toString(), icon: FileText },
    { label: "Categories", value: (categories.length - 1).toString(), icon: Archive },
    { label: "Total Downloads", value: resources.reduce((sum, r) => sum + r.downloads, 0).toString(), icon: Download },
    { label: "Active Modules", value: "4", icon: User }
  ]

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ filter: 'brightness(0.8) blur(0px)' }}
        >
          <source src="/images/vid11.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/30 to-blue-800/30 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Resource Center</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Access comprehensive training materials, templates, SOPs, and evaluation resources. 
              Everything you need for successful learning and development.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                <Icon className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Upload Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
          <div className="text-center">
            <Upload className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Upload Resources</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Have documents, templates, or materials to share? Upload them here for the team to access.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Select Files to Upload
            </button>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
              Supported formats: PDF, DOCX, XLSX, PPTX, MP4. Max size: 50MB per file.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Module Filter */}
            <div>
              <select
                value={selectedModule}
                onChange={(e) => setSelectedModule(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {modules.map((module) => (
                  <option key={module} value={module}>{module}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Resources List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {filteredResources.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No resources found</h3>
              <p className="text-gray-600 dark:text-gray-300">Try adjusting your search terms or filters.</p>
            </div>
          ) : (
            filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
              >
                <div className="flex items-start space-x-4">
                  {/* File Icon */}
                  <div className="flex-shrink-0">
                    {getFileIcon(resource.type)}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                            {resource.name}
                          </h3>
                          {getStatusBadge(resource.status)}
                          <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
                            {resource.module}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                          {resource.description}
                        </p>
                        <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{resource.uploadedBy}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{new Date(resource.uploadDate).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Download className="w-4 h-4" />
                            <span>{resource.downloads} downloads</span>
                          </div>
                          <span>{resource.size}</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center space-x-2 ml-4">
                        {resource.permissions.includes('View') && (
                          <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors">
                            <Eye className="w-5 h-5" />
                          </button>
                        )}
                        {resource.permissions.includes('Download') && (
                          <button className="p-2 text-gray-500 hover:text-green-600 transition-colors">
                            <Download className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Resource Features</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Powerful tools to manage and access your learning materials
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Smart Search</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Quickly find the resources you need with our intelligent search and filtering system.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Easy Downloads</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Download resources with proper permissions and track usage analytics.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Easy Upload</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Share your resources with the team through our simple upload interface.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ResourcesPage
