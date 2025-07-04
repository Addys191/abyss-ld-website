import { ReactNode, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Moon, Sun, Users, FileText, BarChart3, MessageSquare, Phone, Home, BookOpen } from 'lucide-react'
import abyssLogo from '../assets/images/ABYSS LOGO 100.png'

interface LayoutProps {
  children: ReactNode
  darkMode: boolean
  toggleDarkMode: () => void
}

const Layout = ({ children, darkMode, toggleDarkMode }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About L&D', path: '/about', icon: Users },
    { name: 'Training Programs', path: '/training', icon: FileText },
    { name: 'Reports & Newsletters', path: '/reports', icon: BarChart3 },
    { name: 'Feedback & Requests', path: '/feedback', icon: MessageSquare },
    { name: 'Contact', path: '/contact', icon: Phone },
    { name: 'Resources', path: '/resources', icon: BookOpen },
  ]

  const isActivePath = (path: string) => {
    return location.pathname === path
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation Header */}
      <nav className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-11 h-10 bg-gradient-to-r from-indigo-600 to-yellow-700 rounded-lg flex items-center justify-center">
                  <img src={abyssLogo} alt="Abyss Logo" className="w-9 h-9 object-contain" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-blue-500 dark:text-white" style={{ fontFamily: 'Comic Relief, cursive' }}>Abyss L&D</h1>
                  <p className="text-xs font-bold text-stone-800 dark:text-gray-400">Learning & Development</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActivePath(item.path)
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    <Icon className="w-6 h-6 min-w-[1.5rem] min-h-[1.5rem] shrink-0" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>

            {/* Dark Mode Toggle and Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActivePath(item.path)
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    <Icon className="w-6 h-6 min-w-[1.5rem] min-h-[1.5rem] shrink-0" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <img src={abyssLogo} alt="Abyss Logo" className="w-9 h-9 object-contain" />
                </div>
                <h3 className="text-lg font-semibold">Abyss L&D Department</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Empowering growth through structured learning and development initiatives since June 2024.
              </p>
            </div>
            
            <div>
              <h4 className="text-md font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/training" className="text-gray-300 hover:text-white transition-colors">Training Programs</Link></li>
                <li><Link to="/resources" className="text-gray-300 hover:text-white transition-colors">Resources</Link></li>
                <li><Link to="/reports" className="text-gray-300 hover:text-white transition-colors">Monthly Reports</Link></li>
                <li><Link to="/feedback" className="text-gray-300 hover:text-white transition-colors">Submit Feedback</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-md font-semibold mb-4">Contact Information</h4>
              <div className="text-sm text-gray-300 space-y-2">
                <p>L&D Lead: Ahmad Raza</p>
                <p>Department: Learning & Development</p>
                <p>Company: Abyss</p>
                <p>Established: June 4, 2024</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
            <p>&copy; 2014-2025 Abyss Learning & Development Department. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
