import { Title } from 'components/Shared/Title';
import { SkillGroup } from 'components/Skills/SkillGroup';

const Skills = ({ className }) => (
  <section className={`grid items-stretch gap-6 p-6 ${className}`}>
    <Title title='Habilidades' />
    <SkillGroup
      title='Fuertes'
      skills={[
        { name: 'Angular', level: 6 },
        { name: 'Flutter', level: 5 },
        { name: 'NodeJs', level: 4 },
        { name: 'AWS', level: 5 },
        { name: 'Git', level: 6 },
      ]}
    />
    <SkillGroup
      title='Blandas'
      skills={[
        { name: 'Ética de trabajo', level: 6 },
        { name: 'Trabajo en equipo', level: 6 },
        { name: 'Metodología ágil', level: 4 },
        { name: 'Flexibilidad', level: 5 },
        { name: 'Planificación', level: 5 },
      ]}
    />
  </section>
);

export { Skills };
