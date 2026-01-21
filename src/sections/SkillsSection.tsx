import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/data/portfolioData";
import {
  Database,
  Cloud,
  Code2,
  Workflow,
  Server,
  Boxes,
} from "lucide-react";

const categoryIcons: Record<string, typeof Database> = {
  programming: Code2,
  dataEngineering: Workflow,
  databases: Database,
  cloud: Cloud,
};

const categoryLabels: Record<string, string> = {
  programming: "Programming Languages",
  dataEngineering: "Data Engineering Tools",
  databases: "Databases & Storage",
  cloud: "Cloud Platforms",
};

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
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
            Technical Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern data infrastructure
          </p>
        </motion.div>

        {/* Programming Languages with Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg gradient-bg">
              <Code2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold">Programming Languages</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.programming.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="p-4 rounded-xl card-gradient border border-border"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full gradient-bg rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(["dataEngineering", "databases", "cloud"] as const).map(
            (category, catIndex) => {
              const Icon = categoryIcons[category];
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + catIndex * 0.15 }}
                  className="p-6 rounded-2xl card-gradient border border-border shadow-soft"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg gradient-bg">
                      <Icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold">{categoryLabels[category]}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills[category].map((skill, index) => (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.3,
                          delay: 0.6 + catIndex * 0.1 + index * 0.05,
                        }}
                        className="px-3 py-1.5 text-sm font-medium bg-secondary text-secondary-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
