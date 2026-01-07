import { Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold">Automata</span>
            </div>
            <p className="text-background/70 mb-4 max-w-sm">
              Your Work, Automated. We help businesses save time and money through smart automation solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/9488607845"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-success transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="mailto:org.automata@gmail.com"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-background/70 hover:text-background transition-colors">Home</a>
              <a href="#services" className="text-background/70 hover:text-background transition-colors">Services</a>
              <a href="#how-it-works" className="text-background/70 hover:text-background transition-colors">How It Works</a>
              <a href="#benefits" className="text-background/70 hover:text-background transition-colors">Benefits</a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="mailto:org.automata@gmail.com" 
                className="text-background/70 hover:text-background transition-colors"
              >
                org.automata@gmail.com
              </a>
              <a 
                href="https://wa.me/9488607845" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background transition-colors"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/50 text-sm">
              © {currentYear} Automata. All rights reserved.
            </p>
            <p className="text-background/50 text-sm">
              Your Work, Automated.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
