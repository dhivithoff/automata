import { ArrowRight, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Let Your Business Run on Autopilot
          </h2>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Stop spending time on tasks that machines can handle. Start your
            automation journey today and see the difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Demo Button */}
            <Button
              size="xl"
              className="bg-background text-primary hover:bg-background/90 shadow-xl"
              asChild
            >
              <a href="#contact">
                Get Free Demo
                <ArrowRight className="ml-1" size={20} />
              </a>
            </Button>

            {/* WhatsApp Button */}
            <Button variant="whatsapp" size="xl" asChild>
              <a
                href="https://wa.me/9488607845"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
            </Button>

            {/* Email Button (Pre-filled) */}
            <Button
              size="xl"
              className="bg-primary-foreground/10 text-primary-foreground border-2 border-primary-foreground/20 hover:bg-primary-foreground/20"
              asChild
            >
              {/* <a
                href="mailto:org.automata@gmail.com?subject=Automata%20Automation%20Request&body=Hi%20Automata%2C%0A%0AI%20want%20to%20automate%20my%20business.%20Please%20contact%20me.%0A%0AThanks"
              >
                <Mail size={20} />
                Email Us
              </a> */}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
