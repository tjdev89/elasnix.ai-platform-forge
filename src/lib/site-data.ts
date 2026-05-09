import {
  Bot, Code2, GitBranch, Boxes, Cloud, ShieldCheck, Activity, TestTube2, BrainCircuit,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  tagline: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    icon: Bot,
    title: "Agentic AI Solutions",
    tagline: "Autonomous AI agents that operate as part of your engineering org.",
    bullets: ["AI agents & copilots", "Autonomous workflows", "AI-driven automation", "Intelligent enterprise systems"],
  },
  {
    icon: Code2,
    title: "Enterprise Software Development",
    tagline: "SaaS platforms and backends engineered for scale and reliability.",
    bullets: ["SaaS platforms", "Web applications", "APIs & backend systems", "Microservices architecture"],
  },
  {
    icon: GitBranch,
    title: "DevOps & Platform Engineering",
    tagline: "Golden paths, paved roads, and ruthless automation.",
    bullets: ["CI/CD automation", "GitHub Actions, GitLab CI, Jenkins", "Infrastructure automation", "Platform reliability"],
  },
  {
    icon: Boxes,
    title: "Kubernetes & Cloud-Native",
    tagline: "Production-grade Kubernetes across every major cloud.",
    bullets: ["Kubernetes, Docker, Helm", "ArgoCD GitOps", "Service Mesh", "EKS, AKS, GKE"],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure & Modernization",
    tagline: "Multi-cloud, hybrid, and migrations executed without drama.",
    bullets: ["AWS, Azure, GCP, Alibaba Cloud", "On-prem & hybrid", "Landing zones", "FinOps & cost engineering"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity & DevSecOps",
    tagline: "Zero Trust by default. Security baked into the pipeline.",
    bullets: ["Secure cloud architecture", "IAM & Zero Trust", "Vulnerability management", "Compliance engineering"],
  },
  {
    icon: Activity,
    title: "Observability & SRE",
    tagline: "See everything. Page on what matters. Automate the rest.",
    bullets: ["Prometheus & Grafana", "ELK Stack", "OpenTelemetry", "Incident automation"],
  },
  {
    icon: TestTube2,
    title: "QA & Automation Engineering",
    tagline: "Quality is a pipeline, not a phase.",
    bullets: ["Automated testing", "Performance testing", "QA pipelines", "Enterprise QA strategy"],
  },
  {
    icon: BrainCircuit,
    title: "AIOps & Intelligent Operations",
    tagline: "ML-driven operations that scale beyond human pattern matching.",
    bullets: ["Predictive monitoring", "Anomaly detection", "Intelligent autoscaling", "Automated incident response"],
  },
];

export const technologies = [
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "Google Cloud", category: "Cloud" },
  { name: "Alibaba Cloud", category: "Cloud" },
  { name: "Kubernetes", category: "Orchestration" },
  { name: "Docker", category: "Containers" },
  { name: "Terraform", category: "IaC" },
  { name: "Helm", category: "Packaging" },
  { name: "ArgoCD", category: "GitOps" },
  { name: "Jenkins", category: "CI/CD" },
  { name: "GitHub Actions", category: "CI/CD" },
  { name: "GitLab CI", category: "CI/CD" },
  { name: "Prometheus", category: "Observability" },
  { name: "Grafana", category: "Observability" },
  { name: "OpenTelemetry", category: "Observability" },
  { name: "ELK Stack", category: "Observability" },
  { name: "OpenAI", category: "AI" },
  { name: "LangChain", category: "AI" },
];

export const solutions = [
  { title: "Agentic AI Platform", desc: "End-to-end agent orchestration, tool calling, evals, and guardrails for enterprise rollouts." },
  { title: "Cloud-Native Modernization", desc: "Lift, refactor, and re-architect legacy workloads onto Kubernetes across AWS, Azure, GCP." },
  { title: "Zero Trust Security", desc: "Identity-first architecture, least-privilege IAM, and continuous compliance automation." },
  { title: "AIOps & Intelligent SRE", desc: "Predictive monitoring, anomaly detection, and automated remediation for 24/7 platforms." },
  { title: "Internal Developer Platform", desc: "Self-service paved roads, GitOps workflows, and golden templates for engineering velocity." },
  { title: "Data & ML Infrastructure", desc: "Production-grade pipelines, feature stores, and inference platforms for ML/AI workloads." },
];

export const process = [
  { step: "01", title: "Discover", desc: "Architecture review, gap analysis, and a measurable roadmap." },
  { step: "02", title: "Design", desc: "Reference architectures, threat models, and platform blueprints." },
  { step: "03", title: "Build", desc: "Hands-on engineering with your teams — IaC, pipelines, agents." },
  { step: "04", title: "Operate", desc: "SRE-grade operations, AIOps automation, continuous improvement." },
];
