import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { education } from "@/data/portfolioData";
import { GraduationCap, BookOpen, Award, CheckCircle } from "lucide-react";

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
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
            Academic Background
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            Education & <span className="gradient-text">Learning</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Degree Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl card-gradient border border-border shadow-soft"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl gradient-bg">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{education.degree}</h3>
                <p className="text-muted-foreground">{education.university}</p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-sm font-medium text-primary">
                    Class of {education.year}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    GPA: {education.gpa}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                <BookOpen className="w-4 h-4 text-primary" />
                Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {education.relevantCourses.map((course, index) => (
                  <motion.span
                    key={course}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-lg"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 rounded-2xl card-gradient border border-border shadow-soft"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl gradient-bg">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">Certifications</h3>
            </div>

            <div className="space-y-4">
              {education.certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="p-4 rounded-xl bg-secondary/50 border border-border"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-semibold">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        cert.status === "Completed"
                          ? "bg-primary/10 text-primary"
                          : "bg-accent/10 text-accent"
                      }`}
                    >
                      {cert.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Learning Philosophy */}
            <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-sm text-muted-foreground italic">
                "I believe in continuous learning. The data engineering field
                evolves rapidly, and I'm committed to staying current with the
                latest tools and best practices."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
