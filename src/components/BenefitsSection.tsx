import { Clock, Zap, DollarSign, Heart, CheckCircle } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Save 1-3 Hours Daily',
    description: 'Reclaim time spent on repetitive tasks and focus on growth.',
    stat: '20+ hrs/week',
  },
  {
    icon: Zap,
    title: 'Faster Responses',
    description: 'Instant replies keep leads warm and clients happy.',
    stat: '<1 min',
  },
  {
    icon: DollarSign,
    title: 'Faster Payments',
    description: 'Automated reminders mean you get paid on time.',
    stat: '50% faster',
  },
  {
    icon: Heart,
    title: 'Less Stress',
    description: 'Stop juggling reminders and let automation handle it.',
    stat: '∞ peace',
  },
  {
    icon: CheckCircle,
    title: 'Better Organization',
    description: 'Everything runs smoothly with systems in place.',
    stat: '100% clarity',
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section-padding bg-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            The Benefits
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Results You Can Feel
          </h2>
          <p className="text-lg text-muted-foreground">
            Our clients experience real, measurable improvements in their daily operations and peace of mind.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group p-6 rounded-2xl bg-card border border-border/50 text-center card-hover"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors">
                <benefit.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <div className="text-2xl font-bold text-primary mb-2">{benefit.stat}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
