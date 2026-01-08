import { Mail, UserCheck, CreditCard, FileText, ListTodo } from 'lucide-react';

const services = [
  {
    icon: Mail,
    title: 'Automated Email Replies',
    description: 'Respond to inquiries instantly, even outside business hours.',
    benefit: 'Never lose a lead to slow response times',
  },
  {
    icon: UserCheck,
    title: 'Follow-Up Automation',
    description: 'Automatic reminders and follow-ups for leads and clients.',
    benefit: 'Close more deals with consistent outreach',
  },
  {
    icon: CreditCard,
    title: 'Payment Reminder Systems',
    description: 'Timely payment reminders sent automatically to clients.',
    benefit: 'Get paid faster with less effort',
  },
  {
    icon: FileText,
    title: 'Invoice & Report Automation',
    description: 'Generate and send invoices and reports automatically.',
    benefit: 'Save hours on paperwork every week',
  },
  {
    icon: ListTodo,
    title: 'Task & Workflow Automation',
    description: 'Connect your tools and automate complex workflows.',
    benefit: 'Focus on high-value work that matters',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Automation Solutions That Deliver Results
          </h2>
          <p className="text-lg text-muted-foreground">
            Every automation we build saves time, reduces errors, and improves consistency in your business operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-gradient-card border border-border/50 card-hover"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              <div className="pt-4 border-t border-border/50">
                <span className="text-sm font-medium text-accent">
                  ✓ {service.benefit}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
