import { Building2, Users, User, Briefcase, Laptop, UserCog } from 'lucide-react';

const audiences = [
  { icon: Building2, title: 'Small Businesses', description: 'Growing companies ready to scale' },
  { icon: Users, title: 'Agencies', description: 'Marketing & creative teams' },
  { icon: User, title: 'Freelancers', description: 'Independent professionals' },
  { icon: Briefcase, title: 'Consultants', description: 'Advisory service providers' },
  { icon: Laptop, title: 'Service Providers', description: 'Client-focused businesses' },
  { icon: UserCog, title: 'Professionals', description: 'Anyone managing work manually' },
];

const WhoItsFor = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Who It's For
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Built for Busy Professionals
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're running a business or managing projects solo, automation can transform the way you work.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="group p-6 rounded-2xl bg-card border border-border/50 text-center card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                <audience.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">
                {audience.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
