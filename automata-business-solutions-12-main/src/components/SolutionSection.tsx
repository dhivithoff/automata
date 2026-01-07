import { Mail, Bell, FileText, Zap } from 'lucide-react';

const solutions = [
  {
    icon: Mail,
    title: 'Follow-ups',
    description: 'Never miss a lead or client again',
  },
  {
    icon: Bell,
    title: 'Reminders',
    description: 'Timely alerts for every deadline',
  },
  {
    icon: FileText,
    title: 'Emails & Reports',
    description: 'Automatic responses and documentation',
  },
  {
    icon: Zap,
    title: 'Routine Tasks',
    description: 'Repetitive work handled automatically',
  },
];

const SolutionSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Simple Automation That{' '}
              <span className="gradient-text">Just Works</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Automata builds simple automation systems that work in the background so you don't have to remember everything. We handle the technical work — you focus on growing your business.
            </p>

            <div className="space-y-4">
              {['Save hours every week', 'Reduce human errors', 'Improve response times', 'Scale without hiring'].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Solution Cards */}
          <div className="grid grid-cols-2 gap-4">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                className={`p-6 rounded-2xl bg-card border border-border/50 card-hover ${
                  index % 2 === 1 ? 'mt-8' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {solution.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
