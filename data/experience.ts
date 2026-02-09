
export interface Experience {
  role: string;
  company: string;
  duration: string;
  points: string[];
}

export const experience: Experience[] = [
  {
    role: "Junior Full-Stack Developer",
    company: "Khushi Infotech & Consultancy Services",
    duration: "Nov 2025 – Present",
    points: [
      "Working as a junior developer on a product-based hotel booking platform, MyHolidayTrip (myholidaytrip.in).",
      "Understanding existing project structure, features, and overall application flow.",
      "Developing and modifying UI components using Next.js and Tailwind CSS in the staging environment.",
      "Testing application features and assisting in identifying and fixing UI-related issues.",
      "Learning API integration, PostgreSQL database handling, Docker workflows, and Git under senior guidance."
    ]
  },
  {
    role: "Software Developer Trainee",
    company: "Bigscal Technologies Pvt. Ltd",
    duration: "May 2025 – Aug 2025",
    points: [
      "Worked at a product-based company on the Pharmacy Management System, Healthray.",
      "Contributed to the project at the staging level (non-production environment).",
      "Developed UI components and worked on PDF generation features.",
      "Learned and implemented API integration and application settings configuration.",
      "Gained hands-on experience with real-world development workflows and team collaboration."
    ]
  },
  {
    role: "Web Development Intern",
    company: "Prelax Infotech",
    duration: "Dec 2024 – Mar 2025",
    points: [
      "Built landing pages and template-based websites for companies and hotels.",
      "Worked on front-end development using modern web technologies.",
      "Improved website responsiveness, layout structure, and UI performance.",
      "Used GitHub for version control and maintained project repositories."
    ]
  }
];
