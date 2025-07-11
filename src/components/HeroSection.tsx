import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Zap, Code2 } from 'lucide-react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const fullText = 'AI-Enhanced UI/UX Designer & Prototyper';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 glass-card flex items-center justify-center"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Sparkles className="w-8 h-8 text-primary" />
        </motion.div>
        
        <motion.div
          className="absolute top-32 right-20 w-20 h-20 glass-card flex items-center justify-center"
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        >
          <Zap className="w-10 h-10 text-secondary" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 left-20 w-12 h-12 glass-card flex items-center justify-center"
          animate={{ y: [-5, 15, -5] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        >
          <Code2 className="w-6 h-6 text-primary" />
        </motion.div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-6xl md:text-8xl font-black font-orbitron mb-4 cosmic-text glow-text">
            ANUJ D. DIGHE
          </h1>
          
          <div className="h-20 flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl font-medium text-foreground/90 font-poppins">
              {text}
              <span className="animate-pulse text-primary">|</span>
            </h2>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Bridging stunning designs to functional prototypes with{' '}
          <span className="cosmic-text font-semibold">AI superpowers</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-6 justify-center mb-16"
        >
          <button className="glass-button px-8 py-4 text-lg font-semibold text-primary-foreground hover:text-primary transition-colors">
            View Projects
          </button>
          <button className="glass-button px-8 py-4 text-lg font-semibold text-secondary-foreground hover:text-secondary transition-colors">
            AI Workflow
          </button>
        </motion.div>

        {/* Workflow visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="glass-card p-8 max-w-2xl mx-auto mb-16"
        >
          <h3 className="text-lg font-semibold mb-6 text-center">Design-to-Code Pipeline</h3>
          <div className="flex items-center justify-between gap-4 text-sm">
            <div className="flex-1 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-primary font-bold">F</span>
              </div>
              <p className="text-muted-foreground">Figma Design</p>
            </div>
            
            <div className="w-8 h-px bg-gradient-to-r from-primary to-secondary"></div>
            
            <div className="flex-1 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Sparkles className="w-6 h-6 text-secondary" />
              </div>
              <p className="text-muted-foreground">AI Enhancement</p>
            </div>
            
            <div className="w-8 h-px bg-gradient-to-r from-secondary to-primary"></div>
            
            <div className="flex-1 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <p className="text-muted-foreground">Live Prototype</p>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col items-center"
        >
          <p className="text-muted-foreground mb-4">Explore My Work</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;