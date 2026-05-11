import type { SkillLevel } from '../ui/SkillCard';
import SkillCard from '../ui/SkillCard';
import SectionWrapper from '../ui/SectionWrapper';
import './Skills.scss';

interface Skill {
  name: string;
  level: SkillLevel;
  progress: number;
}

const skills: Skill[] = [
  { name: 'HTML & SCSS', level: 'Advanced', progress: 80 },
  { name: 'Angular', level: 'Intermediate', progress: 60 },
  { name: 'TypeScript', level: 'Intermediate', progress: 60 },
  { name: 'Angular Material · Taiga UI', level: 'Intermediate', progress: 50 },
  { name: 'React', level: 'Learning', progress: 28 },
  { name: 'NX Monorepo', level: 'Learning', progress: 35 },
  { name: 'Python · C · Java · SQL', level: 'Familiar', progress: 12 },
];

const Skills = () => {
  return (
    <SectionWrapper id="skills">
      <div className="skills">
        <h2 className="skills-title">Skills</h2>
        <p className="skills-sub">Technologies I work with day-to-day.</p>
        <div className="skills-grid">
          {skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
