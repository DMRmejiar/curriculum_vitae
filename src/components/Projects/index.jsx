import { Title } from 'components/Shared/Title';
import { ProjectCard } from 'components/Projects/ProjectCard';

const Projects = ({ className }) => (
  <section className={`flex flex-col items-stretch gap-6 p-6 ${className}`}>
    <Title title='Proyectos' />
    <ProjectCard
      title='KIPI'
      job='Lead Developer'
      description='
        KIPI es una empresa dedicada al facility management y que busca ser
        líder en el mercado mediante el buen servicio y la tecnología. Cuenta
        con múltiples plataformas desarrolladas para facilitar su operación 2
        aplicativos móviles en Flutter, 3 plataformas web sobre Angular y
        adicionalmente un chatbot de WhatsApp para automatizar requerimientos y
        consultas de sus clientes.'
    />
  </section>
);

export { Projects };
