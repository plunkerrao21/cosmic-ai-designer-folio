import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, Calendar } from 'lucide-react';

const timeline = [
  {
    year: '2024',
    title: 'AI-Enhanced UI/UX Designer',
    organization: 'Freelance & Projects',
    description: 'Specialized in AI-powered design workflows, creating prototypes that bridge design and development',
    icon: Award,
    type: 'current'
  },
  {
    year: '2024',
    title: 'UI/UX Design Internship',
    organization: 'Ceeras - 6 Months',
    description: 'Intensive hands-on experience in user-centered design, prototyping, and collaborative development',
    icon: Users,
    type: 'experience'
  },
  {
    year: '2023',
    title: 'UI/UX Design Certification',
    organization: 'Professional Development',
    description: 'Completed comprehensive certification in modern UI/UX principles and industry best practices',
    icon: Award,
    type: 'certification'
  },
  {
    year: '2021-Present',
    title: 'Computer Engineering',
    organization: 'Dilkap College',
    description: 'Building strong technical foundation with focus on software development and emerging technologies',
    icon: GraduationCap,
    type: 'education'
  }
];

const achievements = [
  {
    number: '15+',
    label: 'Projects Completed',
    description: 'From concept to prototype'
  },
  {
    number: '6',
    label: 'Months Experience',
    description: 'Professional internship'
  },
  {
    number: '10x',
    label: 'Faster Prototyping',
    description: 'With AI enhancement'
  },
  {
    number: '100%',
    label: 'Client Satisfaction',
    description: 'Quality-focused delivery'
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 cosmic-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating meaningful digital experiences through the perfect blend of design intuition and AI-powered efficiency
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Personal story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">My Design Philosophy</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I believe great design isn't just about aesthetics—it's about creating solutions that genuinely improve people's lives. 
                My journey began with traditional design principles, but I've embraced AI as a powerful ally to amplify creativity and efficiency.
              </p>
              <p>
                During my 6-month internship at Ceeras, I discovered the transformative power of combining human intuition with 
                AI-enhanced workflows. This approach allows me to iterate faster, explore more possibilities, and ultimately 
                deliver better results for users and clients.
              </p>
              <p>
                Every project is an opportunity to push boundaries—whether it's creating seamless user experiences, 
                implementing cutting-edge design trends, or finding innovative ways to bridge the gap between design and development.
              </p>
            </div>

            <div className="glass-card p-6 bg-gradient-to-br from-primary/10 to-secondary/10">
              <h4 className="font-semibold mb-3 cosmic-text">Core Values</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>User-centered design thinking</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>AI-enhanced creative workflows</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Continuous learning and adaptation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Collaborative team approach</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Achievement stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-6">Achievements</h3>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 text-center hover:shadow-glow transition-all duration-300"
                >
                  <div className="text-3xl font-bold cosmic-text mb-2">
                    {achievement.number}
                  </div>
                  <div className="font-medium mb-1">{achievement.label}</div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-12">Journey & Education</h3>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-center gap-8 mb-12 last:mb-0"
              >
                {/* Timeline line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-6 top-16 w-px h-20 bg-gradient-to-b from-primary to-secondary opacity-30"></div>
                )}

                {/* Icon */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 ${
                  item.type === 'current' ? 'bg-gradient-to-br from-primary to-secondary' :
                  item.type === 'experience' ? 'bg-gradient-to-br from-secondary to-primary' :
                  'bg-gradient-to-br from-muted to-muted-foreground'
                }`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 glass-card p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.type === 'current' ? 'bg-primary/20 text-primary' :
                      item.type === 'experience' ? 'bg-secondary/20 text-secondary' :
                      'bg-muted/20 text-muted-foreground'
                    }`}>
                      {item.year}
                    </span>
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                  <p className="text-primary font-medium mb-2">{item.organization}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;