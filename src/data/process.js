export const processSteps = [
  {
    step: "01",
    name: "Understand",
    headline: "Deconstruct Problem & Requirements",
    description: "Deep-dive into the core business problem, end-user expectations, data flows, and technical constraints before writing a single line of code.",
    points: [
      "Analyze business requirements & user stories",
      "Identify key user personas and critical paths",
      "Define scope, technical constraints, and success metrics"
    ]
  },
  {
    step: "02",
    name: "Plan",
    headline: "Architect Schema & System Design",
    description: "Design the database entities, API endpoints, authentication flows, component hierarchy, and responsive UI layout.",
    points: [
      "Entity-Relationship (ER) database modeling",
      "RESTful API contract & route planning",
      "Component hierarchy & design system token definition"
    ]
  },
  {
    step: "03",
    name: "Build",
    headline: "Develop, Test & Iterate",
    description: "Implement clean, modular code across frontend and backend, integrating databases, payment handlers, and third-party APIs with defensive validation.",
    points: [
      "Component-driven frontend development with Tailwind CSS",
      "Robust Node/Express API routes with input validation",
      "Secure authentication & payment webhook integration"
    ]
  },
  {
    step: "04",
    name: "Deploy",
    headline: "Deploy, Monitor & Refine",
    description: "Deploy the application to reliable cloud platforms (Render, Vercel), verify performance, configure SEO metadata, and continuously iterate based on feedback.",
    points: [
      "Production build optimization & CI/CD deployment",
      "Cross-device QA and accessibility verification",
      "Post-launch monitoring and iterative enhancements"
    ]
  }
];
