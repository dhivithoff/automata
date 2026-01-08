import { MessageCircle, Mail, Send, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* LEFT CONTENT */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Get In Touch
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Automate?
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Book a free demo and see how Automata can transform your workflow.
              No commitment, just a friendly conversation about your needs.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href="https://wa.me/9488607845"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-success/10 hover:bg-success/20 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-success flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-success-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground group-hover:text-success transition-colors">
                    Chat on WhatsApp
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Quick response, anytime
                  </div>
                </div>
              </a>

              <a
                href="mailto:org.automata@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    Email Us
                  </div>
                  <div className="text-sm text-muted-foreground">
                    org.automata@gmail.com
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-card rounded-3xl p-8 border border-border/50 shadow-lg">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Send us a message
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-12 h-12 text-success mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Message Sent!
                </h4>
                <p className="text-muted-foreground">
                  We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form
                action="https://formsubmit.co/org.automata@gmail.com"
                method="POST"
                onSubmit={() => setSubmitted(true)}
                className="space-y-5"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="New Lead from Automata Website" />
                <input type="hidden" name="_next" value="https://automata-rose.vercel.app/#contact" />

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input name="name" required />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input name="email" type="email" required />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <Textarea name="message" rows={4} required />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-xl flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
