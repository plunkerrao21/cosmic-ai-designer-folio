import { motion } from 'framer-motion';
import { ExternalLink, Github, Figma, Sparkles } from 'lucide-react';
import glassCalculatorImg from '@/assets/glass-calculator.jpg';
import focusHubImg from '@/assets/focus-hub.jpg';
import nexusTodoImg from '@/assets/nexus-todo.jpg';

const projects = [
  {
    title: 'Glass Calculator',
    description: 'Minimalistic glassmorphic calculator with responsive UI and smooth animations',
    image: glassCalculatorImg,
    type: 'Live Prototype',
    tech: ['HTML', 'CSS', 'JavaScript', 'Glassmorphism'],
    links: {
      live: 'https://glasscalcuator-o3qentv09-anuj-dighes-projects.vercel.app/',
      github: 'https://github.com/plunkerrao21/glasscalcuator'
    },
    category: 'developed'
  },
  {
    title: 'FocusHub Landing',
    description: 'Modern landing page with AI-enhanced productivity features and responsive design',
    image: focusHubImg,
    type: 'Landing Page',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    links: {
      live: 'https://focus-hub-landingpage.vercel.app/',
      github: '#'
    },
    category: 'developed'
  },
  {
    title: 'NexusCheck To-Do',
    description: 'Advanced task management app with AI-powered organization and beautiful UI',
    image: nexusTodoImg,
    type: 'Web Application',
    tech: ['React', 'TypeScript', 'AI Integration'],
    links: {
      live: 'https://to-do-list-nexuscheck.vercel.app/',
      github: '#'
    },
    category: 'developed'
  },
  {
    title: 'Mood Changer',
    description: 'Interactive mood tracking application with dynamic color themes',
    image: '/api/placeholder/400/300',
    type: 'Interactive App',
    tech: ['JavaScript', 'CSS Animations', 'UI/UX'],
    links: {
      github: 'https://github.com/plunkerrao21/Mood-changer-plunkerrao21'
    },
    category: 'developed'
  },
  {
    title: 'Squidly Expense Tracker',
    description: 'Comprehensive expense tracking app with beautiful data visualization',
    image: '/api/placeholder/400/300',
    type: 'Figma Design',
    tech: ['Figma', 'UI/UX', 'Data Visualization'],
    links: {
      figma: 'https://www.figma.com/design/J86EQsEnzj57EC20XsM6Hl/SQUIDLY--UI---expense-tracker-'
    },
    category: 'design'
  },
  {
    title: "Women's Safety App",
    description: 'Empowering women with safety features and emergency response system',
    image: '/api/placeholder/400/300',
    type: 'Figma Design',
    tech: ['Figma', 'UX Research', 'Safety Design'],
    links: {
      figma: 'https://www.figma.com/design/ZX7Q3osw3j2FhtgZuCGMUM/Womens-safety-app'
    },
    category: 'design'
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 cosmic-text">
            Project Showcase
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From concept to prototype - showcasing the power of AI-enhanced design workflows
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12"
        >
          <button className="glass-button px-6 py-3 text-sm font-medium bg-primary/20 text-primary">
            All Projects
          </button>
          <button className="glass-button px-6 py-3 text-sm font-medium hover:bg-primary/10">
            Live Prototypes
          </button>
          <button className="glass-button px-6 py-3 text-sm font-medium hover:bg-secondary/10">
            Figma Designs
          </button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden group hover:shadow-glow transition-all duration-500"
            >
              {/* Project image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <div className="absolute top-4 right-4 z-20">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.category === 'developed' 
                      ? 'bg-primary/20 text-primary border border-primary/30' 
                      : 'bg-secondary/20 text-secondary border border-secondary/30'
                  }`}>
                    {project.type}
                  </span>
                </div>
                
                {/* Project image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-muted/20 text-xs rounded-md text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project links */}
                <div className="flex gap-3">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.links.github && project.links.github !== '#' && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-muted/20 text-foreground rounded-lg hover:bg-muted/30 transition-colors text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.links.figma && (
                    <a
                      href={project.links.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-secondary/20 text-secondary rounded-lg hover:bg-secondary/30 transition-colors text-sm font-medium"
                    >
                      <Figma className="w-4 h-4" />
                      Design
                    </a>
                  )}
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more projects or collaborate?
          </p>
          <button className="glass-button px-8 py-4 text-lg font-semibold text-primary-foreground hover:text-primary transition-colors">
            Let's Connect
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;