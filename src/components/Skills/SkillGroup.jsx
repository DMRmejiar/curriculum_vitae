import { Card } from 'components/Shared/Card';
import { Skill } from 'components/Skills/Skill';

const SkillGroup = ({ title, skills }) => (
  <Card title={title}>
    {skills.map((skill) => (
      <Skill key={skill.name} name={skill.name} level={skill.level} />
    ))}
  </Card>
);

export { SkillGroup };
