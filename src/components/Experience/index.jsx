import { Title } from 'components/Shared/Title';
import { ExperienceCard } from 'components/Experience/ExperienceCard';

const Experience = () => (
  <section className='flex flex-col items-stretch gap-6'>
    <Title title='Experiencia Laboral' />
    <ExperienceCard
      title='Cubit'
      date='Desde marzo 2021'
      job='Full Stack Developer'
      content={[
        'Apoyo en proyectos diversificados con diferentes Stack tecnológicos.',
        'Desarrollo y liderazgo en el desarrollo de las múltiples plataformas de KIPI.',
      ]}
    />
    <ExperienceCard
      title='Universidad de Antioquia'
      date='Desde febrero 2020 hasta agosto 2022'
      job='Monitor de Teoría de la Lenguajes'
      content={[
        'Apoyo en creación e innovación de talleres y practicás.',
        'Acompañamiento en procesos de aprendizaje.',
      ]}
    />
    <ExperienceCard
      title='Soluciones O&#38;M'
      date='Desde febrero 2020 hasta marzo 2021'
      job='Técnico en soporte TI'
      content={[
        'Diagnóstico y solución de problemas a nivel de Software.',
        'Apoyo en automatización de procesos.',
      ]}
    />
  </section>
);

export { Experience };
