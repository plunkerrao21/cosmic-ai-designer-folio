import { motion } from 'framer-motion';
import { Figma, Palette, Zap, Code2, Sparkles, Brain, Layers, Users } from 'lucide-react';

const skills = [
  {
    category: 'Design Excellence',
    icon: Palette,
    color: 'primary',
    items: [
      { name: 'UI/UX Design', level: 95, icon: Figma },
      { name: 'Wireframing', level: 90, icon: Layers },
      { name: 'Prototyping', level: 92, icon: Zap },
      { name: 'UX Research', level: 85, icon: Users },
    ]
  },
  {
    category: 'AI-Powered Workflow',
    icon: Brain,
    color: 'secondary',
    items: [
      { name: 'AI Enhancement', level: 88, icon: Sparkles },
      { name: 'Design Automation', level: 85, icon: Zap },
      { name: 'Smart Prototyping', level: 90, icon: Brain },
      { name: 'Code Generation', level: 80, icon: Code2 },
    ]
  },
  {
    category: 'Technical Skills',
    icon: Code2,
    color: 'primary',
    items: [
      { name: 'HTML/CSS/JS', level: 85, icon: Code2 },
      { name: 'React Basics', level: 75, icon: Code2 },
      { name: 'Rive Animations', level: 80, icon: Zap },
      { name: 'Figma to Code', level: 90, icon: Figma },
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 cosmic-text">
            Skills Matrix
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit combining design mastery with AI-enhanced workflows
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: groupIndex * 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-6 hover:shadow-glow transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br from-${skillGroup.color}/30 to-${skillGroup.color}/10 rounded-xl flex items-center justify-center mr-4`}>
                  <skillGroup.icon className={`w-6 h-6 text-${skillGroup.color}`} />
                </div>
                <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
              </div>

              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <skill.icon className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-muted/20 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: groupIndex * 0.2 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r from-${skillGroup.color} to-${skillGroup.color}-glow rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating skill indicator */}
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4 text-white" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* AI Workflow Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 glass-card p-8 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 cosmic-text">AI-Enhanced Design Process</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Leveraging cutting-edge AI tools to accelerate design workflows, automate repetitive tasks, 
              and generate pixel-perfect prototypes that bridge the gap between design and development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;