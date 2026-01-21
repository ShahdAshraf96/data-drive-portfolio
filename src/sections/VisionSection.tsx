import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { careerVision } from "@/data/portfolioData";
import { Target, Rocket, TrendingUp, Lightbulb } from "lucide-react";

const goalIcons = [Target, Rocket, TrendingUp, Lightbulb];

export function VisionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vision" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Looking Forward
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            <span className="gradient-text">{careerVision.title}</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Vision Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 mb-16"
          >
            {careerVision.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={`text-lg leading-relaxed ${
                  index === 0
                    ? "text-xl md:text-2xl font-medium text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          {/* Goals Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-center mb-8">
              My Professional Goals
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {careerVision.goals.map((goal, index) => {
                const Icon = goalIcons[index % goalIcons.length];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="group p-5 rounded-xl card-gradient border border-border shadow-soft hover:shadow-glow hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <p className="font-medium text-foreground">{goal}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
