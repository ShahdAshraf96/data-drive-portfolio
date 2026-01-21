import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "@/data/portfolioData";
import { ExternalLink, ChevronRight, Layers, CheckCircle2 } from "lucide-react";

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            Data Engineering <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Academic and learning projects showcasing data pipeline development,
            architecture design, and real-world problem solving
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group"
            >
              <div
                className={`p-6 md:p-8 rounded-2xl card-gradient border border-border shadow-soft transition-all duration-300 ${
                  expandedProject === project.id
                    ? "shadow-glow border-primary/30"
                    : "hover:shadow-glow hover:border-primary/20"
                }`}
              >
                {/* Project Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                  <motion.button
                    onClick={() =>
                      setExpandedProject(
                        expandedProject === project.id ? null : project.id
                      )
                    }
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-sm font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {expandedProject === project.id ? "Show Less" : "Learn More"}
                    <motion.span
                      animate={{ rotate: expandedProject === project.id ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </motion.span>
                  </motion.button>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Expanded Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedProject === project.id ? "auto" : 0,
                    opacity: expandedProject === project.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 border-t border-border">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Problem & Solution */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                            <Layers className="w-4 h-4 text-primary" />
                            The Challenge
                          </h4>
                          <p className="text-foreground">{project.problem}</p>
                        </div>
                        <div>
                          <h4 className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                            <Layers className="w-4 h-4 text-primary" />
                            The Solution
                          </h4>
                          <p className="text-foreground">{project.solution}</p>
                        </div>
                      </div>

                      {/* Outcomes */}
                      <div>
                        <h4 className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          Key Outcomes
                        </h4>
                        <ul className="space-y-3">
                          {project.outcomes.map((outcome, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-foreground"
                            >
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
