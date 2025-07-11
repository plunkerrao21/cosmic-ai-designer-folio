import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Mail, Sparkles } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'Skills', href: '#skills', icon: Sparkles },
  { name: 'Projects', href: '#projects', icon: Briefcase },
  { name: 'About', href: '#about', icon: User },
  { name: 'Contact', href: '#contact', icon: Mail },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className={`glass-card px-8 py-4 flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'shadow-glow' : ''
          }`}>
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg cosmic-text">AD</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.href.substring(1)
                      ? 'bg-primary/20 text-primary'
                      : 'hover:bg-primary/10 text-muted-foreground hover:text-primary'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg glass-button"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          x: isOpen ? '0%' : '100%' 
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 right-0 bottom-0 w-80 glass-card z-50 md:hidden"
      >
        <div className="p-6 pt-20">
          <div className="space-y-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 50 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'bg-primary/20 text-primary'
                    : 'hover:bg-primary/10 text-muted-foreground hover:text-primary'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mobile Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
        />
      )}
    </>
  );
};

export default Navigation;