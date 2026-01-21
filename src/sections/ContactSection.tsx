import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle } from "lucide-react";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: personalInfo.linkedin,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View GitHub Profile",
      href: personalInfo.github,
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-muted/30 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm actively looking for data engineering opportunities. Feel free to
            reach out if you'd like to discuss potential collaborations or just
            want to connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {contactLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-5 rounded-xl card-gradient border border-border shadow-soft hover:shadow-glow hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="p-3 rounded-xl gradient-bg group-hover:scale-110 transition-transform">
                      <link.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-5 rounded-xl card-gradient border border-border shadow-soft">
                    <div className="p-3 rounded-xl gradient-bg">
                      <link.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                      <p className="font-medium text-foreground">{link.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 rounded-2xl card-gradient border border-border shadow-soft"
          >
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl gradient-bg text-primary-foreground font-semibold shadow-glow hover:shadow-lg transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
