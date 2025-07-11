import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/plunkerrao21',
    color: 'text-white hover:text-primary'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: '#',
    color: 'text-blue-400 hover:text-blue-300'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: '#',
    color: 'text-cyan-400 hover:text-cyan-300'
  }
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 cosmic-text">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's collaborate and create something amazing together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">anuj.dighe@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p className="text-muted-foreground">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 glass-card flex items-center justify-center rounded-xl ${social.color} transition-colors`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass-card p-6 bg-gradient-to-br from-primary/10 to-secondary/10">
              <h4 className="font-semibold mb-3 cosmic-text">Currently Available For</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>UI/UX Design Projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Figma to Prototype Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>AI-Enhanced Design Consulting</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Long-term Collaborations</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-muted/20 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-muted/20 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-muted/20 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-muted/20 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project, goals, and how I can help..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full glass-button px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;