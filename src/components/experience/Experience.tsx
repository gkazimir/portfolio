import WorkBlock from '../ui/WorkBlock';
import TimelineItem from '../ui/TimelineItem';
import SectionWrapper from '../ui/SectionWrapper';
import './Experience.scss';

type WorkArea = {
  category: string;
  title: string;
  description: string;
  tech: string[];
};

type Employment = {
  company: string;
  role: string;
  period: string;
  tech: string[];
  bullets: string[];
};

const workAreas: WorkArea[] = [
  {
    category: 'AI Interface · Angular',
    title: 'Internal AI Assistant — Chat Interface & Data Source Management',
    description:
      'Built the frontend of an internal AI-powered assistant used within the company. The interface was a WebSocket-driven chat where users could interact with the AI and select data sources to refine its answers. Users could also upload their own data sources or access team-managed ones. Responsible for the Figma-to-production implementation, later migrating the project into an NX monorepo and transitioning to Angular Signals and Taiga UI.',
    tech: [
      'Angular',
      'Angular Signals',
      'WebSocket',
      'Angular Material',
      'Taiga UI',
      'NX',
      'SCSS',
      'TypeScript',
    ],
  },
  {
    category: 'IT Operations · Angular',
    title: 'Incident Management & Monitoring Tool',
    description:
      'Frontend for an internal IT operations platform that pulled incidents from an external monitoring system. Clicking an incident opened a detail sidebar with tabbed views: raw incident data, related changes, events, a timeline graph, relationship mapping between related systems, incidents, applications and real-time AI analysis and recommendations. Included date-time range, priority, and assignment group filters. Built within the NX monorepo using Angular Signals and Taiga UI.',
    tech: [
      'Angular',
      'Angular Signals',
      'NX',
      'Taiga UI',
      'WebSocket',
      'TypeScript',
      'SCSS',
    ],
  },
  {
    category: 'Meeting Tooling · React',
    title: 'Meeting Capture & AI Summarization Tool',
    description:
      'Built the frontend of an internal tool for recording and summarizing meetings. Users could share their screen to record sessions or upload existing files, then provide keywords and custom prompts to guide AI-generated summaries. The tool included an archive system for browsing and retrieving past summaries. My primary React project — about a year of active development.',
    tech: ['React', 'TypeScript', 'Material Design', 'Vite'],
  },
];

const employment: Employment[] = [
  {
    company: 'Deutsche Telekom IT Solutions',
    role: 'Application Developer — Front End',
    period: 'Jun 2024 – Present',
    tech: [
      'Angular',
      'Angular Signals',
      'React',
      'NX',
      'Taiga UI',
      'TypeScript',
      'SCSS',
      'Figma',
      'GitLab',
    ],
    bullets: [
      'Building and maintaining internal enterprise frontend applications in sprint-based agile teams (Scrum / Jira).',
      'Translating Figma designs into production-ready Angular components across multiple internal products.',
      'Migrated a standalone Angular project into an NX monorepo, introducing Angular Signals and Taiga UI.',
      'Collaborated closely with backend and design teams across projects with real-time WebSocket features.',
    ],
  },
  {
    company: 'Deutsche Telekom IT Solutions',
    role: 'Front End Developer (Part-time)',
    period: 'Mar 2022 – Jun 2024',
    tech: ['Angular', 'Angular Material', 'SCSS', 'TypeScript', 'GitLab'],
    bullets: [
      'Worked part-time alongside studies, contributing to frontend tasks on an internal automation tool while working within established GitLab workflows and sprint-based delivery.',
      'Implemented UI features and components in Angular with Angular Material and SCSS.',
    ],
  },
];

/**
 * It renders the experience section with work case studies and an employment timeline.
 * @returns
 */
const Experience = () => {
  return (
    <SectionWrapper id="experience" alt>
      <div className="experience">
        <h2 className="experience-title">Product Experience</h2>
        <p className="experience-sub">
          Most of my work lives inside internal enterprise systems rather than
          public portfolio projects. The work below reflects the frontend
          applications, features, and user flows I was primarily responsible for
          designing, implementing, and maintaining.
        </p>

        <div className="experience-work">
          {workAreas.map((w) => (
            <WorkBlock key={w.title} {...w} />
          ))}
        </div>

        <h3 className="experience-employment-label">Employment</h3>
        <div className="experience-timeline">
          {employment.map((exp, i) => (
            <TimelineItem
              key={exp.role}
              {...exp}
              isLast={i === employment.length - 1}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
