import { AlertCircle, Clock, DollarSign, Brain, RefreshCw } from 'lucide-react';

const problems = [
  {
    icon: AlertCircle,
    title: 'Forgetting Follow-ups',
    description: 'Important leads and clients slip through the cracks',
  },
  {
    icon: Clock,
    title: 'Late Email Replies',
    description: 'Delayed responses that hurt your reputation',
  },
  {
    icon: DollarSign,
    title: 'Delayed Payments',
    description: 'Chasing invoices and missing revenue',
  },
  {
    icon: RefreshCw,
    title: 'Repetitive Manual Work',
    description: 'Hours wasted on tasks that could be automated',
  },
  {
    icon: Brain,
    title: 'Too Many Tools & Reminders',
    description: 'Juggling apps and notifications all day',
  },
];

const ProblemSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Why Automata?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Does This Sound Familiar?
          </h2>
          <p className="text-lg text-muted-foreground">
            Most businesses lose time and money not because they lack skill, but because important tasks are done manually.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group p-6 rounded-2xl bg-card border border-border/50 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <p className="text-center text-lg text-muted-foreground mt-12 max-w-2xl mx-auto">
          You don't need more tools. You need <span className="text-foreground font-semibold">automation that works for you</span>.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
