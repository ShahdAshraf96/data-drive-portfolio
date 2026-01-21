// Portfolio Data - Easy to edit and customize
// Simply update the values below to personalize your portfolio

export const personalInfo = {
  name: "Alex Chen",
  title: "Junior Data Engineer",
  tagline: "Transforming Raw Data into Actionable Insights",
  email: "alex.chen@email.com",
  linkedin: "https://linkedin.com/in/alexchen",
  github: "https://github.com/alexchen",
  location: "San Francisco, CA",
};

export const aboutMe = {
  intro: "Recent Computer Science graduate with a deep passion for building scalable data systems and turning complex datasets into meaningful insights.",
  description: [
    "I'm fascinated by the architecture behind modern data pipelines — how raw, unstructured data flows through carefully designed systems to become the foundation for critical business decisions.",
    "During my academic journey, I focused heavily on database systems, distributed computing, and data processing frameworks. I've built ETL pipelines, designed data warehouses, and implemented real-time streaming solutions.",
    "I thrive on solving complex data challenges and am constantly learning new technologies in the ever-evolving data engineering landscape.",
  ],
  highlights: [
    "Strong foundation in SQL and Python",
    "Experience with ETL pipeline development",
    "Knowledge of cloud data platforms",
    "Passionate about data quality and governance",
  ],
};

export const skills = {
  programming: [
    { name: "Python", level: 90 },
    { name: "SQL", level: 95 },
    { name: "Java", level: 75 },
    { name: "Scala", level: 60 },
    { name: "Bash/Shell", level: 70 },
  ],
  dataEngineering: [
    { name: "Apache Spark", icon: "spark" },
    { name: "Apache Kafka", icon: "kafka" },
    { name: "Apache Airflow", icon: "airflow" },
    { name: "dbt", icon: "dbt" },
    { name: "Docker", icon: "docker" },
    { name: "Kubernetes", icon: "kubernetes" },
  ],
  databases: [
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "MySQL", icon: "mysql" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Redis", icon: "redis" },
    { name: "Snowflake", icon: "snowflake" },
    { name: "BigQuery", icon: "bigquery" },
  ],
  cloud: [
    { name: "AWS", icon: "aws" },
    { name: "Google Cloud", icon: "gcp" },
    { name: "Azure", icon: "azure" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Real-Time Analytics Pipeline",
    category: "Academic Project",
    description: "Designed and implemented a real-time data pipeline processing streaming events for an e-commerce analytics platform simulation.",
    problem: "Traditional batch processing couldn't meet the need for instant insights on user behavior and inventory levels.",
    solution: "Built a streaming architecture using Apache Kafka for ingestion, Spark Streaming for processing, and PostgreSQL for serving analytics.",
    technologies: ["Apache Kafka", "Spark Streaming", "PostgreSQL", "Python", "Docker"],
    outcomes: [
      "Achieved sub-second latency for event processing",
      "Handled 10,000+ events per second in testing",
      "Implemented data quality checks and monitoring",
    ],
    image: "pipeline",
  },
  {
    id: 2,
    title: "Data Warehouse Architecture",
    category: "Capstone Project",
    description: "Architected a dimensional data warehouse for a simulated retail company with complex business requirements.",
    problem: "Fragmented data across multiple operational systems made business reporting impossible.",
    solution: "Designed a star schema data warehouse with automated ETL pipelines using Apache Airflow and dbt for transformations.",
    technologies: ["Snowflake", "dbt", "Apache Airflow", "Python", "SQL"],
    outcomes: [
      "Reduced reporting time from days to minutes",
      "Created 15+ reusable data models",
      "Implemented SCD Type 2 for historical tracking",
    ],
    image: "warehouse",
  },
  {
    id: 3,
    title: "Log Analytics Platform",
    category: "Learning Project",
    description: "Built an end-to-end log analytics solution for processing and visualizing application logs at scale.",
    problem: "Needed to analyze patterns and anomalies across millions of log entries from distributed applications.",
    solution: "Created a pipeline using Elasticsearch for storage, Logstash for processing, and custom Python scripts for anomaly detection.",
    technologies: ["Elasticsearch", "Python", "Docker", "Grafana", "Prometheus"],
    outcomes: [
      "Processed 1M+ log entries daily",
      "Built custom alerting for anomaly detection",
      "Created interactive dashboards for monitoring",
    ],
    image: "analytics",
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Science",
  university: "University of California",
  year: "2024",
  gpa: "3.7/4.0",
  relevantCourses: [
    "Database Systems",
    "Distributed Computing",
    "Data Structures & Algorithms",
    "Machine Learning",
    "Cloud Computing",
    "Big Data Analytics",
  ],
  certifications: [
    {
      name: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      status: "In Progress",
    },
    {
      name: "Databricks Spark Developer",
      issuer: "Databricks",
      status: "Completed",
    },
  ],
};

export const careerVision = {
  title: "Why Data Engineering?",
  paragraphs: [
    "In today's data-driven world, organizations generate more data than ever before. But raw data alone isn't valuable — it's the infrastructure that transforms this data into insights that creates real impact.",
    "I'm drawn to data engineering because it sits at the intersection of software engineering and data science. It's about building the foundations that enable everything from real-time dashboards to machine learning models.",
    "My goal is to become an expert in designing and maintaining large-scale data systems. I want to work on pipelines that process millions of events, build data platforms that empower data scientists, and solve the fascinating challenges of data at scale.",
  ],
  goals: [
    "Master distributed systems and stream processing",
    "Contribute to open-source data tools",
    "Build data platforms that drive business value",
    "Stay at the forefront of data engineering innovation",
  ],
};

export const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Vision", href: "#vision" },
  { name: "Contact", href: "#contact" },
];
