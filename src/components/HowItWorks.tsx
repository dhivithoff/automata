import { Search, Cog, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Understand Your Process',
    description: 'We analyze your current workflow to identify time-consuming tasks and bottlenecks that can be automated.',
  },
  {
    number: '02',
    icon: Cog,
    title: 'Automate Repetitive Tasks',
    description: 'We build custom automation systems tailored to your specific needs — no one-size-fits-all solutions.',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Monitor and Improve',
    description: 'We continuously track performance and optimize your automations for better results over time.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Three Simple Steps to Automation
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting started is easy. We handle all the technical details so you can focus on what you do best.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent -z-10" />
              )}
              
              <div className="text-center">
                {/* Step number */}
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center shadow-primary">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-sm font-bold">
                    {step.number.slice(-1)}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
